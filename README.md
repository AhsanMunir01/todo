# Todo App

A modern, feature-rich Todo application built with Angular 20 that helps you organize your tasks efficiently and stay productive.

## 👨‍💻 Developer

**GitHub**: [AhsanMunir01](https://github.com/AhsanMunir01)

## 🌐 Live Demo

The application is deployed on GitHub Pages: [https://ahsanmunir01.github.io/todo/](https://ahsanmunir01.github.io/todo/)

## 🚀 Features

### Core Functionality
- **Task Management**: Add, edit, update, and delete tasks
- **Task Prioritization**: Set priority levels (Low, Medium, High)
- **Due Dates**: Assign due dates to your tasks
- **Task Status**: Mark tasks as completed or pending
- **Task Filtering**: Filter tasks by status (All, Pending, Completed)

### User Management
- **User Authentication**: Secure sign-up and sign-in system
- **User Profiles**: Manage your personal profile information
- **Session Management**: Persistent login with localStorage

### Activity Tracking
- **Activity History**: Track all task-related activities
- **Activity Types**: Monitor task creation, completion, updates, and deletions
- **Timestamps**: View when activities occurred

### User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modal-based Interface**: Clean, popup-based task and profile management
- **Intuitive Navigation**: Easy-to-use navigation with active states
- **Modern Styling**: Clean and professional SCSS-based styling

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 20
- **Language**: TypeScript 5.8.2
- **Styling**: CSS
- **Data Storage**: LocalStorage for persistence
- **State Management**: RxJS with BehaviorSubject
- **Forms**: Angular Reactive Forms
- **Testing**: Jasmine & Karma
- **Build Tool**: Angular CLI

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js**: Version 18.19 or higher
- **npm**: Version 9.0 or higher
- **Angular CLI**: Version 20.0.5 or higher

## 🔧 Installation1. **Clone the repository**   ```bash   git clone <repository-url>   cd task   ```2. **Install dependencies**   ```bash   npm install   ```3. **Install Angular CLI (if not already installed)**
   ```bash
   npm install -g @angular/cli
   ```

## 🚀 Running the Application

### Development Server
Start the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Build for Production
Create a production build:
```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests
Execute unit tests:
```bash
npm test
# or
ng test
```

### Watch Mode for Development
Build in watch mode for development:
```bash
npm run watch
# or
ng build --watch --configuration development
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/           # Login component
│   │   ├── signup/          # User registration component
│   │   ├── profile/         # User profile management
│   │   └── todo/           # Main todo management component
│   ├── services/
│   │   ├── auth.service.ts  # Authentication service
│   │   └── todo.service.ts  # Todo management service
│   ├── app.config.ts        # App configuration
│   ├── app.routes.ts        # Routing configuration
│   ├── app.html             # Main app template
│   ├── app.ts               # Main app component
│   └── app.css              # Global app styles
├── index.html               # Main HTML file
├── main.ts                  # Application entry point
└── styles.scss              # Global styles
```

## 💡 Usage Guide

### Getting Started
1. **Sign Up**: Create a new account or sign in with existing credentials
2. **Navigation**: Use the top navigation to access different sections
3. **Add Tasks**: Click on "Todo" to open the task management modal

### Task Management
1. **Adding Tasks**:
   - Click the "Todo" button in the navigation
   - Fill in task details (title, description, priority, due date)
   - Click "Add Task" to save

2. **Managing Tasks**:
   - View all tasks in the "List" tab
   - Filter tasks by status (All, Pending, Completed)
   - Mark tasks as complete by clicking the checkbox
   - Edit tasks using the edit button
   - Delete tasks with the delete button

3. **Activity History**:
   - View your activity history in the "History" tab
   - See timestamps for all task-related activities

### Profile Management
- Click "Profile" to manage your personal information
- Update your first name, last name, and email
- View your account creation date

## 🔒 Data Persistence

The application uses localStorage to persist:
- **User Data**: Account information and authentication state
- **Tasks**: All task data including completion status
- **Activity Logs**: History of all task-related activities

Data persists across browser sessions and page refreshes.

## 🎨 Customization

### Styling
- Global styles are in `src/styles.scss`
- Component-specific styles are in respective `.css` files
- The app uses a modern, clean design with responsive layouts

### Adding Features
The modular architecture makes it easy to add new features:
- Create new components in the `components/` directory
- Add new services in the `services/` directory
- Update routing in `app.routes.ts`

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   ng serve --port 4201
   ```

2. **Node Modules Issues**
   ```bash
   Remove-Item -Recurse -Force node_modules
   npm install
   ```

3. **Build Errors**
   ```bash
   ng cache clean
   npm run build
   ```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For support, please contact:
- **Email**: support@todoapp.com
- **Phone**: +924200000000
- **Address**: 123 Task Street, Productivity City, PC 12345

## 🔮 Future Enhancements

Planned features for future releases:
- Task categories and tags
- Task search functionality
- Data export/import
- Email notifications
- Dark mode theme
- Collaborative task sharing
- Task deadline reminders
- Advanced filtering options

## 🚀 Deployment

### GitHub Pages Deployment

This application is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered on every push to the main branch.

#### Manual Deployment

To deploy manually, run:

```bash
npm run deploy
```

This will:
1. Build the application for production with the correct base href
2. Deploy the built files to the gh-pages branch

#### Deployment Configuration

- **Base href**: `/todo/` (configured for GitHub Pages)
- **Build output**: `dist/task/`
- **GitHub Pages branch**: `gh-pages`
- **Auto-deployment**: Enabled via GitHub Actions

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build:prod
```

## 🛠️ Angular CLI Information

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

**Built with ❤️ using Angular 20**