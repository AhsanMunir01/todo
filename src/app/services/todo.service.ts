import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
}

export interface ActivityLog {
  id: string;
  type: 'created' | 'completed' | 'deleted' | 'updated';
  description: string;
  timestamp: string;
  taskId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];
  private activityLog: ActivityLog[] = [];
  private readonly STORAGE_KEY = 'todo_tasks';
  private readonly ACTIVITY_KEY = 'todo_activity';

  constructor() {
    this.loadTasks();
    this.loadActivityLog();
  }

  private loadTasks(): void {
    const savedTasks = localStorage.getItem(this.STORAGE_KEY);
    if (savedTasks) {
      try {
        this.tasks = JSON.parse(savedTasks);
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        this.tasks = [];
      }
    }
  }

  private loadActivityLog(): void {
    const savedActivity = localStorage.getItem(this.ACTIVITY_KEY);
    if (savedActivity) {
      try {
        this.activityLog = JSON.parse(savedActivity);
      } catch (error) {
        console.error('Error loading activity log from localStorage:', error);
        this.activityLog = [];
      }
    }
  }

  private saveTasks(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }

  private saveActivityLog(): void {
    try {
      localStorage.setItem(this.ACTIVITY_KEY, JSON.stringify(this.activityLog));
    } catch (error) {
      console.error('Error saving activity log to localStorage:', error);
    }
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private addActivity(type: ActivityLog['type'], description: string, taskId: string): void {
    const activity: ActivityLog = {
      id: this.generateId(),
      type,
      description,
      timestamp: new Date().toISOString(),
      taskId
    };

    this.activityLog.unshift(activity); // Add to beginning for most recent first
    
    // Keep only last 50 activities
    if (this.activityLog.length > 50) {
      this.activityLog = this.activityLog.slice(0, 50);
    }
    
    this.saveActivityLog();
  }

  addTask(title: string, description: string = '', priority: 'low' | 'medium' | 'high' = 'medium', dueDate: string = ''): Task {
    const task: Task = {
      id: this.generateId(),
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.tasks.unshift(task); // Add to beginning for most recent first
    this.saveTasks();
    
    this.addActivity('created', `Created task: "${task.title}"`, task.id);
    
    return task;
  }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(updatedTask: Task): boolean {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
      this.saveTasks();
      
      this.addActivity('updated', `Updated task: "${updatedTask.title}"`, updatedTask.id);
      return true;
    }
    return false;
  }

  toggleTask(id: string): boolean {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = !task.completed;
      
      if (task.completed) {
        task.completedAt = new Date().toISOString();
        this.addActivity('completed', `Completed task: "${task.title}"`, task.id);
      } else {
        delete task.completedAt;
        this.addActivity('updated', `Reopened task: "${task.title}"`, task.id);
      }
      
      this.saveTasks();
      return true;
    }
    return false;
  }

  deleteTask(id: string): boolean {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      const deletedTask = this.tasks[taskIndex];
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
      
      this.addActivity('deleted', `Deleted task: "${deletedTask.title}"`, deletedTask.id);
      return true;
    }
    return false;
  }

  getRecentActivity(limit: number = 10): ActivityLog[] {
    return this.activityLog.slice(0, limit);
  }

  getCompletedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getPendingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  getTasksByPriority(priority: 'low' | 'medium' | 'high'): Task[] {
    return this.tasks.filter(task => task.priority === priority);
  }

  getOverdueTasks(): Task[] {
    const today = new Date().toISOString().split('T')[0];
    return this.tasks.filter(task => 
      !task.completed && 
      task.dueDate && 
      task.dueDate < today
    );
  }

  clearAllTasks(): void {
    this.tasks = [];
    this.activityLog = [];
    this.saveTasks();
    this.saveActivityLog();
  }

  clearCompletedTasks(): void {
    const completedTasks = this.tasks.filter(task => task.completed);
    this.tasks = this.tasks.filter(task => !task.completed);
    this.saveTasks();
    
    if (completedTasks.length > 0) {
      this.addActivity('deleted', `Cleared ${completedTasks.length} completed tasks`, '');
    }
  }
}
