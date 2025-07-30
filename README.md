# Arise Website

A modern, high-performance website for Arise Talent as a Service built with Next.js 14, Sanity CMS, and Cloudflare Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 20.17.0 or higher
- npm 10.8.2 or higher
- Cloudflare account (authenticated)
- Sanity account (authenticated)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd arise-website
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp apps/web/env.example apps/web/.env.local
   # Edit .env.local with your configuration
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Next.js web app: http://localhost:3000
   - Sanity Studio: http://localhost:3333

## 🏗️ Project Structure

```
arise-website/
├── apps/
│   ├── web/                    # Next.js frontend
│   ├── studio/                 # Sanity Studio CMS
│   └── functions/              # Cloudflare Workers
├── packages/
│   ├── sanity-types/           # Shared TypeScript types
│   ├── ui/                     # Shared UI components
│   └── utils/                  # Shared utilities
├── docs/                       # Documentation
├── package.json                # Monorepo configuration
├── plan.md                     # Development plan
└── arise_website_structure.md  # Content structure
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, ShadCN UI
- **CMS**: Sanity Studio with GROQ API
- **Hosting**: Cloudflare Pages with Workers
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Available Scripts

### Development
```bash
npm run dev          # Start both web and studio
npm run dev:web      # Start Next.js development server
npm run dev:studio   # Start Sanity Studio
```

### Building
```bash
npm run build        # Build both applications
npm run build:web    # Build Next.js application
npm run build:studio # Build Sanity Studio
```

### Deployment
```bash
npm run deploy       # Deploy to Cloudflare Pages
npm run deploy:web   # Deploy web application
```

### Code Quality
```bash
npm run lint         # Lint all applications
npm run type-check   # TypeScript type checking
npm run clean        # Clean node_modules
npm run fresh-install # Clean install dependencies
```

## 🔧 Configuration

### Sanity Configuration
- **Project ID**: `cif7z9mz`
- **Dataset**: `production`
- **Studio URL**: http://localhost:3333

### Cloudflare Configuration
- **Pages**: Configured for static deployment
- **Workers**: Ready for serverless functions
- **Images**: Optimized delivery and transformation

### Environment Variables
Copy `apps/web/env.example` to `apps/web/.env.local` and configure:

```env
SANITY_PROJECT_ID=cif7z9mz
SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
CLOUDFLARE_IMAGES_ACCOUNT_ID=your-account-id
NEXT_PUBLIC_SITE_URL=https://arise.com
```

## 🎨 Design System

The project uses an Airtable-inspired design system with:
- Clean, minimal interface
- Consistent spacing and typography
- Accessible components via ShadCN UI
- Responsive design principles

### Components Included
- Button, Card, Input, Textarea
- Form, Label, Accordion, Tabs
- Navigation Menu
- And more...

## 📖 Documentation

- **Setup Summary**: `docs/setup-summary.md`
- **Development Plan**: `plan.md`
- **Content Structure**: `arise_website_structure.md`

## 🚀 Deployment

The project is configured for deployment on Cloudflare Pages:

1. **Build**: `npm run build`
2. **Deploy**: `npm run deploy`
3. **Domain**: arise.com (configured in wrangler.toml)

### Deployment Features
- Automatic HTTPS with SSL certificates
- Global CDN distribution
- Security headers configuration
- Static asset optimization

## 🔒 Security

- Security headers configured
- Content Security Policy
- XSS and CSRF protection
- Environment variable security

## 📊 Performance

- Core Web Vitals optimization
- Image optimization with Cloudflare Images
- Bundle splitting and tree shaking
- Static generation for optimal performance

## 🤝 Development Workflow

1. **Content Management**: Use Sanity Studio for content
2. **Frontend Development**: Build components in Next.js
3. **Preview**: Test locally with `npm run dev`
4. **Deploy**: Push to Cloudflare Pages

## 📞 Support

For technical support and documentation:
- **Next.js**: https://nextjs.org/docs
- **Sanity**: https://www.sanity.io/docs
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **ShadCN UI**: https://ui.shadcn.com/
- **Tailwind CSS**: https://tailwindcss.com/docs

## 🎯 Project Status

**Current Status**: ✅ Setup Complete - Ready for Development

**Next Steps**:
1. Create Sanity content schemas
2. Implement homepage components
3. Set up content management workflow
4. Deploy to production

## 📝 License

MIT License - see LICENSE file for details

---

*Built with ❤️ for Arise Talent as a Service* 