# Rashid Iddi — Portfolio

A React + Vite + Tailwind CSS portfolio built for remote job applications
and local client outreach. Built around one idea: real, scalable business
systems, not just visual design work.

## Stack

- React + Vite
- Tailwind CSS
- React Router (Home, Projects, Project case studies, Contact)
- Framer Motion (scroll and load animations)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, Hero, About, Skills, ProjectCard, CTA, Layout
  pages/        Home, Projects, ProjectDetail, Contact, NotFound
  data/         projects.js — all project + case study content lives here
```

To add or edit a project, edit `src/data/projects.js`. Each entry
automatically generates a card on the Home and Projects pages, plus a full
case-study page at `/projects/:slug`.

## Before you launch

1. **CV**: add your PDF at `public/resume/Rashid-Iddi-CV.pdf` (or update the
   two "Download CV" links in `Navbar.jsx` and `Hero.jsx` if you rename it).
2. **Contact form**: the form in `src/pages/Contact.jsx` is wired for
   EmailJS (https://www.emailjs.com) — install `@emailjs/browser`, uncomment
   the marked lines, and add your service/template/public keys. Formspree
   works too — see the comment at the top of that file.
3. **Real links**: update the GitHub/LinkedIn/email links in `Footer.jsx` and
   `Contact.jsx`.
4. **Project details**: double check the copy in `src/data/projects.js`
   matches your real project details, screenshots, and live links if you add
   them.

## Deployment

Either works well for a static Vite app:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Firebase Hosting**: `firebase init hosting` (public dir: `dist`), then
  `npm run build && firebase deploy`.

## Design

Dark ink navy (#0B1420) paired with a light cloud background (#F2F4F3),
a signal teal accent (#12836B) for actions and data, and an amber accent
(#E2A63B) used sparingly for highlights. Type: Sora for headings, IBM Plex
Sans for body copy, IBM Plex Mono for labels and tags — a nod to dashboards
and systems, tying back to the kind of software this portfolio showcases.
