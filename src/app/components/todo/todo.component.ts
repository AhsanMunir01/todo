import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Task } from '../../services/todo.service';
import { AuthService, User } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { HttpClient } from '@angular/common/http';

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
    dueDate: '',
    dueTime: ''
  };

  editingTask: Task | null = null;

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private http: HttpClient
  ) {}

  public getjsonValue: any;
  public postjsonValue: any;                                     
  ngOnInit() {
    // Get current user
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        // Load tasks from API when user is available
        this.loadTasksFromAPI();
        
        // Test notification to ensure it's working
        setTimeout(() => {
          this.notificationService.showInfo('Welcome', `Hello ${user.firstName}! Your tasks are loading.`);
        }, 1000);
      }
    });
  }

  // Load tasks from API
  loadTasksFromAPI() {
    if (!this.currentUser) return;

    this.http.get(`https://localhost:7133/api/TodoList?userId=${this.currentUser.id}`)
      .subscribe({
        next: (response: any) => {
          console.log('Tasks fetched successfully:', response);
          this.getjsonValue = response;
          
          // Update local service with API data
          if (Array.isArray(response)) {
            // Clear existing tasks for this user and add API tasks
            this.syncTasksWithAPI(response);
            // Only show notification if there are tasks and it's not the first load
            if (response.length > 0) {
              // You can comment out this line if you don't want the "tasks loaded" notification
              // this.notificationService.tasksLoaded(response.length);
            }
          }
        },
        error: (error: any) => {
          console.error('Error fetching tasks:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Full error object:', error);
          // Fallback to local storage tasks if API fails
          console.log('Falling back to local storage tasks');
          this.notificationService.showWarning('Connection Issue', 'Could not sync with server. Using offline data.');
        }
      });
  }

  // Sync local tasks with API response
  private syncTasksWithAPI(apiTasks: any[]) {
    // Convert API tasks to local Task format if needed
    const formattedTasks = apiTasks.map(task => ({
      id: task.id || task.taskId || this.generateId(),
      userId: task.userId,
      title: task.title,
      description: task.description || '',
      priority: task.priority || 'medium',
      dueDate: task.dueDate || '',
      dueTime: task.dueTime || '',
      completed: task.completed || false,
      createdAt: task.createdAt || new Date().toISOString(),
      completedAt: task.completedAt || undefined
    }));

    // Update the todo service with API data
    // Note: You might need to add a method to TodoService to replace user tasks
    this.todoService.replaceUserTasks(this.currentUser!.id, formattedTasks);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  onClose() {
    this.close.emit();
  }

  switchTab(tab: 'add' | 'list') {
    this.activeTab = tab;
  }

  addTask() {
    if (this.newTask.title.trim() && this.currentUser) {
      // Prepare data for API call
      const apiData = {
        userId: this.currentUser.id,
        title: this.newTask.title.trim(),
        description: this.newTask.description.trim(),
        priority: this.newTask.priority,
        dueDate: this.newTask.dueDate,
        dueTime: this.newTask.dueTime
      };

      // Make API call
      this.http.post('https://localhost:7133/api/TodoList', apiData)
        .subscribe({
          next: (response: any) => {
            console.log('Task created successfully:', response);
            this.postjsonValue = response;
            
            // Show success notification
            this.notificationService.taskCreated(this.newTask.title);
            
            // Refresh tasks from API to get the latest data
            this.loadTasksFromAPI();
            
            // Reset form
            this.newTask = {
              title: '',
              description: '',
              priority: 'medium',
              dueDate: '',
              dueTime: ''
            };

            // Switch to list tab to show the new task
            this.activeTab = 'list';
          },
          error: (error: any) => {
            console.error('Error creating task:', error);
            this.notificationService.apiError('create task', error.message || 'Please try again');
          }
        });
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
    if (!this.currentUser) return;

    // Find the task to toggle
    const task = this.todoService.getTaskById(taskId);
    if (!task) return;

    // Prepare data for API call
    const updatedTask = {
      ...task,
      completed: !task.completed,
      completedAt: !task.completed ? new Date().toISOString() : undefined
    };

    // Make PUT API call
    this.http.put(`https://localhost:7133/api/TodoList/${taskId}`, updatedTask)
      .subscribe({
        next: (response: any) => {
          console.log('Task updated successfully:', response);
          
          // Show appropriate notification based on task state
          if (updatedTask.completed) {
            this.notificationService.taskCompleted(task.title);
          } else {
            this.notificationService.taskReopened(task.title);
          }
          
          // Update local service
          this.todoService.toggleTask(taskId);
          
          // Optionally refresh from API to ensure consistency
          this.loadTasksFromAPI();
        },
        error: (error: any) => {
          console.error('Error updating task:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Full error object:', error);
          // Fallback to local update if API fails
          this.todoService.toggleTask(taskId);
          this.notificationService.apiError('update task status', 'Changes saved locally');
        }
      });
  }

  deleteTask(taskId: string) {
    if (!this.currentUser) return;

    // Get task title before deletion
    const taskToDelete = this.todoService.getTaskById(taskId);
    const taskTitle = taskToDelete?.title || 'Task';

    // Make DELETE API call
    this.http.delete(`https://localhost:7133/api/TodoList/${taskId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Task deleted successfully:', response);
          
          // Update local service
          this.todoService.deleteTask(taskId);
          
          // Show success notification
          this.notificationService.taskDeleted(taskTitle);
          
          // Optionally refresh from API to ensure consistency
          this.loadTasksFromAPI();
        },
        error: (error: any) => {
          console.error('Error deleting task:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Full error object:', error);
          
          // Fallback to local deletion if API fails
          this.todoService.deleteTask(taskId);
          this.notificationService.apiError('delete task', 'Task removed locally');
        }
      });
  }

  editTask(task: Task) {
    this.editingTask = { ...task };
  }

  updateTask() {
    if (this.editingTask && this.currentUser) {
      // Prepare data for API call
      const apiData = {
        id: this.editingTask.id,
        userId: this.editingTask.userId,
        title: this.editingTask.title.trim(),
        description: this.editingTask.description.trim(),
        priority: this.editingTask.priority,
        dueDate: this.editingTask.dueDate,
        dueTime: this.editingTask.dueTime,
        completed: this.editingTask.completed,
        createdAt: this.editingTask.createdAt,
        completedAt: this.editingTask.completedAt
      };

      // Make PUT API call
      this.http.put(`https://localhost:7133/api/TodoList/${this.editingTask.id}`, apiData)
        .subscribe({
          next: (response: any) => {
            console.log('Task updated successfully:', response);
            
            // Show success notification
            this.notificationService.taskUpdated(this.editingTask!.title);
            
            // Update local service
            this.todoService.updateTask(this.editingTask!);
            
            // Close edit modal
            this.closeEditModal();
            
            // Refresh from API to ensure consistency
            this.loadTasksFromAPI();
          },
          error: (error: any) => {
            console.error('Error updating task:', error);
            // Fallback to local update if API fails
            this.todoService.updateTask(this.editingTask!);
            this.closeEditModal();
            this.notificationService.apiError('update task', 'Changes saved locally');
          }
        });
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

  formatDueDateTime(task: Task): string {
    return this.todoService.formatDueDateTime(task);
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
