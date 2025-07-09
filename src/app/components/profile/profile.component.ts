import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  
  user: User | null = null;
  activeTab = 'info';
  message = '';
  messageType: 'success' | 'error' = 'success';

  // Form data objects
  profileForm = {
    firstName: '',
    lastName: '',
    email: ''
  };

  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
      if (user) {
        this.profileForm.firstName = user.firstName;
        this.profileForm.lastName = user.lastName;
        this.profileForm.email = user.email;
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.clearMessage();
  }

  updateProfile() {
    if (!this.user) return;

    const updates = {
      firstName: this.profileForm.firstName,
      lastName: this.profileForm.lastName,
      email: this.profileForm.email
    };

    const result = this.authService.updateProfile(updates);
    if (result.success) {
      this.showMessage(result.message, 'success');
    } else {
      this.showMessage(result.message, 'error');
    }
  }

  changePassword() {
    if (!this.passwordForm.currentPassword || !this.passwordForm.newPassword || !this.passwordForm.confirmPassword) {
      this.showMessage('Please fill in all password fields.', 'error');
      return;
    }

    if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
      this.showMessage('New passwords do not match.', 'error');
      return;
    }

    const result = this.authService.changePassword(this.passwordForm.currentPassword, this.passwordForm.newPassword, this.passwordForm.confirmPassword);
    if (result.success) {
      this.showMessage(result.message, 'success');
      this.passwordForm.currentPassword = '';
      this.passwordForm.newPassword = '';
      this.passwordForm.confirmPassword = '';
    } else {
      this.showMessage(result.message, 'error');
    }
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.message = message;
    this.messageType = type;
    setTimeout(() => this.clearMessage(), 5000);
  }

  private clearMessage() {
    this.message = '';
  }
}
