import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

  errorMessage = '';
  isLoading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.errorMessage = '';
    this.isLoading = true;

    const result = this.authService.login(this.loginData.email, this.loginData.password);
    
    this.isLoading = false;

    if (result.success) {
      this.loginSuccess.emit();
      this.onClose();
    } else {
      this.errorMessage = result.message;
    }
  }

  onClose() {
    this.close.emit();
  }

  onSwitchToSignup() {
    this.switchToSignup.emit();
  }
}
