# eleventy
# Eleventy Netlify Site

A modern static website built with [Eleventy](https://www.11ty.dev/) and deployed on [Netlify](https://www.netlify.com/).

## Features

- ⚡ **Fast Performance**: Static site generation for optimal speed
- 🚀 **Easy Deployment**: Automatic builds and deploys via Netlify
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Modern Styling**: Custom CSS with contemporary design
- 📝 **Blog Ready**: Built-in blog functionality with Markdown support
- 📧 **Contact Form**: Netlify Forms integration
- 🔍 **SEO Optimized**: Meta tags and structured data

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd eleventy-netlify-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── _data/           # Global data files
├── _includes/       # Layout templates
├── assets/          # Static assets (images, etc.)
├── css/             # Stylesheets
├── js/              # JavaScript files
├── posts/           # Blog posts (Markdown)
├── about.md         # About page
├── contact.njk      # Contact page with form
├── index.njk        # Homepage
└── posts.njk        # Blog listing page
```

## Configuration

### Site Settings

Update `src/_data/site.js` with your site information:

```javascript
module.exports = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://your-domain.com",
  author: "Your Name",
  email: "your-email@example.com"
};
```

### Netlify Setup

1. Connect your GitHub repository to Netlify
2. Build settings are automatically configured via `netlify.toml`
3. Build command: `npm run build`
4. Publish directory: `_site`

### Contact Form

The contact form uses Netlify Forms. No additional configuration needed - just deploy to Netlify and it will work automatically.

## Adding Content

### Blog Posts

Create new blog posts in the `src/posts/` directory:

```markdown
---
layout: post.njk
title: Your Post Title
description: A brief description
date: 2024-01-15
tags:
  - posts
  - your-tag
---

Your content here...
```

### Pages

Add new pages by creating files in the `src/` directory with appropriate front matter:

```markdown
---
layout: base.njk
title: Page Title
description: Page description
---

Page content...
```

## Styling

The site uses custom CSS located in `src/css/main.css`. Key features:

- Modern CSS Grid and Flexbox layouts
- Responsive design with mobile-first approach
- CSS custom properties for consistent theming
- Smooth transitions and hover effects

## JavaScript

Basic JavaScript functionality is in `src/js/main.js`:

- Smooth scrolling for anchor links
- Active navigation highlighting
- Form validation
- Mobile menu toggle (ready for implementation)

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect repository to Netlify
3. Netlify will automatically build and deploy
4. Set up your custom domain in Netlify settings

### Manual Deployment

1. Run `npm run build`
2. Upload the `_site` folder to your hosting provider

## Environment Variables

For local development, create a `.env` file:

```env
ELEVENTY_ENV=development
```

## Performance

The site is optimized for performance:

- Static file generation
- Minified CSS and JavaScript
- Optimized images
- Proper caching headers via Netlify

## SEO

Built-in SEO features:

- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data
- Sitemap generation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement approach

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you need help or have questions:

- Check the [Eleventy documentation](https://www.11ty.dev/docs/)
- Visit the [Netlify documentation](https://docs.netlify.com/)
- Open an issue in this repository

---

Built with ❤️ using Eleventy and deployed on Netlify.