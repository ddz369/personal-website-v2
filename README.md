# Personal Website v2

A modern, statically generated personal website built with Next.js, Tailwind CSS 4.0+, and TypeScript.

## Features

- **Static Site Generation (SSG)**: Pre-rendering for optimal performance and SEO
- **Modern Stack**: Next.js with App Router, Tailwind CSS 4.0+, TypeScript
- **Developer Experience**: ESLint, Prettier, TypeScript for code quality
- **Performance Optimized**: Optimized for static deployment
- **SEO Ready**: Built-in SEO tools with next-seo

## Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm 9.x or later

### Installation

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

### Development Workflow

```bash
# Type checking
pnpm type:check

# Format code with Prettier
pnpm format

# Lint code with ESLint
pnpm lint

# Verify formatting without changing files
pnpm format:check

# Run all checks (type checking, formatting verification, and linting)
pnpm precheck
```

### Build & Deploy

```bash
# Build for static export
pnpm build

# Test the static build locally (with SPA mode enabled)
pnpm start
# OR
pnpm serve-static
```

### Static Export

The static files will be automatically generated in the `out` directory when running the build command. This project is configured for Static Site Generation by default.

#### Serving Static Files

This project includes two ways to serve your static files locally:

1. `pnpm start` - Serves files from the out directory with SPA mode
2. `pnpm serve-static` - Explicitly changes into the out directory first, then serves files

Both commands use port 3000 by default: http://localhost:3000

## Project Structure

- `/src/app`: Next.js App Router pages and layouts
- `/src/components`: Reusable React components
- `/public`: Static assets

## Styling

This project uses Tailwind CSS 4.0+ with the Typography plugin for beautiful, responsive designs. The PostCSS configuration has been updated to work with Tailwind 4.0+.

## License

MIT
