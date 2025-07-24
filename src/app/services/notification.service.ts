import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notifications.asObservable();

  constructor() {}

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private addNotification(notification: Omit<Notification, 'id'>): void {
    const newNotification: Notification = {
      ...notification,
      id: this.generateId(),
      duration: notification.duration || 5000
    };

    const currentNotifications = this.notifications.value;
    this.notifications.next([...currentNotifications, newNotification]);

    // Auto-remove notification after duration
    setTimeout(() => {
      this.removeNotification(newNotification.id);
    }, newNotification.duration);
  }

  removeNotification(id: string): void {
    const currentNotifications = this.notifications.value;
    const filteredNotifications = currentNotifications.filter(n => n.id !== id);
    this.notifications.next(filteredNotifications);
  }

  // Success notifications
  showSuccess(title: string, message: string, duration?: number): void {
    this.addNotification({
      type: 'success',
      title,
      message,
      duration
    });
  }

  // Error notifications
  showError(title: string, message: string, duration?: number): void {
    this.addNotification({
      type: 'error',
      title,
      message,
      duration: duration || 7000 // Error messages stay longer
    });
  }

  // Warning notifications
  showWarning(title: string, message: string, duration?: number): void {
    this.addNotification({
      type: 'warning',
      title,
      message,
      duration
    });
  }

  // Info notifications
  showInfo(title: string, message: string, duration?: number): void {
    this.addNotification({
      type: 'info',
      title,
      message,
      duration
    });
  }

  // Specific API operation notifications
  taskCreated(taskTitle: string): void {
    this.showSuccess('Task Created', `"${taskTitle}" has been added successfully`);
  }

  taskUpdated(taskTitle: string): void {
    this.showSuccess('Task Updated', `"${taskTitle}" has been updated successfully`);
  }

  taskDeleted(taskTitle: string): void {
    this.showSuccess('Task Deleted', `"${taskTitle}" has been removed successfully`);
  }

  taskCompleted(taskTitle: string): void {
    this.showSuccess('Task Completed', `"${taskTitle}" has been marked as completed`);
  }

  taskReopened(taskTitle: string): void {
    this.showInfo('Task Reopened', `"${taskTitle}" has been reopened`);
  }

  apiError(operation: string, error?: string): void {
    this.showError(
      'Sync Failed', 
      `Failed to ${operation}. ${error || 'Changes saved locally.'}`
    );
  }

  tasksLoaded(count: number): void {
    if (count > 0) {
      this.showInfo('Tasks Loaded', `${count} task${count > 1 ? 's' : ''} loaded from server`);
    }
  }
}
