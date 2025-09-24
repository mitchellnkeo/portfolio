# Mitchell Keo Portfolio Website

A modern, responsive portfolio website built with TypeScript, React, and Tailwind CSS. Designed to showcase software engineering projects, skills, and professional experience.

## 🎯 Project Overview

This portfolio website serves as a professional showcase for Mitchell Keo, featuring a clean, modern design optimized for performance and user experience. The site is built with modern web technologies and follows best practices for SEO, accessibility, and responsive design.

## 🛠️ Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended) or Netlify
- **Domain**: mitchellkeo.dev

## 📋 Required Sections

### 1. Hero Section
- Professional headshot or avatar
- Name and current title/role
- Brief tagline or elevator pitch
- Call-to-action buttons (Contact, Resume, Projects)
- Subtle animations or transitions

### 2. About Section
- Professional background and journey
- Current role and focus areas
- Personal interests or hobbies
- Professional photo (different from hero if desired)

### 3. Skills/Technologies
- Programming languages
- Frameworks and libraries
- Tools and platforms
- Database technologies
- Cloud services
- Organized by category or proficiency level

### 4. Projects Showcase
**Each project should include:**
- Project title and brief description
- Problem solved and impact/results
- Technologies used
- Live demo link (if available)
- GitHub repository link
- Screenshots or GIFs
- Key features or highlights

**Minimum 3-6 projects covering:**
- Full-stack applications
- Frontend projects
- Backend/API projects
- Open source contributions
- Personal or side projects

### 5. Experience Section
- Work history with company names
- Job titles and employment dates
- Key responsibilities and achievements
- Internships or significant roles
- Education background

### 6. Contact Section
- Email address
- LinkedIn profile
- GitHub profile
- Optional: Twitter, personal blog, other relevant links
- Contact form (optional)
- Location (city/region)

## 🎨 Design Requirements

### Visual Design
- **Color Scheme**: Professional, consistent palette (2-3 primary colors)
- **Typography**: Clean, readable fonts (consider Inter, Roboto, or system fonts)
- **Layout**: Clean, modern, spacious design with proper white space
- **Imagery**: High-quality images, optimized for web
- **Icons**: Consistent icon set (consider Lucide React or Heroicons)

### User Experience
- **Mobile-first responsive design**
- **Fast loading times** (target <3 seconds)
- **Smooth scrolling and transitions**
- **Intuitive navigation**
- **Accessibility compliant** (WCAG 2.1 AA)

### Interactive Elements
- Hover effects on buttons and links
- Smooth page transitions
- Loading animations (subtle)
- Project image carousels or modals
- Optional: Dark/light mode toggle

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🚀 Performance Requirements

- **Core Web Vitals**: Meet Google's thresholds
- **Image Optimization**: WebP format, lazy loading, proper sizing
- **Bundle Size**: Keep JavaScript bundle under 500KB
- **Lighthouse Score**: Target 90+ in all categories

## 🔧 Technical Features

### SEO & Meta
- Proper HTML semantic structure
- Meta descriptions and title tags
- Open Graph tags for social sharing
- JSON-LD structured data
- Sitemap.xml
- Robots.txt

### Accessibility
- Semantic HTML elements
- Proper heading hierarchy (h1, h2, h3, etc.)
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility

### Performance Optimizations
- Code splitting with React.lazy()
- Image lazy loading
- Minimize re-renders with React.memo
- Efficient state management
- Proper TypeScript usage (avoid 'any' type)

## 📁 Suggested Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── LoadingSpinner.tsx
│   ├── sections/         # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── data/
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills/tech data
│   └── experience.ts     # Work experience data
├── types/
│   └── index.ts          # TypeScript type definitions
├── utils/
│   └── constants.ts      # App constants
├── assets/
│   ├── images/
│   └── icons/
└── styles/
    └── globals.css       # Global styles and Tailwind imports
```

## 🎯 Content Strategy

### Writing Guidelines
- **Tone**: Professional but approachable
- **Focus**: Problem-solving and impact over just listing technologies
- **Length**: Concise but informative
- **Keywords**: Include relevant industry terms for SEO

### Project Descriptions
- Start with the problem or opportunity
- Explain your solution approach
- Highlight key features and technologies
- Include measurable results when possible
- End with lessons learned or future improvements

## 🚢 Deployment

### Recommended: Vercel
1. Connect GitHub repository to Vercel
2. Configure custom domain (mitchellkeo.dev)
3. Set up automatic deployments on push to main
4. Configure environment variables if needed

### Domain Setup
1. Purchase mitchellkeo.dev domain
2. Update DNS settings to point to hosting provider
3. Configure SSL certificate (automatic with Vercel/Netlify)
4. Test domain propagation

## 📊 Analytics & Monitoring

- **Google Analytics 4** for user behavior tracking
- **Google Search Console** for SEO monitoring
- **Vercel Analytics** for performance insights
- **Lighthouse CI** for continuous performance monitoring

## 🔄 Maintenance

### Regular Updates
- Keep dependencies updated
- Refresh project showcases quarterly
- Update resume/experience as needed
- Review and update meta descriptions
- Check for broken links monthly

### Content Updates
- Add new projects as completed
- Update skills as learned
- Refresh About section annually
- Update professional photos as needed

## 💡 Additional Features (Phase 2)

- Blog section for technical writing
- Testimonials/recommendations carousel
- Interactive skill visualizations
- Project filtering and search
- Contact form with backend integration
- Newsletter signup
- Resume builder integration

## 🎨 Brand Guidelines

### Colors
- Define primary, secondary, and accent colors
- Ensure accessibility compliance (contrast ratios)
- Consider both light and dark mode variants

### Typography
- Primary font for headings
- Secondary font for body text
- Consistent font weights and sizes
- Proper line spacing and letter spacing

### Voice & Tone
- Professional but personable
- Confident without being arrogant
- Technical accuracy with accessible explanations
- Authentic personal voice

---

## Development Notes for Cursor AI

When building this portfolio:

1. **Start with a solid foundation**: Set up the project with proper TypeScript configuration, ESLint, and Prettier
2. **Mobile-first approach**: Design and code for mobile first, then enhance for larger screens
3. **Component reusability**: Create reusable components that can be easily maintained and updated
4. **Performance from the start**: Implement lazy loading, image optimization, and efficient rendering patterns
5. **Semantic HTML**: Use proper HTML elements for accessibility and SEO
6. **Type safety**: Leverage TypeScript fully - create proper types for all data structures
7. **Error handling**: Implement proper error boundaries and loading states
8. **Testing consideration**: Structure code to be easily testable (though testing implementation is optional for MVP)

The goal is to create a portfolio that not only showcases Mitchell's work but also demonstrates his attention to detail, technical skills, and understanding of modern web development best practices.