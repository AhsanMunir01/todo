import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  userId: string;
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
  userId: string;
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

  private addActivity(type: ActivityLog['type'], description: string, taskId: string, userId: string): void {
    const activity: ActivityLog = {
      id: this.generateId(),
      userId,
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

  addTask(title: string, userId: string, description: string = '', priority: 'low' | 'medium' | 'high' = 'medium', dueDate: string = ''): Task {
    const task: Task = {
      id: this.generateId(),
      userId,
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.tasks.unshift(task); // Add to beginning for most recent first
    this.saveTasks();
    
    this.addActivity('created', `Created task: "${task.title}"`, task.id, userId);
    
    return task;
  }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }

  // Get tasks for a specific user
  getUserTasks(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(updatedTask: Task): boolean {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
      this.saveTasks();
      
      this.addActivity('updated', `Updated task: "${updatedTask.title}"`, updatedTask.id, updatedTask.userId);
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
        this.addActivity('completed', `Completed task: "${task.title}"`, task.id, task.userId);
      } else {
        delete task.completedAt;
        this.addActivity('updated', `Reopened task: "${task.title}"`, task.id, task.userId);
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
      
      this.addActivity('deleted', `Deleted task: "${deletedTask.title}"`, deletedTask.id, deletedTask.userId);
      return true;
    }
    return false;
  }

  getRecentActivity(limit: number = 10): ActivityLog[] {
    return this.activityLog.slice(0, limit);
  }

  // Get activity for a specific user
  getUserActivity(userId: string, limit: number = 10): ActivityLog[] {
    return this.activityLog.filter(activity => activity.userId === userId).slice(0, limit);
  }

  getCompletedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  // Get completed tasks count for a specific user
  getUserCompletedTasksCount(userId: string): number {
    return this.tasks.filter(task => task.userId === userId && task.completed).length;
  }

  getPendingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  // Get pending tasks count for a specific user
  getUserPendingTasksCount(userId: string): number {
    return this.tasks.filter(task => task.userId === userId && !task.completed).length;
  }

  getTasksByPriority(priority: 'low' | 'medium' | 'high'): Task[] {
    return this.tasks.filter(task => task.priority === priority);
  }

  // Get tasks by priority for a specific user
  getUserTasksByPriority(userId: string, priority: 'low' | 'medium' | 'high'): Task[] {
    return this.tasks.filter(task => task.userId === userId && task.priority === priority);
  }

  getOverdueTasks(): Task[] {
    const today = new Date().toISOString().split('T')[0];
    return this.tasks.filter(task => 
      !task.completed && 
      task.dueDate && 
      task.dueDate < today
    );
  }

  // Get overdue tasks for a specific user
  getUserOverdueTasks(userId: string): Task[] {
    const today = new Date().toISOString().split('T')[0];
    return this.tasks.filter(task => 
      task.userId === userId &&
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
      // Use the first completed task's userId for the activity log
      const userId = completedTasks[0]?.userId || 'unknown';
      this.addActivity('deleted', `Cleared ${completedTasks.length} completed tasks`, '', userId);
    }
  }

  // Clear completed tasks for a specific user
  clearUserCompletedTasks(userId: string): void {
    const userCompletedTasks = this.tasks.filter(task => task.userId === userId && task.completed);
    this.tasks = this.tasks.filter(task => !(task.userId === userId && task.completed));
    this.saveTasks();
    
    if (userCompletedTasks.length > 0) {
      this.addActivity('deleted', `Cleared ${userCompletedTasks.length} completed tasks`, '', userId);
    }
  }
}
