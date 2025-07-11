import {
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  EVENT_MANAGER_PLUGINS,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  EventEmitter,
  EventManagerPlugin,
  FactoryTarget,
  Host,
  HostListener,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Location,
  NgModule,
  NgModuleFactory$1,
  Observable,
  Optional,
  Output,
  PendingTasksInternal,
  Renderer2,
  RuntimeError,
  SecurityContext,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TestBed,
  Version,
  ViewContainerRef,
  XSS_SECURITY_URL,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  _sanitizeHtml,
  _sanitizeUrl,
  allowSanitizationBypassAndThrow,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  core_exports,
  createEnvironmentInjector,
  defaultIfEmpty,
  defer,
  filter,
  finalize,
  first,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  init_common,
  init_core,
  init_dom_renderer,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  input,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  isSubscribable,
  last,
  map,
  mergeMap,
  of,
  pipe,
  provideZonelessChangeDetection,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  scan,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  untracked,
  unwrapSafeValue,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W3PSGD33.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = `<div id="body" class = "app-body ">\r
<header>\r
<nav>\r
  <h1>To Do App</h1>\r
  <div class="nav-links">\r
    <a href="#" (click)="showHome(); $event.preventDefault()" [class.active]="activeSection === 'home'">Home</a>\r
    <a href="#" (click)="showAbout(); $event.preventDefault()" [class.active]="activeSection === 'about'">About</a>\r
    <a href="#" (click)="showContact(); $event.preventDefault()" [class.active]="activeSection === 'contact'">Contact</a>\r
    \r
    <!-- Unauthenticated user links -->\r
    <div *ngIf="!currentUser" class="auth-links">\r
      <a href="#" (click)="openLoginModal(); $event.preventDefault()">Sign In</a>\r
      <a href="#" (click)="openSignupModal(); $event.preventDefault()" class="signup-btn">Sign Up</a>\r
    </div>\r
    \r
    <!-- Authenticated user links -->\r
    <div *ngIf="currentUser" class="user-menu">\r
      <span class="user-greeting">Hello, {{currentUser.firstName}}!</span>\r
      <a href="#" (click)="openTodoModal(); $event.preventDefault()" class="todo-btn">Todo</a>\r
      <a href="#" (click)="openProfileModal(); $event.preventDefault()" class="profile-btn">Profile</a>\r
      <a href="#" (click)="logout(); $event.preventDefault()" class="logout-btn">Logout</a>\r
    </div>\r
  </div>\r
  \r
</nav>\r
</header>\r
\r
<!-- Home Section -->\r
<div id="home" class="content-section" [class.active-section]="activeSection === 'home'">\r
  <h2>Welcome to To Do App</h2>\r
  <p>Organize your tasks efficiently and stay productive!</p>\r
  <div class="task-summary">\r
    <h3>Quick Overview</h3>\r
    <p>Start managing your daily tasks with our simple and intuitive interface.</p>\r
  </div>\r
</div>\r
\r
<!-- About Section -->\r
<div id="about" class="content-section" [class.active-section]="activeSection === 'about'">\r
  <h2>About Our To Do App</h2>\r
  <p>This application helps you manage your daily tasks and boost your productivity.</p>\r
  <div class="features">\r
    <h3>Features:</h3>\r
    <ul>\r
      <li>Add and manage tasks</li>\r
      <li>Mark tasks as complete</li>\r
      <li>Organize with categories</li>\r
      <li>Simple and clean interface</li>\r
    </ul>\r
  </div>\r
</div>\r
\r
<!-- Contact Section -->\r
<div id="contact" class="content-section" [class.active-section]="activeSection === 'contact'">\r
  <h2>Contact Us</h2>\r
  <p>Get in touch with our team for any questions or feedback.</p>\r
  <div class="contact-info">\r
    <div class="contact-item">\r
      <h3>Email</h3>\r
      <p>support&#64;todoapp.com</p>\r
    </div>\r
    <div class="contact-item">\r
      <h3>Phone</h3>\r
      <p>+924200000000</p>\r
    </div>\r
    <div class="contact-item">\r
      <h3>Address</h3>\r
      <p>123 Task Street<br>Productivity City, PC 12345</p>\r
    </div>\r
  </div>\r
</div>\r
\r
</div>\r
<router-outlet></router-outlet>\r
\r
<!-- Login Modal -->\r
<app-login \r
  *ngIf="showLogin" \r
  (close)="closeModals()" \r
  (switchToSignup)="switchToSignupFromLogin()"\r
  (loginSuccess)="onLoginSuccess()">\r
</app-login>\r
\r
<!-- Signup Modal -->\r
<app-signup \r
  *ngIf="showSignup" \r
  (close)="closeModals()" \r
  (switchToLogin)="switchToLoginFromSignup()">\r
</app-signup>\r
\r
<!-- Profile Modal -->\r
<app-profile \r
  *ngIf="showProfile && currentUser"\r
  (close)="closeModals()">\r
</app-profile>\r
\r
<!-- Todo Modal -->\r
<app-todo \r
  *ngIf="showTodo && currentUser"\r
  (close)="closeModals()">\r
</app-todo>`;
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = '/* src/app/app.css */\nnav {\n  display: flex;\n  justify-content: space-between;\n  border-radius: 30px;\n  align-items: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\nnav h1 {\n  margin: 0;\n  color: #ffffff;\n  font-family: "Arial", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.nav-links {\n  display: flex;\n  gap: 15px;\n  position: relative;\n}\n.nav-links::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  width: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ee5a24 100%);\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n.nav-links a {\n  padding: 12px 20px;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 25px;\n  color: #ffffff;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  overflow: hidden;\n}\n.nav-links a::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.nav-links a:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.nav-links a:hover::before {\n  left: 100%;\n}\n.nav-links a.active {\n  background: rgba(255, 255, 255, 0.4);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  animation: pulseActive 0.5s ease-in-out;\n}\n.nav-links a.active ~ .nav-links::after,\n.nav-links a.active::after {\n  width: 100%;\n}\n@keyframes pulseActive {\n  0% {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);\n  }\n  100% {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n  }\n}\n.signup-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ee5a24 100%) !important;\n  border: 2px solid transparent !important;\n  font-weight: 600 !important;\n}\n.signup-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff5252 0%,\n      #d63031 100%) !important;\n  transform: translateY(-2px) scale(1.05) !important;\n  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4) !important;\n}\n.auth-links {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.user-menu {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.user-greeting {\n  color: #ffffff;\n  font-weight: 500;\n  margin-right: 10px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.profile-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%) !important;\n  border: 2px solid transparent !important;\n  font-weight: 600 !important;\n}\n.profile-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a6fd8 0%,\n      #6a4190 100%) !important;\n  transform: translateY(-2px) scale(1.05) !important;\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;\n}\n.logout-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%) !important;\n  border: 2px solid transparent !important;\n  font-weight: 600 !important;\n}\n.logout-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #c82333 0%,\n      #a71e2a 100%) !important;\n  transform: translateY(-2px) scale(1.05) !important;\n  box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4) !important;\n}\n@media (max-width: 768px) {\n  .user-menu {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .user-greeting {\n    margin-right: 0;\n    margin-bottom: 5px;\n  }\n  .auth-links {\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n.content-section {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 40px;\n  background: #2a2a2a;\n  border-radius: 15px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  animation: slideInFade 0.6s ease-in-out;\n  opacity: 1;\n  transform: translateY(0);\n}\n@keyframes slideInFade {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  50% {\n    opacity: 0.7;\n    transform: translateY(15px) scale(0.98);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes slideInFromLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes slideInFromRight {\n  0% {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes slideInFromTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.content-section:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n}\n.content-section h2 {\n  color: #333;\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: bold;\n}\n.content-section p {\n  color: #666;\n  font-size: 1.2rem;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  text-align: center;\n}\n#home {\n  background:\n    linear-gradient(\n      135deg,\n      #635364 0%,\n      #554e4f 100%);\n  color: white;\n  animation: slideInFromLeft 0.7s ease-out;\n}\n#home h2 {\n  color: white;\n  -webkit-text-fill-color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  animation: slideInFromTop 0.8s ease-out 0.2s both;\n}\n#home p {\n  color: rgba(255, 255, 255, 0.9);\n  animation: slideInFade 0.9s ease-out 0.3s both;\n}\n.task-summary {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 25px;\n  border-radius: 12px;\n  margin-top: 30px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  animation: slideInFromTop 1s ease-out 0.4s both;\n}\n.task-summary:hover {\n  animation: bounceSubtle 0.6s ease-in-out;\n}\n@keyframes bounceSubtle {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.task-summary h3 {\n  color: white;\n  font-size: 1.5rem;\n  margin-bottom: 15px;\n  text-align: center;\n}\n#about {\n  background:\n    linear-gradient(\n      135deg,\n      #547694 0%,\n      #465c5e 100%);\n  color: white;\n  animation: slideInFade 0.7s ease-out;\n}\n#about h2 {\n  color: white;\n  -webkit-text-fill-color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  animation: slideInFromTop 0.8s ease-out 0.2s both;\n}\n#about p {\n  color: rgba(255, 255, 255, 0.9);\n  animation: slideInFromLeft 0.9s ease-out 0.3s both;\n}\n.features {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 25px;\n  border-radius: 12px;\n  margin-top: 30px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  animation: slideInFromRight 1s ease-out 0.4s both;\n}\n.features h3 {\n  color: white;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.features ul {\n  list-style: none;\n  padding: 0;\n}\n.features li {\n  background: rgba(255, 255, 255, 0.1);\n  margin: 10px 0;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border-left: 4px solid rgb(223, 219, 219);\n  transition: all 0.3s ease;\n  animation: slideInFromLeft 0.6s ease-out both;\n}\n.features li:nth-child(1) {\n  animation-delay: 0.5s;\n}\n.features li:nth-child(2) {\n  animation-delay: 0.6s;\n}\n.features li:nth-child(3) {\n  animation-delay: 0.7s;\n}\n.features li:nth-child(4) {\n  animation-delay: 0.8s;\n}\n.features li:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateX(10px) scale(1.02);\n}\n#contact {\n  background:\n    linear-gradient(\n      135deg,\n      #5e3b45 0%,\n      #6e6740 100%);\n  color: white;\n  animation: slideInFromRight 0.7s ease-out;\n}\n#contact h2 {\n  color: white;\n  -webkit-text-fill-color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  animation: slideInFromTop 0.8s ease-out 0.2s both;\n}\n#contact p {\n  color: rgba(255, 255, 255, 0.9);\n  animation: slideInFade 0.9s ease-out 0.3s both;\n}\n.contact-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n  margin-top: 30px;\n  animation: slideInFromTop 1s ease-out 0.4s both;\n}\n.contact-item {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 25px;\n  border-radius: 12px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  animation: slideInFromTop 0.7s ease-out both;\n}\n.contact-item:nth-child(1) {\n  animation-delay: 0.5s;\n}\n.contact-item:nth-child(2) {\n  animation-delay: 0.6s;\n}\n.contact-item:nth-child(3) {\n  animation-delay: 0.7s;\n}\n.contact-item:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-5px) scale(1.02);\n}\n.contact-item h3 {\n  color: white;\n  font-size: 1.3rem;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.contact-item p {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.1rem;\n  margin: 0;\n}\nbody {\n  margin: 10px;\n  padding: 10px;\n  font-family: "Arial", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  min-height: 100vh;\n  border-radius: 10px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n#body.app-body {\n  background-color: #6b6060;\n  min-height: 100px;\n  padding: 20px;\n}\n.app-body {\n  background-color: #1a1a1a;\n  color: #ffffff;\n}\nhtml {\n  scroll-behavior: smooth;\n}\n.content-section {\n  transition: all 0.6s ease-in-out;\n  transform: scale(0.98);\n  opacity: 0.8;\n}\n.content-section.active-section {\n  transform: scale(1);\n  opacity: 1;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n}\n.content-section {\n  animation: fadeInUp 0.8s ease-out;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.content-section.active-section {\n  animation: pulseIn 0.6s ease-out;\n}\n@keyframes pulseIn {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.7;\n  }\n  50% {\n    transform: scale(1.02);\n    opacity: 0.9;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.content-section {\n  scroll-margin-top: 100px;\n  margin-bottom: 60px;\n}\n#home.active-section h2 {\n  animation: slideInLeft 0.8s ease-out 0.2s both;\n}\n#home.active-section p {\n  animation: slideInRight 0.8s ease-out 0.4s both;\n}\n#home.active-section .task-summary {\n  animation: bounceIn 0.8s ease-out 0.6s both;\n}\n#about.active-section h2 {\n  animation: slideInDown 0.8s ease-out 0.2s both;\n}\n#about.active-section > p {\n  animation: fadeIn 0.8s ease-out 0.4s both;\n}\n#about.active-section .features {\n  animation: slideInUp 0.8s ease-out 0.6s both;\n}\n#about.active-section .features li {\n  animation: slideInLeft 0.6s ease-out both;\n}\n#about.active-section .features li:nth-child(1) {\n  animation-delay: 0.8s;\n}\n#about.active-section .features li:nth-child(2) {\n  animation-delay: 1.0s;\n}\n#about.active-section .features li:nth-child(3) {\n  animation-delay: 1.2s;\n}\n#about.active-section .features li:nth-child(4) {\n  animation-delay: 1.4s;\n}\n#contact.active-section h2 {\n  animation: zoomIn 0.8s ease-out 0.2s both;\n}\n#contact.active-section > p {\n  animation: fadeIn 0.8s ease-out 0.4s both;\n}\n#contact.active-section .contact-item {\n  animation: slideInUp 0.6s ease-out both;\n}\n#contact.active-section .contact-item:nth-child(1) {\n  animation-delay: 0.6s;\n}\n#contact.active-section .contact-item:nth-child(2) {\n  animation-delay: 0.8s;\n}\n#contact.active-section .contact-item:nth-child(3) {\n  animation-delay: 1.0s;\n}\n@keyframes slideInLeft {\n  from {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInUp {\n  from {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes bounceIn {\n  0% {\n    transform: scale(0.3);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 0.8;\n  }\n  70% {\n    transform: scale(0.9);\n    opacity: 0.9;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes zoomIn {\n  from {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .content-section {\n    margin: 20px;\n    padding: 25px;\n  }\n  .content-section h2 {\n    font-size: 2rem;\n  }\n  nav {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .nav-links {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .contact-info {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n';
  }
});

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var Meta, META_KEYS_MAP, Title, EVENT_NAMES, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerGesturesPlugin, HammerModule, DomSanitizer, DomSanitizerImpl, HydrationFeatureKind, VERSION;
var init_platform_browser = __esm({
  "node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dom_renderer();
    Meta = class _Meta {
      _doc;
      _dom;
      constructor(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
      }
      /**
       * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * If an existing element is found, it is returned and is not modified in any way.
       * @param tag The definition of a `<meta>` element to match or create.
       * @param forceCreation True to create a new element without checking whether one already exists.
       * @returns The existing element with the same attributes and values if found,
       * the new element if no match is found, or `null` if the tag parameter is not defined.
       */
      addTag(tag, forceCreation = false) {
        if (!tag)
          return null;
        return this._getOrCreateElement(tag, forceCreation);
      }
      /**
       * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * @param tags An array of tag definitions to match or create.
       * @param forceCreation True to create new elements without checking whether they already exist.
       * @returns The matching elements if found, or the new elements.
       */
      addTags(tags, forceCreation = false) {
        if (!tags)
          return [];
        return tags.reduce((result, tag) => {
          if (tag) {
            result.push(this._getOrCreateElement(tag, forceCreation));
          }
          return result;
        }, []);
      }
      /**
       * Retrieves a `<meta>` tag element in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching element, if any.
       */
      getTag(attrSelector) {
        if (!attrSelector)
          return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
      }
      /**
       * Retrieves a set of `<meta>` tag elements in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching elements, if any.
       */
      getTags(attrSelector) {
        if (!attrSelector)
          return [];
        const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
      }
      /**
       * Modifies an existing `<meta>` tag element in the current HTML document.
       * @param tag The tag description with which to replace the existing tag content.
       * @param selector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       * If not supplied, matches a tag with the same `name` or `property` attribute value as the
       * replacement tag.
       * @return The modified element.
       */
      updateTag(tag, selector) {
        if (!tag)
          return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
          return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param attrSelector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       */
      removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param meta The tag definition to match against to identify an existing tag.
       */
      removeTagElement(meta) {
        if (meta) {
          this._dom.remove(meta);
        }
      }
      _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
          const selector = this._parseSelector(meta);
          const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
          if (elem !== void 0)
            return elem;
        }
        const element = this._dom.createElement("meta");
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName("head")[0];
        head.appendChild(element);
        return element;
      }
      _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
      }
      _parseSelector(tag) {
        const attr = tag.name ? "name" : "property";
        return `${attr}="${tag[attr]}"`;
      }
      _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
      }
      _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _Meta, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _Meta, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: Meta, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    META_KEYS_MAP = {
      httpEquiv: "http-equiv"
    };
    Title = class _Title {
      _doc;
      constructor(_doc) {
        this._doc = _doc;
      }
      /**
       * Get the title of the current HTML document.
       */
      getTitle() {
        return this._doc.title;
      }
      /**
       * Set the title of the current HTML document.
       * @param newTitle
       */
      setTitle(newTitle) {
        this._doc.title = newTitle || "";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _Title, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _Title, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: Title, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    EVENT_NAMES = {
      // pan
      "pan": true,
      "panstart": true,
      "panmove": true,
      "panend": true,
      "pancancel": true,
      "panleft": true,
      "panright": true,
      "panup": true,
      "pandown": true,
      // pinch
      "pinch": true,
      "pinchstart": true,
      "pinchmove": true,
      "pinchend": true,
      "pinchcancel": true,
      "pinchin": true,
      "pinchout": true,
      // press
      "press": true,
      "pressup": true,
      // rotate
      "rotate": true,
      "rotatestart": true,
      "rotatemove": true,
      "rotateend": true,
      "rotatecancel": true,
      // swipe
      "swipe": true,
      "swipeleft": true,
      "swiperight": true,
      "swipeup": true,
      "swipedown": true,
      // tap
      "tap": true,
      "doubletap": true
    };
    HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
    HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
    HammerGestureConfig = class _HammerGestureConfig {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      events = [];
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      overrides = {};
      /**
       * Properties whose default values can be overridden for a given event.
       * Different sets of properties apply to different events.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      options;
      /**
       * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
       * and attaches it to a given HTML element.
       * @param element The element that will recognize gestures.
       * @returns A HammerJS event-manager object.
       */
      buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get("pinch").set({ enable: true });
        mc.get("rotate").set({ enable: true });
        for (const eventName in this.overrides) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerGestureConfig, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerGestureConfig });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: HammerGestureConfig, decorators: [{
      type: Injectable
    }] });
    HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
      _config;
      _injector;
      loader;
      _loaderPromise = null;
      constructor(doc, _config, _injector, loader) {
        super(doc);
        this._config = _config;
        this._injector = _injector;
        this.loader = loader;
      }
      supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
          return false;
        }
        if (!window.Hammer && !this.loader) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
          }
          return false;
        }
        return true;
      }
      addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        if (!window.Hammer && this.loader) {
          this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
          let cancelRegistration = false;
          let deregister = () => {
            cancelRegistration = true;
          };
          zone.runOutsideAngular(() => this._loaderPromise.then(() => {
            if (!window.Hammer) {
              if (typeof ngDevMode === "undefined" || ngDevMode) {
                const _console = this._injector.get(Console);
                _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
              }
              deregister = () => {
              };
              return;
            }
            if (!cancelRegistration) {
              deregister = this.addEventListener(element, eventName, handler);
            }
          }).catch(() => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              const _console = this._injector.get(Console);
              _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
            }
            deregister = () => {
            };
          }));
          return () => {
            deregister();
          };
        }
        return zone.runOutsideAngular(() => {
          const mc = this._config.buildHammer(element);
          const callback = function(eventObj) {
            zone.runGuarded(function() {
              handler(eventObj);
            });
          };
          mc.on(eventName, callback);
          return () => {
            mc.off(eventName, callback);
            if (typeof mc.destroy === "function") {
              mc.destroy();
            }
          };
        });
      }
      isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerGesturesPlugin, deps: [{ token: DOCUMENT }, { token: HAMMER_GESTURE_CONFIG }, { token: Injector }, { token: HAMMER_LOADER, optional: true }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerGesturesPlugin });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: HammerGesturesPlugin, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: HammerGestureConfig, decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }] }, { type: Injector }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }] }] });
    HammerModule = class _HammerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HammerModule, providers: [
        {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: HammerGesturesPlugin,
          multi: true,
          deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: HammerModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
          },
          { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
        ]
      }]
    }] });
    DomSanitizer = class _DomSanitizer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DomSanitizer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DomSanitizer, providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: DomSanitizer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) }]
    }] });
    DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
      _doc;
      constructor(_doc) {
        super();
        this._doc = _doc;
      }
      sanitize(ctx, value) {
        if (value == null)
          return null;
        switch (ctx) {
          case SecurityContext.NONE:
            return value;
          case SecurityContext.HTML:
            if (allowSanitizationBypassAndThrow(
              value,
              "HTML"
              /* BypassType.Html */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeHtml(this._doc, String(value)).toString();
          case SecurityContext.STYLE:
            if (allowSanitizationBypassAndThrow(
              value,
              "Style"
              /* BypassType.Style */
            )) {
              return unwrapSafeValue(value);
            }
            return value;
          case SecurityContext.SCRIPT:
            if (allowSanitizationBypassAndThrow(
              value,
              "Script"
              /* BypassType.Script */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
          case SecurityContext.URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "URL"
              /* BypassType.Url */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeUrl(String(value));
          case SecurityContext.RESOURCE_URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "ResourceURL"
              /* BypassType.ResourceUrl */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
          default:
            throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
        }
      }
      bypassSecurityTrustHtml(value) {
        return bypassSanitizationTrustHtml(value);
      }
      bypassSecurityTrustStyle(value) {
        return bypassSanitizationTrustStyle(value);
      }
      bypassSecurityTrustScript(value) {
        return bypassSanitizationTrustScript(value);
      }
      bypassSecurityTrustUrl(value) {
        return bypassSanitizationTrustUrl(value);
      }
      bypassSecurityTrustResourceUrl(value) {
        return bypassSanitizationTrustResourceUrl(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DomSanitizerImpl, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DomSanitizerImpl, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: DomSanitizerImpl, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    (function(HydrationFeatureKind2) {
      HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
      HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
      HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
      HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
      HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
    })(HydrationFeatureKind || (HydrationFeatureKind = {}));
    VERSION = new Version("20.0.6");
  }
});

// node_modules/@angular/router/fesm2022/router2.mjs
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return { consumed: segments.slice(0, parts.length), posParams };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i]))
      return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments))
    return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren)
    return false;
  for (const c in containee.children) {
    if (!container.children[c])
      return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams))
      return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths))
      return false;
    if (containee.hasChildren())
      return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams))
      return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths))
      return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams))
      return false;
    for (const c in containee.children) {
      if (!container.children[c])
        return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current))
      return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams))
      return false;
    if (!container.children[PRIMARY_OUTLET])
      return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length)
    return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], { [PRIMARY_OUTLET]: rootCandidate }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, { outlets }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return { [PRIMARY_OUTLET]: commands };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = { match: false, pathIndex: 0, commandIndex: 0 };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length)
      return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0)
      break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path))
        return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path))
        return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot)
    return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector)
      return route._loadedInjector;
    if (route?._injector)
      return route._injector;
  }
  return null;
}
function findNode(value, node) {
  if (value === node.value)
    return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2)
      return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value)
    return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const { routeConfig } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), { children }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
