# Your portfolio: complete Windows, VS Code, GitHub and Vercel guide

Prepared for **Tharusha Pasan Hanwella**. Use the final ZIP named **Tharusha-Premium-BA-Portfolio-FINAL.zip**. Your existing website and repositories have not been changed. Follow Parts A–D before deciding to publish in Parts E–F.

## Before you begin

A **folder** holds files. A **terminal** is a place to type commands. **Node.js** runs the development/build tools; **npm** installs their dependencies. **Git** records changes locally. **GitHub** stores the source online. **Vercel** builds that source into a website people can visit. A GitHub repository can be private while its Vercel website is public; these are separate settings.

Only type the commands inside code blocks. Do not type the displayed prompt, for example `PS C:\...>`. Run one command, wait for it to finish, then run the next. A server command keeps running until you press Ctrl+C. For all project commands below, use the VS Code terminal in the folder containing `package.json`, unless another location is explicitly stated.

The new public URL does not exist yet. Any `YOUR_NEW_URL` or `YOUR_VERIFIED_GITHUB_EMAIL` text below is a placeholder you must replace. Your old `tharusha-one.vercel.app` address must not be used as the new site's `SITE_URL`.

## PART A — Install the software

### A1. Install Visual Studio Code

1. Open Chrome or Edge. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Choose **Download for Windows**. Use the User Installer for your computer (usually x64; choose Arm64 only for an ARM laptop).
3. Open the downloaded installer from Downloads. Follow its installation screens and accept the terms yourself if you agree.
4. Keep **Add to PATH** selected if offered. The **Open with Code** options are useful but optional.
5. Finish installation and open **Visual Studio Code**. This is different from the larger application named Visual Studio.

### A2. Install Node.js

