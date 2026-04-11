# Testora Frontend

A modern, feature-rich learning platform built with **Next.js 16**, **React 19**, and **TypeScript**. Testora Frontend provides users with a comprehensive experience for exam preparation, course discovery, marketplace browsing, and educational content consumption through an intuitive and responsive interface.

## 🎯 Project Overview

Testora Frontend is a consumer-facing web application that serves as the primary interface for the Testora learning ecosystem. It enables users to:

- Register and manage their educational accounts
- Browse and purchase courses, exam packages, and learning materials
- Prepare for exams with interactive question-based assessments
- Track their learning progress and performance
- Access educational content through an integrated blog
- Manage orders and subscriptions
- Personalize their learning experience through user settings

## ✨ Key Features

### 🔐 Authentication & Account Management

- User registration with email verification
- Secure login and session management
- Password recovery with OTP verification
- Comprehensive user profile management
- Account settings and preference customization
- Role-based access control

### 📚 Exam & Learning System

- Interactive question-based exam interface
- Progress tracking and performance analytics
- Real-time answer validation
- Comprehensive learning paths
- Performance metrics and analytics

### 📖 Educational Content

- Full-featured blog platform with articles and resources
- Content categorization and tagging
- Advanced search and filtering capabilities
- Reading progress tracking
- Content recommendations

### 🛍️ Marketplace & E-Commerce

- Browse and filter courses, exam packages, and learning products
- Detailed product information with descriptions and reviews
- Product categorization and advanced search
- Shopping cart with real-time updates
- Secure checkout process
- Multiple payment method support
- Order confirmation and tracking
- Comprehensive order history and management

### 💳 Subscription & Premium Features

- Multiple premium package options
- Premium membership management
- Subscription tracking and renewal
- Upgrade/downgrade options
- Exclusive premium content access

### 🏠 Home & Discovery

- Personalized user dashboard
- Featured courses and products
- Trending content recommendations
- Quick access to recent activities

## 🛠️ Tech Stack

### Core Framework

- **Next.js 16.1.6** - React framework for production
- **React 19.2.3** - UI library
- **React DOM 19.2.3** - DOM rendering
- **TypeScript 5** - Static type checking

### State Management & Forms

- **@reduxjs/toolkit 2.11.2** - Redux state management
- **react-redux 9.2.0** - React-Redux bindings
- **react-hook-form 7.71.2** - Performant, flexible form validation
- **@hookform/resolvers 5.2.2** - Schema validation resolvers
- **zod 4.3.6** - TypeScript-first schema validation

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **@tailwindcss/postcss 4** - PostCSS plugin for Tailwind
- **class-variance-authority 0.7.1** - CSS class composition utility
- **tailwind-merge 3.5.0** - Combines Tailwind classes
- **tw-animate-css 1.4.0** - Animation utilities
- **lucide-react 0.577.0** - Beautiful, consistent icons
- **shadcn 4.0.5** - High-quality React components
- **clsx 2.1.1** - Conditional classname concatenation
- **@base-ui/react 1.2.0** - Customizable React components

### Development Tools

- **ESLint 9** - Code quality and style linting
- **Prettier 3.8.1** - Code formatter
- **PostCSS 4** - CSS transformations

## 📁 Project Structure