function redirectingNavigationError(urlSerializer, redirect) {
  const { redirectTo, navigationBehaviorOptions } = isUrlTree(redirect) ? { redirectTo: redirect, navigationBehaviorOptions: void 0 } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0)
    return null;
  return { node: p, guards: canActivateChild };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const { targetSnapshot, currentSnapshot, guards: { canActivateChecks, canDeactivateChecks } } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), { guardsResult: true }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), { guardsResult })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0)
    return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0)
    return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean")
      return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0)
    return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return of(redirectTo);
  }
  const redirectToFn = redirectTo;
  const { queryParams, fragment, routeConfig, url, outlet, params, data, title } = currentSnapshot;
  return wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn({ params, data, queryParams, fragment, routeConfig, url, outlet, title })));
}
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res)
    return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return { segmentGroup: s2, slicedSegments: [] };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return { segmentGroup: s2, slicedSegments };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return { segmentGroup: s, slicedSegments };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
  const res = {};
  for (const r of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET)
      return -1;
    if (b.value.outlet === PRIMARY_OUTLET)
      return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({ state: targetSnapshot, tree: urlAfterRedirects }) => {
    return __spreadProps(__spreadValues({}, t), { targetSnapshot, urlAfterRedirects });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const { targetSnapshot, guards: { canActivateChecks } } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe(map(maybeUnwrapDefaultExport), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], { optional: true, self: true }).flat();
    }
    const routes = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
    return { routes, injector };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter(
    (result) => result !== 2
    /* NavigationResult.REDIRECTING */
  ), take(1)).subscribe(() => {
    action();
  });
}
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
var PRIMARY_OUTLET, RouteTitleKey, ParamsAsMap, pathCompareMap, paramCompareMap, UrlTree, UrlSegmentGroup, UrlSegment, UrlSerializer, DefaultUrlSerializer, DEFAULT_SERIALIZER, SEGMENT_RE, MATRIX_PARAM_SEGMENT_RE, QUERY_PARAM_RE, QUERY_PARAM_VALUE_RE, UrlParser, Navigation, Position, IMPERATIVE_NAVIGATION, EventType, RouterEvent, NavigationStart, NavigationEnd, NavigationCancellationCode, NavigationSkippedCode, NavigationCancel, NavigationSkipped, NavigationError, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd, RouteConfigLoadStart, RouteConfigLoadEnd, ChildActivationStart, ChildActivationEnd, ActivationStart, ActivationEnd, BeforeActivateRoutes, RedirectRequest, OutletContext, ChildrenOutletContexts, Tree, TreeNode, RouterState, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, ROUTER_OUTLET_DATA, RouterOutlet, OutletInjector, INPUT_BINDER, RoutedComponentInputBinder, \u0275EmptyOutletComponent, RedirectCommand, NAVIGATION_CANCELING_ERROR, warnedAboutUnsupportedInputBinding, activateRoutes, ActivateRoutes, CanActivate, CanDeactivate, INITIAL_VALUE, NoMatch, AbsoluteRedirect, ApplyRedirects, noMatch, NoLeftoversInUrl, MAX_ALLOWED_REDIRECTS, Recognizer, TitleStrategy, DefaultTitleStrategy, ROUTER_CONFIGURATION, ROUTES, RouterConfigLoader, UrlHandlingStrategy, DefaultUrlHandlingStrategy, CREATE_VIEW_TRANSITION, VIEW_TRANSITION_OPTIONS, NAVIGATION_ERROR_HANDLER, NavigationTransitions, RouteReuseStrategy, BaseRouteReuseStrategy, DefaultRouteReuseStrategy, StateManager, HistoryStateManager, exactMatchOptions, subsetMatchOptions, Router;
var init_router2 = __esm({
  "node_modules/@angular/router/fesm2022/router2.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform_browser();
    PRIMARY_OUTLET = "primary";
    RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
    ParamsAsMap = class {
      params;
      constructor(params) {
        this.params = params || {};
      }
      has(name) {
        return Object.prototype.hasOwnProperty.call(this.params, name);
      }
      get(name) {
        if (this.has(name)) {
          const v = this.params[name];
          return Array.isArray(v) ? v[0] : v;
        }
        return null;
      }
      getAll(name) {
        if (this.has(name)) {
          const v = this.params[name];
          return Array.isArray(v) ? v : [v];
        }
        return [];
      }
      get keys() {
        return Object.keys(this.params);
      }
    };
    pathCompareMap = {
      "exact": equalSegmentGroups,
      "subset": containsSegmentGroup
    };
    paramCompareMap = {
      "exact": equalParams,
      "subset": containsParams,
      "ignored": () => true
    };
    UrlTree = class {
      root;
      queryParams;
      fragment;
      /** @internal */
      _queryParamMap;
      constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (root.segments.length > 0) {
            throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
          }
        }
      }
      get queryParamMap() {
        this._queryParamMap ??= convertToParamMap(this.queryParams);
        return this._queryParamMap;
      }
      /** @docsNotRequired */
      toString() {
        return DEFAULT_SERIALIZER.serialize(this);
      }
    };
    UrlSegmentGroup = class {
      segments;
      children;
      /** The parent node in the url tree */
      parent = null;
      constructor(segments, children) {
        this.segments = segments;
        this.children = children;
        Object.values(children).forEach((v) => v.parent = this);
      }
      /** Whether the segment has child segments */
      hasChildren() {
        return this.numberOfChildren > 0;
      }
      /** Number of child segments */
      get numberOfChildren() {
        return Object.keys(this.children).length;
      }
      /** @docsNotRequired */
      toString() {
        return serializePaths(this);
      }
    };
    UrlSegment = class {
      path;
      parameters;
      /** @internal */
      _parameterMap;
      constructor(path, parameters) {
        this.path = path;
        this.parameters = parameters;
      }
      get parameterMap() {
        this._parameterMap ??= convertToParamMap(this.parameters);
        return this._parameterMap;
      }
      /** @docsNotRequired */
      toString() {
        return serializePath(this);
      }
    };
    UrlSerializer = class _UrlSerializer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _UrlSerializer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _UrlSerializer, providedIn: "root", useFactory: () => new DefaultUrlSerializer() });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: UrlSerializer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => new DefaultUrlSerializer() }]
    }] });
    DefaultUrlSerializer = class {
      /** Parses a url into a `UrlTree` */
      parse(url) {
        const p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
      }
      /** Converts a `UrlTree` into a url */
      serialize(tree2) {
        const segment = `/${serializeSegment(tree2.root, true)}`;
        const query = serializeQueryParams(tree2.queryParams);
        const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
        return `${segment}${query}${fragment}`;
      }
    };
    DEFAULT_SERIALIZER = new DefaultUrlSerializer();
    SEGMENT_RE = /^[^\/()?;#]+/;
    MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
    QUERY_PARAM_RE = /^[^=?&#]+/;
    QUERY_PARAM_VALUE_RE = /^[^&#]+/;
    UrlParser = class {
      url;
      remaining;
      constructor(url) {
        this.url = url;
        this.remaining = url;
      }
      parseRootSegment() {
        this.consumeOptional("/");
        if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
          return new UrlSegmentGroup([], {});
        }
        return new UrlSegmentGroup([], this.parseChildren());
      }
      parseQueryParams() {
        const params = {};
        if (this.consumeOptional("?")) {
          do {
            this.parseQueryParam(params);
          } while (this.consumeOptional("&"));
        }
        return params;
      }
      parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
      }
      parseChildren() {
        if (this.remaining === "") {
          return {};
        }
        this.consumeOptional("/");
        const segments = [];
        if (!this.peekStartsWith("(")) {
          segments.push(this.parseSegment());
        }
        while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
          this.capture("/");
          segments.push(this.parseSegment());
        }
        let children = {};
        if (this.peekStartsWith("/(")) {
          this.capture("/");
          children = this.parseParens(true);
        }
        let res = {};
        if (this.peekStartsWith("(")) {
          res = this.parseParens(false);
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
          res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
      }
      // parse a segment with its matrix parameters
      // ie `name;k1=v1;k2`
      parseSegment() {
        const path = matchSegments(this.remaining);
        if (path === "" && this.peekStartsWith(";")) {
          throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
      }
      parseMatrixParams() {
        const params = {};
        while (this.consumeOptional(";")) {
          this.parseParam(params);
        }
        return params;
      }
      parseParam(params) {
        const key = matchMatrixKeySegments(this.remaining);
        if (!key) {
          return;
        }
        this.capture(key);
        let value = "";
        if (this.consumeOptional("=")) {
          const valueMatch = matchSegments(this.remaining);
          if (valueMatch) {
            value = valueMatch;
            this.capture(value);
          }
        }
        params[decode(key)] = decode(value);
      }
      // Parse a single query parameter `name[=value]`
      parseQueryParam(params) {
        const key = matchQueryParams(this.remaining);
        if (!key) {
          return;
        }
        this.capture(key);
        let value = "";
        if (this.consumeOptional("=")) {
          const valueMatch = matchUrlQueryParamValue(this.remaining);
          if (valueMatch) {
            value = valueMatch;
            this.capture(value);
          }
        }
        const decodedKey = decodeQuery(key);
        const decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
          let currentVal = params[decodedKey];
          if (!Array.isArray(currentVal)) {
            currentVal = [currentVal];
            params[decodedKey] = currentVal;
          }
          currentVal.push(decodedVal);
        } else {
          params[decodedKey] = decodedVal;
        }
      }
      // parse `(a/b//outlet_name:c/d)`
      parseParens(allowPrimary) {
        const segments = {};
        this.capture("(");
        while (!this.consumeOptional(")") && this.remaining.length > 0) {
          const path = matchSegments(this.remaining);
          const next = this.remaining[path.length];
          if (next !== "/" && next !== ")" && next !== ";") {
            throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
          }
          let outletName = void 0;
          if (path.indexOf(":") > -1) {
            outletName = path.slice(0, path.indexOf(":"));
            this.capture(outletName);
            this.capture(":");
          } else if (allowPrimary) {
            outletName = PRIMARY_OUTLET;
          }
          const children = this.parseChildren();
          segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
          this.consumeOptional("//");
        }
        return segments;
      }
      peekStartsWith(str) {
        return this.remaining.startsWith(str);
      }
      // Consumes the prefix when it is present and returns whether it has been consumed
      consumeOptional(str) {
        if (this.peekStartsWith(str)) {
          this.remaining = this.remaining.substring(str.length);
          return true;
        }
        return false;
      }
      capture(str) {
        if (!this.consumeOptional(str)) {
          throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
        }
      }
    };
    Navigation = class {
      isAbsolute;
      numberOfDoubleDots;
      commands;
      constructor(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
          throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
        }
        const cmdWithOutlet = commands.find(isCommandWithOutlets);
        if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
          throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
        }
      }
      toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
      }
    };
    Position = class {
      segmentGroup;
      processChildren;
      index;
      constructor(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
      }
    };
    IMPERATIVE_NAVIGATION = "imperative";
    (function(EventType2) {
      EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
      EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
      EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
      EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
      EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
      EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
      EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
      EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
      EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
      EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
      EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
      EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
      EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
      EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
      EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
      EventType2[EventType2["Scroll"] = 15] = "Scroll";
      EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
    })(EventType || (EventType = {}));
    RouterEvent = class {
      id;
      url;
      constructor(id, url) {
        this.id = id;
        this.url = url;
      }
    };
    NavigationStart = class extends RouterEvent {
      type = EventType.NavigationStart;
      /**
       * Identifies the call or event that triggered the navigation.
       * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
       *
       * @see {@link NavigationEnd}
       * @see {@link NavigationCancel}
       * @see {@link NavigationError}
       */
      navigationTrigger;
      /**
       * The navigation state that was previously supplied to the `pushState` call,
       * when the navigation is triggered by a `popstate` event. Otherwise null.
       *
       * The state object is defined by `NavigationExtras`, and contains any
       * developer-defined state value, as well as a unique ID that
       * the router assigns to every router transition/navigation.
       *
       * From the perspective of the router, the router never "goes back".
       * When the user clicks on the back button in the browser,
       * a new navigation ID is created.
       *
       * Use the ID in this previous-state object to differentiate between a newly created
       * state and one returned to by a `popstate` event, so that you can restore some
       * remembered state, such as scroll position.
       *
       */
      restoredState;
      constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
        super(id, url);
        this.navigationTrigger = navigationTrigger;
        this.restoredState = restoredState;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
      }
    };
    NavigationEnd = class extends RouterEvent {
      urlAfterRedirects;
      type = EventType.NavigationEnd;
      constructor(id, url, urlAfterRedirects) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
      }
    };
    (function(NavigationCancellationCode2) {
      NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
      NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
      NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
      NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
      NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
    })(NavigationCancellationCode || (NavigationCancellationCode = {}));
    (function(NavigationSkippedCode2) {
      NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
      NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
    })(NavigationSkippedCode || (NavigationSkippedCode = {}));
    NavigationCancel = class extends RouterEvent {
      reason;
      code;
      type = EventType.NavigationCancel;
      constructor(id, url, reason, code) {
        super(id, url);
        this.reason = reason;
        this.code = code;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
      }
    };
    NavigationSkipped = class extends RouterEvent {
      reason;
      code;
      type = EventType.NavigationSkipped;
      constructor(id, url, reason, code) {
        super(id, url);
        this.reason = reason;
        this.code = code;
      }
    };
    NavigationError = class extends RouterEvent {
      error;
      target;
      type = EventType.NavigationError;
      constructor(id, url, error, target) {
        super(id, url);
        this.error = error;
        this.target = target;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
      }
    };
    RoutesRecognized = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.RoutesRecognized;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      /** @docsNotRequired */
      toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    GuardsCheckStart = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.GuardsCheckStart;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    GuardsCheckEnd = class extends RouterEvent {
      urlAfterRedirects;
      state;
      shouldActivate;
      type = EventType.GuardsCheckEnd;
      constructor(id, url, urlAfterRedirects, state, shouldActivate) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
        this.shouldActivate = shouldActivate;
      }
      toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
      }
    };
    ResolveStart = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.ResolveStart;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    ResolveEnd = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.ResolveEnd;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    RouteConfigLoadStart = class {
      route;
      type = EventType.RouteConfigLoadStart;
      constructor(route) {
        this.route = route;
      }
      toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`;
      }
    };
    RouteConfigLoadEnd = class {
      route;
      type = EventType.RouteConfigLoadEnd;
      constructor(route) {
        this.route = route;
      }
      toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`;
      }
    };
    ChildActivationStart = class {
      snapshot;
      type = EventType.ChildActivationStart;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ChildActivationStart(path: '${path}')`;
      }
    };
    ChildActivationEnd = class {
      snapshot;
      type = EventType.ChildActivationEnd;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ChildActivationEnd(path: '${path}')`;
      }
    };
    ActivationStart = class {
      snapshot;
      type = EventType.ActivationStart;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ActivationStart(path: '${path}')`;
      }
    };
    ActivationEnd = class {
      snapshot;
      type = EventType.ActivationEnd;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ActivationEnd(path: '${path}')`;
      }
    };
    BeforeActivateRoutes = class {
    };
    RedirectRequest = class {
      url;
      navigationBehaviorOptions;
      constructor(url, navigationBehaviorOptions) {
        this.url = url;
        this.navigationBehaviorOptions = navigationBehaviorOptions;
      }
    };
    OutletContext = class {
      rootInjector;
      outlet = null;
      route = null;
      children;
      attachRef = null;
      get injector() {
        return getClosestRouteInjector(this.route?.snapshot) ?? this.rootInjector;
      }
      constructor(rootInjector) {
        this.rootInjector = rootInjector;
        this.children = new ChildrenOutletContexts(this.rootInjector);
      }
    };
    ChildrenOutletContexts = class _ChildrenOutletContexts {
      rootInjector;
      // contexts for child outlets, by name.
      contexts = /* @__PURE__ */ new Map();
      /** @docs-private */
      constructor(rootInjector) {
        this.rootInjector = rootInjector;
      }
      /** Called when a `RouterOutlet` directive is instantiated */
      onChildOutletCreated(childName, outlet) {
        const context = this.getOrCreateContext(childName);
        context.outlet = outlet;
        this.contexts.set(childName, context);
      }
      /**
       * Called when a `RouterOutlet` directive is destroyed.
       * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
       * re-created later.
       */
      onChildOutletDestroyed(childName) {
        const context = this.getContext(childName);
        if (context) {
          context.outlet = null;
          context.attachRef = null;
        }
      }
      /**
       * Called when the corresponding route is deactivated during navigation.
       * Because the component get destroyed, all children outlet are destroyed.
       */
      onOutletDeactivated() {
        const contexts = this.contexts;
        this.contexts = /* @__PURE__ */ new Map();
        return contexts;
      }
      onOutletReAttached(contexts) {
        this.contexts = contexts;
      }
      getOrCreateContext(childName) {
        let context = this.getContext(childName);
        if (!context) {
          context = new OutletContext(this.rootInjector);
          this.contexts.set(childName, context);
        }
        return context;
      }
      getContext(childName) {
        return this.contexts.get(childName) || null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _ChildrenOutletContexts, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _ChildrenOutletContexts, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: ChildrenOutletContexts, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    Tree = class {
      /** @internal */
      _root;
      constructor(root) {
        this._root = root;
      }
      get root() {
        return this._root.value;
      }
      /**
       * @internal
       */
      parent(t) {
        const p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
      }
      /**
       * @internal
       */
      children(t) {
        const n = findNode(t, this._root);
        return n ? n.children.map((t2) => t2.value) : [];
      }
      /**
       * @internal
       */
      firstChild(t) {
        const n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
      }
      /**
       * @internal
       */
      siblings(t) {
        const p = findPath(t, this._root);
        if (p.length < 2)
          return [];
        const c = p[p.length - 2].children.map((c2) => c2.value);
        return c.filter((cc) => cc !== t);
      }
      /**
       * @internal
       */
      pathFromRoot(t) {
        return findPath(t, this._root).map((s) => s.value);
      }
    };
    TreeNode = class {
      value;
      children;
      constructor(value, children) {
        this.value = value;
        this.children = children;
      }
      toString() {
        return `TreeNode(${this.value})`;
      }
    };
    RouterState = class extends Tree {
      snapshot;
      /** @internal */
      constructor(root, snapshot) {
        super(root);
        this.snapshot = snapshot;
        setRouterState(this, root);
      }
      toString() {
        return this.snapshot.toString();
      }
    };
    ActivatedRoute = class {
      urlSubject;
      paramsSubject;
      queryParamsSubject;
      fragmentSubject;
      dataSubject;
      outlet;
      component;
      /** The current snapshot of this route */
      snapshot;
      /** @internal */
      _futureSnapshot;
      /** @internal */
      _routerState;
      /** @internal */
      _paramMap;
      /** @internal */
      _queryParamMap;
      /** An Observable of the resolved route title */
      title;
      /** An observable of the URL segments matched by this route. */
      url;
      /** An observable of the matrix parameters scoped to this route. */
      params;
      /** An observable of the query parameters shared by all the routes. */
      queryParams;
      /** An observable of the URL fragment shared by all the routes. */
      fragment;
      /** An observable of the static and resolved data of this route. */
      data;
      /** @internal */
      constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
        this.urlSubject = urlSubject;
        this.paramsSubject = paramsSubject;
        this.queryParamsSubject = queryParamsSubject;
        this.fragmentSubject = fragmentSubject;
        this.dataSubject = dataSubject;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
        this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
        this.url = urlSubject;
        this.params = paramsSubject;
        this.queryParams = queryParamsSubject;
        this.fragment = fragmentSubject;
        this.data = dataSubject;
      }
      /** The configuration used to match this route. */
      get routeConfig() {
        return this._futureSnapshot.routeConfig;
      }
      /** The root of the router state. */
      get root() {
        return this._routerState.root;
      }
      /** The parent of this route in the router state tree. */
      get parent() {
        return this._routerState.parent(this);
      }
      /** The first child of this route in the router state tree. */
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      /** The children of this route in the router state tree. */
      get children() {
        return this._routerState.children(this);
      }
      /** The path from the root of the router state tree to this route. */
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      /**
       * An Observable that contains a map of the required and optional parameters
       * specific to the route.
       * The map supports retrieving single and multiple values from the same parameter.
       */
      get paramMap() {
        this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
        return this._paramMap;
      }
      /**
       * An Observable that contains a map of the query parameters available to all routes.
       * The map supports retrieving single and multiple values from the query parameter.
       */
      get queryParamMap() {
        this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
        return this._queryParamMap;
      }
      toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
      }
    };
    ActivatedRouteSnapshot = class {
      url;
      params;
      queryParams;
      fragment;
      data;
      outlet;
      component;
      /** The configuration used to match this route **/
      routeConfig;
      /** @internal */
      _resolve;
      /** @internal */
      _resolvedData;
      /** @internal */
      _routerState;
      /** @internal */
      _paramMap;
      /** @internal */
      _queryParamMap;
      /** The resolved route title */
      get title() {
        return this.data?.[RouteTitleKey];
      }
      /** @internal */
      constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this.routeConfig = routeConfig;
        this._resolve = resolve;
      }
      /** The root of the router state */
      get root() {
        return this._routerState.root;
      }
      /** The parent of this route in the router state tree */
      get parent() {
        return this._routerState.parent(this);
      }
      /** The first child of this route in the router state tree */
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      /** The children of this route in the router state tree */
      get children() {
        return this._routerState.children(this);
      }
      /** The path from the root of the router state tree to this route */
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      get paramMap() {
        this._paramMap ??= convertToParamMap(this.params);
        return this._paramMap;
      }
      get queryParamMap() {
        this._queryParamMap ??= convertToParamMap(this.queryParams);
        return this._queryParamMap;
      }
      toString() {
        const url = this.url.map((segment) => segment.toString()).join("/");
        const matched = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${url}', path:'${matched}')`;
      }
    };
    RouterStateSnapshot = class extends Tree {
      url;
      /** @internal */
      constructor(url, root) {
        super(root);
        this.url = url;
        setRouterState(this, root);
      }
      toString() {
        return serializeNode(this._root);
      }
    };
    ROUTER_OUTLET_DATA = new InjectionToken(ngDevMode ? "RouterOutlet data" : "");
    RouterOutlet = class _RouterOutlet {
      activated = null;
      /** @internal */
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      /**
       * The name of the outlet
       *
       */
      name = PRIMARY_OUTLET;
      activateEvents = new EventEmitter();
      deactivateEvents = new EventEmitter();
      /**
       * Emits an attached component instance when the `RouteReuseStrategy` instructs to re-attach a
       * previously detached subtree.
       **/
      attachEvents = new EventEmitter();
      /**
       * Emits a detached component instance when the `RouteReuseStrategy` instructs to detach the
       * subtree.
       */
      detachEvents = new EventEmitter();
      /**
       * Data that will be provided to the child injector through the `ROUTER_OUTLET_DATA` token.
       *
       * When unset, the value of the token is `undefined` by default.
       */
      routerOutletData = input(void 0);
      parentContexts = inject(ChildrenOutletContexts);
      location = inject(ViewContainerRef);
      changeDetector = inject(ChangeDetectorRef);
      inputBinder = inject(INPUT_BINDER, { optional: true });
      /** @docs-private */
      supportsBindingToComponentInputs = true;
      /** @docs-private */
      ngOnChanges(changes) {
        if (changes["name"]) {
          const { firstChange, previousValue } = changes["name"];
          if (firstChange) {
            return;
          }
          if (this.isTrackedInParentContexts(previousValue)) {
            this.deactivate();
            this.parentContexts.onChildOutletDestroyed(previousValue);
          }
          this.initializeOutletWithName();
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.isTrackedInParentContexts(this.name)) {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(outletName) {
        return this.parentContexts.getContext(outletName)?.outlet === this;
      }
      /** @docs-private */
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        this.parentContexts.onChildOutletCreated(this.name, this);
        if (this.activated) {
          return;
        }
        const context = this.parentContexts.getContext(this.name);
        if (context?.route) {
          if (context.attachRef) {
            this.attach(context.attachRef, context.route);
          } else {
            this.activateWith(context.route, context.injector);
          }
        }
      }
      get isActivated() {
        return !!this.activated;
      }
      /**
       * @returns The currently activated component instance.
       * @throws An error if the outlet is not activated.
       */
      get component() {
        if (!this.activated)
          throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated)
          throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
        return this._activatedRoute;
      }
      get activatedRouteData() {
        if (this._activatedRoute) {
          return this._activatedRoute.snapshot.data;
        }
        return {};
      }
      /**
       * Called when the `RouteReuseStrategy` instructs to detach the subtree
       */
      detach() {
        if (!this.activated)
          throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
        this.location.detach();
        const cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        this.detachEvents.emit(cmp.instance);
        return cmp;
      }
      /**
       * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
       */
      attach(ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
        this.inputBinder?.bindActivatedRouteToOutletComponent(this);
        this.attachEvents.emit(ref.instance);
      }
      deactivate() {
        if (this.activated) {
          const c = this.component;
          this.activated.destroy();
          this.activated = null;
          this._activatedRoute = null;
          this.deactivateEvents.emit(c);
        }
      }
      activateWith(activatedRoute, environmentInjector) {
        if (this.isActivated) {
          throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
        }
        this._activatedRoute = activatedRoute;
        const location = this.location;
        const snapshot = activatedRoute.snapshot;
        const component = snapshot.component;
        const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
        const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
        this.activated = location.createComponent(component, {
          index: location.length,
          injector,
          environmentInjector
        });
        this.changeDetector.markForCheck();
        this.inputBinder?.bindActivatedRouteToOutletComponent(this);
        this.activateEvents.emit(this.activated.instance);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RouterOutlet, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.0.6", type: _RouterOutlet, isStandalone: true, selector: "router-outlet", inputs: { name: { classPropertyName: "name", publicName: "name", isSignal: false, isRequired: false, transformFunction: null }, routerOutletData: { classPropertyName: "routerOutletData", publicName: "routerOutletData", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RouterOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "router-outlet",
        exportAs: "outlet"
      }]
    }], propDecorators: { name: [{
      type: Input
    }], activateEvents: [{
      type: Output,
      args: ["activate"]
    }], deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }], attachEvents: [{
      type: Output,
      args: ["attach"]
    }], detachEvents: [{
      type: Output,
      args: ["detach"]
    }] } });
    OutletInjector = class {
      route;
      childContexts;
      parent;
      outletData;
      constructor(route, childContexts, parent, outletData) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
        this.outletData = outletData;
      }
      get(token, notFoundValue) {
        if (token === ActivatedRoute) {
          return this.route;
        }
        if (token === ChildrenOutletContexts) {
          return this.childContexts;
        }
        if (token === ROUTER_OUTLET_DATA) {
          return this.outletData;
        }
        return this.parent.get(token, notFoundValue);
      }
    };
    INPUT_BINDER = new InjectionToken("");
    RoutedComponentInputBinder = class _RoutedComponentInputBinder {
      outletDataSubscriptions = /* @__PURE__ */ new Map();
      bindActivatedRouteToOutletComponent(outlet) {
        this.unsubscribeFromRouteData(outlet);
        this.subscribeToRouteData(outlet);
      }
      unsubscribeFromRouteData(outlet) {
        this.outletDataSubscriptions.get(outlet)?.unsubscribe();
        this.outletDataSubscriptions.delete(outlet);
      }
      subscribeToRouteData(outlet) {
        const { activatedRoute } = outlet;
        const dataSubscription = combineLatest([
          activatedRoute.queryParams,
          activatedRoute.params,
          activatedRoute.data
        ]).pipe(switchMap(([queryParams, params, data], index) => {
          data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
          if (index === 0) {
            return of(data);
          }
          return Promise.resolve(data);
        })).subscribe((data) => {
          if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
            this.unsubscribeFromRouteData(outlet);
            return;
          }
          const mirror = reflectComponentType(activatedRoute.component);
          if (!mirror) {
            this.unsubscribeFromRouteData(outlet);
            return;
          }
          for (const { templateName } of mirror.inputs) {
            outlet.activatedComponentRef.setInput(templateName, data[templateName]);
          }
        });
        this.outletDataSubscriptions.set(outlet, dataSubscription);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RoutedComponentInputBinder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RoutedComponentInputBinder });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RoutedComponentInputBinder, decorators: [{
      type: Injectable
    }] });
    \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _\u0275EmptyOutletComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.6", type: _\u0275EmptyOutletComponent, isStandalone: true, selector: "ng-component", exportAs: ["emptyRouterOutlet"], ngImport: core_exports, template: `<router-outlet/>`, isInline: true, dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: \u0275EmptyOutletComponent, decorators: [{
      type: Component,
      args: [{
        template: `<router-outlet/>`,
        imports: [RouterOutlet],
        // Used to avoid component ID collisions with user code.
        exportAs: "emptyRouterOutlet"
      }]
    }] });
    RedirectCommand = class {
      redirectTo;
      navigationBehaviorOptions;
      constructor(redirectTo, navigationBehaviorOptions) {
        this.redirectTo = redirectTo;
        this.navigationBehaviorOptions = navigationBehaviorOptions;
      }
    };
    NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
    warnedAboutUnsupportedInputBinding = false;
    activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
      new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
      return t;
    });
    ActivateRoutes = class {
      routeReuseStrategy;
      futureState;
      currState;
      forwardEvent;
      inputBindingEnabled;
      constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
        this.forwardEvent = forwardEvent;
        this.inputBindingEnabled = inputBindingEnabled;
      }
      activate(parentContexts) {
        const futureRoot = this.futureState._root;
        const currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
        advanceActivatedRoute(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentContexts);
      }
      // De-activate the child route that are not re-used for the future state
      deactivateChildRoutes(futureNode, currNode, contexts) {
        const children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach((futureChild) => {
          const childOutletName = futureChild.value.outlet;
          this.deactivateRoutes(futureChild, children[childOutletName], contexts);
          delete children[childOutletName];
        });
        Object.values(children).forEach((v) => {
          this.deactivateRouteAndItsChildren(v, contexts);
        });
      }
      deactivateRoutes(futureNode, currNode, parentContext) {
        const future = futureNode.value;
        const curr = currNode ? currNode.value : null;
        if (future === curr) {
          if (future.component) {
            const context = parentContext.getContext(future.outlet);
            if (context) {
              this.deactivateChildRoutes(futureNode, currNode, context.children);
            }
          } else {
            this.deactivateChildRoutes(futureNode, currNode, parentContext);
          }
        } else {
          if (curr) {
            this.deactivateRouteAndItsChildren(currNode, parentContext);
          }
        }
      }
      deactivateRouteAndItsChildren(route, parentContexts) {
        if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
          this.detachAndStoreRouteSubtree(route, parentContexts);
        } else {
          this.deactivateRouteAndOutlet(route, parentContexts);
        }
      }
      detachAndStoreRouteSubtree(route, parentContexts) {
        const context = parentContexts.getContext(route.value.outlet);
        const contexts = context && route.value.component ? context.children : parentContexts;
        const children = nodeChildrenAsMap(route);
        for (const treeNode of Object.values(children)) {
          this.deactivateRouteAndItsChildren(treeNode, contexts);
        }
        if (context && context.outlet) {
          const componentRef = context.outlet.detach();
          const contexts2 = context.children.onOutletDeactivated();
          this.routeReuseStrategy.store(route.value.snapshot, { componentRef, route, contexts: contexts2 });
        }
      }
      deactivateRouteAndOutlet(route, parentContexts) {
        const context = parentContexts.getContext(route.value.outlet);
        const contexts = context && route.value.component ? context.children : parentContexts;
        const children = nodeChildrenAsMap(route);
        for (const treeNode of Object.values(children)) {
          this.deactivateRouteAndItsChildren(treeNode, contexts);
        }
        if (context) {
          if (context.outlet) {
            context.outlet.deactivate();
            context.children.onOutletDeactivated();
          }
          context.attachRef = null;
          context.route = null;
        }
      }
      activateChildRoutes(futureNode, currNode, contexts) {
        const children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach((c) => {
          this.activateRoutes(c, children[c.value.outlet], contexts);
          this.forwardEvent(new ActivationEnd(c.value.snapshot));
        });
        if (futureNode.children.length) {
          this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
        }
      }
      activateRoutes(futureNode, currNode, parentContexts) {
        const future = futureNode.value;
        const curr = currNode ? currNode.value : null;
        advanceActivatedRoute(future);
        if (future === curr) {
          if (future.component) {
            const context = parentContexts.getOrCreateContext(future.outlet);
            this.activateChildRoutes(futureNode, currNode, context.children);
          } else {
            this.activateChildRoutes(futureNode, currNode, parentContexts);
          }
        } else {
          if (future.component) {
            const context = parentContexts.getOrCreateContext(future.outlet);
            if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
              const stored = this.routeReuseStrategy.retrieve(future.snapshot);
              this.routeReuseStrategy.store(future.snapshot, null);
              context.children.onOutletReAttached(stored.contexts);
              context.attachRef = stored.componentRef;
              context.route = stored.route.value;
              if (context.outlet) {
                context.outlet.attach(stored.componentRef, stored.route.value);
              }
              advanceActivatedRoute(stored.route.value);
              this.activateChildRoutes(futureNode, null, context.children);
            } else {
              context.attachRef = null;
              context.route = future;
              if (context.outlet) {
                context.outlet.activateWith(future, context.injector);
              }
              this.activateChildRoutes(futureNode, null, context.children);
            }
          } else {
            this.activateChildRoutes(futureNode, null, parentContexts);
          }
        }
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const context = parentContexts.getOrCreateContext(future.outlet);
          const outlet = context.outlet;
          if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
            console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
            warnedAboutUnsupportedInputBinding = true;
          }
        }
      }
    };
    CanActivate = class {
      path;
      route;
      constructor(path) {
        this.path = path;
        this.route = this.path[this.path.length - 1];
      }
    };
    CanDeactivate = class {
      component;
      route;
      constructor(component, route) {
        this.component = component;
        this.route = route;
      }
    };
    INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
    NoMatch = class {
      segmentGroup;
      constructor(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
      }
    };
    AbsoluteRedirect = class extends Error {
      urlTree;
      constructor(urlTree) {
        super();
        this.urlTree = urlTree;
      }
    };
    ApplyRedirects = class {
      urlSerializer;
      urlTree;
      constructor(urlSerializer, urlTree) {
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
      }
      lineralizeSegments(route, urlTree) {
        let res = [];
        let c = urlTree.root;
        while (true) {
          res = res.concat(c.segments);
          if (c.numberOfChildren === 0) {
            return of(res);
          }
          if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
            return namedOutletsRedirect(`${route.redirectTo}`);
          }
          c = c.children[PRIMARY_OUTLET];
        }
      }
      applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
        return getRedirectResult(redirectTo, currentSnapshot, injector).pipe(map((redirect) => {
          if (redirect instanceof UrlTree) {
            throw new AbsoluteRedirect(redirect);
          }
          const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
          if (redirect[0] === "/") {
            throw new AbsoluteRedirect(newTree);
          }
          return newTree;
        }));
      }
      applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
        const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
      }
      createQueryParams(redirectToParams, actualParams) {
        const res = {};
        Object.entries(redirectToParams).forEach(([k, v]) => {
          const copySourceValue = typeof v === "string" && v[0] === ":";
          if (copySourceValue) {
            const sourceName = v.substring(1);
            res[k] = actualParams[sourceName];
          } else {
            res[k] = v;
          }
        });
        return res;
      }
      createSegmentGroup(redirectTo, group, segments, posParams) {
        const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        let children = {};
        Object.entries(group.children).forEach(([name, child]) => {
          children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new UrlSegmentGroup(updatedSegments, children);
      }
      createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
        return redirectToSegments.map((s) => s.path[0] === ":" ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
      }
      findPosParam(redirectTo, redirectToUrlSegment, posParams) {
        const pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
          throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
        return pos;
      }
      findOrReturn(redirectToUrlSegment, actualSegments) {
        let idx = 0;
        for (const s of actualSegments) {
          if (s.path === redirectToUrlSegment.path) {
            actualSegments.splice(idx);
            return s;
          }
          idx++;
        }
        return redirectToUrlSegment;
      }
    };
    noMatch = {
      matched: false,
      consumedSegments: [],
      remainingSegments: [],
      parameters: {},
      positionalParamSegments: {}
    };
    NoLeftoversInUrl = class {
    };
    MAX_ALLOWED_REDIRECTS = 31;
    Recognizer = class {
      injector;
      configLoader;
      rootComponentType;
      config;
      urlTree;
      paramsInheritanceStrategy;
      urlSerializer;
      applyRedirects;
      absoluteRedirectCount = 0;
      allowRedirects = true;
      constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
        this.injector = injector;
        this.configLoader = configLoader;
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.paramsInheritanceStrategy = paramsInheritanceStrategy;
        this.urlSerializer = urlSerializer;
        this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
      }
      noMatchError(e) {
        return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
      }
      recognize() {
        const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
        return this.match(rootSegmentGroup).pipe(map(({ children, rootSnapshot }) => {
          const rootNode = new TreeNode(rootSnapshot, children);
          const routeState = new RouterStateSnapshot("", rootNode);
          const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
          tree2.queryParams = this.urlTree.queryParams;
          routeState.url = this.urlSerializer.serialize(tree2);
          return { state: routeState, tree: tree2 };
        }));
      }
      match(rootSegmentGroup) {
        const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {});
        return this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot).pipe(map((children) => {
          return { children, rootSnapshot };
        }), catchError((e) => {
          if (e instanceof AbsoluteRedirect) {
            this.urlTree = e.urlTree;
            return this.match(e.urlTree.root);
          }
          if (e instanceof NoMatch) {
            throw this.noMatchError(e);
          }
          throw e;
        }));
      }
      processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(injector, config, segmentGroup, parentRoute);
        }
        return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute).pipe(map((child) => child instanceof TreeNode ? [child] : []));
      }
      /**
       * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
       * we cannot find a match for _any_ of the children.
       *
       * @param config - The `Routes` to match against
       * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
       *     config.
       */
      processChildren(injector, config, segmentGroup, parentRoute) {
        const childOutlets = [];
        for (const child of Object.keys(segmentGroup.children)) {
          if (child === "primary") {
            childOutlets.unshift(child);
          } else {
            childOutlets.push(child);
          }
        }
        return from(childOutlets).pipe(concatMap((childOutlet) => {
          const child = segmentGroup.children[childOutlet];
          const sortedConfig = sortByMatchingOutlets(config, childOutlet);
          return this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
        }), scan((children, outletChildren) => {
          children.push(...outletChildren);
          return children;
        }), defaultIfEmpty(null), last(), mergeMap((children) => {
          if (children === null)
            return noMatch$1(segmentGroup);
          const mergedChildren = mergeEmptyPathMatches(children);
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            checkOutletNameUniqueness(mergedChildren);
          }
          sortActivatedRouteSnapshots(mergedChildren);
          return of(mergedChildren);
        }));
      }
      processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
        return from(routes).pipe(concatMap((r) => {
          return this.processSegmentAgainstRoute(r._injector ?? injector, routes, r, segmentGroup, segments, outlet, allowRedirects, parentRoute).pipe(catchError((e) => {
            if (e instanceof NoMatch) {
              return of(null);
            }
            throw e;
          }));
        }), first((x) => !!x), catchError((e) => {
          if (isEmptyError(e)) {
            if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
              return of(new NoLeftoversInUrl());
            }
            return noMatch$1(segmentGroup);
          }
          throw e;
        }));
      }
      processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
        if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
          return noMatch$1(rawSegment);
        }
        if (route.redirectTo === void 0) {
          return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
        }
        if (this.allowRedirects && allowRedirects) {
          return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet, parentRoute);
        }
        return noMatch$1(rawSegment);
      }
      expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet, parentRoute) {
        const { matched, parameters, consumedSegments, positionalParamSegments, remainingSegments } = match(segmentGroup, route, segments);
        if (!matched)
          return noMatch$1(segmentGroup);
        if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
          this.absoluteRedirectCount++;
          if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
            if (ngDevMode) {
              throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
            }
            this.allowRedirects = false;
          }
        }
        const currentSnapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const inherited = getInherited(currentSnapshot, parentRoute, this.paramsInheritanceStrategy);
        currentSnapshot.params = Object.freeze(inherited.params);
        currentSnapshot.data = Object.freeze(inherited.data);
        const newTree$ = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, currentSnapshot, injector);
        return newTree$.pipe(switchMap((newTree) => this.applyRedirects.lineralizeSegments(route, newTree)), mergeMap((newSegments) => {
          return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
        }));
      }
      matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
        const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
        if (route.path === "**") {
          rawSegment.children = {};
        }
        return matchResult.pipe(switchMap((result) => {
          if (!result.matched) {
            return noMatch$1(rawSegment);
          }
          injector = route._injector ?? injector;
          return this.getChildConfig(injector, route, segments).pipe(switchMap(({ routes: childConfig }) => {
            const childInjector = route._loadedInjector ?? injector;
            const { parameters, consumedSegments, remainingSegments } = result;
            const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
            const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
            snapshot.params = Object.freeze(inherited.params);
            snapshot.data = Object.freeze(inherited.data);
            const { segmentGroup, slicedSegments } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
              return this.processChildren(childInjector, childConfig, segmentGroup, snapshot).pipe(map((children) => {
                return new TreeNode(snapshot, children);
              }));
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
              return of(new TreeNode(snapshot, []));
            }
            const matchedOnOutlet = getOutlet(route) === outlet;
            return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot).pipe(map((child) => {
              return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
            }));
          }));
        }));
      }
      getChildConfig(injector, route, segments) {
        if (route.children) {
          return of({ routes: route.children, injector });
        }
        if (route.loadChildren) {
          if (route._loadedRoutes !== void 0) {
            return of({ routes: route._loadedRoutes, injector: route._loadedInjector });
          }
          return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
            if (shouldLoadResult) {
              return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
                route._loadedRoutes = cfg.routes;
                route._loadedInjector = cfg.injector;
              }));
            }
            return canLoadFails(route);
          }));
        }
        return of({ routes: [], injector });
      }
    };
    TitleStrategy = class _TitleStrategy {
      /**
       * @returns The `title` of the deepest primary route.
       */
      buildTitle(snapshot) {
        let pageTitle;
        let route = snapshot.root;
        while (route !== void 0) {
          pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
          route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
        }
        return pageTitle;
      }
      /**
       * Given an `ActivatedRouteSnapshot`, returns the final value of the
       * `Route.title` property, which can either be a static string or a resolved value.
       */
      getResolvedTitleForRoute(snapshot) {
        return snapshot.data[RouteTitleKey];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _TitleStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _TitleStrategy, providedIn: "root", useFactory: () => inject(DefaultTitleStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: TitleStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(DefaultTitleStrategy) }]
    }] });
    DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
      title;
      constructor(title) {
        super();
        this.title = title;
      }
      /**
       * Sets the title of the browser to the given value.
       *
       * @param title The `pageTitle` from the deepest primary route.
       */
      updateTitle(snapshot) {
        const title = this.buildTitle(snapshot);
        if (title !== void 0) {
          this.title.setTitle(title);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultTitleStrategy, deps: [{ token: Title }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultTitleStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: DefaultTitleStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: Title }] });
    ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
      providedIn: "root",
      factory: () => ({})
    });
    ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
    RouterConfigLoader = class _RouterConfigLoader {
      componentLoaders = /* @__PURE__ */ new WeakMap();
      childrenLoaders = /* @__PURE__ */ new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = inject(Compiler);
      loadComponent(route) {
        if (this.componentLoaders.get(route)) {
          return this.componentLoaders.get(route);
        } else if (route._loadedComponent) {
          return of(route._loadedComponent);
        }
        if (this.onLoadStartListener) {
          this.onLoadStartListener(route);
        }
        const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(map(maybeUnwrapDefaultExport), tap((component) => {
          if (this.onLoadEndListener) {
            this.onLoadEndListener(route);
          }
          (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
          route._loadedComponent = component;
        }), finalize(() => {
          this.componentLoaders.delete(route);
        }));
        const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
        this.componentLoaders.set(route, loader);
        return loader;
      }
      loadChildren(parentInjector, route) {
        if (this.childrenLoaders.get(route)) {
          return this.childrenLoaders.get(route);
        } else if (route._loadedRoutes) {
          return of({ routes: route._loadedRoutes, injector: route._loadedInjector });
        }
        if (this.onLoadStartListener) {
          this.onLoadStartListener(route);
        }
        const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
        const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
          this.childrenLoaders.delete(route);
        }));
        const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
        this.childrenLoaders.set(route, loader);
        return loader;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RouterConfigLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RouterConfigLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RouterConfigLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    UrlHandlingStrategy = class _UrlHandlingStrategy {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _UrlHandlingStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _UrlHandlingStrategy, providedIn: "root", useFactory: () => inject(DefaultUrlHandlingStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: UrlHandlingStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(DefaultUrlHandlingStrategy) }]
    }] });
    DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
      shouldProcessUrl(url) {
        return true;
      }
      extract(url) {
        return url;
      }
      merge(newUrlPart, wholeUrl) {
        return newUrlPart;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultUrlHandlingStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultUrlHandlingStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: DefaultUrlHandlingStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
    VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
    NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
    NavigationTransitions = class _NavigationTransitions {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      /**
       * These events are used to communicate back to the Router about the state of the transition. The
       * Router wants to respond to these events in various ways. Because the `NavigationTransition`
       * class is not public, this event subject is not publicly exposed.
       */
      events = new Subject();
      /**
       * Used to abort the current transition with an error.
       */
      transitionAbortWithErrorSubject = new Subject();
      configLoader = inject(RouterConfigLoader);
      environmentInjector = inject(EnvironmentInjector);
      destroyRef = inject(DestroyRef);
      urlSerializer = inject(UrlSerializer);
      rootContexts = inject(ChildrenOutletContexts);
      location = inject(Location);
      inputBindingEnabled = inject(INPUT_BINDER, { optional: true }) !== null;
      titleStrategy = inject(TitleStrategy);
      options = inject(ROUTER_CONFIGURATION, { optional: true }) || {};
      paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
      urlHandlingStrategy = inject(UrlHandlingStrategy);
      createViewTransition = inject(CREATE_VIEW_TRANSITION, { optional: true });
      navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, { optional: true });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      /**
       * Hook that enables you to pause navigation after the preactivation phase.
       * Used by `RouterModule`.
       *
       * @internal
       */
      afterPreactivation = () => of(void 0);
      /** @internal */
      rootComponentType = null;
      destroyed = false;
      constructor() {
        const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
        const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
        this.configLoader.onLoadEndListener = onLoadEnd;
        this.configLoader.onLoadStartListener = onLoadStart;
        this.destroyRef.onDestroy(() => {
          this.destroyed = true;
        });
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(request) {
        const id = ++this.navigationId;
        this.transitions?.next(__spreadProps(__spreadValues({}, request), {
          extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
          targetSnapshot: null,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
          abortController: new AbortController(),
          id
        }));
      }
      setupNavigations(router) {
        this.transitions = new BehaviorSubject(null);
        return this.transitions.pipe(
          filter((t) => t !== null),
          // Using switchMap so we cancel executing navigations when a new one comes in
          switchMap((overallTransitionState) => {
            let completedOrAborted = false;
            return of(overallTransitionState).pipe(
              switchMap((t) => {
                if (this.navigationId > overallTransitionState.id) {
                  const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
                  this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
                  return EMPTY;
                }
                this.currentTransition = overallTransitionState;
                this.currentNavigation = {
                  id: t.id,
                  initialUrl: t.rawUrl,
                  extractedUrl: t.extractedUrl,
                  targetBrowserUrl: typeof t.extras.browserUrl === "string" ? this.urlSerializer.parse(t.extras.browserUrl) : t.extras.browserUrl,
                  trigger: t.source,
                  extras: t.extras,
                  previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                    previousNavigation: null
                  }),
                  abort: () => t.abortController.abort()
                };
                const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
                const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
                if (!urlTransition && onSameUrlNavigation !== "reload") {
                  const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
                  this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
                  t.resolve(false);
                  return EMPTY;
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
                  return of(t).pipe(
                    // Fire NavigationStart event
                    switchMap((t2) => {
                      this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                      if (t2.id !== this.navigationId) {
                        return EMPTY;
                      }
                      return Promise.resolve(t2);
                    }),
                    // Recognize
                    recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                    // Update URL if in `eager` update mode
                    tap((t2) => {
                      overallTransitionState.targetSnapshot = t2.targetSnapshot;
                      overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                      this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
                        finalUrl: t2.urlAfterRedirects
                      });
                      const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                      this.events.next(routesRecognized);
                    })
                  );
                } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
                  const { id, extractedUrl, source, restoredState, extras } = t;
                  const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
                  this.events.next(navStart);
                  const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
                  this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                    targetSnapshot,
                    urlAfterRedirects: extractedUrl,
                    extras: __spreadProps(__spreadValues({}, extras), { skipLocationChange: false, replaceUrl: false })
                  });
                  this.currentNavigation.finalUrl = extractedUrl;
                  return of(overallTransitionState);
                } else {
                  const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
                  this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
                  t.resolve(false);
                  return EMPTY;
                }
              }),
              // --- GUARDS ---
              tap((t) => {
                const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
                this.events.next(guardsStart);
              }),
              map((t) => {
                this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                  guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
                });
                return overallTransitionState;
              }),
              checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
              tap((t) => {
                overallTransitionState.guardsResult = t.guardsResult;
                if (t.guardsResult && typeof t.guardsResult !== "boolean") {
                  throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
                }
                const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                this.events.next(guardsEnd);
              }),
              filter((t) => {
                if (!t.guardsResult) {
                  this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
                  return false;
                }
                return true;
              }),
              // --- RESOLVE ---
              switchTap((t) => {
                if (t.guards.canActivateChecks.length === 0) {
                  return void 0;
                }
                return of(t).pipe(tap((t2) => {
                  const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(resolveStart);
                }), switchMap((t2) => {
                  let dataResolved = false;
                  return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                    next: () => dataResolved = true,
                    complete: () => {
                      if (!dataResolved) {
                        this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                      }
                    }
                  }));
                }), tap((t2) => {
                  const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(resolveEnd);
                }));
              }),
              // --- LOAD COMPONENTS ---
              switchTap((t) => {
                const loadComponents = (route) => {
                  const loaders = [];
                  if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
                    loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe(tap((loadedComponent) => {
                      route.component = loadedComponent;
                    }), map(() => void 0)));
                  }
                  for (const child of route.children) {
                    loaders.push(...loadComponents(child));
                  }
                  return loaders;
                };
                return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
              }),
              switchTap(() => this.afterPreactivation()),
              switchMap(() => {
                const { currentSnapshot, targetSnapshot } = overallTransitionState;
                const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
                return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
              }),
              map((t) => {
                const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), { targetRouterState });
                this.currentNavigation.targetRouterState = targetRouterState;
                return overallTransitionState;
              }),
              tap(() => {
                this.events.next(new BeforeActivateRoutes());
              }),
              activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
              // Ensure that if some observable used to drive the transition doesn't
              // complete, the navigation still finalizes This should never happen, but
              // this is done as a safety measure to avoid surfacing this error (#49567).
              take(1),
              takeUntil(new Observable((subscriber) => {
                const abortSignal = overallTransitionState.abortController.signal;
                const handler = () => subscriber.next();
                abortSignal.addEventListener("abort", handler);
                return () => abortSignal.removeEventListener("abort", handler);
              }).pipe(
                // Ignore aborts if we are already completed, canceled, or are in the activation stage (we have targetRouterState)
                filter(() => !completedOrAborted && !overallTransitionState.targetRouterState),
                tap(() => {
                  this.cancelNavigationTransition(overallTransitionState, overallTransitionState.abortController.signal.reason + "", NavigationCancellationCode.Aborted);
                })
              )),
              tap({
                next: (t) => {
                  completedOrAborted = true;
                  this.lastSuccessfulNavigation = this.currentNavigation;
                  this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
                  this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
                  t.resolve(true);
                },
                complete: () => {
                  completedOrAborted = true;
                }
              }),
              // There used to be a lot more logic happening directly within the
              // transition Observable. Some of this logic has been refactored out to
              // other places but there may still be errors that happen there. This gives
              // us a way to cancel the transition from the outside. This may also be
              // required in the future to support something like the abort signal of the
              // Navigation API where the navigation gets aborted from outside the
              // transition.
              takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
                throw err;
              }))),
              finalize(() => {
                if (!completedOrAborted) {
                  const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
                  this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
                }
                if (this.currentTransition?.id === overallTransitionState.id) {
                  this.currentNavigation = null;
                  this.currentTransition = null;
                }
              }),
              catchError((e) => {
                if (this.destroyed) {
                  overallTransitionState.resolve(false);
                  return EMPTY;
                }
                completedOrAborted = true;
                if (isNavigationCancelingError(e)) {
                  this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
                  if (!isRedirectingNavigationCancelingError(e)) {
                    overallTransitionState.resolve(false);
                  } else {
                    this.events.next(new RedirectRequest(e.url, e.navigationBehaviorOptions));
                  }
                } else {
                  const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0);
                  try {
                    const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
                    if (navigationErrorHandlerResult instanceof RedirectCommand) {
                      const { message, cancellationCode } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
                      this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
                      this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
                    } else {
                      this.events.next(navigationError);
                      throw e;
                    }
                  } catch (ee) {
                    if (this.options.resolveNavigationPromiseOnError) {
                      overallTransitionState.resolve(false);
                    } else {
                      overallTransitionState.reject(ee);
                    }
                  }
                }
                return EMPTY;
              })
            );
          })
        );
      }
      cancelNavigationTransition(t, reason, code) {
        const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
        this.events.next(navCancel);
        t.resolve(false);
      }
      /**
       * @returns Whether we're navigating to somewhere that is not what the Router is
       * currently set to.
       */
      isUpdatingInternalState() {
        return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
      }
      /**
       * @returns Whether we're updating the browser URL to something new (navigation is going
       * to somewhere not displayed in the URL bar and we will update the URL
       * bar if navigation succeeds).
       */
      isUpdatedBrowserUrl() {
        const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
        const targetBrowserUrl = this.currentNavigation?.targetBrowserUrl ?? this.currentNavigation?.extractedUrl;
        return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !this.currentNavigation?.extras.skipLocationChange;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NavigationTransitions, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NavigationTransitions, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NavigationTransitions, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    RouteReuseStrategy = class _RouteReuseStrategy {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RouteReuseStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RouteReuseStrategy, providedIn: "root", useFactory: () => inject(DefaultRouteReuseStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RouteReuseStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(DefaultRouteReuseStrategy) }]
    }] });
    BaseRouteReuseStrategy = class {
      /**
       * Whether the given route should detach for later reuse.
       * Always returns false for `BaseRouteReuseStrategy`.
       * */
      shouldDetach(route) {
        return false;
      }
      /**
       * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
       */
      store(route, detachedTree) {
      }
      /** Returns `false`, meaning the route (and its subtree) is never reattached */
      shouldAttach(route) {
        return false;
      }
      /** Returns `null` because this strategy does not store routes for later re-use. */
      retrieve(route) {
        return null;
      }
      /**
       * Determines if a route should be reused.
       * This strategy returns `true` when the future route config and current route config are
       * identical.
       */
      shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig;
      }
    };
    DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultRouteReuseStrategy, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultRouteReuseStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: DefaultRouteReuseStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    StateManager = class _StateManager {
      urlSerializer = inject(UrlSerializer);
      options = inject(ROUTER_CONFIGURATION, { optional: true }) || {};
      canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
      location = inject(Location);
      urlHandlingStrategy = inject(UrlHandlingStrategy);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new UrlTree();
      /**
       * Returns the currently activated `UrlTree`.
       *
       * This `UrlTree` shows only URLs that the `Router` is configured to handle (through
       * `UrlHandlingStrategy`).
       *
       * The value is set after finding the route config tree to activate but before activating the
       * route.
       */
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      /**
       * Returns a `UrlTree` that is represents what the browser is actually showing.
       *
       * In the life of a navigation transition:
       * 1. When a navigation begins, the raw `UrlTree` is updated to the full URL that's being
       * navigated to.
       * 2. During a navigation, redirects are applied, which might only apply to _part_ of the URL (due
       * to `UrlHandlingStrategy`).
       * 3. Just before activation, the raw `UrlTree` is updated to include the redirects on top of the
       * original raw URL.
       *
       * Note that this is _only_ here to support `UrlHandlingStrategy.extract` and
       * `UrlHandlingStrategy.shouldProcessUrl`. Without those APIs, the current `UrlTree` would not
       * deviated from the raw `UrlTree`.
       *
       * For `extract`, a raw `UrlTree` is needed because `extract` may only return part
       * of the navigation URL. Thus, the current `UrlTree` may only represent _part_ of the browser
       * URL. When a navigation gets cancelled and the router needs to reset the URL or a new navigation
       * occurs, it needs to know the _whole_ browser URL, not just the part handled by
       * `UrlHandlingStrategy`.
       * For `shouldProcessUrl`, when the return is `false`, the router ignores the navigation but
       * still updates the raw `UrlTree` with the assumption that the navigation was caused by the
       * location change listener due to a URL update by the AngularJS router. In this case, the router
       * still need to know what the browser's URL is for future navigations.
       */
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      createBrowserPath({ finalUrl, initialUrl, targetBrowserUrl }) {
        const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
        const url = targetBrowserUrl ?? rawUrl;
        const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
        return path;
      }
      commitTransition({ targetRouterState, finalUrl, initialUrl }) {
        if (finalUrl && targetRouterState) {
          this.currentUrlTree = finalUrl;
          this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
          this.routerState = targetRouterState;
        } else {
          this.rawUrlTree = initialUrl;
        }
      }
      routerState = createEmptyState(null);
      /** Returns the current RouterState. */
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      updateStateMemento() {
        this.stateMemento = this.createStateMemento();
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState
        };
      }
      resetInternalState({ finalUrl }) {
        this.routerState = this.stateMemento.routerState;
        this.currentUrlTree = this.stateMemento.currentUrlTree;
        this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _StateManager, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _StateManager, providedIn: "root", useFactory: () => inject(HistoryStateManager) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: StateManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(HistoryStateManager) }]
    }] });
    HistoryStateManager = class _HistoryStateManager extends StateManager {
      /**
       * The id of the currently active page in the router.
       * Updated to the transition's target id on a successful navigation.
       *
       * This is used to track what page the router last activated. When an attempted navigation fails,
       * the router can then use this to compute how to restore the state back to the previously active
       * page.
       */
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      /**
       * The ɵrouterPageId of whatever page is currently active in the browser history. This is
       * important for computing the target page id for new navigations because we need to ensure each
       * page id in the browser history is 1 more than the previous entry.
       */
      get browserPageId() {
        if (this.canceledNavigationResolution !== "computed") {
          return this.currentPageId;
        }
        return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
      }
      registerNonRouterCurrentEntryChangeListener(listener) {
        return this.location.subscribe((event) => {
          if (event["type"] === "popstate") {
            setTimeout(() => {
              listener(event["url"], event.state, "popstate");
            });
          }
        });
      }
      handleRouterEvent(e, currentTransition) {
        if (e instanceof NavigationStart) {
          this.updateStateMemento();
        } else if (e instanceof NavigationSkipped) {
          this.commitTransition(currentTransition);
        } else if (e instanceof RoutesRecognized) {
          if (this.urlUpdateStrategy === "eager") {
            if (!currentTransition.extras.skipLocationChange) {
              this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
            }
          }
        } else if (e instanceof BeforeActivateRoutes) {
          this.commitTransition(currentTransition);
          if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
            this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
          }
        } else if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.SupersededByNewNavigation && e.code !== NavigationCancellationCode.Redirect) {
          this.restoreHistory(currentTransition);
        } else if (e instanceof NavigationError) {
          this.restoreHistory(currentTransition, true);
        } else if (e instanceof NavigationEnd) {
          this.lastSuccessfulId = e.id;
          this.currentPageId = this.browserPageId;
        }
      }
      setBrowserUrl(path, { extras, id }) {
        const { replaceUrl, state } = extras;
        if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
          const currentBrowserPageId = this.browserPageId;
          const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId));
          this.location.replaceState(path, "", newState);
        } else {
          const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1));
          this.location.go(path, "", newState);
        }
      }
      /**
       * Performs the necessary rollback action to restore the browser URL to the
       * state before the transition.
       */
      restoreHistory(navigation, restoringFromCaughtError = false) {
        if (this.canceledNavigationResolution === "computed") {
          const currentBrowserPageId = this.browserPageId;
          const targetPagePosition = this.currentPageId - currentBrowserPageId;
          if (targetPagePosition !== 0) {
            this.location.historyGo(targetPagePosition);
          } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
            this.resetInternalState(navigation);
            this.resetUrlToCurrentUrlTree();
          } else ;
        } else if (this.canceledNavigationResolution === "replace") {
          if (restoringFromCaughtError) {
            this.resetInternalState(navigation);
          }
          this.resetUrlToCurrentUrlTree();
        }
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
      }
      generateNgRouterState(navigationId, routerPageId) {
        if (this.canceledNavigationResolution === "computed") {
          return { navigationId, \u0275routerPageId: routerPageId };
        }
        return { navigationId };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HistoryStateManager, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _HistoryStateManager, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: HistoryStateManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    exactMatchOptions = {
      paths: "exact",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "exact"
    };
    subsetMatchOptions = {
      paths: "subset",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "subset"
    };
    Router = class _Router {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = false;
      nonRouterCurrentEntryChangeSubscription;
      console = inject(Console);
      stateManager = inject(StateManager);
      options = inject(ROUTER_CONFIGURATION, { optional: true }) || {};
      pendingTasks = inject(PendingTasksInternal);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = inject(NavigationTransitions);
      urlSerializer = inject(UrlSerializer);
      location = inject(Location);
      urlHandlingStrategy = inject(UrlHandlingStrategy);
      injector = inject(EnvironmentInjector);
      /**
       * The private `Subject` type for the public events exposed in the getter. This is used internally
       * to push events to. The separate field allows us to expose separate types in the public API
       * (i.e., an Observable rather than the Subject).
       */
      _events = new Subject();
      /**
       * An event stream for routing events.
       */
      get events() {
        return this._events;
      }
      /**
       * The current state of routing in this NgModule.
       */
      get routerState() {
        return this.stateManager.getRouterState();
      }
      /**
       * True if at least one navigation event has occurred,
       * false otherwise.
       */
      navigated = false;
      /**
       * A strategy for re-using routes.
       *
       * @deprecated Configure using `providers` instead:
       *   `{provide: RouteReuseStrategy, useClass: MyStrategy}`.
       */
      routeReuseStrategy = inject(RouteReuseStrategy);
      /**
       * How to handle a navigation request to the current URL.
       *
       *
       * @deprecated Configure this through `provideRouter` or `RouterModule.forRoot` instead.
       * @see {@link withRouterConfig}
       * @see {@link provideRouter}
       * @see {@link RouterModule}
       */
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = inject(ROUTES, { optional: true })?.flat() ?? [];
      /**
       * Indicates whether the application has opted in to binding Router data to component inputs.
       *
       * This option is enabled by the `withComponentInputBinding` feature of `provideRouter` or
       * `bindToComponentInputs` in the `ExtraOptions` of `RouterModule.forRoot`.
       */
      componentInputBindingEnabled = !!inject(INPUT_BINDER, { optional: true });
      constructor() {
        this.resetConfig(this.config);
        this.navigationTransitions.setupNavigations(this).subscribe({
          error: (e) => {
            this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
          }
        });
        this.subscribeToNavigationEvents();
      }
      eventsSubscription = new Subscription();
      subscribeToNavigationEvents() {
        const subscription = this.navigationTransitions.events.subscribe((e) => {
          try {
            const currentTransition = this.navigationTransitions.currentTransition;
            const currentNavigation = this.navigationTransitions.currentNavigation;
            if (currentTransition !== null && currentNavigation !== null) {
              this.stateManager.handleRouterEvent(e, currentNavigation);
              if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
                this.navigated = true;
              } else if (e instanceof NavigationEnd) {
                this.navigated = true;
              } else if (e instanceof RedirectRequest) {
                const opts = e.navigationBehaviorOptions;
                const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
                const extras = __spreadValues({
                  browserUrl: currentTransition.extras.browserUrl,
                  info: currentTransition.extras.info,
                  skipLocationChange: currentTransition.extras.skipLocationChange,
                  // The URL is already updated at this point if we have 'eager' URL
                  // updates or if the navigation was triggered by the browser (back
                  // button, URL bar, etc). We want to replace that item in history
                  // if the navigation is rejected.
                  replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
                }, opts);
                this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
                  resolve: currentTransition.resolve,
                  reject: currentTransition.reject,
                  promise: currentTransition.promise
                });
              }
            }
            if (isPublicRouterEvent(e)) {
              this._events.next(e);
            }
          } catch (e2) {
            this.navigationTransitions.transitionAbortWithErrorSubject.next(e2);
          }
        });
        this.eventsSubscription.add(subscription);
      }
      /** @internal */
      resetRootComponentType(rootComponentType) {
        this.routerState.root.component = rootComponentType;
        this.navigationTransitions.rootComponentType = rootComponentType;
      }
      /**
       * Sets up the location change listener and performs the initial navigation.
       */
      initialNavigation() {
        this.setUpLocationChangeListener();
        if (!this.navigationTransitions.hasRequestedNavigation) {
          this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
        }
      }
      /**
       * Sets up the location change listener. This listener detects navigations triggered from outside
       * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
       * navigation so that the correct events, guards, etc. are triggered.
       */
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source) => {
          this.navigateToSyncWithBrowser(url, source, state);
        });
      }
      /**
       * Schedules a router navigation to synchronize Router state with the browser state.
       *
       * This is done as a response to a popstate event and the initial navigation. These
       * two scenarios represent times when the browser URL/state has been updated and
       * the Router needs to respond to ensure its internal state matches.
       */
      navigateToSyncWithBrowser(url, source, state) {
        const extras = { replaceUrl: true };
        const restoredState = state?.navigationId ? state : null;
        if (state) {
          const stateCopy = __spreadValues({}, state);
          delete stateCopy.navigationId;
          delete stateCopy.\u0275routerPageId;
          if (Object.keys(stateCopy).length !== 0) {
            extras.state = stateCopy;
          }
        }
        const urlTree = this.parseUrl(url);
        this.scheduleNavigation(urlTree, source, restoredState, extras).catch((e) => {
          this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e);
        });
      }
      /** The current URL. */
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      /**
       * Returns the current `Navigation` object when the router is navigating,
       * and `null` when idle.
       */
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      /**
       * The `Navigation` object of the most recent navigation to succeed and `null` if there
       *     has not been a successful navigation yet.
       */
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      /**
       * Resets the route configuration used for navigation and generating links.
       *
       * @param config The route array for the new configuration.
       *
       * @usageNotes
       *
       * ```ts
       * router.resetConfig([
       *  { path: 'team/:id', component: TeamCmp, children: [
       *    { path: 'simple', component: SimpleCmp },
       *    { path: 'user/:name', component: UserCmp }
       *  ]}
       * ]);
       * ```
       */
      resetConfig(config) {
        (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
        this.config = config.map(standardizeConfig);
        this.navigated = false;
      }
      /** @docs-private */
      ngOnDestroy() {
        this.dispose();
      }
      /** Disposes of the router. */
      dispose() {
        this._events.unsubscribe();
        this.navigationTransitions.complete();
        if (this.nonRouterCurrentEntryChangeSubscription) {
          this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
          this.nonRouterCurrentEntryChangeSubscription = void 0;
        }
        this.disposed = true;
        this.eventsSubscription.unsubscribe();
      }
      /**
       * Appends URL segments to the current URL tree to create a new URL tree.
       *
       * @param commands An array of URL fragments with which to construct the new URL tree.
       * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
       * segments, followed by the parameters for each segment.
       * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
       * property of the options object, if supplied.
       * @param navigationExtras Options that control the navigation strategy.
       * @returns The new URL tree.
       *
       * @usageNotes
       *
       * ```
       * // create /team/33/user/11
       * router.createUrlTree(['/team', 33, 'user', 11]);
       *
       * // create /team/33;expand=true/user/11
       * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
       *
       * // you can collapse static segments like this (this works only with the first passed-in value):
       * router.createUrlTree(['/team/33/user', userId]);
       *
       * // If the first segment can contain slashes, and you do not want the router to split it,
       * // you can do the following:
       * router.createUrlTree([{segmentPath: '/one/two'}]);
       *
       * // create /team/33/(user/11//right:chat)
       * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
       *
       * // remove the right secondary node
       * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
       *
       * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
       *
       * // navigate to /team/33/user/11/details
       * router.createUrlTree(['details'], {relativeTo: route});
       *
       * // navigate to /team/33/user/22
       * router.createUrlTree(['../22'], {relativeTo: route});
       *
       * // navigate to /team/44/user/22
       * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
       *
       * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
       * tree should be created relative to the root.
       * ```
       */
      createUrlTree(commands, navigationExtras = {}) {
        const { relativeTo, queryParams, fragment, queryParamsHandling, preserveFragment } = navigationExtras;
        const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        let q = null;
        switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
            break;
          case "preserve":
            q = this.currentUrlTree.queryParams;
            break;
          default:
            q = queryParams || null;
        }
        if (q !== null) {
          q = this.removeEmptyProps(q);
        }
        let relativeToUrlSegmentGroup;
        try {
          const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
          relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
        } catch (e) {
          if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
            commands = [];
          }
          relativeToUrlSegmentGroup = this.currentUrlTree.root;
        }
        return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
      }
      /**
       * Navigates to a view using an absolute route path.
       *
       * @param url An absolute path for a defined route. The function does not apply any delta to the
       *     current URL.
       * @param extras An object containing properties that modify the navigation strategy.
       *
       * @returns A Promise that resolves to 'true' when navigation succeeds,
       * to 'false' when navigation fails, or is rejected on error.
       *
       * @usageNotes
       *
       * The following calls request navigation to an absolute path.
       *
       * ```ts
       * router.navigateByUrl("/team/33/user/11");
       *
       * // Navigate without updating the URL
       * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
       * ```
       *
       * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
       *
       */
      navigateByUrl(url, extras = {
        skipLocationChange: false
      }) {
        const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
        const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
        return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
      }
      /**
       * Navigate based on the provided array of commands and a starting point.
       * If no starting route is provided, the navigation is absolute.
       *
       * @param commands An array of URL fragments with which to construct the target URL.
       * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
       * segments, followed by the parameters for each segment.
       * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
       * of the options object, if supplied.
       * @param extras An options object that determines how the URL should be constructed or
       *     interpreted.
       *
       * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
       *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
       * not `true`.
       *
       * @usageNotes
       *
       * The following calls request navigation to a dynamic route path relative to the current URL.
       *
       * ```ts
       * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
       *
       * // Navigate without updating the URL, overriding the default behavior
       * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
       * ```
       *
       * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
       *
       */
      navigate(commands, extras = { skipLocationChange: false }) {
        validateCommands(commands);
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
      }
      /** Serializes a `UrlTree` into a string */
      serializeUrl(url) {
        return this.urlSerializer.serialize(url);
      }
      /** Parses a string into a `UrlTree` */
      parseUrl(url) {
        try {
          return this.urlSerializer.parse(url);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(url, matchOptions) {
        let options;
        if (matchOptions === true) {
          options = __spreadValues({}, exactMatchOptions);
        } else if (matchOptions === false) {
          options = __spreadValues({}, subsetMatchOptions);
        } else {
          options = matchOptions;
        }
        if (isUrlTree(url)) {
          return containsTree(this.currentUrlTree, url, options);
        }
        const urlTree = this.parseUrl(url);
        return containsTree(this.currentUrlTree, urlTree, options);
      }
      removeEmptyProps(params) {
        return Object.entries(params).reduce((result, [key, value]) => {
          if (value !== null && value !== void 0) {
            result[key] = value;
          }
          return result;
        }, {});
      }
      scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
        if (this.disposed) {
          return Promise.resolve(false);
        }
        let resolve;
        let reject;
        let promise;
        if (priorPromise) {
          resolve = priorPromise.resolve;
          reject = priorPromise.reject;
          promise = priorPromise.promise;
        } else {
          promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
          });
        }
        const taskId = this.pendingTasks.add();
        afterNextNavigation(this, () => {
          queueMicrotask(() => this.pendingTasks.remove(taskId));
        });
        this.navigationTransitions.handleNavigationRequest({
          source,
          restoredState,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.currentUrlTree,
          rawUrl,
          extras,
          resolve,
          reject,
          promise,
          currentSnapshot: this.routerState.snapshot,
          currentRouterState: this.routerState
        });
        return promise.catch((e) => {
          return Promise.reject(e);
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _Router, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _Router, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: Router, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/router/fesm2022/router.mjs
var VERSION2;
var init_router = __esm({
  "node_modules/@angular/router/fesm2022/router.mjs"() {
    "use strict";
    init_router2();
    init_core();
    VERSION2 = new Version("20.0.6");
  }
});

// angular:jit:template:src\app\components\login\login.component.html
var login_component_default;
var init_login_component = __esm({
  "angular:jit:template:src\\app\\components\\login\\login.component.html"() {
    login_component_default = `<div class="modal-overlay" (click)="onClose()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>Sign In</h2>\r
      <button class="close-btn" (click)="onClose()">&times;</button>\r
    </div>\r
    \r
    <form (ngSubmit)="onSubmit()" class="login-form">\r
      <!-- Error Message -->\r
      <div class="error-message" *ngIf="errorMessage">\r
        {{ errorMessage }}\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="email">Email</label>\r
        <input \r
          type="email" \r
          id="email" \r
          [(ngModel)]="loginData.email" \r
          name="email"\r
          placeholder="Enter your email"\r
          required\r
          [disabled]="isLoading"\r
        >\r
      </div>\r
      \r
      <div class="form-group">\r
        <label for="password">Password</label>\r
        <input \r
          type="password" \r
          id="password" \r
          [(ngModel)]="loginData.password" \r
          name="password"\r
          placeholder="Enter your password"\r
          required\r
          [disabled]="isLoading"\r
        >\r
      </div>\r
      \r
      <button type="submit" class="login-btn" [disabled]="isLoading">\r
        <span *ngIf="isLoading">Signing in...</span>\r
        <span *ngIf="!isLoading">Sign In</span>\r
      </button>\r
      \r
      <div class="form-footer">\r
        <p>Don't have an account? \r
          <a href="#" (click)="onSwitchToSignup(); $event.preventDefault()">Sign up here</a>\r
        </p>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\components\login\login.component.css
var login_component_default2;
var init_login_component2 = __esm({
  "angular:jit:style:src\\app\\components\\login\\login.component.css"() {
    login_component_default2 = "/* src/app/components/login/login.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.modal-content {\n  background: #2a2a2a;\n  border-radius: 15px;\n  padding: 0;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n  transform: scale(1);\n  animation: modalAppear 0.3s ease-out;\n}\n@keyframes modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 25px;\n  border-bottom: 1px solid #3a3a3a;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  border-radius: 15px 15px 0 0;\n}\n.modal-header h2 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #ffffff;\n  font-size: 1.8rem;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.3s ease;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.login-form {\n  padding: 25px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.form-group input {\n  width: 100%;\n  padding: 12px 15px;\n  border: 1px solid #3a3a3a;\n  border-radius: 8px;\n  background: #1a1a1a;\n  color: #ffffff;\n  font-size: 1rem;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n  box-sizing: border-box;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #795e94;\n  box-shadow: 0 0 0 2px rgba(121, 94, 148, 0.2);\n}\n.form-group input::placeholder {\n  color: #888;\n}\n.login-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  margin-bottom: 20px;\n}\n.login-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 20px rgba(121, 94, 148, 0.4);\n}\n.login-btn:active {\n  transform: translateY(0);\n}\n.form-footer {\n  text-align: center;\n  margin-top: 15px;\n}\n.form-footer p {\n  color: #ccc;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.form-footer a {\n  color: #795e94;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.3s ease;\n}\n.form-footer a:hover {\n  color: #9a7bb0;\n}\n.error-message {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n  border-radius: 5px;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n  text-align: center;\n}\n/*# sourceMappingURL=login.component.css.map */\n";
  }
});

// node_modules/@angular/forms/fesm2022/forms.mjs
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? { "min": { "min": min, "actual": control.value } } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? { "max": { "max": max, "actual": control.value } } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? { "required": true } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : { "required": true };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : { "email": true };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? { "minlength": { "requiredLength": minLength, "actualLength": length } } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return { "maxlength": { "requiredLength": maxLength, "actualLength": length } };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : { "pattern": { "requiredPattern": regexStr, "actualValue": value } };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, { emitModelToViewChange: false });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var BaseControlValueAccessor, BuiltInControlValueAccessor, NG_VALUE_ACCESSOR, CHECKBOX_VALUE_ACCESSOR, CheckboxControlValueAccessor, DEFAULT_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NG_VALIDATORS, NG_ASYNC_VALIDATORS, EMAIL_REGEXP, AbstractControlDirective, ControlContainer, NgControl, AbstractControlStatus, ngControlStatusHost, ngGroupStatusHost, NgControlStatus, NgControlStatusGroup, formControlNameExample, formGroupNameExample, formArrayNameExample, ngModelGroupExample, ngModelWithFormGroupExample, disabledAttrWarning, asyncValidatorsDroppedWithOptsWarning, VALID, INVALID, PENDING, DISABLED, ControlEvent, ValueChangeEvent, PristineChangeEvent, TouchedChangeEvent, StatusChangeEvent, FormSubmittedEvent, FormResetEvent, AbstractControl, FormGroup, FormRecord, CALL_SET_DISABLED_STATE, setDisabledStateDefault, formDirectiveProvider$1, resolvedPromise$1, NgForm, FormControl, isFormControl, AbstractFormGroupDirective, modelGroupProvider, NgModelGroup, formControlBinding$1, resolvedPromise, NgModel, \u0275NgNoValidate, NUMBER_VALUE_ACCESSOR, NumberValueAccessor, RADIO_VALUE_ACCESSOR, RadioControlRegistry, RadioControlValueAccessor, RANGE_VALUE_ACCESSOR, RangeValueAccessor, NG_MODEL_WITH_FORM_CONTROL_WARNING, formControlBinding, FormControlDirective, formDirectiveProvider, FormGroupDirective, formGroupNameProvider, FormGroupName, formArrayNameProvider, FormArrayName, controlNameBinding, FormControlName, SELECT_VALUE_ACCESSOR, SelectControlValueAccessor, NgSelectOption, SELECT_MULTIPLE_VALUE_ACCESSOR, SelectMultipleControlValueAccessor, \u0275NgSelectMultipleOption, AbstractValidatorDirective, MAX_VALIDATOR, MaxValidator, MIN_VALIDATOR, MinValidator, REQUIRED_VALIDATOR, CHECKBOX_REQUIRED_VALIDATOR, RequiredValidator, CheckboxRequiredValidator, EMAIL_VALIDATOR, EmailValidator, MIN_LENGTH_VALIDATOR, MinLengthValidator, MAX_LENGTH_VALIDATOR, MaxLengthValidator, PATTERN_VALIDATOR, PatternValidator, SHARED_FORM_DIRECTIVES, TEMPLATE_DRIVEN_DIRECTIVES, REACTIVE_DRIVEN_DIRECTIVES, \u0275InternalFormsSharedModule, FormArray, FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, VERSION3, FormsModule, ReactiveFormsModule;
var init_forms = __esm({
  "node_modules/@angular/forms/fesm2022/forms.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    BaseControlValueAccessor = class _BaseControlValueAccessor {
      _renderer;
      _elementRef;
      /**
       * The registered callback function called when a change or input event occurs on the input
       * element.
       * @docs-private
       */
      onChange = (_) => {
      };
      /**
       * The registered callback function called when a blur event occurs on the input element.
       * @docs-private
       */
      onTouched = () => {
      };
      constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
      }
      /**
       * Helper method that sets a property on a target element using the current Renderer
       * implementation.
       * @docs-private
       */
      setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
      }
      /**
       * Registers a function called when the control is touched.
       * @docs-private
       */
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = fn;
      }
      /**
       * Sets the "disabled" property on the range input element.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.setProperty("disabled", isDisabled);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _BaseControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _BaseControlValueAccessor, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: BaseControlValueAccessor, decorators: [{
      type: Directive
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }] });
    BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _BuiltInControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _BuiltInControlValueAccessor, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: BuiltInControlValueAccessor, decorators: [{
      type: Directive
    }] });
    NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
    CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlValueAccessor),
      multi: true
    };
    CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "checked" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("checked", value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _CheckboxControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _CheckboxControlValueAccessor, isStandalone: false, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]", host: { listeners: { "change": "onChange($any($event.target).checked)", "blur": "onTouched()" } }, providers: [CHECKBOX_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: CheckboxControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
        host: { "(change)": "onChange($any($event.target).checked)", "(blur)": "onTouched()" },
        providers: [CHECKBOX_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true
    };
    COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
    DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
      _compositionMode;
      /** Whether the user is creating a composition string (IME events). */
      _composing = false;
      constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /** @internal */
      _handleInput(value) {
        if (!this._compositionMode || this._compositionMode && !this._composing) {
          this.onChange(value);
        }
      }
      /** @internal */
      _compositionStart() {
        this._composing = true;
      }
      /** @internal */
      _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _DefaultValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _DefaultValueAccessor, isStandalone: false, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]", host: { listeners: { "input": "_handleInput($any($event.target).value)", "blur": "onTouched()", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($any($event.target).value)" } }, providers: [DEFAULT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: DefaultValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          "(input)": "_handleInput($any($event.target).value)",
          "(blur)": "onTouched()",
          "(compositionstart)": "_compositionStart()",
          "(compositionend)": "_compositionEnd($any($event.target).value)"
        },
        providers: [DEFAULT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }] }] });
    NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
    NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
    EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    AbstractControlDirective = class {
      /**
       * @description
       * Reports the value of the control if it is present, otherwise null.
       */
      get value() {
        return this.control ? this.control.value : null;
      }
      /**
       * @description
       * Reports whether the control is valid. A control is considered valid if no
       * validation errors exist with the current value.
       * If the control is not present, null is returned.
       */
      get valid() {
        return this.control ? this.control.valid : null;
      }
      /**
       * @description
       * Reports whether the control is invalid, meaning that an error exists in the input value.
       * If the control is not present, null is returned.
       */
      get invalid() {
        return this.control ? this.control.invalid : null;
      }
      /**
       * @description
       * Reports whether a control is pending, meaning that async validation is occurring and
       * errors are not yet available for the input value. If the control is not present, null is
       * returned.
       */
      get pending() {
        return this.control ? this.control.pending : null;
      }
      /**
       * @description
       * Reports whether the control is disabled, meaning that the control is disabled
       * in the UI and is exempt from validation checks and excluded from aggregate
       * values of ancestor controls. If the control is not present, null is returned.
       */
      get disabled() {
        return this.control ? this.control.disabled : null;
      }
      /**
       * @description
       * Reports whether the control is enabled, meaning that the control is included in ancestor
       * calculations of validity or value. If the control is not present, null is returned.
       */
      get enabled() {
        return this.control ? this.control.enabled : null;
      }
      /**
       * @description
       * Reports the control's validation errors. If the control is not present, null is returned.
       */
      get errors() {
        return this.control ? this.control.errors : null;
      }
      /**
       * @description
       * Reports whether the control is pristine, meaning that the user has not yet changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get pristine() {
        return this.control ? this.control.pristine : null;
      }
      /**
       * @description
       * Reports whether the control is dirty, meaning that the user has changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get dirty() {
        return this.control ? this.control.dirty : null;
      }
      /**
       * @description
       * Reports whether the control is touched, meaning that the user has triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get touched() {
        return this.control ? this.control.touched : null;
      }
      /**
       * @description
       * Reports the validation status of the control. Possible values include:
       * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
       * If the control is not present, null is returned.
       */
      get status() {
        return this.control ? this.control.status : null;
      }
      /**
       * @description
       * Reports whether the control is untouched, meaning that the user has not yet triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get untouched() {
        return this.control ? this.control.untouched : null;
      }
      /**
       * @description
       * Returns a multicasting observable that emits a validation status whenever it is
       * calculated for the control. If the control is not present, null is returned.
       */
      get statusChanges() {
        return this.control ? this.control.statusChanges : null;
      }
      /**
       * @description
       * Returns a multicasting observable of value changes for the control that emits every time the
       * value of the control changes in the UI or programmatically.
       * If the control is not present, null is returned.
       */
      get valueChanges() {
        return this.control ? this.control.valueChanges : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return null;
      }
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       */
      _composedAsyncValidatorFn;
      /**
       * Set of synchronous validators as they were provided while calling `setValidators` function.
       * @internal
       */
      _rawValidators = [];
      /**
       * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
       * function.
       * @internal
       */
      _rawAsyncValidators = [];
      /**
       * Sets synchronous validators for this directive.
       * @internal
       */
      _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
      }
      /**
       * Sets asynchronous validators for this directive.
       * @internal
       */
      _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
      }
      /**
       * @description
       * Synchronous validator function composed of all the synchronous validators registered with this
       * directive.
       */
      get validator() {
        return this._composedValidatorFn || null;
      }
      /**
       * @description
       * Asynchronous validator function composed of all the asynchronous validators registered with
       * this directive.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
      }
      /*
       * The set of callbacks to be invoked when directive instance is being destroyed.
       */
      _onDestroyCallbacks = [];
      /**
       * Internal function to register callbacks that should be invoked
       * when directive instance is being destroyed.
       * @internal
       */
      _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
      }
      /**
       * Internal function to invoke all registered "on destroy" callbacks.
       * Note: calling this function also clears the list of callbacks.
       * @internal
       */
      _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach((fn) => fn());
        this._onDestroyCallbacks = [];
      }
      /**
       * @description
       * Resets the control with the provided value if the control is present.
       */
      reset(value = void 0) {
        if (this.control)
          this.control.reset(value);
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
      }
    };
    ControlContainer = class extends AbstractControlDirective {
      /**
       * @description
       * The name for the control
       */
      name;
      /**
       * @description
       * The top-level form directive for the control.
       */
      get formDirective() {
        return null;
      }
      /**
       * @description
       * The path to this group.
       */
      get path() {
        return null;
      }
    };
    NgControl = class extends AbstractControlDirective {
      /**
       * @description
       * The parent form for the control.
       *
       * @internal
       */
      _parent = null;
      /**
       * @description
       * The name for the control
       */
      name = null;
      /**
       * @description
       * The value accessor for the control
       */
      valueAccessor = null;
    };
    AbstractControlStatus = class {
      _cd;
      constructor(cd) {
        this._cd = cd;
      }
      get isTouched() {
        this._cd?.control?._touched?.();
        return !!this._cd?.control?.touched;
      }
      get isUntouched() {
        return !!this._cd?.control?.untouched;
      }
      get isPristine() {
        this._cd?.control?._pristine?.();
        return !!this._cd?.control?.pristine;
      }
      get isDirty() {
        return !!this._cd?.control?.dirty;
      }
      get isValid() {
        this._cd?.control?._status?.();
        return !!this._cd?.control?.valid;
      }
      get isInvalid() {
        return !!this._cd?.control?.invalid;
      }
      get isPending() {
        return !!this._cd?.control?.pending;
      }
      get isSubmitted() {
        this._cd?._submitted?.();
        return !!this._cd?.submitted;
      }
    };
    ngControlStatusHost = {
      "[class.ng-untouched]": "isUntouched",
      "[class.ng-touched]": "isTouched",
      "[class.ng-pristine]": "isPristine",
      "[class.ng-dirty]": "isDirty",
      "[class.ng-valid]": "isValid",
      "[class.ng-invalid]": "isInvalid",
      "[class.ng-pending]": "isPending"
    };
    ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
      "[class.ng-submitted]": "isSubmitted"
    });
    NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NgControlStatus, deps: [{ token: NgControl, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NgControlStatus, isStandalone: false, selector: "[formControlName],[ngModel],[formControl]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NgControlStatus, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName],[ngModel],[formControl]",
        host: ngControlStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: NgControl, decorators: [{
      type: Self
    }] }] });
    NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NgControlStatusGroup, deps: [{ token: ControlContainer, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NgControlStatusGroup, isStandalone: false, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending", "class.ng-submitted": "isSubmitted" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NgControlStatusGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
        host: ngGroupStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Self
    }] }] });
    formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
    formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
    formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
    ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
    ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
    disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
    asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
    VALID = "VALID";
    INVALID = "INVALID";
    PENDING = "PENDING";
    DISABLED = "DISABLED";
    ControlEvent = class {
    };
    ValueChangeEvent = class extends ControlEvent {
      value;
      source;
      constructor(value, source) {
        super();
        this.value = value;
        this.source = source;
      }
    };
    PristineChangeEvent = class extends ControlEvent {
      pristine;
      source;
      constructor(pristine, source) {
        super();
        this.pristine = pristine;
        this.source = source;
      }
    };
    TouchedChangeEvent = class extends ControlEvent {
      touched;
      source;
      constructor(touched, source) {
        super();
        this.touched = touched;
        this.source = source;
      }
    };
    StatusChangeEvent = class extends ControlEvent {
      status;
      source;
      constructor(status, source) {
        super();
        this.status = status;
        this.source = source;
      }
    };
    FormSubmittedEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    FormResetEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    AbstractControl = class {
      /** @internal */
      _pendingDirty = false;
      /**
       * Indicates that a control has its own pending asynchronous validation in progress.
       * It also stores if the control should emit events when the validation status changes.
       *
       * @internal
       */
      _hasOwnPendingAsyncValidator = null;
      /** @internal */
      _pendingTouched = false;
      /** @internal */
      _onCollectionChange = () => {
      };
      /** @internal */
      _updateOn;
      _parent = null;
      _asyncValidationSubscription;
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       *
       * @internal
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       *
       * @internal
       */
      _composedAsyncValidatorFn;
      /**
       * Synchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setValidators` function
       *  - while calling the setter on the `validator` field (e.g. `control.validator = validatorFn`)
       *
       * @internal
       */
      _rawValidators;
      /**
       * Asynchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setAsyncValidators` function
       *  - while calling the setter on the `asyncValidator` field (e.g. `control.asyncValidator =
       * asyncValidatorFn`)
       *
       * @internal
       */
      _rawAsyncValidators;
      /**
       * The current value of the control.
       *
       * * For a `FormControl`, the current value.
       * * For an enabled `FormGroup`, the values of enabled controls as an object
       * with a key-value pair for each member of the group.
       * * For a disabled `FormGroup`, the values of all controls as an object
       * with a key-value pair for each member of the group.
       * * For a `FormArray`, the values of enabled controls as an array.
       *
       */
      value;
      /**
       * Initialize the AbstractControl instance.
       *
       * @param validators The function or array of functions that is used to determine the validity of
       *     this control synchronously.
       * @param asyncValidators The function or array of functions that is used to determine validity of
       *     this control asynchronously.
       */
      constructor(validators, asyncValidators) {
        this._assignValidators(validators);
        this._assignAsyncValidators(asyncValidators);
      }
      /**
       * Returns the function that is used to determine the validity of this control synchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get validator() {
        return this._composedValidatorFn;
      }
      set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
      }
      /**
       * Returns the function that is used to determine the validity of this control asynchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn;
      }
      set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
      }
      /**
       * The parent control.
       */
      get parent() {
        return this._parent;
      }
      /**
       * The validation status of the control.
       *
       * @see {@link FormControlStatus}
       *
       * These status values are mutually exclusive, so a control cannot be
       * both valid AND invalid or invalid AND disabled.
       */
      get status() {
        return untracked(this.statusReactive);
      }
      set status(v) {
        untracked(() => this.statusReactive.set(v));
      }
      /** @internal */
      _status = computed(() => this.statusReactive());
      statusReactive = signal(void 0);
      /**
       * A control is `valid` when its `status` is `VALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control has passed all of its validation tests,
       * false otherwise.
       */
      get valid() {
        return this.status === VALID;
      }
      /**
       * A control is `invalid` when its `status` is `INVALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control has failed one or more of its validation checks,
       * false otherwise.
       */
      get invalid() {
        return this.status === INVALID;
      }
      /**
       * A control is `pending` when its `status` is `PENDING`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control is in the process of conducting a validation check,
       * false otherwise.
       */
      get pending() {
        return this.status == PENDING;
      }
      /**
       * A control is `disabled` when its `status` is `DISABLED`.
       *
       * Disabled controls are exempt from validation checks and
       * are not included in the aggregate value of their ancestor
       * controls.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control is disabled, false otherwise.
       */
      get disabled() {
        return this.status === DISABLED;
      }
      /**
       * A control is `enabled` as long as its `status` is not `DISABLED`.
       *
       * @returns True if the control has any status other than 'DISABLED',
       * false if the status is 'DISABLED'.
       *
       * @see {@link AbstractControl.status}
       *
       */
      get enabled() {
        return this.status !== DISABLED;
      }
      /**
       * An object containing any errors generated by failing validation,
       * or null if there are no errors.
       */
      errors;
      /**
       * A control is `pristine` if the user has not yet changed
       * the value in the UI.
       *
       * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get pristine() {
        return untracked(this.pristineReactive);
      }
      set pristine(v) {
        untracked(() => this.pristineReactive.set(v));
      }
      /** @internal */
      _pristine = computed(() => this.pristineReactive());
      pristineReactive = signal(true);
      /**
       * A control is `dirty` if the user has changed the value
       * in the UI.
       *
       * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get dirty() {
        return !this.pristine;
      }
      /**
       * True if the control is marked as `touched`.
       *
       * A control is marked `touched` once the user has triggered
       * a `blur` event on it.
       */
      get touched() {
        return untracked(this.touchedReactive);
      }
      set touched(v) {
        untracked(() => this.touchedReactive.set(v));
      }
      /** @internal */
      _touched = computed(() => this.touchedReactive());
      touchedReactive = signal(false);
      /**
       * True if the control has not been marked as touched
       *
       * A control is `untouched` if the user has not yet triggered
       * a `blur` event on it.
       */
      get untouched() {
        return !this.touched;
      }
      /**
       * Exposed as observable, see below.
       *
       * @internal
       */
      _events = new Subject();
      /**
       * A multicasting observable that emits an event every time the state of the control changes.
       * It emits for value, status, pristine or touched changes.
       *
       * **Note**: On value change, the emit happens right after a value of this control is updated. The
       * value of a parent control (for example if this FormControl is a part of a FormGroup) is updated
       * later, so accessing a value of a parent control (using the `value` property) from the callback
       * of this event might result in getting a value that has not been updated yet. Subscribe to the
       * `events` of the parent control instead.
       * For other event types, the events are emitted after the parent control has been updated.
       *
       */
      events = this._events.asObservable();
      /**
       * A multicasting observable that emits an event every time the value of the control changes, in
       * the UI or programmatically. It also emits an event each time you call enable() or disable()
       * without passing along {emitEvent: false} as a function argument.
       *
       * **Note**: the emit happens right after a value of this control is updated. The value of a
       * parent control (for example if this FormControl is a part of a FormGroup) is updated later, so
       * accessing a value of a parent control (using the `value` property) from the callback of this
       * event might result in getting a value that has not been updated yet. Subscribe to the
       * `valueChanges` event of the parent control instead.
       */
      valueChanges;
      /**
       * A multicasting observable that emits an event every time the validation `status` of the control
       * recalculates.
       *
       * @see {@link FormControlStatus}
       * @see {@link AbstractControl.status}
       */
      statusChanges;
      /**
       * Reports the update strategy of the `AbstractControl` (meaning
       * the event on which the control updates itself).
       * Possible values: `'change'` | `'blur'` | `'submit'`
       * Default value: `'change'`
       */
      get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
      }
      /**
       * Sets the synchronous validators that are active on this control.  Calling
       * this overwrites any existing synchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addValidators()` method instead.
       */
      setValidators(validators) {
        this._assignValidators(validators);
      }
      /**
       * Sets the asynchronous validators that are active on this control. Calling this
       * overwrites any existing asynchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addAsyncValidators()` method instead.
       */
      setAsyncValidators(validators) {
        this._assignAsyncValidators(validators);
      }
      /**
       * Add a synchronous validator or validators to this control, without affecting other validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect. If duplicate validator functions
       * are present in the `validators` array, only the first instance would be added to a form
       * control.
       *
       * @param validators The new validator function or functions to add to this control.
       */
      addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
      }
      /**
       * Add an asynchronous validator or validators to this control, without affecting other
       * validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect.
       *
       * @param validators The new asynchronous validator function or functions to add to this control.
       */
      addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Remove a synchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found,
       * it is ignored.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<string | null>('', Validators.required);
       * ctrl.removeValidators(Validators.required);
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<string | null>('', minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       *
       * ctrl.removeValidators(minValidator);
       * ```
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The validator or validators to remove.
       */
      removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
      }
      /**
       * Remove an asynchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found, it
       * is ignored.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The asynchronous validator or validators to remove.
       */
      removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Check whether a synchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<number | null>(0, Validators.required);
       * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<number | null>(0, minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       * ```
       *
       * @param validator The validator to check for presence. Compared by function reference.
       * @returns Whether the provided validator was found on this control.
       */
      hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
      }
      /**
       * Check whether an asynchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @param validator The asynchronous validator to check for presence. Compared by function
       *     reference.
       * @returns Whether the provided asynchronous validator was found on this control.
       */
      hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
      }
      /**
       * Empties out the synchronous validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearValidators() {
        this.validator = null;
      }
      /**
       * Empties out the async validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearAsyncValidators() {
        this.asyncValidator = null;
      }
      markAsTouched(opts = {}) {
        const changed = this.touched === false;
        this.touched = true;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(true, sourceControl));
        }
      }
      /**
       * Marks the control and all its descendant controls as `dirty`.
       * @see {@link markAsDirty()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `PristineChangeEvent` with the `pristine` property being `false`.
       * When false, no events are emitted.
       */
      markAllAsDirty(opts = {}) {
        this.markAsDirty({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsDirty(opts));
      }
      /**
       * Marks the control and all its descendant controls as `touched`.
       * @see {@link markAsTouched()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
       * When false, no events are emitted.
       */
      markAllAsTouched(opts = {}) {
        this.markAsTouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsTouched(opts));
      }
      markAsUntouched(opts = {}) {
        const changed = this.touched === true;
        this.touched = false;
        this._pendingTouched = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsUntouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(false, sourceControl));
        }
      }
      markAsDirty(opts = {}) {
        const changed = this.pristine === true;
        this.pristine = false;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(false, sourceControl));
        }
      }
      markAsPristine(opts = {}) {
        const changed = this.pristine === false;
        this.pristine = true;
        this._pendingDirty = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsPristine({ onlySelf: true, emitEvent: opts.emitEvent });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(true, sourceControl));
        }
      }
      markAsPending(opts = {}) {
        this.status = PENDING;
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      disable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
          control.disable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this._updateValue();
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
      }
      /**
       * Enables the control. This means the control is included in validation checks and
       * the aggregate value of its parent. Its status recalculates based on its value and
       * its validators.
       *
       * By default, if the control has children, all children are enabled.
       *
       * @see {@link AbstractControl.status}
       *
       * @param opts Configure options that control how the control propagates changes and
       * emits events when marked as untouched
       * * `onlySelf`: When true, mark only this control. When false or not supplied,
       * marks all direct ancestors. Default is false.
       * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
       * `valueChanges` and `events`
       * observables emit events with the latest status and value when the control is enabled.
       * When false, no events are emitted.
       */
      enable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
          control.enable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
      }
      _updateAncestors(opts, sourceControl) {
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(opts);
          if (!opts.skipPristineCheck) {
            this._parent._updatePristine({}, sourceControl);
          }
          this._parent._updateTouched({}, sourceControl);
        }
      }
      /**
       * Sets the parent of the control
       *
       * @param parent The new parent.
       */
      setParent(parent) {
        this._parent = parent;
      }
      /**
       * The raw value of this control. For most control implementations, the raw value will include
       * disabled children.
       */
      getRawValue() {
        return this.value;
      }
      updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
          const shouldHaveEmitted = this._cancelExistingSubscription();
          this.errors = this._runValidator();
          this.status = this._calculateStatus();
          if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
          }
        }
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      /** @internal */
      _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
      }
      _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
      }
      _runValidator() {
        return this.validator ? this.validator(this) : null;
      }
      _runAsyncValidator(shouldHaveEmitted, emitEvent) {
        if (this.asyncValidator) {
          this.status = PENDING;
          this._hasOwnPendingAsyncValidator = {
            emitEvent: emitEvent !== false,
            shouldHaveEmitted: shouldHaveEmitted !== false
          };
          const obs = toObservable(this.asyncValidator(this));
          this._asyncValidationSubscription = obs.subscribe((errors) => {
            this._hasOwnPendingAsyncValidator = null;
            this.setErrors(errors, { emitEvent, shouldHaveEmitted });
          });
        }
      }
      _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
          this._asyncValidationSubscription.unsubscribe();
          const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
          this._hasOwnPendingAsyncValidator = null;
          return shouldHaveEmitted;
        }
        return false;
      }
      setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
      }
      /**
       * Retrieves a child control given the control's name or path.
       *
       * @param path A dot-delimited string or array of string/number values that define the path to the
       * control. If a string is provided, passing it as a string literal will result in improved type
       * information. Likewise, if an array is provided, passing it `as const` will cause improved type
       * information to be available.
       *
       * @usageNotes
       * ### Retrieve a nested control
       *
       * For example, to get a `name` control nested within a `person` sub-group:
       *
       * * `this.form.get('person.name');`
       *
       * -OR-
       *
       * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
       *
       * ### Retrieve a control in a FormArray
       *
       * When accessing an element inside a FormArray, you can use an element index.
       * For example, to get a `price` control from the first element in an `items` array you can use:
       *
       * * `this.form.get('items.0.price');`
       *
       * -OR-
       *
       * * `this.form.get(['items', 0, 'price']);`
       */
      get(path) {
        let currPath = path;
        if (currPath == null)
          return null;
        if (!Array.isArray(currPath))
          currPath = currPath.split(".");
        if (currPath.length === 0)
          return null;
        return currPath.reduce((control, name) => control && control._find(name), this);
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
      }
      /**
       * Retrieves the top-level ancestor of this control.
       */
      get root() {
        let x = this;
        while (x._parent) {
          x = x._parent;
        }
        return x;
      }
      /** @internal */
      _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
        this.status = this._calculateStatus();
        if (emitEvent) {
          this.statusChanges.emit(this.status);
        }
        if (emitEvent || shouldHaveEmitted) {
          this._events.next(new StatusChangeEvent(this.status, changedControl));
        }
        if (this._parent) {
          this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
        }
      }
      /** @internal */
      _initObservables() {
        this.valueChanges = new EventEmitter();
        this.statusChanges = new EventEmitter();
      }
      _calculateStatus() {
        if (this._allControlsDisabled())
          return DISABLED;
        if (this.errors)
          return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
          return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
          return INVALID;
        return VALID;
      }
      /** @internal */
      _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
      }
      /** @internal */
      _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
      }
      /** @internal */
      _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
      }
      /** @internal */
      _updatePristine(opts, changedControl) {
        const newPristine = !this._anyControlsDirty();
        const changed = this.pristine !== newPristine;
        this.pristine = newPristine;
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, changedControl);
        }
        if (changed) {
          this._events.next(new PristineChangeEvent(this.pristine, changedControl));
        }
      }
      /** @internal */
      _updateTouched(opts = {}, changedControl) {
        this.touched = this._anyControlsTouched();
        this._events.next(new TouchedChangeEvent(this.touched, changedControl));
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, changedControl);
        }
      }
      /** @internal */
      _onDisabledChange = [];
      /** @internal */
      _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
      }
      /** @internal */
      _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
          this._updateOn = opts.updateOn;
        }
      }
      /**
       * Check to see if parent has been marked artificially dirty.
       *
       * @internal
       */
      _parentMarkedDirty(onlySelf) {
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
      }
      /** @internal */
      _find(name) {
        return null;
      }
      /**
       * Internal implementation of the `setValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignValidators(validators) {
        this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
      }
      /**
       * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignAsyncValidators(validators) {
        this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
      }
    };
    FormGroup = class extends AbstractControl {
      /**
       * Creates a new `FormGroup` instance.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
          // so we set `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      registerControl(name, control) {
        if (this.controls[name])
          return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
      }
      addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Remove a control from this group. In a strongly-typed group, required controls cannot be
       * removed.
       *
       * This method also updates the value and validity of the control.
       *
       * @param name The control name to remove from the collection
       * @param options Specifies whether this FormGroup instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       */
      removeControl(name, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      setControl(name, control, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        if (control)
          this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
      }
      /**
       * Sets the value of the `FormGroup`. It accepts an object that matches
       * the structure of the group, with control names as keys.
       *
       * @usageNotes
       * ### Set the complete value for the form group
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl(),
       *   last: new FormControl()
       * });
       *
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.setValue({first: 'Nancy', last: 'Drew'});
       * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
       * ```
       *
       * @throws When strict checks fail, such as setting the value of a control
       * that doesn't exist or if you exclude a value of a control that does exist.
       *
       * @param value The new value for the control that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes
       * and emits events after the value changes.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, true, value);
        Object.keys(value).forEach((name) => {
          assertControlPresent(this, true, name);
          this.controls[name].setValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormGroup`. It accepts an object with control
       * names as keys, and does its best to match the values to the correct controls
       * in the group.
       *
       * It accepts both super-sets and sub-sets of the group without throwing an error.
       *
       * @usageNotes
       * ### Patch the value for a form group
       *
       * ```ts
       * const form = new FormGroup({
       *    first: new FormControl(),
       *    last: new FormControl()
       * });
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.patchValue({first: 'Nancy'});
       * console.log(form.value);   // {first: 'Nancy', last: null}
       * ```
       *
       * @param value The object that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes and
       * emits events after the value is patched.
       * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
       * true.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control value
       * is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        Object.keys(value).forEach((name) => {
          const control = this.controls[name];
          if (control) {
            control.patchValue(
              /* Guaranteed to be present, due to the outer forEach. */
              value[name],
              { onlySelf: true, emitEvent: options.emitEvent }
            );
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
       * the value of all descendants to their default values, or null if no defaults were provided.
       *
       * You reset to a specific form state by passing in a map of states
       * that matches the structure of your form, with control names as keys. The state
       * is a standalone value or a form state object with both a value and a disabled
       * status.
       *
       * @param value Resets the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param options Configuration options that determine how the control propagates changes
       * and emits events when the group is reset.
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * @usageNotes
       *
       * ### Reset the form group values
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * console.log(form.value);  // {first: 'first name', last: 'last name'}
       *
       * form.reset({ first: 'name', last: 'last name' });
       *
       * console.log(form.value);  // {first: 'name', last: 'last name'}
       * ```
       *
       * ### Reset the form group values and disabled status
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * form.reset({
       *   first: {value: 'name', disabled: true},
       *   last: 'last'
       * });
       *
       * console.log(form.value);  // {last: 'last'}
       * console.log(form.get('first').status);  // 'DISABLED'
       * ```
       */
      reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
          control.reset(value ? value[name] : null, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
      }
      /**
       * The aggregate value of the `FormGroup`, including any disabled controls.
       *
       * Retrieves all values regardless of disabled status.
       */
      getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
          acc[name] = control.getRawValue();
          return acc;
        });
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
          return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        Object.keys(this.controls).forEach((key) => {
          const control = this.controls[key];
          control && cb(control, key);
        });
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => {
          control.setParent(this);
          control._registerOnCollectionChange(this._onCollectionChange);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this._reduceValue();
      }
      /** @internal */
      _anyControls(condition) {
        for (const [controlName, control] of Object.entries(this.controls)) {
          if (this.contains(controlName) && condition(control)) {
            return true;
          }
        }
        return false;
      }
      /** @internal */
      _reduceValue() {
        let acc = {};
        return this._reduceChildren(acc, (acc2, control, name) => {
          if (control.enabled || this.disabled) {
            acc2[name] = control.value;
          }
          return acc2;
        });
      }
      /** @internal */
      _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
          res = fn(res, control, name);
        });
        return res;
      }
      /** @internal */
      _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
          if (this.controls[controlName].enabled) {
            return false;
          }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
      }
      /** @internal */
      _find(name) {
        return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
      }
    };
    FormRecord = class extends FormGroup {
    };
    CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
      providedIn: "root",
      factory: () => setDisabledStateDefault
    });
    setDisabledStateDefault = "always";
    formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    };
    resolvedPromise$1 = (() => Promise.resolve())();
    NgForm = class _NgForm extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Returns whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this.submittedReactive);
      }
      /** @internal */
      _submitted = computed(() => this.submittedReactive());
      submittedReactive = signal(false);
      _directives = /* @__PURE__ */ new Set();
      /**
       * @description
       * The `FormGroup` instance created for this form.
       */
      form;
      /**
       * @description
       * Event emitter for the "ngSubmit" event
       */
      ngSubmit = new EventEmitter();
      /**
       * @description
       * Tracks options for the `NgForm` instance.
       *
       * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
       * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
       * Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
      }
      /** @docs-private */
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      /**
       * @description
       * The directive instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * The internal `FormGroup` instance.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it is always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Returns a map of the controls in this group.
       */
      get controls() {
        return this.form.controls;
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `NgModel` directive instance.
       */
      addControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          dir.control = container.registerControl(dir.name, dir.control);
          setUpControl(dir.control, dir, this.callSetDisabledState);
          dir.control.updateValueAndValidity({ emitEvent: false });
          this._directives.add(dir);
        });
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `NgModel` directive.
       *
       * @param dir The `NgModel` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `NgModel` instance from the internal list of directives
       *
       * @param dir The `NgModel` directive instance.
       */
      removeControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
          this._directives.delete(dir);
        });
      }
      /**
       * @description
       * Adds a new `NgModelGroup` directive instance to the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      addFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          const group = new FormGroup({});
          setUpFormContainer(group, dir);
          container.registerControl(dir.name, group);
          group.updateValueAndValidity({ emitEvent: false });
        });
      }
      /**
       * @description
       * Removes the `NgModelGroup` directive instance from the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      removeFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
        });
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `NgControl` directive.
       *
       * @param dir The `NgControl` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        resolvedPromise$1.then(() => {
          const ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        });
      }
      /**
       * @description
       * Sets the value for this `FormGroup`.
       *
       * @param value The new value
       */
      setValue(value) {
        this.control.setValue(value);
      }
      /**
       * @description
       * Method called when the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this.submittedReactive.set(true);
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form.
       */
      resetForm(value = void 0) {
        this.form.reset(value);
        this.submittedReactive.set(false);
        this.form._events.next(new FormResetEvent(this.form));
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.form._updateOn = this.options.updateOn;
        }
      }
      _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NgForm, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NgForm, isStandalone: false, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: { options: ["ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider$1], exportAs: ["ngForm"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NgForm, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
        providers: [formDirectiveProvider$1],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        outputs: ["ngSubmit"],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { options: [{
      type: Input,
      args: ["ngFormOptions"]
    }] } });
    FormControl = class FormControl2 extends AbstractControl {
      /** @publicApi */
      defaultValue = null;
      /** @internal */
      _onChange = [];
      /** @internal */
      _pendingValue;
      /** @internal */
      _pendingChange = false;
      constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set
          // `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
        if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
          if (isFormControlState(formState)) {
            this.defaultValue = formState.value;
          } else {
            this.defaultValue = formState;
          }
        }
      }
      setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
          this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        this.setValue(value, options);
      }
      reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
      }
      /**  @internal */
      _updateValue() {
      }
      /**  @internal */
      _anyControls(condition) {
        return false;
      }
      /**  @internal */
      _allControlsDisabled() {
        return this.disabled;
      }
      registerOnChange(fn) {
        this._onChange.push(fn);
      }
      /** @internal */
      _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
      }
      registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
      }
      /** @internal */
      _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
      }
      /** @internal */
      _forEachChild(cb) {
      }
      /** @internal */
      _syncPendingControls() {
        if (this.updateOn === "submit") {
          if (this._pendingDirty)
            this.markAsDirty();
          if (this._pendingTouched)
            this.markAsTouched();
          if (this._pendingChange) {
            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
            return true;
          }
        }
        return false;
      }
      _applyFormState(formState) {
        if (isFormControlState(formState)) {
          this.value = this._pendingValue = formState.value;
          formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) : this.enable({ onlySelf: true, emitEvent: false });
        } else {
          this.value = this._pendingValue = formState;
        }
      }
    };
    isFormControl = (control) => control instanceof FormControl;
    AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
      /**
       * @description
       * The parent control for the group
       *
       * @internal
       */
      _parent;
      /** @docs-private */
      ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeFormGroup(this);
        }
      }
      /**
       * @description
       * The `FormGroup` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormGroup(this);
      }
      /**
       * @description
       * The path to this group from the top-level directive.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /** @internal */
      _checkParentType() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _AbstractFormGroupDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _AbstractFormGroupDirective, isStandalone: false, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: AbstractFormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: false
      }]
    }] });
    modelGroupProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgModelGroup)
    };
    NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
       * to a key in the parent `NgForm`.
       */
      name = "";
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw modelGroupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NgModelGroup, deps: [{ token: ControlContainer, host: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NgModelGroup, isStandalone: false, selector: "[ngModelGroup]", inputs: { name: ["ngModelGroup", "name"] }, providers: [modelGroupProvider], exportAs: ["ngModelGroup"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NgModelGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModelGroup]",
        providers: [modelGroupProvider],
        exportAs: "ngModelGroup",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["ngModelGroup"]
    }] } });
    formControlBinding$1 = {
      provide: NgControl,
      useExisting: forwardRef(() => NgModel)
    };
    resolvedPromise = (() => Promise.resolve())();
    NgModel = class _NgModel extends NgControl {
      _changeDetectorRef;
      callSetDisabledState;
      control = new FormControl();
      // At runtime we coerce arbitrary values assigned to the "disabled" input to a "boolean".
      // This is not reflected in the type of the property because outside of templates, consumers
      // should only deal with booleans. In templates, a string is allowed for convenience and to
      // match the native "disabled attribute" semantics which can be observed on input elements.
      // This static member tells the compiler that values of type "string" can also be assigned
      // to the input in a template.
      /** @docs-private */
      static ngAcceptInputType_isDisabled;
      /** @internal */
      _registered = false;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the name bound to the directive. If a parent form exists, it
       * uses this name as a key to retrieve this control's value.
       */
      name = "";
      /**
       * @description
       * Tracks whether the control is disabled.
       */
      isDisabled;
      /**
       * @description
       * Tracks the value bound to this directive.
       */
      model;
      /**
       * @description
       * Tracks the configuration options for this `ngModel` instance.
       *
       * **name**: An alternative to setting the name attribute on the form control element. See
       * the [example](api/forms/NgModel#using-ngmodel-on-a-standalone-control) for using `NgModel`
       * as a standalone control.
       *
       * **standalone**: When set to true, the `ngModel` will not register itself with its parent form,
       * and acts as if it's not in the form. Defaults to false. If no parent form exists, this option
       * has no effect.
       *
       * **updateOn**: Defines the event upon which the form control value and validity update.
       * Defaults to 'change'. Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      /**
       * @description
       * Event emitter for producing the `ngModelChange` event after
       * the view model updates.
       */
      update = new EventEmitter();
      constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.callSetDisabledState = callSetDisabledState;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered || "name" in changes) {
          if (this._registered) {
            this._checkName();
            if (this.formDirective) {
              const oldName = changes["name"].previousValue;
              this.formDirective.removeControl({ name: oldName, path: this._getPath(oldName) });
            }
          }
          this._setUpControl();
        }
        if ("isDisabled" in changes) {
          this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          this._updateValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return this._getPath(this.name);
      }
      /**
       * @description
       * The top-level directive for this control if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value emitted by `ngModelChange`.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.control._updateOn = this.options.updateOn;
        }
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        setUpControl(this.control, this, this.callSetDisabledState);
        this.control.updateValueAndValidity({ emitEvent: false });
      }
      _checkForErrors() {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
          checkParentType$1(this._parent);
        }
        this._checkName();
      }
      _checkName() {
        if (this.options && this.options.name)
          this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw missingNameException();
        }
      }
      _updateValue(value) {
        resolvedPromise.then(() => {
          this.control.setValue(value, { emitViewToModelChange: false });
          this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(changes) {
        const disabledValue = changes["isDisabled"].currentValue;
        const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
        resolvedPromise.then(() => {
          if (isDisabled && !this.control.disabled) {
            this.control.disable();
          } else if (!isDisabled && this.control.disabled) {
            this.control.enable();
          }
          this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(controlName) {
        return this._parent ? controlPath(controlName, this._parent) : [controlName];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NgModel, deps: [{ token: ControlContainer, host: true, optional: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: ChangeDetectorRef, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NgModel, isStandalone: false, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: { name: "name", isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"], options: ["ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding$1], exportAs: ["ngModel"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NgModel, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModel]:not([formControlName]):not([formControl])",
        providers: [formControlBinding$1],
        exportAs: "ngModel",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: ChangeDetectorRef, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { name: [{
      type: Input
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], options: [{
      type: Input,
      args: ["ngModelOptions"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    \u0275NgNoValidate = class _\u0275NgNoValidate {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _\u0275NgNoValidate, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _\u0275NgNoValidate, isStandalone: false, selector: "form:not([ngNoForm]):not([ngNativeValidate])", host: { attributes: { "novalidate": "" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: \u0275NgNoValidate, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([ngNativeValidate])",
        host: { "novalidate": "" },
        standalone: false
      }]
    }] });
    NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberValueAccessor),
      multi: true
    };
    NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NumberValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NumberValueAccessor, isStandalone: false, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]", host: { listeners: { "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [NUMBER_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NumberValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
        host: { "(input)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [NUMBER_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlValueAccessor),
      multi: true
    };
    RadioControlRegistry = class _RadioControlRegistry {
      _accessors = [];
      /**
       * @description
       * Adds a control to the internal registry. For internal use only.
       */
      add(control, accessor) {
        this._accessors.push([control, accessor]);
      }
      /**
       * @description
       * Removes a control from the internal registry. For internal use only.
       */
      remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
          if (this._accessors[i][1] === accessor) {
            this._accessors.splice(i, 1);
            return;
          }
        }
      }
      /**
       * @description
       * Selects a radio button. For internal use only.
       */
      select(accessor) {
        this._accessors.forEach((c) => {
          if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
            c[1].fireUncheck(accessor.value);
          }
        });
      }
      _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
          return false;
        return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RadioControlRegistry, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RadioControlRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RadioControlRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
      _registry;
      _injector;
      /** @internal */
      _state;
      /** @internal */
      _control;
      /** @internal */
      _fn;
      setDisabledStateFired = false;
      /**
       * The registered callback function called when a change event occurs on the input element.
       * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
       * to override the `onChange` function (which expects 1 argument) in the parent
       * `BaseControlValueAccessor` class.
       * @docs-private
       */
      onChange = () => {
      };
      /**
       * @description
       * Tracks the name of the radio input element.
       */
      name;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       */
      formControlName;
      /**
       * @description
       * Tracks the value of the radio input element
       */
      value;
      callSetDisabledState = inject(CALL_SET_DISABLED_STATE, { optional: true }) ?? setDisabledStateDefault;
      constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
      }
      /** @docs-private */
      ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
      }
      /** @docs-private */
      ngOnDestroy() {
        this._registry.remove(this);
      }
      /**
       * Sets the "checked" property value on the radio input element.
       * @docs-private
       */
      writeValue(value) {
        this._state = value === this.value;
        this.setProperty("checked", this._state);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
          fn(this.value);
          this._registry.select(this);
        };
      }
      /** @docs-private */
      setDisabledState(isDisabled) {
        if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
          this.setProperty("disabled", isDisabled);
        }
        this.setDisabledStateFired = true;
      }
      /**
       * Sets the "value" on the radio input element and unchecks it.
       *
       * @param value
       */
      fireUncheck(value) {
        this.writeValue(value);
      }
      _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwNameError();
        }
        if (!this.name && this.formControlName)
          this.name = this.formControlName;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RadioControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: RadioControlRegistry }, { token: Injector }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _RadioControlValueAccessor, isStandalone: false, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: { name: "name", formControlName: "formControlName", value: "value" }, host: { listeners: { "change": "onChange()", "blur": "onTouched()" } }, providers: [RADIO_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RadioControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
        host: { "(change)": "onChange()", "(blur)": "onTouched()" },
        providers: [RADIO_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: RadioControlRegistry }, { type: Injector }], propDecorators: { name: [{
      type: Input
    }], formControlName: [{
      type: Input
    }], value: [{
      type: Input
    }] } });
    RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeValueAccessor),
      multi: true
    };
    RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("value", parseFloat(value));
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RangeValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _RangeValueAccessor, isStandalone: false, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]", host: { listeners: { "change": "onChange($any($event.target).value)", "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [RANGE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RangeValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
        host: {
          "(change)": "onChange($any($event.target).value)",
          "(input)": "onChange($any($event.target).value)",
          "(blur)": "onTouched()"
        },
        providers: [RANGE_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
    formControlBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlDirective)
    };
    FormControlDirective = class _FormControlDirective extends NgControl {
      _ngModelWarningConfig;
      callSetDisabledState;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      form;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular `FormControlDirective` instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
          const previousForm = changes["form"].previousValue;
          if (previousForm) {
            cleanUpControl(
              previousForm,
              this,
              /* validateControlPresenceOnChange */
              false
            );
          }
          setUpControl(this.form, this, this.callSetDisabledState);
          this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
          }
          this.form.setValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpControl(
            this.form,
            this,
            /* validateControlPresenceOnChange */
            false
          );
        }
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * The `FormControl` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _isControlChanged(changes) {
        return changes.hasOwnProperty("form");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormControlDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _FormControlDirective, isStandalone: false, selector: "[formControl]", inputs: { form: ["formControl", "form"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormControlDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControl]",
        providers: [formControlBinding],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formControl"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective)
    };
    FormGroupDirective = class _FormGroupDirective extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Reports whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this._submittedReactive);
      }
      // TODO(atscott): Remove once invalid API usage is cleaned up internally
      set submitted(value) {
        this._submittedReactive.set(value);
      }
      /** @internal */
      _submitted = computed(() => this._submittedReactive());
      _submittedReactive = signal(false);
      /**
       * Reference to an old form group input value, which is needed to cleanup
       * old instance in case it was replaced with a new one.
       */
      _oldForm;
      /**
       * Callback that should be invoked when controls in FormGroup or FormArray collection change
       * (added or removed). This callback triggers corresponding DOM updates.
       */
      _onCollectionChange = () => this._updateDomValue();
      /**
       * @description
       * Tracks the list of added `FormControlName` instances
       */
      directives = [];
      /**
       * @description
       * Tracks the `FormGroup` bound to this directive.
       */
      form = null;
      /**
       * @description
       * Emits an event when the form submission has been triggered.
       */
      ngSubmit = new EventEmitter();
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this.form) {
          throw missingFormException();
        }
        if (changes.hasOwnProperty("form")) {
          this._updateValidators();
          this._updateDomValue();
          this._updateRegistrations();
          this._oldForm = this.form;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpValidators(this.form, this);
          if (this.form._onCollectionChange === this._onCollectionChange) {
            this.form._registerOnCollectionChange(() => {
            });
          }
        }
      }
      /**
       * @description
       * Returns this directive's instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * Returns the `FormGroup` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `FormControlName` directive instance.
       */
      addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir, this.callSetDisabledState);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `FormControlName` directive
       *
       * @param dir The `FormControlName` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `FormControlName` instance from the internal list of directives
       *
       * @param dir The `FormControlName` directive instance.
       */
      removeControl(dir) {
        cleanUpControl(
          dir.control || null,
          dir,
          /* validateControlPresenceOnChange */
          false
        );
        removeListItem$1(this.directives, dir);
      }
      /**
       * Adds a new `FormGroupName` directive instance to the form.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      addFormGroup(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
       *
       * @param dir The `FormGroupName` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      addFormArray(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      getFormArray(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `FormControlName` directive.
       *
       * @param dir The `FormControlName` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
      }
      /**
       * @description
       * Method called with the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this._submittedReactive.set(true);
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form, `undefined` by default
       */
      resetForm(value = void 0, options = {}) {
        this.form.reset(value, options);
        this._submittedReactive.set(false);
        if (options?.emitEvent !== false) {
          this.form._events.next(new FormResetEvent(this.form));
        }
      }
      /** @internal */
      _updateDomValue() {
        this.directives.forEach((dir) => {
          const oldCtrl = dir.control;
          const newCtrl = this.form.get(dir.path);
          if (oldCtrl !== newCtrl) {
            cleanUpControl(oldCtrl || null, dir);
            if (isFormControl(newCtrl)) {
              setUpControl(newCtrl, dir, this.callSetDisabledState);
              dir.control = newCtrl;
            }
          }
        });
        this.form._updateTreeValidity({ emitEvent: false });
      }
      _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
      }
      _cleanUpFormContainer(dir) {
        if (this.form) {
          const ctrl = this.form.get(dir.path);
          if (ctrl) {
            const isControlUpdated = cleanUpFormContainer(ctrl, dir);
            if (isControlUpdated) {
              ctrl.updateValueAndValidity({ emitEvent: false });
            }
          }
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        if (this._oldForm) {
          this._oldForm._registerOnCollectionChange(() => {
          });
        }
      }
      _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
          cleanUpValidators(this._oldForm, this);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormGroupDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _FormGroupDirective, isStandalone: false, selector: "[formGroup]", inputs: { form: ["formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroup]",
        providers: [formDirectiveProvider],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formGroup"]
    }], ngSubmit: [{
      type: Output
    }] } });
    formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupName)
    };
    FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form groups to be bound
       * to indices when iterating over groups in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw groupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormGroupName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _FormGroupName, isStandalone: false, selector: "[formGroupName]", inputs: { name: ["formGroupName", "name"] }, providers: [formGroupNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormGroupName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName]",
        providers: [formGroupNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formGroupName"]
    }] } });
    formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormArrayName)
    };
    FormArrayName = class _FormArrayName extends ControlContainer {
      /** @internal */
      _parent;
      /**
       * @description
       * Tracks the name of the `FormArray` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form arrays to be bound
       * to indices when iterating over arrays in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /**
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       * @throws If the directive does not have a valid parent.
       * @docs-private
       */
      ngOnInit() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw arrayParentException();
        }
        this.formDirective.addFormArray(this);
      }
      /**
       * A lifecycle method called before the directive's instance is destroyed. For internal use only.
       * @docs-private
       */
      ngOnDestroy() {
        this.formDirective?.removeFormArray(this);
      }
      /**
       * @description
       * The `FormArray` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormArray(this);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormArrayName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _FormArrayName, isStandalone: false, selector: "[formArrayName]", inputs: { name: ["formArrayName", "name"] }, providers: [formArrayNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormArrayName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formArrayName]",
        providers: [formArrayNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formArrayName"]
    }] } });
    controlNameBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlName)
    };
    FormControlName = class _FormControlName extends NgControl {
      _ngModelWarningConfig;
      _added = false;
      /**
       * Internal reference to the view model value.
       * @internal
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      control;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form controls to be bound
       * to indices when iterating over controls in a `FormArray`.
       */
      name = null;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular FormControlName instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (!this._added)
          this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
          }
          this.viewModel = this.model;
          this.formDirective.updateModel(this, this.model);
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeControl(this);
        }
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _setUpControl() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkParentType(this._parent, this.name);
        }
        this.control = this.formDirective.addControl(this);
        this._added = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormControlName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _FormControlName, isStandalone: false, selector: "[formControlName]", inputs: { name: ["formControlName", "name"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [controlNameBinding], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormControlName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName]",
        providers: [controlNameBinding],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formControlName"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlValueAccessor),
      multi: true
    };
    SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
      /** @docs-private */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      /**
       * Sets the "value" property on the select element.
       * @docs-private
       */
      writeValue(value) {
        this.value = value;
        const id = this._getOptionId(value);
        const valueString = _buildValueString$1(id, value);
        this.setProperty("value", valueString);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (valueString) => {
          this.value = this._getOptionValue(valueString);
          fn(this.value);
        };
      }
      /** @internal */
      _registerOption() {
        return (this._idCounter++).toString();
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id), value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _SelectControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _SelectControlValueAccessor, isStandalone: false, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [SELECT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: SelectControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
        host: { "(change)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [SELECT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    NgSelectOption = class _NgSelectOption {
      _element;
      _renderer;
      _select;
      /**
       * @description
       * ID of the option element
       */
      id;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
          this.id = this._select._registerOption();
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select.writeValue(this._select.value);
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        this._setElementValue(value);
        if (this._select)
          this._select.writeValue(this._select.value);
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select.writeValue(this._select.value);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NgSelectOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _NgSelectOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NgSelectOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
      multi: true
    };
    SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * The current value.
       * @docs-private
       */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      /**
       * Sets the "value" property on one or of more of the select's options.
       * @docs-private
       */
      writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
          const ids = value.map((v) => this._getOptionId(v));
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(ids.indexOf(o.toString()) > -1);
          };
        } else {
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(false);
          };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
      }
      /**
       * Registers a function called when the control value changes
       * and writes an array of the selected options.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (element) => {
          const selected = [];
          const selectedOptions = element.selectedOptions;
          if (selectedOptions !== void 0) {
            const options = selectedOptions;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              const val = this._getOptionValue(opt.value);
              selected.push(val);
            }
          } else {
            const options = element.options;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              if (opt.selected) {
                const val = this._getOptionValue(opt.value);
                selected.push(val);
              }
            }
          }
          this.value = selected;
          fn(selected);
        };
      }
      /** @internal */
      _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id)._value, value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _SelectMultipleControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _SelectMultipleControlValueAccessor, isStandalone: false, selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($event.target)", "blur": "onTouched()" } }, providers: [SELECT_MULTIPLE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: SelectMultipleControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
        host: { "(change)": "onChange($event.target)", "(blur)": "onTouched()" },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
      _element;
      _renderer;
      _select;
      id;
      /** @internal */
      _value;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        if (this._select) {
          this._value = value;
          this._setElementValue(_buildValueString(this.id, value));
          this._select.writeValue(this._select.value);
        } else {
          this._setElementValue(value);
        }
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @internal */
      _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, "selected", selected);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select.writeValue(this._select.value);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _\u0275NgSelectMultipleOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectMultipleControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _\u0275NgSelectMultipleOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: \u0275NgSelectMultipleOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectMultipleControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    AbstractValidatorDirective = class _AbstractValidatorDirective {
      _validator = nullValidator;
      _onChange;
      /**
       * A flag that tracks whether this validator is enabled.
       *
       * Marking it `internal` (vs `protected`), so that this flag can be used in host bindings of
       * directive classes that extend this base class.
       * @internal
       */
      _enabled;
      /** @docs-private */
      ngOnChanges(changes) {
        if (this.inputName in changes) {
          const input2 = this.normalizeInput(changes[this.inputName].currentValue);
          this._enabled = this.enabled(input2);
          this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
          if (this._onChange) {
            this._onChange();
          }
        }
      }
      /** @docs-private */
      validate(control) {
        return this._validator(control);
      }
      /** @docs-private */
      registerOnValidatorChange(fn) {
        this._onChange = fn;
      }
      /**
       * @description
       * Determines whether this validator should be active or not based on an input.
       * Base class implementation checks whether an input is defined (if the value is different from
       * `null` and `undefined`). Validator classes that extend this base class can override this
       * function with the logic specific to a particular validator directive.
       */
      enabled(input2) {
        return input2 != null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _AbstractValidatorDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _AbstractValidatorDirective, isStandalone: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: AbstractValidatorDirective, decorators: [{
      type: Directive
    }] });
    MAX_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxValidator),
      multi: true
    };
    MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the max bound to this directive.
       */
      max;
      /** @internal */
      inputName = "max";
      /** @internal */
      normalizeInput = (input2) => toFloat(input2);
      /** @internal */
      createValidator = (max) => maxValidator(max);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _MaxValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _MaxValidator, isStandalone: false, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: { max: "max" }, host: { properties: { "attr.max": "_enabled ? max : null" } }, providers: [MAX_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: MaxValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
        providers: [MAX_VALIDATOR],
        host: { "[attr.max]": "_enabled ? max : null" },
        standalone: false
      }]
    }], propDecorators: { max: [{
      type: Input
    }] } });
    MIN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinValidator),
      multi: true
    };
    MinValidator = class _MinValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the min bound to this directive.
       */
      min;
      /** @internal */
      inputName = "min";
      /** @internal */
      normalizeInput = (input2) => toFloat(input2);
      /** @internal */
      createValidator = (min) => minValidator(min);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _MinValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _MinValidator, isStandalone: false, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: { min: "min" }, host: { properties: { "attr.min": "_enabled ? min : null" } }, providers: [MIN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: MinValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
        providers: [MIN_VALIDATOR],
        host: { "[attr.min]": "_enabled ? min : null" },
        standalone: false
      }]
    }], propDecorators: { min: [{
      type: Input
    }] } });
    REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RequiredValidator),
      multi: true
    };
    CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxRequiredValidator),
      multi: true
    };
    RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the required attribute bound to this directive.
       */
      required;
      /** @internal */
      inputName = "required";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input2) => requiredValidator;
      /** @docs-private */
      enabled(input2) {
        return input2;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _RequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _RequiredValidator, isStandalone: false, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: { required: "required" }, host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: RequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
        providers: [REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }], propDecorators: { required: [{
      type: Input
    }] } });
    CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
      /** @internal */
      createValidator = (input2) => requiredTrueValidator;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _CheckboxRequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _CheckboxRequiredValidator, isStandalone: false, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]", host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [CHECKBOX_REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: CheckboxRequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }] });
    EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    };
    EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the email attribute bound to this directive.
       */
      email;
      /** @internal */
      inputName = "email";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input2) => emailValidator;
      /** @docs-private */
      enabled(input2) {
        return input2;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _EmailValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _EmailValidator, isStandalone: false, selector: "[email][formControlName],[email][formControl],[email][ngModel]", inputs: { email: "email" }, providers: [EMAIL_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: EmailValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[email][formControlName],[email][formControl],[email][ngModel]",
        providers: [EMAIL_VALIDATOR],
        standalone: false
      }]
    }], propDecorators: { email: [{
      type: Input
    }] } });
    MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinLengthValidator),
      multi: true
    };
    MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the minimum length bound to this directive.
       */
      minlength;
      /** @internal */
      inputName = "minlength";
      /** @internal */
      normalizeInput = (input2) => toInteger(input2);
      /** @internal */
      createValidator = (minlength) => minLengthValidator(minlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _MinLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _MinLengthValidator, isStandalone: false, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: { minlength: "minlength" }, host: { properties: { "attr.minlength": "_enabled ? minlength : null" } }, providers: [MIN_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: MinLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
        providers: [MIN_LENGTH_VALIDATOR],
        host: { "[attr.minlength]": "_enabled ? minlength : null" },
        standalone: false
      }]
    }], propDecorators: { minlength: [{
      type: Input
    }] } });
    MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxLengthValidator),
      multi: true
    };
    MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the maximum length bound to this directive.
       */
      maxlength;
      /** @internal */
      inputName = "maxlength";
      /** @internal */
      normalizeInput = (input2) => toInteger(input2);
      /** @internal */
      createValidator = (maxlength) => maxLengthValidator(maxlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _MaxLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _MaxLengthValidator, isStandalone: false, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: { maxlength: "maxlength" }, host: { properties: { "attr.maxlength": "_enabled ? maxlength : null" } }, providers: [MAX_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: MaxLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
        providers: [MAX_LENGTH_VALIDATOR],
        host: { "[attr.maxlength]": "_enabled ? maxlength : null" },
        standalone: false
      }]
    }], propDecorators: { maxlength: [{
      type: Input
    }] } });
    PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PatternValidator),
      multi: true
    };
    PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the pattern bound to this directive.
       */
      pattern;
      // This input is always defined, since the name matches selector.
      /** @internal */
      inputName = "pattern";
      /** @internal */
      normalizeInput = (input2) => input2;
      /** @internal */
      createValidator = (input2) => patternValidator(input2);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _PatternValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.6", type: _PatternValidator, isStandalone: false, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: { pattern: "pattern" }, host: { properties: { "attr.pattern": "_enabled ? pattern : null" } }, providers: [PATTERN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: PatternValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
        providers: [PATTERN_VALIDATOR],
        host: { "[attr.pattern]": "_enabled ? pattern : null" },
        standalone: false
      }]
    }], propDecorators: { pattern: [{
      type: Input
    }] } });
    SHARED_FORM_DIRECTIVES = [
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      MinLengthValidator,
      MaxLengthValidator,
      PatternValidator,
      CheckboxRequiredValidator,
      EmailValidator,
      MinValidator,
      MaxValidator
    ];
    TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    REACTIVE_DRIVEN_DIRECTIVES = [
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName
    ];
    \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.6", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, declarations: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ], exports: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _\u0275InternalFormsSharedModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: \u0275InternalFormsSharedModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }] });
    FormArray = class extends AbstractControl {
      /**
       * Creates a new `FormArray` instance.
       *
       * @param controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
          // to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
       *     around from the back, and if index is greatly negative (less than `-length`), the result is
       * undefined. This behavior is the same as `Array.at(index)`.
       */
      at(index) {
        return this.controls[this._adjustIndex(index)];
      }
      /**
       * Insert a new `AbstractControl` at the end of the array.
       *
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is added.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       */
      push(control, options = {}) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Insert a new `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to insert the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
       * This behavior is the same as `Array.splice(index, 0, control)`.
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is inserted.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       */
      insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Remove the control at the given `index` in the array.
       *
       * @param index Index in the array to remove the control.  If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), removes the first
       *     element. This behavior is the same as `Array.splice(index, 1)`.
       * @param options Specifies whether this FormArray instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       */
      removeAt(index, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Replace an existing control.
       *
       * @param index Index in the array to replace the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
       *     element. This behavior is the same as `Array.splice(index, 1, control)`.
       * @param control The `AbstractControl` control to replace the existing control
       * @param options Specifies whether this FormArray instance should emit events after an
       *     existing control is replaced with a new one.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * replaced with a new one. When false, no events are emitted.
       */
      setControl(index, control, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        if (control) {
          this.controls.splice(adjustedIndex, 0, control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Length of the control array.
       */
      get length() {
        return this.controls.length;
      }
      /**
       * Sets the value of the `FormArray`. It accepts an array that matches
       * the structure of the control.
       *
       * This method performs strict checks, and throws an error if you try
       * to set the value of a control that doesn't exist or if you exclude the
       * value of a control.
       *
       * @usageNotes
       * ### Set the values for the controls in the form array
       *
       * ```ts
       * const arr = new FormArray([
       *   new FormControl(),
       *   new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.setValue(['Nancy', 'Drew']);
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, false, value);
        value.forEach((newValue, index) => {
          assertControlPresent(this, false, index);
          this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormArray`. It accepts an array that matches the
       * structure of the control, and does its best to match the values to the correct
       * controls in the group.
       *
       * It accepts both super-sets and sub-sets of the array without throwing an error.
       *
       * @usageNotes
       * ### Patch the values for controls in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.patchValue(['Nancy']);
       * console.log(arr.value);   // ['Nancy', null]
       * ```
       *
       * @param value Array of latest values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control
       * value is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        value.forEach((newValue, index) => {
          if (this.at(index)) {
            this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
       * value of all descendants to null or null maps.
       *
       * You reset to a specific form state by passing in an array of states
       * that matches the structure of the control. The state is a standalone value
       * or a form state object with both a value and a disabled status.
       *
       * @usageNotes
       * ### Reset the values in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * arr.reset(['name', 'last name']);
       *
       * console.log(arr.value);  // ['name', 'last name']
       * ```
       *
       * ### Reset the values in a form array and the disabled status for the first control
       *
       * ```ts
       * arr.reset([
       *   {value: 'name', disabled: true},
       *   'last'
       * ]);
       *
       * console.log(arr.value);  // ['last']
       * console.log(arr.at(0).status);  // 'DISABLED'
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
          control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
      }
      /**
       * The aggregate value of the array, including any disabled controls.
       *
       * Reports all values regardless of disabled status.
       */
      getRawValue() {
        return this.controls.map((control) => control.getRawValue());
      }
      /**
       * Remove all controls in the `FormArray`.
       *
       * @param options Specifies whether this FormArray instance should emit events after all
       *     controls are removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when all controls
       * in this FormArray instance are removed. When false, no events are emitted.
       *
       * @usageNotes
       * ### Remove all elements from a FormArray
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.length);  // 2
       *
       * arr.clear();
       * console.log(arr.length);  // 0
       * ```
       *
       * It's a simpler and more efficient alternative to removing all elements one by one:
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       *
       * while (arr.length) {
       *    arr.removeAt(0);
       * }
       * ```
       */
      clear(options = {}) {
        if (this.controls.length < 1)
          return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => {
        }));
        this.controls.splice(0);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Adjusts a negative index by summing it with the length of the array. For very negative
       * indices, the result may remain negative.
       * @internal
       */
      _adjustIndex(index) {
        return index < 0 ? index + this.length : index;
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
          return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        this.controls.forEach((control, index) => {
          cb(control, index);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
      }
      /** @internal */
      _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
      }
      /** @internal */
      _allControlsDisabled() {
        for (const control of this.controls) {
          if (control.enabled)
            return false;
        }
        return this.controls.length > 0 || this.disabled;
      }
      _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
      }
      /** @internal */
      _find(name) {
        return this.at(name) ?? null;
      }
    };
    FormBuilder = class _FormBuilder {
      useNonNullable = false;
      /**
       * @description
       * Returns a FormBuilder in which automatically constructed `FormControl` elements
       * have `{nonNullable: true}` and are non-nullable.
       *
       * **Constructing non-nullable controls**
       *
       * When constructing a control, it will be non-nullable, and will reset to its initial value.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.control('Alex'); // FormControl<string>
       * name.reset();
       * console.log(name); // 'Alex'
       * ```
       *
       * **Constructing non-nullable groups or arrays**
       *
       * When constructing a group or array, all automatically created inner controls will be
       * non-nullable, and will reset to their initial values.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
       * name.reset();
       * console.log(name); // {who: 'Alex'}
       * ```
       * **Constructing *nullable* fields on groups or arrays**
       *
       * It is still possible to have a nullable field. In particular, any `FormControl` which is
       * *already* constructed will not be altered. For example:
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * // FormGroup<{who: FormControl<string|null>}>
       * let name = nnfb.group({who: new FormControl('Alex')});
       * name.reset(); console.log(name); // {who: null}
       * ```
       *
       * Because the inner control is constructed explicitly by the caller, the builder has
       * no control over how it is created, and cannot exclude the `null`.
       */
      get nonNullable() {
        const nnfb = new _FormBuilder();
        nnfb.useNonNullable = true;
        return nnfb;
      }
      group(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        let newOptions = {};
        if (isAbstractControlOptions(options)) {
          newOptions = options;
        } else if (options !== null) {
          newOptions.validators = options.validator;
          newOptions.asyncValidators = options.asyncValidator;
        }
        return new FormGroup(reducedControls, newOptions);
      }
      /**
       * @description
       * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
       * containing all the keys and corresponding inner control types.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param options Configuration options object for the `FormRecord`. The object should have the
       * `AbstractControlOptions` type and might contain the following fields:
       * * `validators`: A synchronous validator function, or an array of validator functions.
       * * `asyncValidators`: A single async validator or array of async validator functions.
       * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
       * | submit').
       */
      record(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        return new FormRecord(reducedControls, options);
      }
      /**
       * @description
       * Constructs a new `FormControl` with the given state, validators and options. Sets
       * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
       * control will be nullable. Accepts a single generic argument, which is the type  of the
       * control's value.
       *
       * @param formState Initializes the control with an initial state value, or
       * with an object that contains both a value and a disabled status.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or a `FormControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator
       * functions.
       *
       * @usageNotes
       *
       * ### Initialize a control as disabled
       *
       * The following example returns a control with an initial value in a disabled state.
       *
       * {@example forms/ts/formBuilder/form_builder_example.ts region='disabled-control'}
       */
      control(formState, validatorOrOpts, asyncValidator) {
        let newOptions = {};
        if (!this.useNonNullable) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        if (isAbstractControlOptions(validatorOrOpts)) {
          newOptions = validatorOrOpts;
        } else {
          newOptions.validators = validatorOrOpts;
          newOptions.asyncValidators = asyncValidator;
        }
        return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), { nonNullable: true }));
      }
      /**
       * Constructs a new `FormArray` from the given array of configurations,
       * validators and options. Accepts a single generic argument, which is the type of each control
       * inside the array.
       *
       * @param controls An array of child controls or control configs. Each child control is given an
       *     index when it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
       *     `AbstractControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions.
       */
      array(controls, validatorOrOpts, asyncValidator) {
        const createdControls = controls.map((c) => this._createControl(c));
        return new FormArray(createdControls, validatorOrOpts, asyncValidator);
      }
      /** @internal */
      _reduceControls(controls) {
        const createdControls = {};
        Object.keys(controls).forEach((controlName) => {
          createdControls[controlName] = this._createControl(controls[controlName]);
        });
        return createdControls;
      }
      /** @internal */
      _createControl(controls) {
        if (controls instanceof FormControl) {
          return controls;
        } else if (controls instanceof AbstractControl) {
          return controls;
        } else if (Array.isArray(controls)) {
          const value = controls[0];
          const validator = controls.length > 1 ? controls[1] : null;
          const asyncValidator = controls.length > 2 ? controls[2] : null;
          return this.control(value, validator, asyncValidator);
        } else {
          return this.control(controls);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    NonNullableFormBuilder = class _NonNullableFormBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NonNullableFormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _NonNullableFormBuilder, providedIn: "root", useFactory: () => inject(FormBuilder).nonNullable });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: NonNullableFormBuilder, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root",
        useFactory: () => inject(FormBuilder).nonNullable
      }]
    }] });
    UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
      group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
      }
      /**
       * Like `FormBuilder#control`, except the resulting control is untyped.
       */
      control(formState, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
      }
      /**
       * Like `FormBuilder#array`, except the resulting array is untyped.
       */
      array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _UntypedFormBuilder, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _UntypedFormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: UntypedFormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    VERSION3 = new Version("20.0.6");
    FormsModule = class _FormsModule {
      /**
       * @description
       * Provides options for configuring the forms module.
       *
       * @param opts An object of configuration options
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _FormsModule,
          providers: [
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.6", ngImport: core_exports, type: _FormsModule, declarations: [NgModel, NgModelGroup, NgForm], exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _FormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: FormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }] });
    ReactiveFormsModule = class _ReactiveFormsModule {
      /**
       * @description
       * Provides options for configuring the reactive forms module.
       *
       * @param opts An object of configuration options
       * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
       * binding is used with reactive form directives.
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _ReactiveFormsModule,
          providers: [
            {
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl ?? "always"
            },
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _ReactiveFormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.6", ngImport: core_exports, type: _ReactiveFormsModule, declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: _ReactiveFormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: core_exports, type: ReactiveFormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }] });
  }
});

// src/app/services/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/services/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    AuthService = class AuthService2 {
      currentUserSubject = new BehaviorSubject(null);
      currentUser$ = this.currentUserSubject.asObservable();
      constructor() {
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
          this.currentUserSubject.next(JSON.parse(savedUser));
        }
      }
      // Email validation
      isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }
      // Password validation
      isValidPassword(password) {
        if (password.length < 8) {
          return { valid: false, message: "Password must be at least 8 characters long" };
        }
        if (!/(?=.*[a-z])/.test(password)) {
          return { valid: false, message: "Password must contain at least one lowercase letter" };
        }
        if (!/(?=.*[A-Z])/.test(password)) {
          return { valid: false, message: "Password must contain at least one uppercase letter" };
        }
        if (!/(?=.*\d)/.test(password)) {
          return { valid: false, message: "Password must contain at least one number" };
        }
        if (!/(?=.*[@$!%*?&])/.test(password)) {
          return { valid: false, message: "Password must contain at least one special character (@$!%*?&)" };
        }
        return { valid: true, message: "" };
      }
      // Sign up new user
      signup(userData) {
        if (!userData.firstName.trim() || !userData.lastName.trim() || !userData.email.trim() || !userData.password || !userData.confirmPassword) {
          return { success: false, message: "Please fill in all fields" };
        }
        if (!this.isValidEmail(userData.email)) {
          return { success: false, message: "Please enter a valid email address" };
        }
        if (userData.password !== userData.confirmPassword) {
          return { success: false, message: "Passwords do not match" };
        }
        const passwordValidation = this.isValidPassword(userData.password);
        if (!passwordValidation.valid) {
          return { success: false, message: passwordValidation.message };
        }
        const users = this.getUsers();
        if (users.find((user) => user.email.toLowerCase() === userData.email.toLowerCase())) {
          return { success: false, message: "An account with this email already exists" };
        }
        const newUser = {
          id: this.generateId(),
          firstName: userData.firstName.trim(),
          lastName: userData.lastName.trim(),
          email: userData.email.toLowerCase().trim(),
          password: userData.password,
          // In a real app, this would be hashed
          createdAt: /* @__PURE__ */ new Date()
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return { success: true, message: "Account created successfully!" };
      }
      // Login user
      login(email, password) {
        if (!email.trim() || !password) {
          return { success: false, message: "Please enter both email and password" };
        }
        if (!this.isValidEmail(email)) {
          return { success: false, message: "Please enter a valid email address" };
        }
        const users = this.getUsers();
        const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password);
        if (user) {
          const userWithoutPassword = __spreadValues({}, user);
          delete userWithoutPassword.password;
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
          this.currentUserSubject.next(user);
          return { success: true, message: "Login successful!" };
        }
        return { success: false, message: "Invalid email or password" };
      }
      // Logout user
      logout() {
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
      }
      // Get current user
      getCurrentUser() {
        return this.currentUserSubject.value;
      }
      // Check if user is logged in
      isLoggedIn() {
        return this.currentUserSubject.value !== null;
      }
      // Update user profile
      updateProfile(updates) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
          return { success: false, message: "User not logged in" };
        }
        if (updates.email && !this.isValidEmail(updates.email)) {
          return { success: false, message: "Please enter a valid email address" };
        }
        if (updates.email && updates.email.toLowerCase() !== currentUser.email.toLowerCase()) {
          const users2 = this.getUsers();
          if (users2.find((user) => user.email.toLowerCase() === updates.email.toLowerCase() && user.id !== currentUser.id)) {
            return { success: false, message: "An account with this email already exists" };
          }
        }
        const users = this.getUsers();
        const userIndex = users.findIndex((u) => u.id === currentUser.id);
        if (userIndex !== -1) {
          users[userIndex] = __spreadValues(__spreadValues({}, users[userIndex]), updates);
          localStorage.setItem("users", JSON.stringify(users));
          const updatedUser = users[userIndex];
          const userWithoutPassword = __spreadValues({}, updatedUser);
          delete userWithoutPassword.password;
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
          this.currentUserSubject.next(updatedUser);
          return { success: true, message: "Profile updated successfully!" };
        }
        return { success: false, message: "User not found" };
      }
      // Change password
      changePassword(currentPassword, newPassword, confirmPassword) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
          return { success: false, message: "User not logged in" };
        }
        if (!currentPassword || !newPassword || !confirmPassword) {
          return { success: false, message: "Please fill in all password fields" };
        }
        const users = this.getUsers();
        const fullUser = users.find((u) => u.id === currentUser.id);
        if (!fullUser || fullUser.password !== currentPassword) {
          return { success: false, message: "Current password is incorrect" };
        }
        if (newPassword !== confirmPassword) {
          return { success: false, message: "New passwords do not match" };
        }
        const passwordValidation = this.isValidPassword(newPassword);
        if (!passwordValidation.valid) {
          return { success: false, message: passwordValidation.message };
        }
        const userIndex = users.findIndex((u) => u.id === currentUser.id);
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        return { success: true, message: "Password changed successfully!" };
      }
      // Helper methods
      getUsers() {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
      }
      generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      }
      static ctorParameters = () => [];
    };
    AuthService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthService);
  }
});

