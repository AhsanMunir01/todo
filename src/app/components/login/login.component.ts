import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToSignup = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  loginData = {
    email: '',
    password: ''
  };
  //https://localhost:7133/api/Auth/login
  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {}

  onSubmit() {
    this.errorMessage = '';
    this.isLoading = true;

    // Basic validation
    if (!this.loginData.email.trim() || !this.loginData.password) {
      this.errorMessage = 'Please enter both email and password';
      this.isLoading = false;
      return;
    }

    // Prepare data for API call
    const apiData = {
      email: this.loginData.email.toLowerCase().trim(),
      password: this.loginData.password
    };

    // Make API call
    this.http.post('https://localhost:7133/api/Auth/login', apiData)
      .subscribe({
        next: (response: any) => {
          console.log('Login response:', response);
          this.isLoading = false;
          
          // Store authentication token if provided
          if (response.token) {
            localStorage.setItem('authToken', response.token);
          }
          
          // Create user object and update AuthService state
          const user = {
            id: response.user?.id || response.id || 'temp-id',
            firstName: response.user?.firstName || response.firstName || '',
            lastName: response.user?.lastName || response.lastName || '',
            email: response.user?.email || response.email || this.loginData.email,
            password: '', // Don't store password
            createdAt: response.user?.createdAt ? new Date(response.user.createdAt) : new Date(),
            lastLoginAt: new Date() // Set current time as last login time
          };
          
          // Update AuthService with user data
          this.authService.setCurrentUser(user);
          
          this.loginSuccess.emit();
          this.onClose();
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Login failed. Please check your credentials.';
        }
      });
  }

  onClose() {
    this.close.emit();
  }

  onSwitchToSignup() {
    this.switchToSignup.emit();
  }
}
