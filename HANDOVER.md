# Maurice Andrews Solicitors — Website Handover

**Last updated:** 31 July 2026 (post-homepage hero update)
**Status:** ✅ LIVE — all production traffic serving the latest build

## Recent client-requested updates

| Date | Request | Action | Commit |
|---|---|---|---|
| 31 Jul 2026 | Hero image text hidden at top | Changed hero CSS `background-position` from `center` to `center top` so the baked-in slogan "THERE IS A DEFENCE FOR EVERY OFFENCE" is visible | `fbee7af` |
| 31 Jul 2026 | Replace homepage hero image with new team photo | Updated `public/assets/front-page-banner.jpg`; old banner kept as `front-page-banner-OLD.jpg` | `210158d` |
| 31 Jul 2026 | Replace homepage hero image again with updated team photo | Overwrote `public/assets/front-page-banner.jpg` with the latest client-provided image | `784530b` |
| 31 Jul 2026 | Add Akhmed Yakoob to team page like the rest of the team cards | Added entry to `src/data/team.ts` with recovered bio and portrait `/assets/akhmed-yakoob.jpg` | `55c3f21` |
| 31 Jul 2026 | Add Akhmed Yakoob to homepage team grid | Updated `src/app/page.tsx` team array so the homepage matches the team page | `055c5e7` |

---

## Live site

- **Production URL:** https://www.mauriceandrewssolicitors.co.uk
- **Vercel deployment ID:** `#5666493892` (commit `8be003d`) — superseded by commit `055c5e7` (homepage hero + Akhmed on homepage team grid)
- **Last deploy time:** 2026-07-31 00:50 UTC
- **Previous deploys (history):** `#5394775661` (e76cc8f — 10 Jul), `#5394748047` (82a52f2 — 10 Jul)

## GitHub

- **Repo:** https://github.com/mauriceandrewswebsite-lab/maurice-andrews-solicitors
- **Default branch:** `main`
- **Visibility:** Public
- **Clone URL (HTTPS):** `https://github.com/mauriceandrewswebsite-lab/maurice-andrews-solicitors.git`
- **Created:** 2026-06-06
- **Last push:** 2026-07-29 23:36 UTC

### Branches
| Branch | Purpose |
|---|---|
| `main` | ✅ Live code — only branch you should touch |
| `production` | ⚠️ Stale Vercel-managed branch from before the July 10 fixes. Do NOT delete — Vercel uses it. |

The `preview/wolverhampton-office` branch was merged and deleted after the Wolverhampton deploy.

### Recent commits (newest first)
```
055c5e7 Add Akhmed Yakoob to homepage team grid
210158d Replace homepage hero image with new team photo
55c3f21 Add Akhmed Yakoob to team page with bio and portrait
da3852f Update HANDOVER.md — Wolverhampton phone corrected to 01902 965560
95ab803 Corrected Wolverhampton phone to 01902 965560
8be003d Add Wolverhampton branch office (#1)
f8ee44b Add Wolverhampton branch office
e76cc8f Make date 10 JUL 2026 below SRA badge bigger and more readable
82a52f2 Use clean SRA badge (shield + text only, no grey background) with date 10 JUL 2026 below
fa66e80 Remove duplicate date - original badge already has its own 10 JUL 2026 date built in
f332fa0 Add date 10 JUL 2026 below SRA badge as required by SRA for verified registration
8a192e4 Restore SRA badge with date 10 JUL 2026 and CHECK THIS FIRM button (official format)
```

## Vercel

- **Team/Account:** Maurice Andrews (Hobby)
- **Project:** `maurice-andrews-solicitors`
- **Vercel bot username:** `vercel[bot]`
- **GitHub integration:** Vercel watches the repo via GitHub App and auto-deploys on push to `main` and on PR creation.
- **Custom domain:** `www.mauriceandrewssolicitors.co.uk` (managed in Vercel project → Settings → Domains)
- **Vercel dashboard:** https://vercel.com/dashboard → Maurice Andrews team → `maurice-andrews-solicitors`

