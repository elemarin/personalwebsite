# Esteban Leandro Marin's Portfolio

A mobile-first personal site built with Next.js and Tailwind CSS. Oversized
local Geist typography, bold colors, and original SVG graphics give it a
playful, poster-inspired feel, without background animation.

## Develop

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Keep design iterations local; push or deploy only
after approval. Use `npm run lint` and `npm run build` to check changes.

## Edit

- `src/app/page.js`: introduction, skills, Xbox experience, and applied AI work.
- `src/app/projects/page.js`: project page.
- `src/components/project-grid.js`: approved projects, personal descriptions,
  technology tags, source links, and public project websites.
- `src/components/site-header.js` and `site-footer.js`: navigation and contact links.
- `src/app/globals.css`: colors, typography, and mobile-first layouts.
- `src/app/metadata.js`: site title and social metadata.

Fonts are bundled locally with `next/font/local`. The site supports keyboard
navigation and reduced motion. Body copy leads the layout; graphics are small,
decorative accents. The project list is curated locally rather than loaded from
GitHub at runtime, so only approved repositories appear.

## Deploy

Hosted on Vercel, with DNS managed by Cloudflare.

```bash
vercel        # Cloud preview, only after approval
vercel --prod # Production, only after approval
```

Git-based deployments require the repository to be connected in Vercel.