1. Go to [nodejs.org](https://nodejs.org/en/download).
2. Download the **Node.js 24 LTS Windows Installer (.msi)** matching your computer. This project was tested on Node 24.22.1. It requires at least Node 22.12; Node 24 LTS is the straightforward matching choice.
3. Run the installer. Keep **npm package manager** and **Add to PATH** enabled.
4. Extra native-build tools are not required for this portfolio; you can leave optional automatic tool installation unchecked.
5. Finish and close/reopen VS Code so its terminal receives the new PATH.

### A3. Install Git

1. Go to [git-scm.com/download/win](https://git-scm.com/download/win).
2. Download the Windows installer and run it.
3. Keep the recommended defaults, including Git available from the command line and third-party software. Keep Git Credential Manager enabled if offered.
4. You may choose VS Code as Git's default editor. Finish installation, then close/reopen VS Code.

### A4. Verify the installations

In VS Code choose **Terminal → New Terminal**. If PowerShell prevents npm commands later, open the small arrow next to the terminal's `+`, choose **Select Default Profile → Command Prompt**, then open a new terminal with `+`. You do not need to weaken Windows execution policies.

Run each command:

```sh
node --version
npm --version
git --version
code --version
```

| Command | What it does | What success looks like | If it fails |
| --- | --- | --- | --- |
| `node --version` | Checks Node installation. | A version beginning with `v24.`. | Reopen VS Code; if still “not recognized”, reinstall Node with PATH enabled. |
| `npm --version` | Checks npm. | A number such as `11.9.0`. | Use Command Prompt if `npm.ps1` is blocked; otherwise repair Node installation. |
| `git --version` | Checks Git. | `git version ...windows...`. | Reopen the terminal or reinstall Git with command-line access enabled. |
| `code --version` | Checks the optional VS Code command. | Version/commit/architecture lines. | The app still works through its icon; reinstall with PATH enabled if you want this command. |

No GitHub or Vercel account is needed to run the website locally.

## PART B — Extract and run the website

### B1. Extract the ZIP completely

1. Download **Tharusha-Premium-BA-Portfolio-FINAL.zip** from the delivery message.
2. In File Explorer, open Downloads. Right-click the ZIP and choose **Extract All**.
3. Choose a local folder, for example `C:\Users\YOUR_WINDOWS_NAME\Documents\Portfolio`, then click **Extract**. Prefer a folder outside OneDrive if file locks cause problems.
4. Open the extracted folder and then its **ba-portfolio** folder.
5. Confirm you can see `package.json`, `package-lock.json`, `src`, `public`, `README.md` and `START-HERE.html`. If you see only another folder, open that folder first. Do not work inside File Explorer's compressed ZIP view.
6. Keep your downloaded ZIP as a backup somewhere outside the project folder.

### B2. Open the correct folder in VS Code

1. Open VS Code.
2. Choose **File → Open Folder**.
3. Select the **ba-portfolio** folder that directly contains `package.json`.
4. Click **Select Folder**. If Workspace Trust appears, review the files and trust the folder if appropriate; this lets VS Code's development features run.
5. The Explorer panel on the left should show the project files. Double-click `README.md` to read it. To see formatted Markdown, right-click the editor tab and choose **Open Preview**.
6. Choose **Terminal → New Terminal**. The terminal path should end in `ba-portfolio`.

To confirm the folder, run:

```bat
dir
```

`dir` lists files in the current folder. Success means `package.json` appears in the list. If it does not, use File → Open Folder again; opening the right folder is easier than guessing `cd` paths.

### B3. Install the dependencies

```sh
npm ci
```

This reads `package-lock.json` and installs exactly the recorded dependencies into `node_modules`. Run it from the project folder with an internet connection. Success ends with an “added … packages”/audit summary and returns to the terminal prompt. It can take several minutes the first time. Do not close it while it is working.

`node_modules` is intentionally missing from the ZIP; this command recreates it. Do not upload that folder to GitHub. Warnings are not automatically failures; an `npm ERR!` message or nonzero exit is a failure. Read the first actual error. If npm says the lockfile and manifest disagree, restore matching `package.json` and `package-lock.json` from the ZIP; do not delete the lockfile as your first response.

### B4. Start the development server

```sh
npm run dev
```

This starts Vite. Success shows a **Local** URL, normally `http://localhost:5173/`. Hold Ctrl and click that URL in the terminal, or paste it into Chrome. If the port is already in use, Vite may show another port: use the actual printed URL.

Keep this terminal open while viewing the site. Edits saved with **Ctrl+S** usually appear automatically. Do not open `index.html` directly from File Explorer; it is an input to Vite, not a standalone file website.

### B5. Stop and restart

Click in the server terminal and press **Ctrl+C**. If Command Prompt asks “Terminate batch job (Y/N)?”, enter **Y**. The prompt returns. To restart, run `npm run dev` again. You do not need to reinstall dependencies on every restart.

If you need another command while the server is running, open a second terminal with **+**, or stop the server first. A command typed into a running server's terminal is not a new shell command.

## PART C — Customize the portfolio

### C1. Safe editing basics

1. Open the file in the Explorer panel.
2. Make one small change at a time.
3. Save with Ctrl+S, check the browser and read any terminal errors.
4. Keep commas, brackets and quotation marks intact. A missing comma can break a TypeScript data file.
5. Before a large edit, copy the project to a backup folder outside the working project, or commit the working version with Git.

### C2. Personal information, links, experience, skills and education

Open **src → data → portfolio.ts**.

| Item | What to edit |
| --- | --- |
| Full name, short name, email, social URLs | Values inside `profile`. |
| Introduction and About paragraphs | `profile.introduction` and `profile.about`. |
| Role, employer, dates and responsibilities | `experience`. |
| Skill categories and names | `skills`. |
| Qualifications, dates and institutions | `education`. |
| Listed certification areas | `certifications`. Add exact credentials only after checking them. |
| Rotaract and working languages | `community`. |
| Menu labels | `navigation`; preserve IDs unless you also update section IDs. |

Some editorial text is deliberately in the page components: edit **src/pages/Home.tsx** for hero headings, current-study/current-work summaries and section introductions; edit **src/components/Shared.tsx** for the contact invitation/footer. The hero full name is currently literal text in Home.tsx as well as in profile data; update both if necessary. Edit **src/entry-server.tsx** if your homepage search description or position changes. The Person structured data's job title/employer is in **scripts/prerender.mjs**.

The contact mechanism is an email link. Changing `profile.email` updates the contact links and copy button. The résumé PDF is separate; update its email manually too. Social links open in new tabs; keep the full `https://...` URL.

### C3. Edit the existing projects

Open **src → data → projects.ts**. Each project object contains its title, summary, contribution, analysis, tools and deliverables. Keep the three existing `slug` values unless you intend to change their public URLs.

- `overview`, `problem`, `objectives`: project context and goals.
- `role`, `responsibilities`: your documented contribution.
- `requirements`, `methods`, `design`, `deliverables`: analytical work.
- `evidenceNote`: explains the evidence available.
- `resources`: original documents/images to display when supplied.
- `outcome` and `lessons`: optional; include only supported information.

To add a fourth project, copy a complete project object, give it a unique slug/number, and fill all required fields. The homepage and prerender routes are generated from this array. Also update the route list in **scripts/verify-build.mjs**, which deliberately checks the delivered route set. Choose an existing `theme` (`auction`, `jobs` or `gas`) or implement a new illustration/style; do not claim a conceptual illustration is real project evidence.

### C4. Add project diagrams and PDF documents

1. In File Explorer, create **public/project-assets** if it is not present (empty folders may not survive ZIP/Git).
2. Put your reviewed files there, for example `flash-stock-use-case.png` and `flash-stock-analysis.pdf`.
3. Remove confidential details before copying the files. Everything in `public` is potentially public after deployment.
4. In the relevant project object, replace `resources: []` with, for example:

```ts
resources: [
  {
    label: 'Use Case diagram',
    href: '/project-assets/flash-stock-use-case.png',
    type: 'image',
    alt: 'Use Case diagram for the Flash Stock academic project',
    caption: 'Original project diagram, shared with permission.'
  },
  {
    label: 'Analysis document',
    href: '/project-assets/flash-stock-analysis.pdf',
    type: 'document',
    caption: 'Reviewed public copy of the academic analysis document.'
  }
]
```

These filenames are examples, not included deliverables. Only add the entries after adding the matching files. The URL begins with `/project-assets/`, **not** `/public/project-assets/`. Keep the comma following the array if another property follows it in the object.

Use meaningful image descriptions. Keep filenames simple, lowercase and hyphenated. Match capitalization exactly: a path that works on Windows may fail on Vercel's case-sensitive filesystem.

### C5. Replace the portrait

Current files are:

- `public/images/tharusha-portrait.webp` — 960-pixel wide image.
- `public/images/tharusha-portrait-480.webp` — 480-pixel wide image.
- `public/images/tharusha-portrait.jpg` — JPEG fallback.

The existing versions preserve your original photo and facial appearance; they only resize/compress it. To replace them, export your new portrait to all three filenames and keep a similar portrait aspect ratio. Update the width/height attributes in Home.tsx if you use a different ratio. Do not simply rename `.jpg` to `.webp`; the file must actually be encoded in that format.

For a simpler one-JPEG approach: copy your new JPEG into `public/images`, set `profile.portraitFallback` to its path, then remove the `<source .../>` element inside the hero `<picture>` in Home.tsx. Otherwise WebP-capable browsers will continue selecting the old WebP image. Leave the `<img>` element and update its alt description if appropriate. Refresh with Ctrl+Shift+R after replacement.

The share card is separate: replace `public/images/social-card.png` if you want to update its portrait/text too. Use a 1200 × 630 PNG.

### C6. Replace the public résumé

1. Open **public/documents/Tharusha-Hanwella-Resume.pdf** and review both pages.
2. Verify name, email, internship dates, qualifications and all claims. The supplied PDF is a résumé-only candidate prepared from your CV, not evidence of your final publication approval.
3. To prepare your own version, open your résumé in Word or another editor. Remove the cover letter, residential address, private phone number, referees and their contact details, confidential client/software details, comments and tracked changes.
4. Prefer exporting a fresh cleaned document to PDF. A black rectangle placed over text may leave selectable/searchable private text underneath.
5. In Word choose **File → Save As** or **Export → PDF**. Use the exact filename `Tharusha-Hanwella-Resume.pdf` and replace the file in `public/documents`.
6. Open the result, select/search text and inspect every page. Confirm only intended public information remains.
7. Restart/rebuild if needed, then click **Download CV** and open the newly downloaded copy.

If you change the filename, also update `profile.resume` in portfolio.ts and the download filename in `ResumeLink` in Shared.tsx. Update the PDF path in verify-build.mjs. The optional Python authoring script is not required: you can replace the PDF directly and build the website with Node alone.

### C7. Change colors and typography

Open **src/styles.css**. The `@theme` block at the top defines paper `#f7f6f1`, ink `#202e2e`, teal `#183d3b` and gold `#b68b45`, plus the font families. Related section backgrounds/accents also use explicit colors further down; use Ctrl+F to find them if you want a coordinated palette change. Check contrast and focus visibility after editing.

Fonts are self-hosted through imports in **src/main.tsx**. Changing only a CSS font name does not download a new font. To use a different font, install or provide its files and update those imports and the CSS family names together. This is optional; the current fonts are already included through npm and need no font-service account.

## PART D — Test before publishing

### D1. Test the development view

Run `npm run dev` and open its Local URL. Check:

1. Your original portrait loads and the hero text is readable.
2. Every navigation link reaches the correct section; the active indicator follows scrolling.
3. Explore My Work reaches Projects. Each project opens a separate page.
4. On each case study, check its nine sections, the contents links where displayed, next-project link and return link. Refresh the browser on a direct case-study URL.
5. Click Download CV and open the downloaded PDF. Check that it is the new, public-safe version.
6. Click GitHub and LinkedIn; verify the correct account/profile in the new tabs. A LinkedIn sign-in request is different from a broken URL.
7. Click Write an email. Your configured email app should open with the correct recipient and subject; **you** review/send it. If no email app is configured, use Copy email and paste into your usual Gmail/Outlook compose window. Copy success does not mean an email was sent.
8. Press Tab repeatedly, Shift+Tab to reverse and Enter to activate. You should see focus outlines. At the start of the page, the Skip to content link should appear when focused.
9. In the mobile menu, verify opening, closing, Escape, keyboard focus containment and selecting each section.

### D2. Check mobile and tablet

In your own Chrome, press **F12** or **Ctrl+Shift+I**, then click the phone/tablet icon or press **Ctrl+Shift+M**. Choose **Responsive** and try widths **320, 390, 768, 1024 and 1440**. Review the full homepage and all case studies, not only the hero. Look for horizontal scrolling, clipped words/buttons and overlapping content. The desktop navigation changes to the mobile menu below 1100 px. Browser emulation is helpful, but also check a real phone after deploying.

For reduced motion, in Windows 11 open **Settings → Accessibility → Visual effects → Animation effects: Off** (Windows 10 uses Ease of Access/Display). Reload and verify that section navigation no longer animates. Restore your preferred setting afterward. The site has no continuously running decorative animations.

### D3. Verify the production build

Stop the development server with Ctrl+C if using the same terminal. Run:

```sh
npm run typecheck
npm run build
npm run preview
```

| Command | Expected result | What to do if it fails |
| --- | --- | --- |
| `npm run typecheck` | No TypeScript diagnostics; returns to prompt. | Open the named file/line; check missing commas, quotes and wrong value types. Undo the last edit if necessary. |
| `npm run build` | Build output plus `Prerendered 5 pages` and `Build verified` (unless you deliberately added routes). | Read the first error. Missing file: fix exact path/case. Compile error: fix source syntax/import. Then rebuild. |
| `npm run preview` | A Local URL, usually port 4173; command stays running. | Build first. Use the printed port. If occupied, stop your previous preview. |

Open the preview URL and repeat the important checks. A production build creates real HTML pages in `dist`; it does not publish anything. `npm run verify` can check an existing dist again, but does not rebuild your edits. Never edit files in `dist`; they are replaced by the next build.

The custom `/404.html` file can be reviewed directly. Also try an invented path such as `/this-page-does-not-exist/`. The included preview handler returns the custom page with HTTP 404. Verify it again on the deployed Vercel site because local preview is not proof of production-host routing.

### D4. Common local errors

| Message / symptom | Meaning and fix |
| --- | --- |
| `npm`/`node`/`git` “not recognized” | Tool missing or terminal has old PATH. Reopen VS Code; repair the relevant installation if needed. |
| `npm.ps1 cannot be loaded` | PowerShell policy is blocking the wrapper. Select Command Prompt as the VS Code terminal profile; keep the system policy unchanged. |
| `ENOENT ... package.json` | You opened the wrong directory. File → Open Folder → folder containing package.json. |
| `npm ci` says lockfile mismatch | Use matching package.json/package-lock.json from the final ZIP. If deliberately changing a dependency, use npm install to update the lockfile and then validate/build. |
| `EBADENGINE` / unsupported Node | Run `node --version`, install Node 24 LTS, reopen VS Code and run npm ci. |
| `Cannot find module` / unresolved import | Run npm ci; if the error names a source file, check spelling/case and that the file is present. |
| `EACCES`, `EPERM`, file busy | Stop servers, close programs locking files, use a normal user-owned local folder and retry. Avoid changing folder permissions blindly. |
| Network timeout, certificate or proxy error | Check internet/date/time and any required workplace proxy. Do not disable TLS verification; use your administrator's legitimate settings. |
| Blank page from double-clicking index.html | Start Vite and use its Local URL. |
| Browser says connection refused | The server is stopped or the port differs. Check the running terminal. |
| Old photo/CV still visible | Update every image variant, check paths, use Ctrl+Shift+R and open a fresh downloaded PDF. |
| Email does not open | Configure a default email app in Windows, or use Copy email and your webmail. |
| Copy unavailable | Clipboard access may require localhost/HTTPS and browser permission. Select the visible email address and copy it manually. |
| Low-level `uv_interface_addresses` error in a restricted environment | Start `npm run dev -- --host 127.0.0.1` (or preview with the same flag). This binds only localhost. It is not normally needed on Windows. |

For the last troubleshooting command, run it from the same project terminal; success is the normal Local URL. Stop with Ctrl+C. Do not run the normal and alternative server at the same time on the same port.

## PART E — Publish source to a NEW GitHub repository

Do this only when you are ready to upload the project. The delivered files have not been pushed for you.

### E1. Create the empty repository

1. Open [github.com](https://github.com/) and sign in to **Tharusha007**.
2. Click the **+** near the top-right, then **New repository**.
3. Owner: **Tharusha007**. Repository name: **ba-portfolio**.
4. Description: `Personal Business Analyst and IT portfolio for Tharusha Pasan Hanwella.`
5. Choose **Private** while reviewing if you prefer; choose Public only if you want the source publicly visible.
6. Leave **Add a README**, **Add .gitignore** and **Choose a license** unchecked/None. The ZIP includes the needed README and ignore rules.
7. Click **Create repository**. Leave the page open. The expected repository URL is `https://github.com/Tharusha007/ba-portfolio` only after you have created it.
8. If that name is already used, stop and inspect that repository. Do not replace it. Choose a different new name and adjust the remote URL below.

### E2. Initialize Git locally and set your identity

In VS Code's project terminal:

```sh
git init -b main
```

This starts a new local history with branch `main`. Success says “Initialized empty Git repository …”. It does not upload files. If the folder already has Git history, inspect `git status` and `git remote -v` before changing anything; do not attach another project's history.

```sh
git config user.name "Tharusha Pasan Hanwella"
git config user.email "YOUR_VERIFIED_GITHUB_EMAIL"
```

These set the author identity for this repository only; success normally prints nothing. Replace the placeholder with your verified GitHub email. For privacy, copy your exact no-reply address from GitHub **Settings → Emails** instead. Do not invent the numeric part of a GitHub no-reply address. This email appears in commits; it is not a password. Git configuration does not sign you in.

Check the saved values:

```sh
git config --get user.name
git config --get user.email
```

Each prints its configured value. If blank or wrong, rerun the corresponding config command with the correct value.

### E3. Stage and review the files

```sh
git add .
git status
```

`git add .` stages the current folder's non-ignored files for the next commit; success is usually silent. `git status` lists the staged files under “Changes to be committed.” Confirm source, configuration, public assets, documentation and package-lock.json are included. Confirm `node_modules`, `dist`, `.env`, original private CV/cover-letter files and backups are absent. `.gitignore` prevents ordinary accidental staging, but cannot remove files already tracked.

If you accidentally staged a new private file before the first commit, run this after substituting its actual relative path:

```sh
git rm --cached -- "path/to/private-file"
```

This removes that path from Git's index, keeping the local file. Success prints `rm ...`; `git status` should no longer show it staged. Move the private file outside the project or add an ignore rule before staging again. Do not run this example without substituting the actual file path. If private data was already pushed, removing it from the latest commit does not erase its history; get help to clean the history and rotate any exposed credentials.

### E4. Make the first commit

```sh
git commit -m "Add business analyst portfolio"
```

This records a local snapshot. Success shows a commit ID and a file summary. If Git says “Author identity unknown”, complete E2. If it says “nothing to commit”, use git status: you may have already committed, forgotten to save edits, or opened the wrong folder.

### E5. Connect the NEW remote and push

```sh
git remote add origin https://github.com/Tharusha007/ba-portfolio.git
git remote -v
```

The first command records the upload destination, normally without output. The second prints origin's fetch and push URLs. Both must point to your **new** repository. If you chose another name, use that name. If “remote origin already exists” appears, inspect the existing remote first. Only when you have verified that this is your new portfolio checkout and the URL is wrong, correct it with:

```sh
git remote set-url origin https://github.com/Tharusha007/ba-portfolio.git
```

This changes the local destination only; success is silent. Run git remote -v again to verify. Never redirect an unrelated existing repository without understanding it.

```sh
git push -u origin main
```

This uploads your commit and sets the default branch relationship for future pushes. Git Credential Manager may open a browser sign-in. Sign in yourself as Tharusha007 and follow GitHub's prompts. Never paste passwords/tokens into source files or a remote URL. Normal account passwords are not used as Git HTTPS passwords.

Success shows `main -> main` and that main tracks origin/main. Open/refresh the repository page; you should see package.json, src, public and the rendered README. Run `git status` again: “working tree clean” means no uncommitted local changes, not independently proof of an upload; the GitHub page and push output verify that.

### E6. Git/GitHub errors

| Error | Meaning / safe correction |
| --- | --- |
| `fatal: not a git repository` | Wrong folder or init not run. Open the project folder, then initialize only if it is genuinely new. |
| `src refspec main does not match any` | Usually no first commit or different branch. Run git status and git branch; make the first commit. If this project's branch is master, rename it using the command below. |
| `remote origin already exists` | A remote is configured. Inspect it, then use set-url only if appropriate. |
| `Repository not found` | Repository not created, URL wrong, or signed into an account without access. Check the GitHub page, owner and credentials. |
| Authentication failed / 403 | Confirm account access and use Git Credential Manager's legitimate sign-in. Never put a token in code. |
| Non-fast-forward / rejected push | Remote contains changes you do not have. Do not force-push. See Part G for pulling clean remote changes; for unrelated histories, keep a backup and use a fresh clone/copy workflow. |
| LF will be replaced by CRLF | Usually an informational Windows line-ending warning. It is not a failed commit; check git status. |

Useful branch commands, run only when the preceding error makes them necessary:

```sh
git branch
git branch -M main
```

`git branch` lists local branches and marks the current one with `*`. `git branch -M main` renames the current branch to main; success is silent. Use it only in this portfolio repository, then retry the push.

## PART F — Deploy as a SEPARATE Vercel project

### F1. Connect and import

1. Visit [vercel.com](https://vercel.com/) and sign in to your Vercel account yourself.
2. In the dashboard choose **Add New → Project**.
3. Under Import Git Repository, connect GitHub if necessary. Review GitHub's permission screen yourself; you can grant access only to the new `ba-portfolio` repository.
4. Find **Tharusha007/ba-portfolio** and click **Import**. If it is absent, adjust the GitHub app's repository access to include this new repository, then refresh.
5. Choose a new project name, such as **tharusha-ba-portfolio**. Names may need to be unique for the resulting hostname.
6. Do not open, delete, import over, or change the existing portfolio project/domain.

### F2. Review the build settings

| Setting | Value for this project |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `.` / repository root containing package.json |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 24.x |
| Production Branch | main |
| Required secrets/database | None |

`vercel.json` supplies most settings. If your repository unexpectedly contains an outer folder, select the inner directory containing package.json. The recommended Git instructions push the contents of ba-portfolio to the repository root, so you normally do not need an inner Root Directory.

Click **Deploy** only when you are ready for this new website to be hosted. Wait for the build logs and the **Ready** result. If it fails, read the earliest relevant error rather than repeatedly redeploying unchanged files. Do not change the build command to plain `vite build`; that skips the case-study prerendering and verification scripts.

### F3. Set the new public origin for SEO

1. Copy the actual new production URL displayed by Vercel, for example a new project-specific `https://...vercel.app` address.
2. In this **new** project's **Settings → Environment Variables**, add name **SITE_URL** and value equal to that new origin (no project page path, no quotes). Select Production. Use Preview too only if you intentionally want preview builds canonicalized to production.
3. Save. Open **Deployments**, choose the latest deployment's menu and **Redeploy**, or push your next legitimate change.
4. The build script uses this value for canonical links, absolute share-image URLs and sitemap.xml. It can also detect Vercel's production URL automatically when supplied; setting SITE_URL makes your intent explicit.
5. Do not use the old `https://tharusha-one.vercel.app/` URL here. SITE_URL is public configuration, not a secret.

For local SEO testing, copy `.env.example` to `.env.local` in VS Code, add `SITE_URL=https://YOUR_NEW_URL` with your real origin, then rebuild. `.env.local` is ignored by Git. Normal local development needs no environment file.

### F4. Verify the public deployment

Open the exact new Vercel URL and repeat the Part D checks. In particular:

- Open each direct project URL and press Refresh.
- Download and review the résumé again.
- Check email/social links on your real device.
- Try an unknown route and confirm the custom 404. In Chrome Network tools, the document response should have status 404, not merely show a “404” heading with status 200.
- Open `/robots.txt`, `/sitemap.xml`, `/favicon.svg` and `/images/social-card.png` on the new domain.
- View Page Source and confirm the page-specific title, description, og:image and canonical use your new origin.
- Try a phone and another browser. Use an incognito window to check whether deployment protection requires sign-in; adjust access yourself according to your intended audience.

A local build cannot prove live hosting, DNS, search indexing, email delivery, social preview caching or field Core Web Vitals. Those require the deployed site and real devices. There is no invented live link in this delivery.

### F5. Automatic deployments and the existing website

After connection, pushes to the configured production branch trigger a new Vercel build. Other branches may create preview deployments according to your settings. Watch the new project's Deployments page and verify Ready before assuming an update is live.

Your existing `tharusha-one.vercel.app` site remains independent. You do not need to move any domain to use the new site. Moving an existing custom domain or reassigning a project hostname is a separate later action: decide on that only after reviewing the new site and explicitly approving replacement. It is not performed by these instructions or this delivery.

## PART G — Future updates and maintenance

### G1. Normal update sequence

1. Open your existing ba-portfolio folder in VS Code.
2. If you are the only person editing on this computer, inspect git status before starting. If you edited remotely or on another computer, use the clean pull workflow below first.
3. Run npm run dev. Edit source files and save. Check the affected content/layout.
4. Stop the server or use another terminal. Run typecheck/build.
5. Review, commit and push:

```sh
npm run typecheck
npm run build
git diff
git status
git add .
git commit -m "Update portfolio content"
git push
```

| Command | What it does / success |
| --- | --- |
| `npm run typecheck` | Checks source types; no diagnostics is success. |
| `npm run build` | Rebuilds and verifies production output; reports generated pages and verified references. |
| `git diff` | Shows unstaged line changes. If the pager fills the terminal, press `q` to exit. A blank diff may mean no changes or already-staged changes. |
| `git status` | Shows changed/staged files and branch status. Confirm the list before adding. |
| `git add .` | Stages non-ignored changes; normally silent. |
| `git commit -m "..."` | Saves your local snapshot; choose a short meaningful message describing the update. |
| `git push` | Uploads to the previously configured remote; look for main updating successfully. |

Open Vercel, wait for Ready and verify the new live content. Update the README's live link after the first successful deployment. Keep the old ZIP backup until you have verified the newer version.

### G2. Pull changes made elsewhere

From the project terminal, run:

```sh
git status
```

If there are local uncommitted edits, save and commit them or make a separate backup before trying to integrate other changes. When the working tree is clean:

```sh
git pull --ff-only
```

This downloads remote changes and updates only when Git can move forward without merging divergent histories. Success says “Already up to date” or shows a fast-forward summary. If it refuses because histories diverged, stop and inspect; do not force-push or discard work. If package files changed, run npm ci again before running/building.

### G3. Recover on another laptop

Install the tools from Part A. In a terminal opened in a parent folder where you want the project:

```sh
git clone https://github.com/Tharusha007/ba-portfolio.git
cd ba-portfolio
npm ci
npm run dev
```

`git clone` downloads the repository into a new ba-portfolio folder; private repositories require your authorized sign-in. `cd ba-portfolio` changes the terminal's current folder (the prompt changes). The npm commands then install/run as before. If that folder already exists, do not overwrite it; choose a different parent folder. You can also extract your recovery ZIP instead of cloning.

### G4. Manage dependencies carefully

Run npm ci after a fresh extraction/clone or when the lockfile changes. Do not reinstall on every content edit. Keep package-lock.json in Git. Do not upgrade every package automatically during a simple CV update.

If you intentionally install a new dependency, `npm install PACKAGE_NAME` (replace the name with the real package) updates both package.json and package-lock.json; it should finish with a package summary. Review the changes, typecheck/build and test before committing. If a package is misspelled or unavailable, stop and verify its official name. No extra package is required for the delivered portfolio.

### G5. More deployment troubleshooting

| Problem | What to check |
| --- | --- |
| Vercel cannot find package.json | Root Directory must point to the folder containing it. |
| Local build works but Vercel import fails | Confirm all source/assets/config/lockfile were pushed, exact filename case, Node 24.x and npm run build. |
| Only homepage works | Preserve the prerender step and all dist subfolders. Remove an accidental blanket SPA rewrite only after checking its purpose. |
| Wrong preview image/title | Check SITE_URL, page source and actual social-card.png. Redeploy; third-party social caches may need refreshing separately. |
| Update did not appear | Confirm git push succeeded, correct repo/branch is connected, latest deployment Ready and you opened the new URL. |
| Build verification reports missing project document | Add the real file or remove the premature resources entry; do not add a fake file merely to pass verification. |
| CV still looks old | Check the new file reached GitHub, deployment succeeded and you opened the latest downloaded file. |
| `SITE_URL` build error | Use a complete http/https origin, not a bare hostname or placeholder. |
| Preview needs sign-in | Check Vercel deployment protection/audience settings yourself. Do not assume a login requirement means a broken build. |

### G6. What to keep backed up

Keep the final ZIP, an updated recovery ZIP, and your GitHub history. Back up original private source documents separately outside public/Git folders. The project needs source, configuration, package-lock.json, public assets and documentation; node_modules and dist can be regenerated. Keep a short note of what you changed and tested.

## Official references

The guide's workflow was checked against official documentation. Product labels can change; use the equivalent current option if the interface differs.

- [Vite guide](https://vite.dev/guide/) and [static deployment](https://vite.dev/guide/static-deploy.html).
- [GitHub: adding locally hosted code](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
- [Vercel: Vite projects](https://vercel.com/docs/frameworks/frontend/vite).
- [VS Code on Windows](https://code.visualstudio.com/docs/setup/windows), [Node downloads](https://nodejs.org/en/download), [Git downloads](https://git-scm.com/download/win).
