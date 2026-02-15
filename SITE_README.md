# Resume site (React + Vite)

What I created for you:
- Vite + React + **TypeScript** scaffold
- **Tailwind CSS** for styling
- Language toggle (en / pt-br)
- Company logos for experience entries
- Animated tech marquee (right-to-left)
- `Contact` form wired to **Formspree** (replace endpoint)
- GitHub Actions workflow to build & deploy to **GitHub Pages** on push to `main`

Quick start (local):
1. Install dependencies: `npm ci`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

Form setup (Formspree):
1. Create a free form at https://formspree.io/
2. Replace `FORMSPREE_ENDPOINT` in `src/components/ContactForm.tsx` with your Formspree URL

Files to edit for content/style:
- `src/App.tsx` — main copy, experience, education (company & education logos live in the experience/education arrays)
- `src/components/Skills.tsx` — languages & skills (edit to update competencies)
- `src/components/Projects.tsx` — recent projects (edit links/descriptions)
- `src/components/TechMarquee.tsx` — tech icons shown
- `src/components/ContactForm.tsx` — update form endpoint / fields

Deploy:
- Push to `main` branch — the GitHub Actions workflow will build and deploy to Pages automatically.

Want changes?
- I can: add dark mode, a downloadable PDF resume, custom domain, SEO meta tags, or deploy to a different branch/provider.
- Tell me which feature to add next and I’ll implement it.
