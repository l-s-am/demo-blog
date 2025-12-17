---
title: "Getting Started"
date: "2025-12-17"
description: "How to run the blog locally and add new posts."
---

## Running Locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### Other Commands

- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run linter

---

## Adding New Posts

1. **Create a new markdown file** in the `posts/` directory:
   ```
   posts/my-post.md
   ```

2. **Add front matter** at the top of the file:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-12-17"
   description: "A brief description of your post."
   ---
   ```

3. **Write your content** below the front matter using markdown:
   ```markdown
   ## My Heading

   Your content here. You can use **bold**, *italic*,
   `code`, lists, and more.
   ```

4. **View your post** at:
   ```
   http://localhost:3000/posts/my-post
   ```
   The URL uses the filename (without `.md`).

---

## Front Matter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Displayed as the post title |
| `date` | Yes | Format: `YYYY-MM-DD` |
| `description` | Yes | Used for meta tags |
