import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  // Email validation
  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Password validation
  private isValidPassword(password: string): { valid: boolean; message: string } {
    if (password.length < 8) {
      return { valid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return { valid: false, message: 'Password must contain at least one lowercase letter' };
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return { valid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/(?=.*\d)/.test(password)) {
      return { valid: false, message: 'Password must contain at least one number' };
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return { valid: false, message: 'Password must contain at least one special character (@$!%*?&)' };
    }
    return { valid: true, message: '' };
  }

  // Sign up new user
  signup(userData: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string }): { success: boolean; message: string } {
    // Validation
    if (!userData.firstName.trim() || !userData.lastName.trim() || !userData.email.trim() || !userData.password || !userData.confirmPassword) {
      return { success: false, message: 'Please fill in all fields' };
    }

    if (!this.isValidEmail(userData.email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    if (userData.password !== userData.confirmPassword) {
      return { success: false, message: 'Passwords do not match' };
    }

    const passwordValidation = this.isValidPassword(userData.password);
    if (!passwordValidation.valid) {
      return { success: false, message: passwordValidation.message };
    }

    // Check if user already exists
    const users = this.getUsers();
    if (users.find(user => user.email.toLowerCase() === userData.email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists' };
    }

    // Create new user
    const newUser: User = {
      id: this.generateId(),
      firstName: userData.firstName.trim(),
      lastName: userData.lastName.trim(),
      email: userData.email.toLowerCase().trim(),
      password: userData.password, // In a real app, this would be hashed
      createdAt: new Date()
    };

    // Save user to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Account created successfully!' };
  }

  // Login user
  login(email: string, password: string): { success: boolean; message: string } {
    if (!email.trim() || !password) {
      return { success: false, message: 'Please enter both email and password' };
    }

    if (!this.isValidEmail(email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password);

    if (user) {
      // Remove password from the stored current user for security
      const userWithoutPassword = { ...user };
      delete (userWithoutPassword as any).password;
      
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      this.currentUserSubject.next(user);
      return { success: true, message: 'Login successful!' };
    }

    return { success: false, message: 'Invalid email or password' };
  }

  // Logout user
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  // Update user profile
  updateProfile(updates: { firstName?: string; lastName?: string; email?: string }): { success: boolean; message: string } {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, message: 'User not logged in' };
    }

    if (updates.email && !this.isValidEmail(updates.email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    // Check if new email already exists (if email is being updated)
    if (updates.email && updates.email.toLowerCase() !== currentUser.email.toLowerCase()) {
      const users = this.getUsers();
      if (users.find(user => user.email.toLowerCase() === updates.email!.toLowerCase() && user.id !== currentUser.id)) {
        return { success: false, message: 'An account with this email already exists' };
      }
    }

    // Update user in users array
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates };
      localStorage.setItem('users', JSON.stringify(users));

      // Update current user
      const updatedUser = users[userIndex];
      const userWithoutPassword = { ...updatedUser };
      delete (userWithoutPassword as any).password;
      
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      this.currentUserSubject.next(updatedUser);

      return { success: true, message: 'Profile updated successfully!' };
    }

    return { success: false, message: 'User not found' };
  }

  // Change password
  changePassword(currentPassword: string, newPassword: string, confirmPassword: string): { success: boolean; message: string } {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, message: 'User not logged in' };
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      return { success: false, message: 'Please fill in all password fields' };
    }

    // Get the full user data with password
    const users = this.getUsers();
    const fullUser = users.find(u => u.id === currentUser.id);
    
    if (!fullUser || fullUser.password !== currentPassword) {
      return { success: false, message: 'Current password is incorrect' };
    }

    if (newPassword !== confirmPassword) {
      return { success: false, message: 'New passwords do not match' };
    }

    const passwordValidation = this.isValidPassword(newPassword);
    if (!passwordValidation.valid) {
      return { success: false, message: passwordValidation.message };
    }

    // Update password
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Password changed successfully!' };
  }

  // Helper methods
  private getUsers(): User[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
