# Xuewen Han - Academic Personal Website

A modern, responsive academic personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, academic styling with creative touches
- **Responsive**: Optimized for all device sizes
- **Fast**: Built with Next.js for optimal performance
- **Accessible**: Following web accessibility best practices
- **SEO Optimized**: Meta tags and structured data for better search visibility

## Sections

- **Home**: Hero section with introduction and research highlights
- **Research**: Comprehensive research portfolio including under review papers, working papers, and conference publications
- **CV**: Complete curriculum vitae with education, awards, grants, teaching, and service
- **Contact**: Contact information and quick message form

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom academic theme
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with automated CI/CD

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/PersonalSite.git
   cd PersonalSite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. The site will automatically deploy on every push to main

### Vercel (Alternative)

1. Connect your GitHub repository to Vercel
2. Import the project
3. Deploy with default settings

### Railway (Alternative)

1. Connect your GitHub repository to Railway
2. Add a new project
3. Deploy with Node.js template

## Customization

### Personal Information

Update the following files with your information:
- `components/Hero.tsx` - Name and introduction
- `components/Footer.tsx` - Contact details
- `app/contact/page.tsx` - Contact information
- All CV components in `components/cv/` - Academic information

### Styling

The website uses a custom academic color scheme defined in `tailwind.config.js`:
- Academic Blue: `#1e3a8a`
- Academic Navy: `#0f172a`
- Academic Gray: `#64748b`
- Accent Gold: `#fbbf24`

### Research Content

Update research information in:
- `components/UnderReviewPapers.tsx`
- `components/WorkingPapers.tsx`
- `components/ConferencePapers.tsx`
- `components/ResearchHighlights.tsx`

## Project Structure

```
PersonalSite/
├── app/                    # Next.js app directory
│   ├── cv/                # CV page
│   ├── research/          # Research page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── cv/               # CV-specific components
│   ├── Navigation.tsx    # Site navigation
│   ├── Footer.tsx        # Site footer
│   └── ...               # Other components
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
└── ...                   # Configuration files
```

## Contributing

This is a personal website template. Feel free to fork and adapt for your own use.

## License

MIT License - feel free to use this template for your own academic website.

## Contact

Xuewen Han - hanxuewen@sjtu.edu.cn