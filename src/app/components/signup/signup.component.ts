import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    const result = this.authService.signup(this.signupData);
    
    this.isLoading = false;

    if (result.success) {
      this.successMessage = result.message;
      // Reset form
      this.signupData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
      // Close modal after short delay to show success message
      setTimeout(() => {
        this.onClose();
      }, 2000);
    } else {
      this.errorMessage = result.message;
    }
  }

  onClose() {
    this.close.emit();
  }

  onSwitchToLogin() {
    this.switchToLogin.emit();
  }
}
