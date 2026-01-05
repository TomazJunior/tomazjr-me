# tomazjr.me

Personal portfolio website with a VS Code-inspired dark theme and interactive IDE experience.

## Features

- **IDE Aesthetic** - Dark theme with syntax highlighting, line numbers, and monospace fonts
- **Interactive Tabs** - Open, close, and switch between pages like VS Code tabs
- **File Explorer Sidebar** - Navigate pages through a familiar file tree interface
- **Responsive Design** - Slide-in sidebar on mobile, always-visible on desktop
- **Contact Form** - Protected email via Resend API
- **SEO Optimized** - OpenGraph images, sitemap, robots.txt, and JSON-LD structured data

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Hosting:** Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/contact/        # Contact form API endpoint
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── experience/         # Work history
│   ├── education/          # Academic background
│   ├── skills/             # Technical skills
│   ├── projects/           # Featured projects
│   └── contact/            # Contact form
├── components/
│   ├── layout/             # Terminal, Sidebar, TabBar, StatusBar
│   ├── features/           # ContactForm, TypingAnimation, ProjectCard
│   └── ui/                 # Button, Input, Textarea, Badge
├── contexts/               # React Context (TabsContext)
└── lib/                    # Utilities and constants
```

## Pages

| Route         | Description                               |
| ------------- | ----------------------------------------- |
| `/`           | Home - Introduction with typing animation |
| `/experience` | Work history (20+ years)                  |
| `/education`  | Academic background                       |
| `/skills`     | Technical skills by category              |
| `/projects`   | Featured projects                         |
| `/contact`    | Contact form                              |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
# Resend API for email (get free key at https://resend.com)
RESEND_API_KEY=re_xxxxx

# Verified sender email (configure in Resend dashboard)
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Email to receive contact form submissions
CONTACT_EMAIL=your-email@example.com
```

**Note:** `.env.local` is in `.gitignore` and should never be committed.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel Dashboard:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_EMAIL`
4. Deploy

Vercel automatically detects Next.js and configures the build.

### Manual

```bash
npm run build
npm start
```

## Key Components

| Component         | Description                                      |
| ----------------- | ------------------------------------------------ |
| `Terminal`        | Window wrapper with macOS-style title bar        |
| `Sidebar`         | File explorer navigation (collapsible on mobile) |
| `TabBar`          | VS Code-style tabs with close functionality      |
| `StatusBar`       | Footer with social links                         |
| `TypingAnimation` | Animated typing effect                           |
| `ContactForm`     | Form with Zod validation                         |

## License

MIT
