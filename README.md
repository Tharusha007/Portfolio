# Tharusha Pasan Hanwella — Business Analyst & IT Portfolio

A personal portfolio built around business analysis, system design, banking software experience, and three academic case studies. The design preserves warm ivory, deep teal, restrained gold, Manrope typography and Instrument Serif accents, with the owner's original portrait.

**Status:** source prepared for a separate GitHub repository and Vercel project. No public deployment or account changes have been made. **New live URL:** add the URL here after you deploy. The existing `https://tharusha-one.vercel.app/` is a separate site and remains unchanged.

Start with [the complete Windows guide](docs/WINDOWS-SETUP-AND-PUBLISHING.md), or double-click `START-HERE.html` after extracting the ZIP. See [verification and limitations](docs/TEST-REPORT.md) and [recovery status](RECOVERY_STATUS.md).

## Features

- Home, About, Experience, Projects, Skills, Education and Contact sections.
- Three complete, separate case-study routes, each with nine analysis sections.
- Original portrait in responsive WebP sizes with JPEG fallback.
- Sticky navigation, active-section indication, keyboard skip link and mobile menu with Escape/focus handling.
- Honest conceptual project illustrations, clearly labelled; no fabricated project screenshots or results.
- Real `mailto:` contact links and copy-email feedback; no backend or misleading form submission.
- Downloadable two-page résumé-only PDF. **Review and approve this candidate yourself before public deployment.** The original combined CV/cover letter, home address, phone and references are excluded.
- Five prerendered HTML pages, individual titles/descriptions, Open Graph image, favicon, optional canonical URLs/sitemap and custom 404 page.
- Self-hosted fonts, reduced-motion CSS, visible keyboard focus and static deployment.

## Stack

React 19, TypeScript 6, Vite 8, Tailwind CSS 4 and Lucide icons. Direct versions are pinned in `package.json`, with exact resolved dependencies in `package-lock.json`. No database, API keys, analytics, external font service or motion library is required. Tested with Node 24.22.1 and npm 11.9.0; use Node 24 LTS on your laptop.

## Quick local start

Run these in the folder containing `package.json`:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite, normally `http://localhost:5173/`. Keep the terminal running. Press **Ctrl+C** to stop. Do not double-click `index.html` to run the app.

## Commands

| Command | Purpose / successful result |
| --- | --- |
| `npm ci` | Install the exact lockfile dependencies; finishes with a package summary and returns to the prompt. |
| `npm run dev` | Start the development server with automatic updates when saved files change. |
| `npm run typecheck` | Check TypeScript; success returns to the prompt with no diagnostics. |
| `npm run build` | Typecheck, compile client/server, prerender five pages, verify links/assets/PDF; writes `dist/`. |
| `npm run verify` | Verify an existing build. Run build first. |
| `npm run preview` | Serve the built `dist/` for local review, normally port 4173. |

## Project structure

| Path | What to edit / purpose |
| --- | --- |
| `src/data/portfolio.ts` | Name, email, links, experience, skills, education and community content. |
| `src/data/projects.ts` | All three case studies, route slugs, resource attachments and optional evidenced outcomes. |
| `src/pages/Home.tsx` | Homepage composition and some editorial headings. |
| `src/pages/CaseStudy.tsx` | Reusable case-study page and next-project links. |
| `src/components/Header.tsx` | Navigation, section tracking and mobile keyboard behavior. |
| `src/components/Shared.tsx` | Contact, CV button, social links, footer and section labels. |
| `src/components/ProjectVisual.tsx` | Labelled conceptual diagrams, authored in HTML/CSS. |
| `src/styles.css` | Colors, typography, layout, responsive breakpoints, focus and reduced motion. |
| `src/App.tsx` | Route matching, 404 content and render-error fallback. |
| `src/main.tsx` | Browser entry, fonts and hydration of prerendered pages. |
| `src/entry-server.tsx` | Page metadata and build-time React rendering. |
| `public/images/` | Portrait variants and `social-card.png`. |
| `public/documents/` | Public résumé candidate; public files can be downloaded by any visitor after deployment. |
| `public/project-assets/` | Add reviewed project diagrams, screenshots and PDFs here. |
| `public/favicon.svg` | TH monogram favicon. |
| `scripts/prerender.mjs` | Generate route HTML, metadata, robots.txt and optional sitemap. |
| `scripts/verify-build.mjs` | Validate generated pages, local links, fragments, images, fonts and résumé signature. |
| `scripts/generate-resume.py` | Optional authoring utility; Python/ReportLab is not needed to run/build the website. |
| `docs/` | Beginner setup, deployment, maintenance, provenance and test report. |
| `vercel.json` | Vite build/output/install settings, cache/security headers and trailing slashes. |
| `package-lock.json` | Reproducible npm installation; keep this in Git. |
| `.env.example` | Optional public site origin example; no secrets. |

