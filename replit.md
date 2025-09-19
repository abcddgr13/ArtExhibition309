# Online Art Exhibition Website

## Overview

This is a full-stack web application for an online art exhibition that showcases various art forms including Cubism Art, Pop Art, Pop-ups, Brochures, and Sculptures. The application combines a traditional HTML/CSS/JavaScript frontend for the exhibition pages with a modern React/TypeScript stack for additional functionality. The backend is built using Express.js with TypeScript and uses Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Dual Frontend Approach**: The application uses two distinct frontend implementations:
  - **Traditional Web Pages**: HTML pages with vanilla CSS and JavaScript for the main exhibition functionality (index.html, gallery.html, about.html, artwork.html)
  - **React SPA**: Modern React application with TypeScript for enhanced user interactions and dynamic content management
- **Styling Strategy**: 
  - Traditional pages use custom CSS with Thai font support and responsive design
  - React components use Tailwind CSS with shadcn/ui component library for consistent styling
- **Responsive Design**: Mobile-first approach with adaptive layouts for different screen sizes

### Backend Architecture
- **Express.js Server**: TypeScript-based server handling both API routes and static file serving
- **Route Structure**: Simple routing system that serves static HTML files and handles SPA routing fallbacks
- **Middleware Stack**: Request logging, JSON parsing, and error handling middleware
- **Development Tools**: Vite integration for hot module replacement and development experience

### Database Design
- **ORM Layer**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions with automatic migration support
- **Database Provider**: PostgreSQL as the primary database (configured for Neon Database)
- **User Management**: Basic user schema with authentication support

### Art Exhibition Features
- **Gallery System**: Category-based filtering for different art types (Cubism, Pop Art, Sculptures, etc.)
- **Slideshow Functionality**: Automatic carousel for featured artworks on the homepage
- **Detailed Views**: Individual artwork pages with comprehensive information display
- **Multi-language Support**: Thai language support with proper font loading and character handling

### Authentication & User Management
- **Session Handling**: Session-based authentication using PostgreSQL session store
- **User Schema**: Simple user model with username/password authentication
- **Form Validation**: React Hook Form with Zod validation for type safety

### Build System
- **Development**: Vite for fast development with HMR and TypeScript support
- **Production**: Separate build processes for frontend assets and server-side code
- **Asset Management**: Organized asset structure with proper alias resolution

## External Dependencies

### Core Framework Dependencies
- **Express.js**: Web server framework for handling HTTP requests and routing
- **React**: Frontend library for building interactive user interfaces
- **TypeScript**: Type safety across both frontend and backend code
- **Vite**: Build tool and development server for modern web development

### Database & ORM
- **Drizzle ORM**: Type-safe database operations and schema management
- **@neondatabase/serverless**: PostgreSQL database connectivity optimized for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: High-quality React component library built on Radix UI
- **Radix UI**: Headless UI primitives for accessibility and functionality
- **class-variance-authority**: Utility for creating variant-based component APIs

### Form Management & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for validation libraries
- **Zod**: TypeScript-first schema validation for runtime type checking

### Data Fetching & State Management
- **TanStack React Query**: Server state management and caching
- **date-fns**: Modern JavaScript date utility library

### Development & Tooling
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Thai font support (Prompt and Sarabun families)

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Code navigation and exploration
- **@replit/vite-plugin-dev-banner**: Development environment indicators