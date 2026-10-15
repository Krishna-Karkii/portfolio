# Portfolio

Personal site: projects and research notes on backend engineering, machine learning and computer systems. React 19, Vite, React Router.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build
```

## Make it yours

Name, role, intro and links live in `src/data/site.js`; empty values are hidden. Keep the `<title>` and description in `index.html` in sync. For a resume link, put `resume.pdf` in `public/` and set `resume: '/resume.pdf'`.

## Add a research note

Copy `src/content/research/_template.md` to a new file in the same folder and fill it in. Notes are picked up automatically, sorted by `date`, and support Markdown, GFM tables and LaTeX (`$…$`, `$$…$$`).

## Design decisions

- **Notes are Markdown files loaded at build time** with `import.meta.glob`. No CMS or backend, so publishing a note is a commit. Cost: every note ships in the main bundle. Fine for dozens; revisit at hundreds.
- **Markdown and KaTeX are code-split.** Only the note page loads `react-markdown` and KaTeX, so the home page stays light.
- **Client-side SPA.** Simple, and good React practice. Cost: every URL serves the same `<title>` and meta tags to link-preview crawlers, which don't run JavaScript. If previews start to matter, move to static generation.
- **Static hosts need a fallback to `index.html`**, because `/research` is not a file on disk. `vercel.json` provides it for Vercel; other hosts need an equivalent rewrite.

## Structure

```
src/
  components/        layout, navbar, shared UI
  pages/             one file per route
  lib/               note loading, page titles
  content/research/  notes (Markdown + frontmatter)
  data/              site.js, projects.js
```
