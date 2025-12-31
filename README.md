# tomazjr.me

Personal portfolio website with a VS Code-inspired dark theme and interactive IDE experience.

## Features

- **IDE Aesthetic** - Dark theme with syntax highlighting, line numbers, and monospace fonts
- **Interactive Tabs** - Open, close, and switch between pages like VS Code tabs
- **File Explorer Sidebar** - Navigate pages through a familiar file tree interface
- **Responsive Design** - Slide-in sidebar on mobile, always-visible on desktop
- **Contact Form** - Protected email via Resend API

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend API
- **Hosting:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Introduction with typing animation |
| `/experience` | Work history (20+ years) |
| `/education` | Academic background |
| `/skills` | Technical skills by category |
| `/projects` | Featured projects |
| `/contact` | Contact form |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=your-email@example.com
```

## License

MIT
