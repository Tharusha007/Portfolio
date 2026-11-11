# Verification report

## Scope and provenance

This is the retained and restored portfolio, not a redesign. The current source preserves the original supplied portrait, ivory/teal editorial design, seven homepage sections and three detailed case studies. The uploaded backup was compared before editing; newer documentation and the local-preview 404 fix were retained. The original lost checkout/lockfile cannot be certified byte-for-byte identical; missing styling/scripts were reconstructed earlier from recorded decisions and the lockfile regenerated with pinned direct versions.

## Executed checks before final packaging

| Check | Actual result |
| --- | --- |
| `npm ci` on retained project | Passed, 10 November 2026. |
| `npm run typecheck` | Passed after the 404 correction. |
| `npm run build` | Passed after the 404 correction. |
| Included build verifier | Five prerendered HTML pages; 172 local links/assets; 15 compiled assets; valid PDF signature. Checks titles, descriptions, Open Graph tags, duplicate IDs, local fragments, image/srcset/font files and expected sections. |
| Local HTTP route check | Homepage and all three case-study paths returned 200. Unknown path returned 404 and the custom not-found title after the fix. |
| PDF | Two pages generated, rendered and visually inspected; professional email and internship dates checked; private address/phone/referees/cover letter excluded. Still an owner-review candidate. |

## Browser checks performed, 9–10 November 2026

| Feature | Observation |
| --- | --- |
| Desktop homepage | Rendered with the original portrait and expected sections; no broken images observed. |
| Desktop navigation | All seven links clicked; corresponding active states verified after scrolling settled. |
| Case studies | All three loaded with unique titles/descriptions and nine sections each. All 27 desktop case contents links were clicked. |
| Project navigation | Next-project cycle and Back to selected work verified. |
| Mobile navigation | All seven section choices exercised with keyboard; menu closed and focus moved to target sections. Opening focuses the first link; Tab/Shift+Tab wrap, Escape closes and returns focus; body scroll restored. |
| Keyboard focus | A 2 px visible outline with 6 px offset observed on the focused menu control. This is not a complete screen-reader or WCAG conformance audit. |
| Responsive layouts | Homepage and all three cases showed no document horizontal overflow at desktop (~1363 px), tablet (779 CSS px) and narrow (340 CSS px) widths. Narrow/tablet widths were produced with browser zoom because DevTools was blocked. Real touch-device emulation was not performed. |
| Direct routes / refresh | Each case-study path loaded directly and survived refresh at narrow width. |
| CV download | Browser download completed. The packaged PDF was separately opened/rendered and checked. |
| Copy email | Clicking displayed success after the Clipboard API resolved. Actual paste into a user email app and the denied-permission error path were not verified; one session clipboard read returned empty and is not treated as proof of clipboard contents. |
| Email | Correct `mailto:tharushahanwella4@gmail.com?subject=Professional%20opportunity` target verified. Browser policy rejected opening the external mail app. No bypass attempted and no email sent. |
| GitHub / LinkedIn | Exact destination URLs and new-tab/link attributes verified in source/rendered HTML. External profile loading/authenticated account state not verified. |
| 404 content | `/404.html` rendered with custom content, noindex metadata and a working return-to-home link. Unknown-route HTTP status verified separately against the corrected Vite preview. The managed static QA host has its own generic error page, so its behavior is not claimed as Vercel validation. |
| Browser errors | No site-origin console/runtime errors observed in the tested pages. Browser-extension metadata errors were present and were not attributed to the portfolio. |

## Correction made during final completion

Vite's default SPA preview served homepage HTML with HTTP 200 for unknown paths. `vite.config.ts` now uses a preview-only middleware that serves the built custom `404.html` with HTTP 404 while preserving valid static files/routes. Fresh typecheck/build and an HTTP test verified the correction. No visual redesign or unrelated feature was introduced.

## Packaging verification

Clean ZIP extraction, npm ci, typecheck, build and verify passed on 11 November 2026. The clean copy also passed configured-origin canonical/OG/sitemap and HTTP route/404 checks. Final reports were updated afterward; application source, assets, manifest, lockfile and build configuration were compared byte-for-byte with the cleanly built copy. See COMPLETION-REPORT.md for the complete results.

## Required manual checks after local setup / deployment

- Review and approve the public résumé contents before publishing.
- Open the email link on the Windows laptop; verify recipient/subject, then send only if desired. Test clipboard paste and permission-denied feedback.
- Open the GitHub/LinkedIn destinations in a normal browser; LinkedIn may request sign-in.
- Check real phone/tablet touch behavior, Safari/Firefox, 320 px width, screen-reader announcements, zoom preferences and full accessibility/contrast compliance.
- Reduced-motion CSS is present and disables smooth scrolling/transitions. OS preference emulation was not available in the restricted QA browser; verify with Windows Animation effects off.
- After deploying the NEW Vercel project: check HTTP status for unknown routes, direct refreshes, favicon, absolute canonical/OG URLs, sitemap, social preview caching and access/protection settings.
- Field Core Web Vitals, network-throttled performance, search indexing and live email delivery were not measured or claimed.

No GitHub/Vercel accounts, existing portfolio, repositories or domains were modified. No public deployment was performed.
