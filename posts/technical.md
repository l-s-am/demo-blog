---
title: "Technical Breakdown: Website Architecture"
date: "2025-12-17"
description: "A comprehensive technical breakdown of how this blog website is structured."
---

## Framework & Technology Stack

**Next.js** with **React**

- Next.js as the full-stack React framework
- Turbopack for local development (`next dev --turbopack`)
- React Strict Mode enabled for development warnings

---

## Directory Structure

```
demo-blog/
├── src/
│   ├── pages/              # Next.js Pages Router
│   │   ├── _app.js         # Global app wrapper
│   │   ├── _document.js    # HTML document structure
│   │   ├── index.js        # Home page (blog listing)
│   │   └── posts/
│   │       └── [id].js     # Dynamic post routes
│   ├── lib/
│   │   └── posts.js        # Data fetching utilities
│   └── styles/
│       └── globals.css     # Global CSS styles
├── posts/                   # Markdown blog content
├── public/                  # Static assets
├── package.json
├── next.config.mjs
└── jsconfig.json
```

---

## Routing Architecture

This project uses the **Next.js Pages Router**.

| File                      | URL          | Purpose                     |
| ------------------------- | ------------ | --------------------------- |
| `src/pages/index.js`      | `/`          | Home page with post listing |
| `src/pages/posts/[id].js` | `/posts/:id` | Individual post pages       |

The `[id]` parameter maps to markdown filenames (e.g., `1.md` becomes `/posts/1`).

---

## Data Flow

### Content Source

Blog posts are stored as **Markdown files with YAML front matter** in the `/posts/` directory:

```markdown
---
title: "Post Title"
date: "2025-12-17"
description: "Brief description"
---

Content here...
```

### Processing Pipeline (`src/lib/posts.js`)

Three core functions handle data:

1. **`getAllPosts()`** - Reads all `.md` files, parses front matter with `gray-matter`, sorts by date descending
2. **`getPostById(id)`** - Fetches a single post, converts markdown to HTML using `remark` + `remark-html`
3. **`getAllPostIds()`** - Returns all post IDs for static path generation

### Build-Time Generation

- **Static Generation (SSG)** - All pages pre-rendered at build time
- `getStaticProps()` fetches data during build
- `getStaticPaths()` pre-generates all dynamic routes
- Result: Fully static site, no server computation needed

---

## Key Dependencies

| Package       | Purpose                               |
| ------------- | ------------------------------------- |
| `gray-matter` | Parse YAML front matter from markdown |
| `remark`      | Markdown processing engine            |
| `remark-html` | Convert markdown AST to HTML          |
| `date-fns`    | Date formatting (`MM/dd/yyyy`)        |

---

## Component Structure

### Global Wrappers

- **`_app.js`** - Wraps all pages, imports global CSS
- **`_document.js`** - Sets HTML structure with `lang="en"`

### Page Components

- **`index.js`** - Maps through posts, renders list with links
- **`posts/[id].js`** - Renders full post HTML via `dangerouslySetInnerHTML`

---

## Architectural Decisions

1. **Static Site Generation** - Optimal performance, all content pre-rendered
2. **File-based CMS** - Markdown files are version-controlled with git
3. **Pages Router** - Simpler and stable for this use case
4. **Minimal Dependencies** - No UI libraries, no CSS frameworks
5. **Plain CSS** - Full design control, smaller bundle size

---

## Deployment

- Configured for **Vercel** deployment
- Compatible with any static hosting (Netlify, GitHub Pages, etc.)
- New posts require rebuild and redeploy
