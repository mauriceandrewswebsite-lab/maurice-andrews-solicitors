# Maurice Andrews Solicitors — Footer Logos Notes

**Last updated:** 10 July 2026

## Final footer logo setup (the one currently live and approved by client)

All three footer logos are at `h-16` (64px tall) in `src/components/Footer.tsx`:

```tsx
<div className="mx-auto flex max-w-[1200px] items-center justify-center gap-16 border-t border-grey px-5 py-6">
  <a href="https://www.sra.org.uk/consumers/register/organisation/?sraNumber=637667&prevSearchText=Maurice%20Andrews%20solictors&prevSearchFilter=Firm" target="_blank" rel="noopener noreferrer" aria-label="SRA Authorised & Regulated">
    <img src="/assets/sra-regulated.png" alt="SRA Regulated" className="h-16 w-auto" />
  </a>
  <a href="https://www.lawsociety.org.uk/topics/firm-accreditations/lexcel" target="_blank" rel="noopener noreferrer" aria-label="Lexcel Accredited">
    <img src="/assets/lexcel-badge.png" alt="Lexcel Accredited" className="h-16 w-auto" />
  </a>
  <a href="https://www.gov.uk/legal-aid" target="_blank" rel="noopener noreferrer" aria-label="Legal Aid Agency">
    <img src="/assets/legal-aid-logo.png" alt="Legal Aid Agency" className="h-16 w-auto" />
  </a>
</div>
```

## The three logo files

| Logo | File | Source / Description |
|------|------|----------------------|
| SRA | `public/assets/sra-regulated.png` | Clean client-provided image. Shield with red arrow + "REGULATED BY SOLICITORS REGULATION AUTHORITY" text. **NO grey background**. Date "10 JUL 2026" added cleanly below the badge. |
| Lexcel | `public/assets/lexcel-badge.png` | Original from the cloned repo (Lexcel Accredited Practice Management Standard seal) |
| Legal Aid | `public/assets/legal-aid-logo.png` | Client-provided image (royal crest + "Legal Aid Agency" text) |

## Why the date "10 JUL 2026" is required below the SRA badge

The SRA (Solicitors Regulation Authority) requires regulated UK solicitors' firms to display their official digital badge. The date on/under the badge shows when the firm's registration was last verified — it's what makes the badge a **live, verifiable link** to the SRA register. Without the date, the badge is just a static image and doesn't link to a verified entry.

All UK solicitors' websites with an SRA badge must include the date.

## Important rules for future me

- **DO NOT** use any logo size above `h-24` — the logos look oversized and squashed.
- **DO NOT** use the SRA badge with a grey background (the one with grey box behind shield) — client rejected it.
- **DO NOT** use the official sra.org.uk SVG logo — client prefers the client-provided clean version.
- **DO NOT** modify the SRA logo image unless the client explicitly asks — it is the approved final version.
- **DO** keep all three logos at the same height (currently `h-16` = 64px) so they look balanced.
- **DO** keep the `gap-16` spacing between them.
- **DO** keep the three external links:
  - SRA → Maurice Andrews' register entry on sra.org.uk (firm ID 637667)
  - Lexcel → lawsociety.org.uk/topics/firm-accreditations/lexcel
  - Legal Aid → gov.uk/legal-aid
- **DO** keep the date "10 JUL 2026" below the SRA badge — it's required by the SRA.

## Other notes

- **DO NOT** replace the home page banner (`public/assets/front-page-banner.jpg`) — it is the original full image with the two men in suits and the complete slogan "THERE IS A DEFENCE FOR EVERY OFFENCE" above their heads with a broken chain behind them.
- The site is deployed via Vercel from the GitHub repo: `mauriceandrewswebsite-lab/maurice-andrews-solicitors`

## How to deploy a change

```bash
cd ~/Projects/maurice-andrews-website/source
pnpm build
git add .
git commit -m "describe your change"
git push
```

Vercel auto-deploys within 1-2 minutes of the push.