# C-Suite Leadership Development Program Web Application

## Overview

This is a web application for a C-Suite Leadership Development Program focused on deep-tech ventures. The application serves as an informational platform and application portal for potential program participants. The stack consists of:

- **Frontend**: React with TypeScript, TailwindCSS, and shadcn/ui components
- **Backend**: Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Bundling**: Vite for frontend, esbuild for backend

The application follows a client-server architecture with a shared schema and types between frontend and backend.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

### Frontend Architecture

The frontend is built with React, TypeScript, and TailwindCSS. It uses a component-based architecture with several key features:

1. **Routing**: Uses wouter for lightweight page routing
2. **UI Components**: Leverages shadcn/ui components, which are based on Radix UI primitives for accessible interface elements
3. **Form Handling**: Utilizes React Hook Form with Zod validation for form state management and validation
4. **API Communication**: Uses TanStack Query (React Query) for data fetching, caching, and state management
5. **Styling**: TailwindCSS with a custom theme configuration for consistent design language

The frontend is organized into:
- Pages (full page views)
- Components (reusable UI elements)
- Hooks (custom React hooks)
- Lib (utility functions)

### Backend Architecture

The backend is built with Express.js and TypeScript, featuring:

1. **API Routes**: RESTful endpoints for handling form submissions and data retrieval
2. **Data Access**: Uses Drizzle ORM to interact with the PostgreSQL database
3. **File Uploads**: Includes multer integration for handling file uploads (resumes)
4. **Session Management**: Set up for user authentication (though not fully implemented)

The server handles:
- Static file serving (production build)
- API request routing
- Database operations via a storage interface

### Database Architecture

The database schema is defined using Drizzle ORM and includes tables for:

1. **Users**: Authentication and user management
2. **Applications**: Program applications from candidates
3. **Contacts**: Contact form submissions
4. **Nominations**: Partner nominations for ventures

The schema uses typed interfaces with Zod validation for data integrity.

## Key Components

### Frontend Components

1. **Layout Component**: Provides consistent page structure with navigation and footer
2. **Page Components**: Individual page views (Home, About, Contact, etc.)
3. **Section Components**: Reusable content sections (ApplicationSection, FacultySection, etc.)
4. **UI Components**: Low-level interface elements from shadcn/ui (buttons, forms, etc.)

### Backend Components

1. **Express Server**: Main application server handling requests
2. **Routes**: API endpoints for application functionality
3. **Storage Interface**: Database interaction abstraction with implementation for memory storage
4. **Vite Integration**: Development server integration for HMR and static file serving

## Data Flow

1. **Form Submissions**:
   - User completes a form (application, contact, etc.)
   - Client validates input with Zod schemas
   - Form submission triggers API request to server
   - Server validates incoming data
   - Data is stored in database
   - Response is sent back to client
   - Toast notification displays success/failure

2. **Page Navigation**:
   - User clicks navigation link
   - Wouter router updates URL
   - Appropriate page component is rendered
   - Page may fetch necessary data from API endpoints

3. **Smooth Scrolling**:
   - On homepage, navigation links scroll to sections rather than navigating to new pages
   - ScrollToSection utility handles smooth scrolling with appropriate offset

## External Dependencies

### Frontend Dependencies

- **UI Framework**: React + TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui + Radix UI primitives
- **Routing**: wouter
- **Forms**: react-hook-form + zod
- **Data Fetching**: TanStack Query
- **Date Handling**: date-fns

### Backend Dependencies

- **Server**: Express.js
- **Database ORM**: Drizzle
- **Database**: PostgreSQL (via Neon Serverless)
- **File Uploads**: multer
- **Types**: Zod for validation schemas

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Vite builds the frontend into static assets
   - esbuild bundles the server code for production

2. **Runtime Configuration**:
   - Node.js serves the application
   - PostgreSQL database connection via environment variables
   - Static assets served from the server

3. **Environment Variables**:
   - DATABASE_URL: Connection string for PostgreSQL

The deployment workflow is defined in the .replit file, which runs the development server during development and the production build for deployment.

## Getting Started

1. Ensure the PostgreSQL module is properly provisioned in your Replit
2. Set up the DATABASE_URL environment variable
3. Run `npm run dev` to start the development server
4. To deploy, run `npm run build` followed by `npm run start`

## Future Enhancements

Potential improvements to implement:

1. Complete the authentication system using sessions
2. Implement an admin dashboard for reviewing applications
3. Add email notifications for application submissions
4. Enhance form validation and error handling
5. Implement testing for components and API endpoints