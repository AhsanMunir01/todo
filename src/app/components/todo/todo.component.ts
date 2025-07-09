import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Task, ActivityLog } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  activeTab: 'add' | 'list' | 'history' = 'add';
  taskFilter: 'all' | 'pending' | 'completed' = 'all';
  
  newTask = {
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: ''
  };

  editingTask: Task | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // Initialize todo service if needed
  }

  onClose() {
    this.close.emit();
  }

  switchTab(tab: 'add' | 'list' | 'history') {
    this.activeTab = tab;
  }

  addTask() {
    if (this.newTask.title.trim()) {
      this.todoService.addTask(
        this.newTask.title,
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
    const allTasks = this.todoService.getAllTasks();
    switch (filter) {
      case 'pending':
        return allTasks.filter((task: Task) => !task.completed);
      case 'completed':
        return allTasks.filter((task: Task) => task.completed);
      default:
        return allTasks;
    }
  }

  getFilteredTasks(): Task[] {
    return this.getTasks(this.taskFilter);
  }

  setFilter(filter: 'all' | 'pending' | 'completed') {
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
    return this.todoService.getAllTasks();
  }

  getCompletedTasks(): Task[] {
    return this.todoService.getAllTasks().filter((task: Task) => task.completed);
  }

  getPendingTasks(): Task[] {
    return this.todoService.getAllTasks().filter((task: Task) => !task.completed);
  }

  getRecentActivity(): ActivityLog[] {
    return this.todoService.getRecentActivity();
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
