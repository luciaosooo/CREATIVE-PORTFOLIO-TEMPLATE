# Creative Portfolio Template

**Lucía Álvarez Osorio**

**Live Demo:**  
https://luciaosooo.github.io/CREATIVE-PORTFOLIO-TEMPLATE/

A modern, minimalist creative portfolio template designed for graphic designers, multimedia artists, and visual creatives.  
This template is built to be reusable and easily customizable, allowing anyone to adapt it to their own projects, identity, and style.

==============================

# Project Description

This project is a portfolio website template for showcasing creative work across multiple disciplines, such as:

- Branding
- Editorial design
- Photography
- Illustration
- 3D design

The design follows a minimalist and elegant approach, using a soft color palette (light blue, cream, and dark blue) to convey a contemporary and professional aesthetic.  
Special attention has been given to layout clarity, visual rhythm, and smooth interactions.

==============================

## Purpose

- Present creative projects in a visually compelling way
- Provide clear information about skills, education, and experience
- Facilitate contact with potential clients and collaborators
- Demonstrate front-end development and UI design skills
- Offer a reusable portfolio template for other creatives

==============================

## Tech Stack

### Core Technologies

- **HTML5** — Semantic, accessible structure
- **CSS3** — Modern styling with CSS variables and animations
- **JavaScript (Vanilla)** — Lightweight interactivity without external dependencies

### Technical Features

- Responsive design (mobile-first)
- CSS Custom Properties (scalable design system)
- Intersection Observer API for scroll-triggered animations
- CSS Grid & Flexbox for flexible layouts
- Lazy loading for optimized image performance
- Parallax effects for visual depth
- Category-based project filtering
- Smooth scrolling navigation

### Hosting & Assets

- **GitHub Pages** — Static site hosting
- **ImageKit** — Image CDN and optimization
- **Custom Typography** — PP Editorial New Regular

==============================

# Local Setup Instructions

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local server (optional but recommended)

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/CREATIVE-PORTFOLIO-TEMPLATE.git
cd CREATIVE-PORTFOLIO-TEMPLATE
```

Run a local server:

- Option A — Python
  python -m http.server 8000

- Option B — Node.js
  npx http-server -p 8000

- Option C — VS Code
  Install the Live Server extension
  Right-click index.html → Open with Live Server
  Open in browser

==============================

## File Structure

CREATIVE-PORTFOLIO-TEMPLATE/
├── index.html # Main homepage
├── 404.html # Custom 404 page
├── morriña.html # Project pages
├── starbucks-seasons.html
├── 8mm.html
├── sitges-redesign.html
├── gucci-flora-photoshoot.html
├── nintendo.html
├── assets/
│ ├── css/
│ │ ├── index.css # CSS barrel file
│ │ ├── base.css # Base styles & variables
│ │ ├── components.css # Component styles
│ │ ├── reset.css # CSS reset
│ │ ├── type.css # Typography
│ ├── js/
│ │ └── main.js # Main JavaScript logic
│ └── fonts/
│ └── PPEditorialNew-Regular.woff

==============================

# Customization Guide

## Colors

Edit CSS custom properties in assets/css/base.css:
:root {
--color-blue-light: #cae7f9;
--color-dark-blue: #1b2855;
--color-cream: #f7f3e8;
--color-white: #ffffff;
}

## Typography

Replace font files in assets/fonts/ and update assets/css/type.css:
@font-face {
font-family: "YourFont";
src: url("../fonts/YourFont.woff") format("woff2");
}

## Content

Personal Information

- Update name and contact details in the footer
- Modify the About section in index.html

Projects

- Add new project cards in .projects-grid
- Duplicate existing project pages to create new ones
- Update images via ImageKit or local paths

Project Filtering

- Add/Modify categories using the data-category attribute
- Create matching filter buttons in .filter-controls

## Images

Using ImageKit (recommended):
<img src="https://ik.imagekit.io/YOUR_ID/portfolio/image.jpg" alt="Description">

Using local images:
<img src="./assets/images/your-image.jpg" alt="Description">

## Navigation Links

Update navigation in all HTML files:

<ul class="nav-links">
  <li><a href="index.html#Work">Work</a></li>
  <li><a href="index.html#about">About</a></li>
  <li><a href="index.html#contact">Contact</a></li>
</ul>

## Social Media

Update footer links:

<div class="footer-links">
  <a href="https://linkedin.com/in/your-profile">LinkedIn</a>
  <a href="https://instagram.com/your-handle">Instagram</a>
  <a href="mailto:your-email@example.com">Mail</a>
</div>

==============================

## Key Features

- Smooth scroll-based animations & parallax effects
- Category-based project filtering
- Fully responsive across all devices
- Accessible navigation and semantic HTML
- Performance-optimized with lazy loading
- SEO-friendly metadata and structure
- Cross-browser compatibility

## Deployment

GitHub Pages
Push the repository to GitHub
Go to Settings → Pages
Select branch main and /root
Save and wait for deployment

## License

This project is open source and available under the MIT License.

## Author & Contact

Lucía Álvarez Osorio
Graphic Design & Multimedia Student at UDIT
Madrid, Spain

- Mail: luciaalvarezosorio.19@gmail.com
- Instagram: @luciaalvarez.visuals
- LinkedIn: (https://www.linkedin.com/in/luc%C3%ADa-%C3%A1lvarez-osorio-657003384/)

# Acknowledgments

Typography: PP Editorial New Regular
Image hosting: ImageKit
CSS Reset: Eric Meyer
Inspiration from contemporary creative portfolios