## Routes and hosting

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/projects/flash-stock/` | Flash Stock case study |
| `/projects/fake-job-detection/` | Fake Job & Internship Detection case study |
| `/projects/home-gas-delivery/` | Home Gas Cylinder Delivery case study |
| `/404.html` | Custom not-found content |

The build produces a real `index.html` inside each project folder. Keep the entire `dist/` directory on a static host. On Vercel use the supplied configuration; do not add a rewrite that sends every URL to `/index.html`. That would replace the route-specific HTML and interfere with the custom 404.

## Customize content and assets

1. Edit `src/data/portfolio.ts` and `src/data/projects.ts`. Preserve valid TypeScript syntax and use only claims you can substantiate.
2. A few fixed headings and the current-study/current-work summaries are in `src/pages/Home.tsx`; update them if your status changes. Contact invitation text is in `src/components/Shared.tsx`.
3. Replace portrait files using the same filenames, or update the portrait paths in `profile`. If using only a JPEG, remove/update the `<source>` in `Home.tsx`; otherwise the browser will keep showing the old WebP.
4. Replace `public/documents/Tharusha-Hanwella-Resume.pdf` with your approved résumé-only PDF. Do not upload the original combined cover-letter/CV file.
5. Add actual project resources using the `resources` arrays; detailed examples are in Part C of the guide.
6. Edit design tokens and related selectors in `src/styles.css`. Run the build and check mobile again after changes.

## GitHub and Vercel

Create a new, empty repository named `ba-portfolio` under `Tharusha007`. Keep it private while reviewing the public content if desired. Do not initialize it with a README, license or `.gitignore`; these project files already exist.

```sh
git init -b main
git config user.name "Tharusha Pasan Hanwella"
git config user.email "YOUR_VERIFIED_GITHUB_EMAIL"
git add .
git status
git commit -m "Add business analyst portfolio"
git remote add origin https://github.com/Tharusha007/ba-portfolio.git
git remote -v
git push -u origin main
```

Replace the email placeholder before running the command. Use a GitHub-provided no-reply address if you do not want your commit email public. The complete guide explains every command, expected output, authentication and common errors.

In Vercel, choose **Add New → Project**, import this new repository, use **Vite**, **Node 24.x**, install `npm ci`, build `npm run build`, output `dist`, root directory `.`. Deploy as a new project. Do not select or change your existing portfolio project/domain.

After the first deployment, set **SITE_URL** in the new project's environment variables to its actual new `https://...vercel.app` origin, then redeploy. This generates absolute share-image/canonical URLs and `sitemap.xml`. The build also uses `VERCEL_PROJECT_PRODUCTION_URL` when available. No environment variable is needed for local functionality. Do not prefix `SITE_URL` with `VITE_`; it is consumed by the build script.

## Future updates

Save edits, test locally and build. Then:

```sh
git diff
git add .
git commit -m "Update portfolio content"
git push
```

Vercel builds a new deployment from pushes to the connected production branch. Verify its status and the new site after each update. Keep a separate ZIP backup outside the project folder.

## Troubleshooting and content provenance

See Parts D and G in the [full guide](docs/WINDOWS-SETUP-AND-PUBLISHING.md). See [content provenance](docs/CONTENT-AND-PRIVACY.md) for the source hierarchy, résumé review and limits of project evidence.

Public portrait and personal content belong to Tharusha Pasan Hanwella. Third-party libraries retain their own licenses. Manrope and Instrument Serif font licenses are included in `docs/licenses/`. This delivery does not grant a general public license to redistribute the portrait or personal content.
