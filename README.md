# algotyrnt — Personal Site

A minimal, fast, and fully customizable personal portfolio site. Built with Next.js (App Router), MUI, and Framer Motion. Pulls live data from GitHub (pinned repos) and Medium (latest posts).

**Live:** [algotyrnt.com](https://algotyrnt.com)

---

## Tech Stack

|                  |                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| Framework        | [Next.js](https://nextjs.org/) (App Router, React Server Components)                                        |
| Language         | TypeScript                                                                                                  |
| UI Components    | [Material UI (MUI)](https://mui.com/)                                                                       |
| Animations       | [Framer Motion](https://www.framer.com/motion/)                                                             |
| Analytics        | [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata, theme provider)
│   ├── page.tsx            # Home page — composes all sections
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── layout/             # Header and Footer
│   ├── sections/           # Page sections: About, Work, Projects, Blogs, Connect
│   ├── ThemeRegistry/      # MUI theme + Emotion SSR cache setup
│   └── ui/                 # Animation primitives: FadeIn, Stagger
├── lib/
│   ├── config.ts           # ← All personal data lives here (the only file you need to edit)
│   └── api/
│       ├── github.ts       # GitHub GraphQL API — fetches pinned repos
│       └── medium.ts       # Medium RSS feed — fetches latest posts
└── types/
    └── index.ts            # Shared TypeScript types
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- A GitHub personal access token (for the Projects section)

### 1. Clone the repo

```bash
git clone https://github.com/algotyrnt/personal-site.git
cd personal-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in your GitHub token:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

> The token only needs `read:user` scope. Without it, the Projects section will be gracefully hidden.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customizing for Your Own Use

All personal content lives in a single file — **`src/lib/config.ts`**. It's the only file you need to edit:

```ts
export const EMAIL = 'you@example.com'
export const WEBSITE_URL = 'https://yoursite.com'
export const SITE_NAME = 'Your Name'
export const SITE_DESCRIPTION = 'One-line bio.'
export const SITE_KEYWORDS = ['your-name', 'Software Engineer']

export const ABOUT_TEXT = `Your longer about paragraph.`

export const WORK_EXPERIENCE = [
  {
    company: 'Company',
    title: 'Role',
    start: '2024 Jan',
    end: 'present',
    link: 'https://company.com',
    id: 'work1',
  },
]

export const GITHUB_USERNAME = 'your-github-username'
export const MEDIUM_USERNAME = 'your-medium-username' // remove BlogsSection if unused

export const SOCIAL_LINKS = [
  { label: 'Github', link: 'https://github.com/you' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/you' },
  // add or remove any links
]
```

**To remove a section**, delete its import from `src/app/page.tsx`.

---

## Deployment

Optimized for [Vercel](https://vercel.com/). Deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/algotyrnt/personal-site)

After deploying, add  `GITHUB_TOKEN` under **Vercel → Project → Settings → Environment Variables**.

---

## Scripts

```bash
npm run dev     # Start development server  (http://localhost:3000)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## License

MIT — free to use as a template for your own personal site.