### What Vercel does automatically
- Builds every push to `main` → deploys to **Production** (this is the live custom domain)
- Builds every PR → deploys to a **Preview URL** (e.g. `maurice-andrews-solicitors-git-<hash>-maurice-andrews-projects.vercel.app`)
- Preview URLs are SSO-gated — must be signed into Vercel as `mauriceandrewswebsite@gmail.com` to view.

---

## Office data (single source of truth)

File: `source/src/data/offices.ts`

| Field | Birmingham (main) | Wolverhampton (branch) |
|---|---|---|
| Label | Main Office | Branch Office |
| Address | 180-182 Soho Hill, Handsworth, Birmingham B19 1AG | 3rd & 4th Floors, 84 Salop Street, Wolverhampton WV3 0SR |
| Phone (display) | 0121 554 4900 | 01902 965560 |
| Phone (tel:) | tel:+441215544900 | tel:+441902965560 |
| Phone (E.164) | +441215544900 | +441902965560 |
| Email | info@mauriceandrewssolicitors.co.uk | (same) |
| Google Maps URL | https://maps.google.com/?q=180-182+Soho+Hill+Birmingham+B19+1AG | https://maps.app.goo.gl/g3Kobzs4nuK48niE6 |
| Place ID | — | 0x48709b510145d57d:0xe40440a9eeddcf31 |
| Hours | Mon–Fri 9:00–17:30, Sat–Sun Closed | (same) |

To add/change an office: edit `source/src/data/offices.ts`, then rebuild.

---

## Workflow for future changes

### Quick path (recommended)

1. **Edit source** in `source/src/` (or `source/src/data/offices.ts` for office data).
2. **Test locally:**
   ```bash
   cd /Users/eijazagent/Projects/maurice-andrews-website/source
   export PATH="$PWD/node_modules/.bin:$PATH"
   next build
   ```
   Output goes to `source/out/`. Build success = your changes compile.
3. **Commit:**
   ```bash
   cd source
   git add -A
   git commit -m "<describe change>"
   git push origin main
   ```
4. **Vercel auto-deploys** within ~30s. Watch at https://vercel.com/dashboard.
5. **Verify live:** `curl -sL https://www.mauriceandrewssolicitors.co.uk | grep -c "<expected text>"` should be ≥ 1.

### Safer path (preview first)

1. Edit source.
2. Branch off `main`:
   ```bash
   git checkout -b preview/<feature-name>
   git push -u origin preview/<feature-name>
   ```
3. Open PR on GitHub (use the "Open pull request" prompt on the branch page). Vercel posts a preview URL as a comment within ~60s.
4. View preview in Chrome (signed into Vercel).
5. Once approved: `gh pr merge --merge` (or via GitHub web) → Vercel builds the production deploy.

### Auth prerequisites for terminal-side git push

- `gh` CLI must be authenticated for the `mauriceandrewswebsite-lab` GitHub account. If `gh auth status` shows "invalid token", run `gh auth login -h github.com --git-protocol https --web` and complete the browser OAuth.
- If `gh` web flow is unreliable, generate a Fine-Grained PAT at https://github.com/settings/personal-access-tokens with **Contents: Read and write** (and **Pull requests: Read and write** if you want to open PRs via API), then:
  ```bash
  git remote set-url origin "https://x-access-token:<TOKEN>@github.com/mauriceandrewswebsite-lab/maurice-andrews-solicitors.git"
  ```
- **Always rotate the PAT after use** — revoke from GitHub UI and update the remote URL.

---

## On-disk state (canonical layout)

