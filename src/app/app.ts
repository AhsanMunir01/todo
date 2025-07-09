import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthService, User } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoginComponent, SignupComponent, ProfileComponent, TodoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  protected title = 'task';
  showLogin = false;
  showSignup = false;
  showProfile = false;
  showTodo = false;
  activeSection = 'home'; // Track which section is currently active
  currentUser: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Set initial active section
    this.updateActiveSection();
    
    // Subscribe to authentication changes
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'contact'];
    const scrollPosition = window.scrollY + 150; // Offset for header

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  // Modal methods
  openLoginModal() {
    this.showLogin = true;
    this.showSignup = false;
    this.showProfile = false;
  }

  openSignupModal() {
    this.showSignup = true;
    this.showLogin = false;
    this.showProfile = false;
  }

  openProfileModal() {
    if (this.currentUser) {
      this.showProfile = true;
      this.showLogin = false;
      this.showSignup = false;
      this.showTodo = false;
    }
  }

  openTodoModal() {
    if (this.currentUser) {
      this.showTodo = true;
      this.showProfile = false;
      this.showLogin = false;
      this.showSignup = false;
    }
  }

  closeModals() {
    this.showLogin = false;
    this.showSignup = false;
    this.showProfile = false;
  }

  onLoginSuccess() {
    this.closeModals();
  }

  switchToSignupFromLogin() {
    this.showLogin = false;
    this.showSignup = true;
  }

  switchToLoginFromSignup() {
    this.showSignup = false;
    this.showLogin = true;
  }

  logout() {
    this.authService.logout();
    this.closeModals();
  }

  // Navigation methods
  showHome() {
    this.activeSection = 'home';
    this.scrollToSection('home');
  }

  showAbout() {
    this.activeSection = 'about';
    this.scrollToSection('about');
  }

  showContact() {
    this.activeSection = 'contact';
    this.scrollToSection('contact');
  }

  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}
