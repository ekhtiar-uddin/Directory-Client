# 🚴‍♂️ Bike Shop Client

A modern, full-featured e-commerce platform for bicycle sales and management, built with React, TypeScript, and Redux Toolkit.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Routing](#routing)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Bike Shop Client is a comprehensive e-commerce application designed for bicycle retail businesses. The platform provides a complete solution for managing products, orders, customers, and administrative functions with a modern, responsive user interface.

### Key Capabilities

- **Customer Portal**: Browse products, place orders, and manage account
- **Admin Dashboard**: Complete product and order management system
- **User Authentication**: Secure login/register with role-based access
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Real-time Updates**: Dynamic content with Redux state management

## ✨ Features

### ��️ Customer Features

- Product browsing and search
- Detailed product information and images
- Shopping cart functionality
- Secure checkout process
- Order tracking and history
- User profile management
- Password change functionality

### ��‍💼 Admin Features

- **Product Management**

  - Add, edit, and delete products
  - Inventory tracking
  - Category management
  - Stock status monitoring

- **Order Management**

  - View all customer orders
  - Order status updates
  - Order processing workflow

- **User Management**

  - Customer account administration
  - User role management
  - Account status control

- **Analytics Dashboard**
  - Sales metrics and charts
  - Performance analytics
  - Revenue tracking

### �� Security Features

- JWT-based authentication
- Role-based access control (Admin/Customer)
- Protected routes
- Secure API communication
- Session persistence

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.3.1** - Modern UI library
- **TypeScript 5.6.2** - Type-safe development
- **Vite 6.0.5** - Fast build tool and dev server

### State Management

- **Redux Toolkit 2.5.0** - Predictable state management
- **Redux Persist 6.0.0** - State persistence
- **React Redux 9.2.0** - React bindings

### UI/UX Libraries

- **Ant Design 5.23.1** - Enterprise UI components
- **Material-UI 6.4.5** - Material Design components
- **Tailwind CSS 4.0.3** - Utility-first CSS framework
- **DaisyUI 5.0.0** - Component library for Tailwind
- **Styled Components 6.1.15** - CSS-in-JS styling

### Routing & Navigation

- **React Router DOM 7.1.3** - Client-side routing
- **Protected Routes** - Role-based access control

### Form Handling & Validation

- **React Hook Form 7.54.2** - Performant forms
- **Zod 3.24.1** - TypeScript-first schema validation
- **Hookform Resolvers 3.10.0** - Form validation integration

### HTTP Client & API

- **Axios 1.7.9** - HTTP client for API calls
- **RTK Query** - Data fetching and caching

### Utilities & Icons

- **Lucide React 0.475.0** - Beautiful icons
- **React Icons 5.4.0** - Icon library
- **React Feather 2.0.10** - Feather icons
- **Moment.js 2.30.1** - Date manipulation
- **JWT Decode 4.0.0** - JWT token handling

### Development Tools

- **ESLint 9.17.0** - Code linting
- **TypeScript ESLint 8.18.2** - TypeScript linting
- **Sass Embedded 1.85.0** - CSS preprocessing

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd directory-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your environment variables:

   ```env
   VITE_API_BASE_URL=your_api_base_url
   VITE_APP_NAME=Bike Shop Client
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎮 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# TypeScript build with type checking
npm run buildtsc

# Preview production build
npm run preview

# Lint code
npm run lint

# Quick commit and push
npm run commit
```

### Available Scripts

- `dev` - Start development server with hot reload
- `build` - Create optimized production build
- `buildtsc` - TypeScript build with type checking
- `preview` - Preview production build locally
- `lint` - Run ESLint for code quality
- `commit` - Quick git add, commit, and push

## 📁 Project Structure

````
src/
├── App.tsx                       # Main application component
├── main.tsx                      # Application entry point
├── index.css                     # Global styles
├── vite-env.d.ts                 # Vite environment types
├── components/                    # Reusable UI components
│   ├── form/                     # Form components (PHDatePicker, PHForm, etc.)
│   ├── layout/                   # Layout components (MainLayout, Sidebar, etc.)
│   ├── reusable/                 # Shared UI components (button, card, dialog, etc.)
│   ├── Skeleton/                 # Loading skeleton components
│   ├── ui/                       # Feature-specific UI components
│   │   ├── banner/               # Banner and slider components
│   │   ├── navbar/               # Navigation components
│   │   └── pages/                # Page-specific components
│   │       ├── home/             # Homepage components
│   │       ├── all-products/     # Product listing components
│   │       ├── about/            # About page components
│   │       ├── bikeDetails/      # Product detail components
│   │       ├── checkout/         # Checkout flow components
│   │       ├── error/            # Error page components
│   │       └── verifyOrder/      # Order verification components
│   └── widget/                   # Widget components
├── pages/                        # Application pages
│   ├── admin/                    # Admin dashboard pages
│   │   ├── academicManagement/   # Academic management features
│   │   ├── orderManagemnt/       # Order management features
│   │   ├── productManagement/    # Product management features
│   │   └── userManagement/       # User management features
│   ├── customer/                 # Customer pages
│   │   ├── orderManagemnt/       # Customer order management
│   │   └── ChangePassword.tsx    # Password change functionality
│   ├── login/                    # Authentication pages
│   ├── register/                 # Registration pages
│   ├── overviewDashboard/        # Dashboard overview components
│   └── dashboardUserProfile/     # User profile dashboard
├── redux/                        # State management
│   ├── api/                      # API configuration
│   │   └── baseApi.ts            # Base API setup
│   ├── features/                 # Redux slices
│   │   ├── admin/                # Admin-related state
│   │   └── auth/                 # Authentication state
│   ├── store.ts                  # Redux store configuration
│   └── hooks.ts                  # Redux hooks
├── routes/                       # Application routing
│   ├── admin.routes.tsx          # Admin route definitions
│   ├── customer.routes.tsx       # Customer route definitions
│   └── routes.tsx                # Main route configuration
├── types/                        # TypeScript type definitions
│   ├── global.ts                 # Global type definitions
│   ├── index.ts                  # Type exports
│   ├── orderManagement.type.ts   # Order management types
│   ├── productManagement.type.ts # Product management types
│   ├── sidebar.types.ts          # Sidebar component types
│   └── userManagement.type.ts    # User management types
├── utils/                        # Utility functions
│   ├── routesGenerator.ts        # Route generation utilities
│   ├── sidebarItemsGenerator.tsx # Sidebar item generation
│   └── verifyToken.ts            # Token verification utilities
├── schemas/                      # Data validation schemas
│   └── academicManagement.schema.ts
├── constants/                    # Application constants
│   ├── global.ts                 # Global constants
│   └── semester.ts               # Semester-related constants
├── lib/                          # Library utilities
│   └── utils.ts                  # Common utility functions
├── config/                       # Configuration files
├── hooks/                        # Custom React hooks
├── assets/                       # Static assets
│   ├── icons/                    # Icon assets
│   ├── images/                   # Image assets
│   └── react.svg                 # React logo
└── styles/                       # Additional styles
    └── loading/                  # Loading animation styles


## 🔌 API Integration

The application uses RTK Query for efficient API communication:

- **Base API Configuration**: `src/redux/api/baseApi.ts`
- **Feature-specific APIs**:
  - `src/redux/features/admin/` - Admin management APIs
  - `src/redux/features/auth/` - Authentication APIs

### API Features
- Automatic caching and invalidation
- Optimistic updates
- Error handling
- Loading states
- Type-safe API calls

## 🗃️ State Management

### Redux Store Structure
- **Auth Slice**: User authentication and session management
- **Base API**: RTK Query for API state management
- **Persisted State**: Authentication state persists across sessions

### Key State Management Features
- JWT token management
- User role-based access control
- Persistent authentication state
- Optimistic UI updates
- Centralized error handling

## 🛣️ Routing

The application uses React Router with a hierarchical routing structure:

### Public Routes
- `/` - Homepage
- `/all-products` - Product catalog
- `/about` - About page
- `/contact` - Contact page
- `/details/:id` - Product details
- `/login` - Authentication
- `/register` - User registration

### Protected Routes
- `/dashboard` - Main dashboard
- `/admin/*` - Admin-only routes
- `/customer/*` - Customer portal routes

### Route Protection
- Role-based access control
- Authentication guards
- Automatic redirects for unauthorized access

## 🎨 UI/UX Features

### Design System
- **Ant Design**: Primary component library
- **Material-UI**: Additional UI components
- **Tailwind CSS**: Utility-first styling
- **Custom Theme**: Branded color scheme and typography

### Responsive Design
- Mobile-first approach
- Responsive breakpoints
- Touch-friendly interactions
- Optimized for all screen sizes

### User Experience
- Loading states and skeletons
- Toast notifications (Sonner)
- Form validation feedback
- Smooth transitions and animations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
````

3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Code Style Guidelines

- Follow TypeScript best practices
- Use ESLint configuration
- Write meaningful commit messages
- Add proper documentation
- Include type definitions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
