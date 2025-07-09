import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Task } from '../../services/todo.service';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  activeTab: 'add' | 'list' = 'add';
  taskFilter: 'all' | 'pending' | 'completed' | 'overdue' = 'all';
  currentUser: User | null = null;
  
  newTask = {
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: ''
  };

  editingTask: Task | null = null;

  constructor(
    private todoService: TodoService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Get current user
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  onClose() {
    this.close.emit();
  }

  switchTab(tab: 'add' | 'list') {
    this.activeTab = tab;
  }

  addTask() {
    if (this.newTask.title.trim() && this.currentUser) {
      this.todoService.addTask(
        this.newTask.title,
        this.currentUser.id,
        this.newTask.description,
        this.newTask.priority,
        this.newTask.dueDate
      );
      
      // Reset form
      this.newTask = {
        title: '',
        description: '',
        priority: 'medium',
        dueDate: ''
      };

      // Switch to list tab to show the new task
      this.activeTab = 'list';
    }
  }

  getTasks(filter: string): Task[] {
    if (!this.currentUser) return [];
    
    const userTasks = this.todoService.getUserTasks(this.currentUser.id);
    switch (filter) {
      case 'pending':
        return userTasks.filter((task: Task) => !task.completed);
      case 'completed':
        return userTasks.filter((task: Task) => task.completed);
      case 'overdue':
        return this.todoService.getUserOverdueTasks(this.currentUser.id);
      default:
        return userTasks;
    }
  }

  getFilteredTasks(): Task[] {
    return this.getTasks(this.taskFilter);
  }

  setFilter(filter: 'all' | 'pending' | 'completed' | 'overdue') {
    this.taskFilter = filter;
  }

  toggleTask(taskId: string) {
    this.todoService.toggleTask(taskId);
  }

  deleteTask(taskId: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.deleteTask(taskId);
    }
  }

  editTask(task: Task) {
    this.editingTask = { ...task };
  }

  updateTask() {
    if (this.editingTask) {
      this.todoService.updateTask(this.editingTask);
      this.closeEditModal();
    }
  }

  closeEditModal() {
    this.editingTask = null;
  }

  // Helper methods for templates
  getAllTasks(): Task[] {
    if (!this.currentUser) return [];
    return this.todoService.getUserTasks(this.currentUser.id);
  }

  getCompletedTasks(): Task[] {
    if (!this.currentUser) return [];
    return this.todoService.getUserTasks(this.currentUser.id).filter((task: Task) => task.completed);
  }

  getPendingTasks(): Task[] {
    if (!this.currentUser) return [];
    return this.todoService.getUserTasks(this.currentUser.id).filter((task: Task) => !task.completed);
  }

  // Get task statistics for the current user
  getTaskStats() {
    if (!this.currentUser) return { total: 0, completed: 0, pending: 0, overdue: 0 };
    
    const userId = this.currentUser.id;
    return {
      total: this.todoService.getUserTasks(userId).length,
      completed: this.todoService.getUserCompletedTasksCount(userId),
      pending: this.todoService.getUserPendingTasksCount(userId),
      overdue: this.todoService.getUserOverdueTasks(userId).length
    };
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