// src/app/components/login/login.component.ts
var LoginComponent;
var init_login_component3 = __esm({
  "src/app/components/login/login.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_component();
    init_login_component2();
    init_core();
    init_common();
    init_forms();
    init_auth_service();
    LoginComponent = class LoginComponent2 {
      authService;
      close = new EventEmitter();
      switchToSignup = new EventEmitter();
      loginSuccess = new EventEmitter();
      loginData = {
        email: "",
        password: ""
      };
      errorMessage = "";
      isLoading = false;
      constructor(authService) {
        this.authService = authService;
      }
      onSubmit() {
        this.errorMessage = "";
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
      static ctorParameters = () => [
        { type: AuthService }
      ];
      static propDecorators = {
        close: [{ type: Output }],
        switchToSignup: [{ type: Output }],
        loginSuccess: [{ type: Output }]
      };
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: login_component_default,
        styles: [login_component_default2]
      })
    ], LoginComponent);
  }
});

// angular:jit:template:src\app\components\signup\signup.component.html
var signup_component_default;
var init_signup_component = __esm({
  "angular:jit:template:src\\app\\components\\signup\\signup.component.html"() {
    signup_component_default = '<div class="modal-overlay" (click)="onClose()">\r\n  <div class="modal-content" (click)="$event.stopPropagation()">\r\n    <div class="modal-header">\r\n      <h2>Sign Up</h2>\r\n      <button class="close-btn" (click)="onClose()">&times;</button>\r\n    </div>\r\n    \r\n    <form (ngSubmit)="onSubmit()" class="signup-form">\r\n      <!-- Error Message -->\r\n      <div class="error-message" *ngIf="errorMessage">\r\n        {{ errorMessage }}\r\n      </div>\r\n\r\n      <!-- Success Message -->\r\n      <div class="success-message" *ngIf="successMessage">\r\n        {{ successMessage }}\r\n      </div>\r\n\r\n      <div class="form-row">\r\n        <div class="form-group">\r\n          <label for="firstName">First Name</label>\r\n          <input \r\n            type="text" \r\n            id="firstName" \r\n            [(ngModel)]="signupData.firstName" \r\n            name="firstName"\r\n            placeholder="Enter your first name"\r\n            required\r\n            [disabled]="isLoading"\r\n          >\r\n        </div>\r\n        \r\n        <div class="form-group">\r\n          <label for="lastName">Last Name</label>\r\n          <input \r\n            type="text" \r\n            id="lastName" \r\n            [(ngModel)]="signupData.lastName" \r\n            name="lastName"\r\n            placeholder="Enter your last name"\r\n            required\r\n            [disabled]="isLoading"\r\n          >\r\n        </div>\r\n      </div>\r\n      \r\n      <div class="form-group">\r\n        <label for="email">Email</label>\r\n        <input \r\n          type="email" \r\n          id="email" \r\n          [(ngModel)]="signupData.email" \r\n          name="email"\r\n          placeholder="Enter your email"\r\n          required\r\n          [disabled]="isLoading"\r\n        >\r\n      </div>\r\n      \r\n      <div class="form-group">\r\n        <label for="password">Password</label>\r\n        <input \r\n          type="password" \r\n          id="password" \r\n          [(ngModel)]="signupData.password" \r\n          name="password"\r\n          placeholder="Enter your password (min 8 characters)"\r\n          required\r\n          [disabled]="isLoading"\r\n        >\r\n        <div class="password-requirements">\r\n          <small>Password must contain: 8+ chars, lowercase, uppercase, number, special char</small>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class="form-group">\r\n        <label for="confirmPassword">Confirm Password</label>\r\n        <input \r\n          type="password" \r\n          id="confirmPassword" \r\n          [(ngModel)]="signupData.confirmPassword" \r\n          name="confirmPassword"\r\n          placeholder="Confirm your password"\r\n          required\r\n          [disabled]="isLoading"\r\n        >\r\n      </div>\r\n      \r\n      <button type="submit" class="signup-btn" [disabled]="isLoading">\r\n        <span *ngIf="isLoading">Creating Account...</span>\r\n        <span *ngIf="!isLoading">Create Account</span>\r\n      </button>\r\n      \r\n      <div class="form-footer">\r\n        <p>Already have an account? \r\n          <a href="#" (click)="onSwitchToLogin(); $event.preventDefault()">Sign in here</a>\r\n        </p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\components\signup\signup.component.css
var signup_component_default2;
var init_signup_component2 = __esm({
  "angular:jit:style:src\\app\\components\\signup\\signup.component.css"() {
    signup_component_default2 = "/* src/app/components/signup/signup.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.modal-content {\n  background: #2a2a2a;\n  border-radius: 15px;\n  padding: 0;\n  width: 90%;\n  max-width: 450px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n  transform: scale(1);\n  animation: modalAppear 0.3s ease-out;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 25px;\n  border-bottom: 1px solid #3a3a3a;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  border-radius: 15px 15px 0 0;\n}\n.modal-header h2 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #ffffff;\n  font-size: 1.8rem;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.3s ease;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.signup-form {\n  padding: 25px;\n}\n.form-row {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.form-row .form-group {\n  flex: 1;\n  margin-bottom: 0;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.form-group input {\n  width: 100%;\n  padding: 12px 15px;\n  border: 1px solid #3a3a3a;\n  border-radius: 8px;\n  background: #1a1a1a;\n  color: #ffffff;\n  font-size: 1rem;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n  box-sizing: border-box;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #795e94;\n  box-shadow: 0 0 0 2px rgba(121, 94, 148, 0.2);\n}\n.form-group input::placeholder {\n  color: #888;\n}\n.signup-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  margin-bottom: 20px;\n}\n.signup-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 20px rgba(121, 94, 148, 0.4);\n}\n.signup-btn:active {\n  transform: translateY(0);\n}\n.form-footer {\n  text-align: center;\n  margin-top: 15px;\n}\n.form-footer p {\n  color: #ccc;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.form-footer a {\n  color: #795e94;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.3s ease;\n}\n.form-footer a:hover {\n  color: #9a7bb0;\n}\n.error-message {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n  border-radius: 5px;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n  text-align: center;\n}\n.success-message {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n  border-radius: 5px;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n  text-align: center;\n}\n.password-requirements {\n  margin-top: 0.5rem;\n}\n.password-requirements small {\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=signup.component.css.map */\n";
  }
});

// src/app/components/signup/signup.component.ts
var SignupComponent;
var init_signup_component3 = __esm({
  "src/app/components/signup/signup.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_signup_component();
    init_signup_component2();
    init_core();
    init_common();
    init_forms();
    init_auth_service();
    SignupComponent = class SignupComponent2 {
      authService;
      close = new EventEmitter();
      switchToLogin = new EventEmitter();
      signupData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
      errorMessage = "";
      successMessage = "";
      isLoading = false;
      constructor(authService) {
        this.authService = authService;
      }
      onSubmit() {
        this.errorMessage = "";
        this.successMessage = "";
        this.isLoading = true;
        const result = this.authService.signup(this.signupData);
        this.isLoading = false;
        if (result.success) {
          this.successMessage = result.message;
          this.signupData = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          };
          setTimeout(() => {
            this.onClose();
          }, 2e3);
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
      static ctorParameters = () => [
        { type: AuthService }
      ];
      static propDecorators = {
        close: [{ type: Output }],
        switchToLogin: [{ type: Output }]
      };
    };
    SignupComponent = __decorate([
      Component({
        selector: "app-signup",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: signup_component_default,
        styles: [signup_component_default2]
      })
    ], SignupComponent);
  }
});

// angular:jit:template:src\app\components\profile\profile.component.html
var profile_component_default;
var init_profile_component = __esm({
  "angular:jit:template:src\\app\\components\\profile\\profile.component.html"() {
    profile_component_default = `<div class="modal-overlay" (click)="close.emit()">\r
  <div class="profile-container" (click)="$event.stopPropagation()">\r
    <div class="profile-header">\r
      <h2>User Profile</h2>\r
      <button class="close-btn" (click)="close.emit()">&times;</button>\r
    </div>\r
\r
  <div class="profile-content" *ngIf="user">\r
    <!-- User Info Display -->\r
    <div class="user-info">\r
      <div class="avatar">\r
        <span>{{ user.firstName[0] }}{{ user.lastName[0] }}</span>\r
      </div>\r
      <div class="user-details">\r
        <h3>{{ user.firstName }} {{ user.lastName }}</h3>\r
        <p>{{ user.email }}</p>\r
        <small>Member since: {{ user.createdAt | date:'mediumDate' }}</small>\r
      </div>\r
    </div>\r
\r
    <!-- Tabs -->\r
    <div class="tabs">\r
      <button \r
        class="tab-btn" \r
        [class.active]="activeTab === 'info'"\r
        (click)="setActiveTab('info')">\r
        Profile Information\r
      </button>\r
      <button \r
        class="tab-btn" \r
        [class.active]="activeTab === 'password'"\r
        (click)="setActiveTab('password')">\r
        Change Password\r
      </button>\r
    </div>\r
\r
    <!-- Message Display -->\r
    <div class="message" *ngIf="message" [class.success]="messageType === 'success'" [class.error]="messageType === 'error'">\r
      {{ message }}\r
    </div>\r
\r
    <!-- Profile Information Tab -->\r
    <div class="tab-content" *ngIf="activeTab === 'info'">\r
      <form (ngSubmit)="updateProfile()" #profileFormRef="ngForm">\r
        <div class="form-group">\r
          <label for="firstName">First Name</label>\r
          <input \r
            type="text" \r
            id="firstName" \r
            name="firstName"\r
            [(ngModel)]="profileForm.firstName" \r
            required\r
            #firstName="ngModel">\r
          <div class="error" *ngIf="firstName.invalid && firstName.touched">\r
            First name is required\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="lastName">Last Name</label>\r
          <input \r
            type="text" \r
            id="lastName" \r
            name="lastName"\r
            [(ngModel)]="profileForm.lastName" \r
            required\r
            #lastName="ngModel">\r
          <div class="error" *ngIf="lastName.invalid && lastName.touched">\r
            Last name is required\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="email">Email</label>\r
          <input \r
            type="email" \r
            id="email" \r
            name="email"\r
            [(ngModel)]="profileForm.email" \r
            required\r
            email\r
            #email="ngModel">\r
          <div class="error" *ngIf="email.invalid && email.touched">\r
            <span *ngIf="email.errors?.['required']">Email is required</span>\r
            <span *ngIf="email.errors?.['email']">Please enter a valid email address</span>\r
          </div>\r
        </div>\r
\r
        <button type="submit" class="btn-primary" [disabled]="profileFormRef.invalid">\r
          Update Profile\r
        </button>\r
      </form>\r
    </div>\r
\r
    <!-- Change Password Tab -->\r
    <div class="tab-content" *ngIf="activeTab === 'password'">\r
      <form (ngSubmit)="changePassword()" #passwordFormRef="ngForm">\r
        <div class="form-group">\r
          <label for="currentPassword">Current Password</label>\r
          <input \r
            type="password" \r
            id="currentPassword" \r
            name="currentPassword"\r
            [(ngModel)]="passwordForm.currentPassword" \r
            required\r
            #currentPassword="ngModel">\r
          <div class="error" *ngIf="currentPassword.invalid && currentPassword.touched">\r
            Current password is required\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="newPassword">New Password</label>\r
          <input \r
            type="password" \r
            id="newPassword" \r
            name="newPassword"\r
            [(ngModel)]="passwordForm.newPassword" \r
            required\r
            minlength="8"\r
            #newPassword="ngModel">\r
          <div class="error" *ngIf="newPassword.invalid && newPassword.touched">\r
            <span *ngIf="newPassword.errors?.['required']">New password is required</span>\r
            <span *ngIf="newPassword.errors?.['minlength']">Password must be at least 8 characters long</span>\r
          </div>\r
          <div class="password-requirements">\r
            <small>Password must contain:</small>\r
            <ul>\r
              <li>At least 8 characters</li>\r
              <li>One lowercase letter</li>\r
              <li>One uppercase letter</li>\r
              <li>One number</li>\r
              <li>One special character ($!%*?&)</li>\r
            </ul>\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="confirmPassword">Confirm New Password</label>\r
          <input \r
            type="password" \r
            id="confirmPassword" \r
            name="confirmPassword"\r
            [(ngModel)]="passwordForm.confirmPassword" \r
            required\r
            #confirmPassword="ngModel">\r
          <div class="error" *ngIf="confirmPassword.invalid && confirmPassword.touched">\r
            Confirm password is required\r
          </div>\r
          <div class="error" *ngIf="passwordForm.newPassword !== passwordForm.confirmPassword && confirmPassword.touched">\r
            Passwords do not match\r
          </div>\r
        </div>\r
\r
        <button \r
          type="submit" \r
          class="btn-primary" \r
          [disabled]="passwordFormRef.invalid || passwordForm.newPassword !== passwordForm.confirmPassword">\r
          Change Password\r
        </button>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\components\profile\profile.component.css
var profile_component_default2;
var init_profile_component2 = __esm({
  "angular:jit:style:src\\app\\components\\profile\\profile.component.css"() {
    profile_component_default2 = "/* src/app/components/profile/profile.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.profile-container {\n  max-width: 800px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  margin: 2rem auto;\n  padding: 0;\n  background: #2a2a2a;\n  border-radius: 15px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n  transform: scale(1);\n  animation: modalAppear 0.3s ease-out;\n}\n@keyframes modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.profile-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #3a3a3a;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  border-radius: 15px 15px 0 0;\n}\n.profile-header h2 {\n  color: white;\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 2rem;\n  color: white;\n  cursor: pointer;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.1);\n}\n.profile-content {\n  padding: 2rem;\n  background: #2a2a2a;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3a3a3d 0%,\n      #795e94 100%);\n  border-radius: 10px;\n  color: white;\n  border: 1px solid #3a3a3a;\n}\n.avatar {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n}\n.user-details h3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n  color: white;\n}\n.user-details p {\n  margin: 0 0 0.5rem 0;\n  opacity: 0.9;\n  color: #e0e0e0;\n}\n.user-details small {\n  opacity: 0.7;\n  color: #cccccc;\n}\n.tabs {\n  display: flex;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid #3a3a3a;\n  background: #2a2a2a;\n}\n.tab-btn {\n  background: none;\n  border: none;\n  padding: 1rem 2rem;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #b3b3b3;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n}\n.tab-btn:hover {\n  color: #ffffff;\n  background: #3a3a3a;\n}\n.tab-btn.active {\n  color: #ffffff;\n  border-bottom-color: #795e94;\n  background: #3a3a3a;\n}\n.tab-content {\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.message {\n  padding: 1rem;\n  border-radius: 5px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.message.success {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.message.error {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #ffffff;\n  font-weight: 500;\n}\n.form-group input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #3a3a3a;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n  background: #1a1a1a;\n  color: #ffffff;\n}\n.form-group input::placeholder {\n  color: #999;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #795e94;\n  box-shadow: 0 0 0 3px rgba(121, 94, 148, 0.2);\n  background: #2a2a2a;\n}\n.form-group input.ng-invalid.ng-touched {\n  border-color: #dc3545;\n}\n.error {\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.password-requirements {\n  margin-top: 0.5rem;\n  padding: 0.75rem;\n  background: #1a1a1a;\n  border-radius: 5px;\n  border-left: 3px solid #795e94;\n}\n.password-requirements small {\n  font-weight: 500;\n  color: #b3b3b3;\n}\n.password-requirements ul {\n  margin: 0.5rem 0 0 0;\n  padding-left: 1rem;\n}\n.password-requirements li {\n  color: #999;\n  font-size: 0.875rem;\n  margin: 0.25rem 0;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #795e94 0%,\n      #3a3a3d 100%);\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  min-width: 150px;\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #6a4190 0%,\n      #2a2a2d 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(121, 94, 148, 0.3);\n}\n.btn-primary:disabled {\n  background: #4a4a4a;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .profile-container {\n    margin: 1rem;\n    padding: 1rem;\n  }\n  .profile-header {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .user-info {\n    flex-direction: column;\n    text-align: center;\n  }\n  .avatar {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .tabs {\n    flex-direction: column;\n  }\n  .tab-btn {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */\n";
  }
});

// src/app/components/profile/profile.component.ts
var ProfileComponent;
var init_profile_component3 = __esm({
  "src/app/components/profile/profile.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_profile_component();
    init_profile_component2();
    init_core();
    init_common();
    init_forms();
    init_auth_service();
    ProfileComponent = class ProfileComponent2 {
      authService;
      close = new EventEmitter();
      user = null;
      activeTab = "info";
      message = "";
      messageType = "success";
      // Form data objects
      profileForm = {
        firstName: "",
        lastName: "",
        email: ""
      };
      passwordForm = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      };
      constructor(authService) {
        this.authService = authService;
      }
      ngOnInit() {
        this.authService.currentUser$.subscribe((user) => {
          this.user = user;
          if (user) {
            this.profileForm.firstName = user.firstName;
            this.profileForm.lastName = user.lastName;
            this.profileForm.email = user.email;
          }
        });
      }
      setActiveTab(tab) {
        this.activeTab = tab;
        this.clearMessage();
      }
      updateProfile() {
        if (!this.user)
          return;
        const updates = {
          firstName: this.profileForm.firstName,
          lastName: this.profileForm.lastName,
          email: this.profileForm.email
        };
        const result = this.authService.updateProfile(updates);
        if (result.success) {
          this.showMessage(result.message, "success");
        } else {
          this.showMessage(result.message, "error");
        }
      }
      changePassword() {
        if (!this.passwordForm.currentPassword || !this.passwordForm.newPassword || !this.passwordForm.confirmPassword) {
          this.showMessage("Please fill in all password fields.", "error");
          return;
        }
        if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
          this.showMessage("New passwords do not match.", "error");
          return;
        }
        const result = this.authService.changePassword(this.passwordForm.currentPassword, this.passwordForm.newPassword, this.passwordForm.confirmPassword);
        if (result.success) {
          this.showMessage(result.message, "success");
          this.passwordForm.currentPassword = "";
          this.passwordForm.newPassword = "";
          this.passwordForm.confirmPassword = "";
        } else {
          this.showMessage(result.message, "error");
        }
      }
      showMessage(message, type) {
        this.message = message;
        this.messageType = type;
        setTimeout(() => this.clearMessage(), 5e3);
      }
      clearMessage() {
        this.message = "";
      }
      static ctorParameters = () => [
        { type: AuthService }
      ];
      static propDecorators = {
        close: [{ type: Output }]
      };
    };
    ProfileComponent = __decorate([
      Component({
        selector: "app-profile",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: profile_component_default,
        styles: [profile_component_default2]
      })
    ], ProfileComponent);
  }
});

// angular:jit:template:src\app\components\todo\todo.component.html
var todo_component_default;
var init_todo_component = __esm({
  "angular:jit:template:src\\app\\components\\todo\\todo.component.html"() {
    todo_component_default = `<div class="modal-overlay" (click)="onClose()">\r
  <div class="modal-content todo-modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>Todo Manager</h2>\r
      <button class="close-btn" (click)="onClose()">&times;</button>\r
    </div>\r
    \r
    <div class="todo-container">\r
      <!-- Tab Navigation -->\r
      <div class="tab-navigation">\r
        <button \r
          class="tab-btn" \r
          [class.active]="activeTab === 'add'"\r
          (click)="switchTab('add')">\r
          Add Task\r
        </button>\r
        <button \r
          class="tab-btn" \r
          [class.active]="activeTab === 'list'"\r
          (click)="switchTab('list')">\r
          Task List\r
        </button>\r
        <button \r
          class="tab-btn" \r
          [class.active]="activeTab === 'history'"\r
          (click)="switchTab('history')">\r
          History\r
        </button>\r
      </div>\r
\r
      <!-- Add Task Tab -->\r
      <div class="tab-content" *ngIf="activeTab === 'add'">\r
        <form (ngSubmit)="addTask()" class="todo-form">\r
          <div class="form-group">\r
            <label for="taskTitle">Task Title</label>\r
            <input \r
              type="text" \r
              id="taskTitle" \r
              [(ngModel)]="newTask.title" \r
              name="taskTitle"\r
              placeholder="Enter task title"\r
              required\r
            >\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="taskDescription">Description</label>\r
            <textarea \r
              id="taskDescription" \r
              [(ngModel)]="newTask.description" \r
              name="taskDescription"\r
              placeholder="Enter task description"\r
              rows="3"\r
            ></textarea>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="taskPriority">Priority</label>\r
            <select \r
              id="taskPriority" \r
              [(ngModel)]="newTask.priority" \r
              name="taskPriority"\r
            >\r
              <option value="low">Low</option>\r
              <option value="medium">Medium</option>\r
              <option value="high">High</option>\r
            </select>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="taskDueDate">Due Date</label>\r
            <input \r
              type="date" \r
              id="taskDueDate" \r
              [(ngModel)]="newTask.dueDate" \r
              name="taskDueDate"\r
            >\r
          </div>\r
          \r
          <button type="submit" class="add-task-btn" [disabled]="!newTask.title.trim()">\r
            Add Task\r
          </button>\r
        </form>\r
      </div>\r
\r
      <!-- Task List Tab -->\r
      <div class="tab-content" *ngIf="activeTab === 'list'">\r
        <div class="task-filters">\r
          <button \r
            class="filter-btn" \r
            [class.active]="taskFilter === 'all'"\r
            (click)="setFilter('all')">\r
            All ({{getTasks('all').length}})\r
          </button>\r
          <button \r
            class="filter-btn" \r
            [class.active]="taskFilter === 'pending'"\r
            (click)="setFilter('pending')">\r
            Pending ({{getTasks('pending').length}})\r
          </button>\r
          <button \r
            class="filter-btn" \r
            [class.active]="taskFilter === 'completed'"\r
            (click)="setFilter('completed')">\r
            Completed ({{getTasks('completed').length}})\r
          </button>\r
        </div>\r
\r
        <div class="task-list">\r
          <div \r
            class="task-item" \r
            *ngFor="let task of getFilteredTasks()" \r
            [class.completed]="task.completed"\r
            [class.priority-high]="task.priority === 'high'"\r
            [class.priority-medium]="task.priority === 'medium'"\r
            [class.priority-low]="task.priority === 'low'"\r
          >\r
            <div class="task-checkbox">\r
              <input \r
                type="checkbox" \r
                [checked]="task.completed" \r
                (change)="toggleTask(task.id)"\r
                [id]="'task-' + task.id"\r
              >\r
              <label [for]="'task-' + task.id"></label>\r
            </div>\r
            \r
            <div class="task-content">\r
              <h4 class="task-title">{{task.title}}</h4>\r
              <p class="task-description" *ngIf="task.description">{{task.description}}</p>\r
              <div class="task-meta">\r
                <span class="task-priority" [class]="'priority-' + task.priority">\r
                  {{task.priority | titlecase}}\r
                </span>\r
                <span class="task-date" *ngIf="task.dueDate">\r
                  Due: {{formatDate(task.dueDate)}}\r
                </span>\r
                <span class="task-created">\r
                  Created: {{formatDate(task.createdAt)}}\r
                </span>\r
              </div>\r
            </div>\r
            \r
            <div class="task-actions">\r
              <button class="edit-btn" (click)="editTask(task)" *ngIf="!task.completed">\r
                \u270F\uFE0F\r
              </button>\r
              <button class="delete-btn" (click)="deleteTask(task.id)">\r
                \u{1F5D1}\uFE0F\r
              </button>\r
            </div>\r
          </div>\r
          \r
          <div class="no-tasks" *ngIf="getFilteredTasks().length === 0">\r
            <p>No tasks found</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- History Tab -->\r
      <div class="tab-content" *ngIf="activeTab === 'history'">\r
        <div class="history-stats">\r
          <div class="stat-card">\r
            <h3>{{getCompletedTasks().length}}</h3>\r
            <p>Completed Tasks</p>\r
          </div>\r
          <div class="stat-card">\r
            <h3>{{getPendingTasks().length}}</h3>\r
            <p>Pending Tasks</p>\r
          </div>\r
          <div class="stat-card">\r
            <h3>{{getAllTasks().length}}</h3>\r
            <p>Total Tasks</p>\r
          </div>\r
        </div>\r
\r
        <div class="recent-activity">\r
          <h3>Recent Activity</h3>\r
          <div class="activity-list">\r
            <div \r
              class="activity-item" \r
              *ngFor="let activity of getRecentActivity()"\r
            >\r
              <div class="activity-icon" [class]="activity.type">\r
                <span *ngIf="activity.type === 'completed'">\u2705</span>\r
                <span *ngIf="activity.type === 'created'">\u2795</span>\r
                <span *ngIf="activity.type === 'deleted'">\u{1F5D1}\uFE0F</span>\r
              </div>\r
              <div class="activity-content">\r
                <p class="activity-text">{{activity.description}}</p>\r
                <span class="activity-time">{{formatDate(activity.timestamp)}}</span>\r
              </div>\r
            </div>\r
            \r
            <div class="no-activity" *ngIf="getRecentActivity().length === 0">\r
              <p>No recent activity</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Edit Task Modal -->\r
    <div class="edit-modal" *ngIf="editingTask" (click)="closeEditModal()">\r
      <div class="edit-content" (click)="$event.stopPropagation()">\r
        <h3>Edit Task</h3>\r
        <form (ngSubmit)="updateTask()">\r
          <div class="form-group">\r
            <label for="editTitle">Task Title</label>\r
            <input \r
              type="text" \r
              id="editTitle" \r
              [(ngModel)]="editingTask.title" \r
              name="editTitle"\r
              required\r
            >\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="editDescription">Description</label>\r
            <textarea \r
              id="editDescription" \r
              [(ngModel)]="editingTask.description" \r
              name="editDescription"\r
              rows="3"\r
            ></textarea>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="editPriority">Priority</label>\r
            <select \r
              id="editPriority" \r
              [(ngModel)]="editingTask.priority" \r
              name="editPriority"\r
            >\r
              <option value="low">Low</option>\r
              <option value="medium">Medium</option>\r
              <option value="high">High</option>\r
            </select>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="editDueDate">Due Date</label>\r
            <input \r
              type="date" \r
              id="editDueDate" \r
              [(ngModel)]="editingTask.dueDate" \r
              name="editDueDate"\r
            >\r
          </div>\r
          \r
          <div class="edit-actions">\r
            <button type="button" class="cancel-btn" (click)="closeEditModal()">\r
              Cancel\r
            </button>\r
            <button type="submit" class="save-btn">\r
              Save Changes\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\components\todo\todo.component.css
var todo_component_default2;
var init_todo_component2 = __esm({
  "angular:jit:style:src\\app\\components\\todo\\todo.component.css"() {
    todo_component_default2 = '/* src/app/components/todo/todo.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.todo-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 0;\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.3s ease;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.todo-container {\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n}\n.tab-navigation {\n  display: flex;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.tab-btn {\n  flex: 1;\n  padding: 15px 20px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6c757d;\n  transition: all 0.3s ease;\n  border-bottom: 3px solid transparent;\n}\n.tab-btn:hover {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.tab-btn.active {\n  color: #667eea;\n  border-bottom-color: #667eea;\n  background-color: white;\n}\n.tab-content {\n  flex: 1;\n  padding: 20px;\n  overflow-y: auto;\n}\n.todo-form {\n  max-width: 500px;\n  margin: 0 auto;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group input,\n.form-group textarea,\n.form-group select {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: border-color 0.3s ease;\n}\n.form-group input:focus,\n.form-group textarea:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group textarea {\n  resize: vertical;\n  font-family: inherit;\n}\n.add-task-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.add-task-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n.add-task-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.task-filters {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-btn {\n  padding: 8px 16px;\n  background-color: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6c757d;\n  transition: all 0.3s ease;\n}\n.filter-btn:hover {\n  background-color: #e9ecef;\n}\n.filter-btn.active {\n  background-color: #667eea;\n  border-color: #667eea;\n  color: white;\n}\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.task-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  padding: 16px;\n  background-color: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.task-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.1);\n}\n.task-item.completed {\n  opacity: 0.7;\n  background-color: #f8f9fa;\n}\n.task-item.completed .task-title {\n  text-decoration: line-through;\n}\n.task-item.priority-high {\n  border-left: 5px solid #dc3545;\n}\n.task-item.priority-medium {\n  border-left: 5px solid #ffc107;\n}\n.task-item.priority-low {\n  border-left: 5px solid #28a745;\n}\n.task-checkbox {\n  position: relative;\n  margin-top: 2px;\n}\n.task-checkbox input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n}\n.task-checkbox label {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e9ecef;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.task-checkbox input[type=checkbox]:checked + label {\n  background-color: #667eea;\n  border-color: #667eea;\n}\n.task-checkbox input[type=checkbox]:checked + label::after {\n  content: "\\2713";\n  position: absolute;\n  top: -2px;\n  left: 2px;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n}\n.task-content {\n  flex: 1;\n}\n.task-title {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n}\n.task-description {\n  margin: 0 0 12px 0;\n  color: #6c757d;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.task-meta {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  font-size: 12px;\n}\n.task-priority {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.task-priority.priority-high {\n  background-color: #dc3545;\n  color: white;\n}\n.task-priority.priority-medium {\n  background-color: #ffc107;\n  color: #212529;\n}\n.task-priority.priority-low {\n  background-color: #28a745;\n  color: white;\n}\n.task-date,\n.task-created {\n  color: #6c757d;\n}\n.task-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 2px;\n}\n.edit-btn,\n.delete-btn {\n  background: none;\n  border: none;\n  padding: 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s ease;\n}\n.edit-btn:hover {\n  background-color: #e3f2fd;\n}\n.delete-btn:hover {\n  background-color: #ffebee;\n}\n.no-tasks {\n  text-align: center;\n  padding: 40px;\n  color: #6c757d;\n}\n.no-tasks p {\n  margin: 0;\n  font-size: 16px;\n}\n.history-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.stat-card {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 20px;\n  border-radius: 12px;\n  text-align: center;\n}\n.stat-card h3 {\n  margin: 0 0 5px 0;\n  font-size: 2rem;\n  font-weight: bold;\n}\n.stat-card p {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.9;\n}\n.recent-activity h3 {\n  margin-bottom: 20px;\n  color: #495057;\n}\n.activity-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.activity-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n.activity-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.activity-icon.completed {\n  background-color: #d4edda;\n}\n.activity-icon.created {\n  background-color: #d1ecf1;\n}\n.activity-icon.deleted {\n  background-color: #f8d7da;\n}\n.activity-content {\n  flex: 1;\n}\n.activity-text {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  color: #495057;\n}\n.activity-time {\n  font-size: 12px;\n  color: #6c757d;\n}\n.no-activity {\n  text-align: center;\n  padding: 40px;\n  color: #6c757d;\n}\n.edit-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n.edit-content {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.edit-content h3 {\n  margin: 0 0 20px 0;\n  color: #495057;\n}\n.edit-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n}\n.cancel-btn,\n.save-btn {\n  flex: 1;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.cancel-btn {\n  background-color: #6c757d;\n  color: white;\n}\n.cancel-btn:hover {\n  background-color: #5a6268;\n}\n.save-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.save-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n}\n@media (max-width: 768px) {\n  .todo-modal {\n    width: 95%;\n    height: 90vh;\n  }\n  .todo-container {\n    height: calc(90vh - 80px);\n  }\n  .tab-navigation {\n    flex-direction: column;\n  }\n  .tab-btn {\n    padding: 12px;\n  }\n  .task-item {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .task-actions {\n    align-self: flex-end;\n  }\n  .history-stats {\n    grid-template-columns: 1fr;\n  }\n  .task-filters {\n    justify-content: center;\n  }\n  .edit-content {\n    width: 95%;\n    padding: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header {\n    padding: 15px;\n  }\n  .modal-header h2 {\n    font-size: 1.25rem;\n  }\n  .tab-content {\n    padding: 15px;\n  }\n  .todo-form {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=todo.component.css.map */\n';
  }
});

// src/app/services/todo.service.ts
var TodoService;
var init_todo_service = __esm({
  "src/app/services/todo.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    TodoService = class TodoService2 {
      tasks = [];
      activityLog = [];
      STORAGE_KEY = "todo_tasks";
      ACTIVITY_KEY = "todo_activity";
      constructor() {
        this.loadTasks();
        this.loadActivityLog();
      }
      loadTasks() {
        const savedTasks = localStorage.getItem(this.STORAGE_KEY);
        if (savedTasks) {
          try {
            this.tasks = JSON.parse(savedTasks);
          } catch (error) {
            console.error("Error loading tasks from localStorage:", error);
            this.tasks = [];
          }
        }
      }
      loadActivityLog() {
        const savedActivity = localStorage.getItem(this.ACTIVITY_KEY);
        if (savedActivity) {
          try {
            this.activityLog = JSON.parse(savedActivity);
          } catch (error) {
            console.error("Error loading activity log from localStorage:", error);
            this.activityLog = [];
          }
        }
      }
      saveTasks() {
        try {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
        } catch (error) {
          console.error("Error saving tasks to localStorage:", error);
        }
      }
      saveActivityLog() {
        try {
          localStorage.setItem(this.ACTIVITY_KEY, JSON.stringify(this.activityLog));
        } catch (error) {
          console.error("Error saving activity log to localStorage:", error);
        }
      }
      generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      }
      addActivity(type, description, taskId) {
        const activity = {
          id: this.generateId(),
          type,
          description,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          taskId
        };
        this.activityLog.unshift(activity);
        if (this.activityLog.length > 50) {
          this.activityLog = this.activityLog.slice(0, 50);
        }
        this.saveActivityLog();
      }
      addTask(title, description = "", priority = "medium", dueDate = "") {
        const task = {
          id: this.generateId(),
          title: title.trim(),
          description: description.trim(),
          priority,
          dueDate,
          completed: false,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        this.tasks.unshift(task);
        this.saveTasks();
        this.addActivity("created", `Created task: "${task.title}"`, task.id);
        return task;
      }
      getAllTasks() {
        return [...this.tasks];
      }
      getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
      }
      updateTask(updatedTask) {
        const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = __spreadValues({}, updatedTask);
          this.saveTasks();
          this.addActivity("updated", `Updated task: "${updatedTask.title}"`, updatedTask.id);
          return true;
        }
        return false;
      }
      toggleTask(id) {
        const task = this.getTaskById(id);
        if (task) {
          task.completed = !task.completed;
          if (task.completed) {
            task.completedAt = (/* @__PURE__ */ new Date()).toISOString();
            this.addActivity("completed", `Completed task: "${task.title}"`, task.id);
          } else {
            delete task.completedAt;
            this.addActivity("updated", `Reopened task: "${task.title}"`, task.id);
          }
          this.saveTasks();
          return true;
        }
        return false;
      }
      deleteTask(id) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
          const deletedTask = this.tasks[taskIndex];
          this.tasks.splice(taskIndex, 1);
          this.saveTasks();
          this.addActivity("deleted", `Deleted task: "${deletedTask.title}"`, deletedTask.id);
          return true;
        }
        return false;
      }
      getRecentActivity(limit = 10) {
        return this.activityLog.slice(0, limit);
      }
      getCompletedTasksCount() {
        return this.tasks.filter((task) => task.completed).length;
      }
      getPendingTasksCount() {
        return this.tasks.filter((task) => !task.completed).length;
      }
      getTasksByPriority(priority) {
        return this.tasks.filter((task) => task.priority === priority);
      }
      getOverdueTasks() {
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        return this.tasks.filter((task) => !task.completed && task.dueDate && task.dueDate < today);
      }
      clearAllTasks() {
        this.tasks = [];
        this.activityLog = [];
        this.saveTasks();
        this.saveActivityLog();
      }
      clearCompletedTasks() {
        const completedTasks = this.tasks.filter((task) => task.completed);
        this.tasks = this.tasks.filter((task) => !task.completed);
        this.saveTasks();
        if (completedTasks.length > 0) {
          this.addActivity("deleted", `Cleared ${completedTasks.length} completed tasks`, "");
        }
      }
      static ctorParameters = () => [];
    };
    TodoService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], TodoService);
  }
});