```
/Users/eijazagent/Projects/maurice-andrews-website/
├── source/                              # ✅ LIVE CODE (git checkout main)
│   ├── src/
│   │   ├── data/
│   │   │   ├── offices.ts              # ← single source of truth for office data
│   │   │   └── team.ts
│   │   ├── components/Footer.tsx       # ← uses offices[].map(...)
│   │   ├── app/
│   │   │   ├── layout.tsx              # ← schema.org LegalService + department[]
│   │   │   ├── contactUs/page.tsx      # ← contact cards + 2-column maps
│   │   │   ├── aboutUs/page.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── public/                         # static assets (logos, icons)
│   ├── out/                            # build output (gitignored, regenerated on build)
│   ├── package.json
│   ├── next.config.mjs
│   └── vercel.json
│
├── live-snapshot-2026-07-29/           # ✅ HTML mirror of live site (17 pages, fetched 29 Jul 00:35 UTC)
│   ├── index.html
│   ├── aboutUs.html
│   ├── contactUs.html
│   ├── ... (17 total)
│
├── BACKUP-ORIGINAL-before-fixes/        # ✅ SAFETY NET (08 Jul, pre-Wolverhampton and pre-SRA-fixes)
│
├── drafts/                              # working drafts (untouched)
├── notes/                               # project notes
├── fasthost old developer config/       # historical hosting config (untouched)
└── HANDOVER.md                          # ← THIS FILE
```

**Do not create new backup folders.** If you need a temporary backup before a change, use `git stash` or `git branch backup/<name>` — those are recoverable and don't pollute the filesystem.

---

## NAS layout (canonical)

```
/Volumes/CRITICAL/working-files/Projects/active/   # current project workspace
/Volumes/CRITICAL/working-files/Projects/archive/  # archived completed projects
/Volumes/CRITICAL/cold-backup/                     # daily Hermes backups (rotation)
```

NAS **does not** hold a duplicate of this website's source — the canonical source of truth is `/Users/eijazagent/Projects/maurice-andrews-website/source/` (git-tracked, pushed to GitHub).

---

## Common tasks

### "Add a new office"
1. Open `source/src/data/offices.ts`, add a new object to the `offices` array (copy the Wolverhampton shape).
2. Set `isMain: false` (only one office should be `true`).
3. Run `next build` to confirm compile.
4. Commit + push to `main`. Vercel auto-deploys.

### "Change a phone number"
1. Edit the `phoneDisplay`, `phoneTel`, `phoneE164` fields in `offices.ts`.
2. Build, commit, push. Footer + contact cards + schema.org all read from the same object.

### "Change hours"
1. Edit the `hours` array in `offices.ts`.
2. Update the `openingHoursSpecification` in `source/src/app/layout.tsx` schema.org if hours differ between offices.

### "Roll back a broken deploy"
```bash
cd /Users/eijazagent/Projects/maurice-andrews-website/source
git revert HEAD            # creates a new commit that undoes the last change
git push origin main       # Vercel redeploys the reverted state
```
Or in Vercel dashboard: Deployments → click previous good deploy → "Promote to Production".

### "Full rollback to pre-Wolverhampton state"
```bash
cd /Users/eijazagent/Projects/maurice-andrews-website
rm -rf source
cp -R BACKUP-ORIGINAL-before-fixes source
cd source
git checkout main && git reset --hard e76cc8f
git push -f origin main    # Vercel redeploys the older state
```

---

## What NOT to do

- ❌ Don't push directly without running `next build` first — silent compile errors don't surface until Vercel tries to build, which wastes a deploy.
- ❌ Don't create duplicate backup folders on disk — use git.
- ❌ Don't touch the `production` branch — it's Vercel-managed.
- ❌ Don't commit `.next/` or `node_modules/` — they're already in `.gitignore`, but verify with `git status` before committing.
- ❌ Don't store the GitHub PAT in chat or in any committed file — rotate immediately after use.
- ❌ Don't change the deployment account: this repo deploys under the `mauriceandrewswebsite-lab` GitHub account and the `mauriceandrewswebsite@gmail.com` Vercel account only.

---

## Verified live (29 Jul 2026 00:35 UTC)

```bash
$ curl -sL https://www.mauriceandrewssolicitors.co.uk | grep -oE "OUR OFFICES|Wolverhampton|0121 824 3625|84 Salop Street|Salop Street|V3 0SR" | sort | uniq -c
   1 0121 824 3625
   3 84 Salop Street
   1 OUR OFFICES
   3 V3 0SR
   7 Wolverhampton
```

— end —