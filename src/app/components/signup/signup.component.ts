import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

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

  //https://localhost:7133/api/Auth/register

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    // First validate the form using the auth service
    const validationResult = this.authService.validateSignupData(this.signupData);
    
    if (!validationResult.success) {
      this.errorMessage = validationResult.message;
      this.isLoading = false;
      return;
    }

    // Prepare data for API call - include confirmPassword as required by backend
    const apiData = {
      firstName: this.signupData.firstName.trim(),
      lastName: this.signupData.lastName.trim(),
      email: this.signupData.email.toLowerCase().trim(),
      password: this.signupData.password,
      confirmPassword: this.signupData.confirmPassword
    };

    // Make API call
    this.http.post('https://localhost:7133/api/Auth/register', apiData)
      .subscribe({
        next: (response: any) => {
          console.log('POST response:', response);
          this.isLoading = false;
          this.successMessage = 'Account created successfully! Please login with your credentials.';
          
          // Reset form
          this.signupData = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          };
          
          // Redirect to login page after short delay to show success message
          setTimeout(() => {
            this.onSwitchToLogin();
          }, 2000);
        },
        error: (error) => {
          console.error('Registration error:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
        }
      });
  }

  onClose() {
    this.close.emit();
  }

  onSwitchToLogin() {
    this.switchToLogin.emit();
  }
}
