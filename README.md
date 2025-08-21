# Daily Blog

A modern, fast blog built with Next.js, React, and Markdown files. Perfect for developers who want a simple, performant blog that can be deployed on Vercel with zero configuration.

## Features

- ✨ **Static Site Generation (SSG)** - Pages generated at build time for optimal performance
- 📝 **Markdown Support** - Write posts in Markdown with YAML frontmatter
- 🎨 **Clean Design** - Serif fonts for headings, sans-serif for body text
- 📱 **Responsive** - Looks great on all devices
- 🚀 **Vercel Ready** - Deploy with one click
- 🔍 **SEO Optimized** - Proper meta tags and static generation

## Tech Stack

- **Next.js 15** - React framework with built-in optimizations
- **React 18** - UI library
- **Markdown** - Content format with YAML frontmatter
- **date-fns** - Date formatting utilities
- **gray-matter** - YAML frontmatter parser
- **remark** - Markdown processor
- **Plain CSS** - Custom styling without frameworks

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blog/
├── posts/                    # Markdown blog posts
│   ├── first-post.md
│   ├── second-post.md
│   └── third-post.md
├── src/
│   ├── lib/
│   │   └── posts.js         # Utility functions for posts
│   ├── pages/
│   │   ├── index.js         # Homepage with post list
│   │   ├── posts/[id].js    # Individual post page
│   │   └── _app.js          # App wrapper
│   └── styles/
│       └── globals.css      # Global styles
├── package.json
└── README.md
```

## Adding Blog Posts

1. Create a new `.md` file in the `/posts` directory
2. Add YAML frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-01-30"
description: "Optional description for SEO"
---

# Your Post Content

Write your post content in Markdown...
```

3. The post will automatically appear on the homepage and be accessible at `/posts/your-filename`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Click "Deploy" - your blog will be live in minutes!

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `.next` folder to your hosting provider

## Customization

### Styling

Edit `src/styles/globals.css` to customize:

- Colors and typography
- Layout and spacing
- Responsive breakpoints

### Layout

Modify the components in `src/pages/` to change:

- Page structure
- Navigation
- Footer content

### Functionality

Update `src/lib/posts.js` to add:

- Additional frontmatter fields
- Custom sorting logic
- Filtering capabilities

## Performance Features

- **Static Generation** - All pages pre-rendered at build time
- **Automatic Optimization** - Images and assets optimized
- **Code Splitting** - JavaScript loaded only when needed
- **CDN Ready** - Can be served from edge locations worldwide

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Open an issue in this repository
- Reach out to the community

---

Built with ❤️ using Next.js
