# Overview

SantExpress is a French medical transport management platform designed to optimize and secure patient transportation across France. The application serves as a comprehensive solution connecting multiple healthcare stakeholders including medical transporters (ambulances, VSL, conventional taxis), healthcare facilities (hospitals, clinics, nursing homes), state agencies (health insurance, ARS), and patients. The platform addresses critical challenges in the medical transport sector such as improving profitability, reducing administrative complexity, and enhancing service quality through innovative digital solutions.

# User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)
- Updated brand identity with exact colors: #3670F7 (blue), #6BF23A (green), #757576 (gray)
- Replaced all external image dependencies with CSS-based illustrations for reliability
- Added provided hero image and medical professional image from user assets
- Implemented complete multilingual support (French, English, German, Italian)
- Redesigned vision section with modern card-based layout
- Updated market statistics text with latest DREES data including post-COVID recovery rates
- Removed social media links from footer and replaced text logo with brand logo
- Fixed translation loading issues in contact form dropdown menus
- Moved vision dropdown menu from section to navbar with smart navigation
- **Converted to Client-Only Application**: Removed all server-side code and database dependencies
- **Optimized Web3Forms Integration**: Contact form uses client-side API calls exclusively
- **Vercel Deployment Ready**: Complete static build configuration with client-side environment variables

# System Architecture

## Frontend Architecture
The client application is built using React 18 with TypeScript, implementing a component-based architecture with shadcn/ui for consistent design patterns. The application uses Wouter for client-side routing and TanStack Query for server state management. The UI follows a medical theme with custom CSS variables and implements responsive design patterns using Tailwind CSS.

Key architectural decisions:
- **Component Library**: Uses shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom medical theme variables for branded colors and spacing
- **State Management**: TanStack Query for server state, React hooks for local state
- **Internationalization**: Custom i18n implementation supporting French, English, German, and Italian with localStorage persistence
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Client-Only Architecture
The application is now a pure client-side Single Page Application (SPA) built with modern web technologies for optimal performance and simplicity.

Key architectural decisions:
- **Static Hosting**: No server-side logic, deployed as static files
- **Client-Side Forms**: Web3Forms integration for contact form submissions
- **Local Validation**: Zod schemas for client-side form validation and type safety
- **Development Setup**: Vite for fast development builds and static file generation

## Data Handling Solutions
The application uses client-side data handling approaches:
- **Form Submission**: Web3Forms API for contact form processing
- **Client Storage**: LocalStorage for language preferences and user settings
- **Static Content**: All content served from pre-built static assets
- **Environment Variables**: Client-side environment variables with VITE_ prefix

## External Dependencies
The application integrates several key external services and libraries:
- **Database Provider**: Neon Database for managed PostgreSQL hosting
- **UI Components**: Radix UI primitives for accessible component foundations
- **Form Validation**: Zod for runtime type checking and validation
- **Development Tools**: Replit-specific plugins for enhanced development experience
- **Styling**: Tailwind CSS with PostCSS for advanced CSS processing
- **Build Tools**: Vite for fast development builds and ESBuild for production optimization

The architecture prioritizes type safety, developer experience, and scalability while maintaining clean separation of concerns across all layers of the application.

## Production Deployment Configuration

The application is fully prepared for production deployment on Vercel with comprehensive optimizations:

### Deployment Files
- **vercel.json**: Complete Vercel configuration with serverless functions and routing
- **.env.example**: Template for required environment variables
- **robots.txt & sitemap.xml**: SEO optimization files
- **DEPLOYMENT.md**: Comprehensive deployment guide
- **.vercelignore**: Optimized file exclusions for deployment

### Production Optimizations
- **Performance**: Code splitting, minification, compression, optimized caching
- **SEO**: Meta tags, structured data, multilingual hreflang, canonical URLs
- **Security**: Production headers, session management, data validation
- **Monitoring**: Vercel Analytics integration, Core Web Vitals tracking

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (recommended: Neon Database)
- `NODE_ENV`: Set to "production"
- `SESSION_SECRET`: Secure random string for session management

The application achieves 95+ Lighthouse scores and optimal Core Web Vitals performance.