// src/app/components/todo/todo.component.ts
var TodoComponent;
var init_todo_component3 = __esm({
  "src/app/components/todo/todo.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_todo_component();
    init_todo_component2();
    init_core();
    init_common();
    init_forms();
    init_todo_service();
    TodoComponent = class TodoComponent2 {
      todoService;
      close = new EventEmitter();
      activeTab = "add";
      taskFilter = "all";
      newTask = {
        title: "",
        description: "",
        priority: "medium",
        dueDate: ""
      };
      editingTask = null;
      constructor(todoService) {
        this.todoService = todoService;
      }
      ngOnInit() {
      }
      onClose() {
        this.close.emit();
      }
      switchTab(tab) {
        this.activeTab = tab;
      }
      addTask() {
        if (this.newTask.title.trim()) {
          this.todoService.addTask(this.newTask.title, this.newTask.description, this.newTask.priority, this.newTask.dueDate);
          this.newTask = {
            title: "",
            description: "",
            priority: "medium",
            dueDate: ""
          };
          this.activeTab = "list";
        }
      }
      getTasks(filter2) {
        const allTasks = this.todoService.getAllTasks();
        switch (filter2) {
          case "pending":
            return allTasks.filter((task) => !task.completed);
          case "completed":
            return allTasks.filter((task) => task.completed);
          default:
            return allTasks;
        }
      }
      getFilteredTasks() {
        return this.getTasks(this.taskFilter);
      }
      setFilter(filter2) {
        this.taskFilter = filter2;
      }
      toggleTask(taskId) {
        this.todoService.toggleTask(taskId);
      }
      deleteTask(taskId) {
        if (confirm("Are you sure you want to delete this task?")) {
          this.todoService.deleteTask(taskId);
        }
      }
      editTask(task) {
        this.editingTask = __spreadValues({}, task);
      }
      updateTask() {
        if (this.editingTask) {
          this.todoService.updateTask(this.editingTask);
          this.closeEditModal();
        }
      }
      closeEditModal() {
        this.editingTask = null;
      }
      // Helper methods for templates
      getAllTasks() {
        return this.todoService.getAllTasks();
      }
      getCompletedTasks() {
        return this.todoService.getAllTasks().filter((task) => task.completed);
      }
      getPendingTasks() {
        return this.todoService.getAllTasks().filter((task) => !task.completed);
      }
      getRecentActivity() {
        return this.todoService.getRecentActivity();
      }
      formatDate(dateString) {
        if (!dateString)
          return "";
        const date = new Date(dateString);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      }
      static ctorParameters = () => [
        { type: TodoService }
      ];
      static propDecorators = {
        close: [{ type: Output }]
      };
    };
    TodoComponent = __decorate([
      Component({
        selector: "app-todo",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: todo_component_default,
        styles: [todo_component_default2]
      })
    ], TodoComponent);
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_common();
    init_login_component3();
    init_signup_component3();
    init_profile_component3();
    init_todo_component3();
    init_auth_service();
    App = class App2 {
      authService;
      title = "task";
      showLogin = false;
      showSignup = false;
      showProfile = false;
      showTodo = false;
      activeSection = "home";
      // Track which section is currently active
      currentUser = null;
      constructor(authService) {
        this.authService = authService;
      }
      ngOnInit() {
        this.updateActiveSection();
        this.authService.currentUser$.subscribe((user) => {
          this.currentUser = user;
        });
      }
      ngOnDestroy() {
      }
      onScroll() {
        this.updateActiveSection();
      }
      updateActiveSection() {
        const sections = ["home", "about", "contact"];
        const scrollPosition = window.scrollY + 150;
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
        this.showTodo = false;
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
        this.activeSection = "home";
        this.scrollToSection("home");
      }
      showAbout() {
        this.activeSection = "about";
        this.scrollToSection("about");
      }
      showContact() {
        this.activeSection = "contact";
        this.scrollToSection("contact");
      }
      scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
      static ctorParameters = () => [
        { type: AuthService }
      ];
      static propDecorators = {
        onScroll: [{ type: HostListener, args: ["window:scroll"] }]
      };
    };
    App = __decorate([
      Component({
        selector: "app-root",
        standalone: true,
        imports: [RouterOutlet, CommonModule, LoginComponent, SignupComponent, ProfileComponent, TodoComponent],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, task");
      });
    });
  }
});
export default require_app_spec();
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router.mjs:
@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v20.0.6
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-app.spec.js.map
