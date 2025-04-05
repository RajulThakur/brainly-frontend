# Brainly - Your Second Brain

Brainly is a modern web application that helps you organize and share your digital content, acting as your second brain. Built with React, TypeScript, and Vite, it offers a seamless experience for managing various types of content including links, documents, tweets, and videos.

## Features

- **Content Management**: Easily add and organize different types of content:

  - Links
  - Documents
  - Tweets
  - Videos

- **Smart Organization**:

  - Tag-based organization system
  - Categorized views for different content types
  - Clean and intuitive user interface

- **Sharing Capabilities**:

  - Share your entire collection with others
  - Generate shareable links
  - View shared collections

- **Modern Authentication**:
  - Secure user authentication
  - Protected routes
  - Persistent sessions

## Tech Stack

- **Frontend**:

  - React 18.3
  - TypeScript
  - Vite
  - TailwindCSS
  - React Router DOM
  - React Hook Form

- **Development Tools**:
  - ESLint
  - Prettier
  - PostCSS
  - Autoprefixer

## Getting Started

```bash
git clone <repository-url>

cd brainly-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
VITE_API_BASE_URL=<API_BASE_URL>

VITE_API_URL=your_api_url
```

4. **Start development server**

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier

## Project Structure

- `/src` - Source code
  - `/components` - Reusable UI components
  - `/context` - React context providers
  - `/pages` - Application pages/routes
  - `/interface` - TypeScript interfaces
  - `/helper` - Utility functions

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
