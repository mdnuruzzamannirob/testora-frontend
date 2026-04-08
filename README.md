# Testora Frontend

A modern, feature-rich platform for exam preparation and online learning. Built with Next.js 16, React 19, and TypeScript, Testora provides users with tools to learn, purchase exams/courses, manage their profile, and engage with educational content through a seamless marketplace experience.

## Overview

Testora Frontend is a comprehensive learning platform that combines exam preparation, course marketplace, and educational resources. It offers users an intuitive interface to discover and purchase learning products, track their progress, and access quality educational content through an integrated blog and marketplace.

## Key Features

### User Authentication & Account Management

- User registration with email verification
- Secure login system
- Password recovery with OTP verification
- User profile management
- Account settings and preferences

### Exam & Learning System

- Question-based exam preparation
- Interactive exam interface
- Progress tracking
- Performance analytics

### Educational Content

- Comprehensive blog platform
- Learning articles and resources
- Content categorization
- Reading progress tracking

### Marketplace & E-Commerce

- Browse available courses and packages
- Detailed product information
- Product categories and filtering
- Shopping cart functionality
- Secure checkout process
- Order confirmation and tracking
- Order history and management

### Subscription Management

- Multiple package options
- Premium membership features
- Subscription tracking
- Package management dashboard

### Home Page

- Feature showcase
- Platform statistics
- How-it-works tutorial
- Package comparison
- Call-to-action sections
- Testimonials and success stories

## Tech Stack

### Core Framework

- **Next.js 16.1.6** - React framework with SSR/SSG capabilities
- **React 19.2.3** - UI library with latest features
- **TypeScript 5** - Static type checking and better DX

### State Management & Forms

- **Redux Toolkit 2.11.2** - Predictable state container
- **React-Redux 9.2.0** - Official React bindings for Redux
- **React Hook Form 7.71.2** - Performant form management
- **Zod 4.3.6** - TypeScript-first schema validation

### UI & Components

- **TailwindCSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Base UI React 1.2.0** - Accessible, unstyled base components
- **Lucide React 0.577.0** - Beautiful icon library
- **Class Variance Authority 0.7.1** - Type-safe component variants
- **Tailwind Merge 3.5.0** - Intelligent TailwindCSS class composition

### Developer Experience

- **ESLint 9** - Code quality and consistency
- **Prettier 3.8.1** - Automatic code formatting
- **TypeScript** - Type safety throughout the application

## Project Structure

```
src/
├── app/                           # Next.js app directory
│   ├── (auth)/                   # Authentication route group
│   │   ├── login/               # User login page
│   │   ├── register/            # User registration
│   │   ├── forgot-password/      # Password recovery initiation
│   │   ├── check-email/          # Email verification status
│   │   ├── verify-code/          # OTP/code verification
│   │   └── reset-password/       # Password reset with token
│   ├── (root)/                   # Public route group
│   │   ├── page.tsx             # Home page with platform overview
│   │   ├── about/               # About us page
│   │   ├── contact/             # Contact form
│   │   ├── packages/            # Package/pricing page
│   │   ├── blog/                # Blog listing and articles
│   │   ├── marketplace/         # Product marketplace browsing
│   │   ├── cart/                # Shopping cart
│   │   ├── checkout/            # Checkout process
│   │   ├── order-confirmation/  # Post-purchase confirmation
│   │   ├── orders/              # User order history
│   │   ├── my-packages/         # User subscriptions
│   │   ├── profile/             # User profile management
│   │   ├── privacy-policy/      # Privacy policy
│   │   └── terms-of-service/    # Terms of service
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                    # Reusable React components
│   ├── common/                   # Shared UI components (nav, footer, etc.)
│   ├── home/                     # Home page components
│   │   ├── Banner.tsx           # Hero banner
│   │   ├── About.tsx            # About section
│   │   ├── Features.tsx          # Features showcase
│   │   ├── Packages.tsx          # Pricing/packages section
│   │   ├── Marketplace.tsx       # Marketplace preview
│   │   ├── Blog.tsx              # Blog preview section
│   │   ├── Exam.tsx              # Exam preparation section
│   │   ├── HowItWorks.tsx        # Platform tutorial
│   │   ├── AppScreens.tsx        # App interface showcase
│   │   ├── Stats.tsx             # Platform statistics
│   │   └── CTA.tsx               # Call-to-action sections
│   └── ui/                        # Base UI components
├── constants/                     # Application constants
│   └── index.ts                  # Routes, API config, pagination defaults
├── lib/                          # Utility functions and helpers
│   ├── blog-data.ts             # Blog mock data
│   ├── utils.ts                 # Common utility functions
│   └── [other]-data.ts          # Domain-specific mock data
├── services/                      # API integration layer
│   └── api.ts                    # Centralized API client
├── store/                         # Redux store configuration
│   ├── slices/                   # Redux reducers
│   │   ├── authSlice.ts         # Authentication state
│   │   ├── uiSlice.ts           # UI state
│   │   └── cartSlice.ts         # Shopping cart state
│   ├── hooks.ts                  # Custom Redux hooks
│   └── index.ts                  # Store configuration
└── types/                         # TypeScript type definitions
    └── index.ts                  # Common types and interfaces
```