```
testora-frontend/
├── public/                    # Static assets and images
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page
│   │   ├── (auth)/            # Authentication routes group
│   │   │   ├── layout.tsx
│   │   │   ├── login/         # Login page
│   │   │   ├── forgot-password/
│   │   │   ├── reset-password/
│   │   │   └── verify-otp/
│   │   └── (root)/            # Main application routes
│   ├── components/            # Reusable React components
│   │   ├── common/            # Shared components
│   │   ├── home/              # Home page components
│   │   └── ui/                # UI component library
│   ├── constants/             # Application constants
│   │   └── index.ts
│   ├── lib/                   # Utility functions and helpers
│   │   ├── blog-data.ts
│   │   ├── utils.ts
│   │   └── ...
│   ├── services/              # API integration layer
│   │   └── api.ts             # API client configuration
│   ├── store/                 # Redux store configuration
│   │   ├── index.ts           # Store setup
│   │   ├── hooks.ts           # Custom Redux hooks
│   │   ├── ReduxProvider.tsx  # Redux provider component
│   │   └── slices/            # Redux slices (reducers)
│   └── types/                 # TypeScript type definitions
│       └── index.ts
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
├── components.json            # Component configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or **yarn** 1.22.x or **pnpm** 8.x

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd testora-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Available Scripts

### Development

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build optimized production bundle
- **`npm start`** - Start production server

### Code Quality

- **`npm run lint`** - Run ESLint to check code quality
- **`npm run lint:fix`** - Fix ESLint issues automatically
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check if code is formatted correctly

## 🔧 Configuration Files

### TypeScript Configuration (`tsconfig.json`)

- Target: ES2017
- Strict mode enabled for type safety
- Path alias: `@/*` maps to `./src/*`
- JSX: React 19 compatible

### Next.js Configuration (`next.config.ts`)

- Optimized image handling with remote pattern support
- Support for HTTP and HTTPS images

### Tailwind CSS Configuration

- Utility-first CSS framework
- Custom theming and extensions
- PostCSS integration

## 🔌 API Integration

The application integrates with a backend API through the centralized API client located at `src/services/api.ts`.

### Key Endpoints

- Authentication endpoints (login, register, verify OTP)
- User profile and settings
- Product/course catalog and search
- Shopping cart and checkout
- Orders and subscription management
- Blog content and articles
- Questions and exam systems

## 📦 State Management

Redux is used for global state management with `@reduxjs/toolkit`:

- **Slices** in `src/store/slices/` handle different domains
- **Custom hooks** in `src/store/hooks.ts` provide easy access to state
- **ReduxProvider** wraps the application for state availability

## 🎨 UI Components

The application uses a combination of component libraries:

- **shadcn/ui** - Pre-built, customizable components
- **Base UI** - Headless UI components
- **Lucide React** - Consistent icon set
- **Custom components** - Domain-specific components in `src/components/`

### Component Organization

```
components/
├── common/      # Sidebar, header, navigation
├── home/        # Home page specific components
└── ui/          # Reusable UI components
```

## 🧪 Form Validation

The application uses:

- **react-hook-form** for efficient form management
- **zod** for schema-based validation
- **@hookform/resolvers** for schema integration

Form validation is type-safe and performant with minimal re-renders.

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Responsive breakpoints for all screen sizes
- Touch-friendly interface elements
- Optimized for mobile, tablet, and desktop displays

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚢 Deployment

### Vercel (Recommended for Next.js)

```bash
vercel
```

### Docker

Create a `Dockerfile` and Docker Compose configuration for containerized deployment.

### Build Steps

1. Install dependencies: `npm install`
2. Build the application: `npm run build`
3. Start production server: `npm start`

## 👥 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -am 'Add feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Submit a pull request

### Code Standards

- Follow ESLint rules
- Format code with Prettier
- Write meaningful commit messages
- Keep components small and focused
- Use TypeScript for type safety

## 🐛 Troubleshooting

### Common Issues

**Issue: `useSearchParams` errors in production build**

- Solution: Wrap components using `useSearchParams` in `Suspense` boundaries when used in server components

**Issue: Type conflicts with form validation**

- Solution: Use direct `schema.safeParse()` instead of resolver library for better compatibility

**Issue: Build errors with image loading**

- Check `next.config.ts` image configuration
- Verify remote image domains are whitelisted

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For issues, questions, or suggestions:

- Create an issue in the repository
- Contact the development team
- Check documentation in related projects

## 🔗 Related Projects

- **testora-dashboard** - Admin dashboard for managing the platform
- **testora-backend** - Backend API service

## 📊 Performance Optimization

- Next.js image optimization
- Code splitting and lazy loading
- Tailwind CSS purging for smaller bundle size
- Redux for efficient state updates
- React 19's improved rendering

---

**Version:** 0.1.0
**Last Updated:** April 2026
**Maintainer:** Development Team