## Installation

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Setup Instructions

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
# or
bun install
```

3. **Configure environment variables**
   Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Development

### Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000). Changes to files will auto-update in the browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

| Command                | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start development server with hot module replacement |
| `npm run build`        | Create optimized production build                    |
| `npm start`            | Run production server                                |
| `npm run lint`         | Run ESLint to check code quality                     |
| `npm run lint:fix`     | Run ESLint and fix fixable issues                    |
| `npm run format`       | Format all code with Prettier                        |
| `npm run format:check` | Check code formatting without making changes         |

## User Flows

### Authentication Flow

```
Public Pages → Login/Register → Email Verification
           → Forgot Password → OTP Verification → Reset Password
           → Logged In → Marketplace, Profile, Orders
```

### Shopping Flow

```
Home → Browse Marketplace → Product Details
    → Add to Cart → Review Cart → Checkout
    → Payment → Order Confirmation → Order History
```

### Learning Flow

```
Home → Exam Section → Take Exam → View Results
    → Blog → Read Articles → Track Progress
```

## State Management

The application uses Redux Toolkit for global state:

### Auth Slice

Manages user authentication state:

- User login/logout
- User profile data
- Authentication tokens
- Session management

### UI Slice

Manages application UI state:

- Modals and dialogs
- Toast notifications
- Sidebar/menu state
- Theme preferences

### Cart Slice

Manages shopping cart:

- Cart items
- Quantities
- Total calculations
- Persistent cart state

## API Integration

The frontend communicates with a backend API:

```
Base URL: http://localhost:5000/api (default development)
```

Override via the `NEXT_PUBLIC_API_URL` environment variable.

### API Service

Centralized API client in `src/services/api.ts`:

- Authentication endpoints
- User management
- Product/marketplace endpoints
- Blog endpoints
- Order processing

## Form Validation

Form validation is implemented using:

- **Zod** - Type-safe schema definition and runtime validation
- **React Hook Form** - Efficient form state and validation
- Custom validation hooks for complex business logic

## Security Features

- Environment-based API URL configuration
- Protected routes via authentication middleware
- Secure password recovery flow with OTP
- Email verification for new accounts
- Session-based user management

## Performance Optimizations

- Next.js automatic code splitting and lazy loading
- Image optimization through Next.js Image component
- Font optimization and loading
- CSS and JavaScript minification in production
- SEO optimization with metadata and structured data

## Code Quality

### ESLint Rules

- Enforces consistent code style
- Next.js recommended configurations
- Prettier integration

### Development Workflow

1. Write features following project structure
2. Format code: `npm run format`
3. Check linting: `npm run lint`
4. Fix issues: `npm run lint:fix`

## Browser Support

Modern browsers with ES2020+ support:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Troubleshooting

### Common Issues

**Port 3000 already in use**

```bash
# Use a different port
npm run dev -- -p 3001
```

**Module not found errors**

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
```

**API connection issues**

- Verify backend API is running
- Check `NEXT_PUBLIC_API_URL` environment variable
- Ensure CORS is configured on backend

### Type Errors

- Run `npm run lint` to identify type issues
- Ensure all imports have TypeScript types
- Check Redux store type definitions

## Contributing

When contributing to this project:

1. Follow the established folder structure
2. Use TypeScript for all new components
3. Keep components reusable and modular
4. Write proper type definitions
5. Format code before commit: `npm run format`
6. Ensure no ESLint warnings: `npm run lint`

## Deployment

### Vercel (Recommended)

```bash
# Deploy from Git integration
# Vercel will automatically build and deploy
```

### Other Platforms

The `npm run build` command creates a `.next` directory ready for deployment to:

- Self-hosted servers with Node.js
- Docker containers
- Serverless platforms (with adapter configuration)

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - Framework guides and API
- [React Documentation](https://react.dev) - React concepts and patterns
- [Redux Toolkit Guide](https://redux-toolkit.js.org) - State management
- [TailwindCSS Docs](https://tailwindcss.com/docs) - Utility-first CSS
- [Zod Documentation](https://zod.dev) - Schema validation
- [React Hook Form](https://react-hook-form.com) - Form state management

## License

This project is part of the Testora platform. All rights reserved.
