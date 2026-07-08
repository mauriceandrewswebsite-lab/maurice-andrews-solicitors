"use client";
import Link from "next/link";
import Image from "next/image";

const defence = [
  ["DRUGS", "/criminal-defence-drugs"], ["FINANCIAL CRIMES", "/criminal-defence-financial-crimes"],
  ["MURDER DEFENCE", "/criminal-defence-murder"], ["NATIONAL SECURITY CRIMES", "/criminal-defence-national-security-crimes"],
  ["SEX & HUMAN RIGHTS CRIMES", "/criminal-defence-sex-human-rights-crimes"],
  ["TRAFFIC OFFENCES", "/criminal-defence-traffic-offences"], ["VIOLENT CRIMES", "/criminal-defence-violent-crimes"],
];
const moreLinks = [
  ["ALCOHOL AND YOUNG PEOPLE LAW", "https://www.gov.uk/alcohol-young-people-law"],
  ["COURT CALENDAR", "https://en.wikipedia.org/wiki/Legal_year#England"],
  ["LEGISLATION UNDERSTANDING", "https://www.legislation.gov.uk/understanding-legislation"],
  ["SERVICE COMPLAINTS POLICY", "/complaints-policy"],
  ["DATA PROTECTION COMPLAINTS PROCEDURE", "/data-protection-complaints-procedure"],
  ["DATA PROTECTION COMPLAINT FORM", "/data-protection-complaint-form"],
  ["PRIVACY NOTICE", "/privacy-policy"],
  ["COOKIE", "/cookie"],
];
const aboutLinks = [["ABOUT US", "/aboutUs"], ["CONTACT US", "/contactUs"], ["OUR TEAM", "/ourTeam"], ["CAREERS", "/career"]];

const socials = [
  { href: "https://www.facebook.com/mauriceandrewssolicitors", label: "Facebook", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { href: "https://www.instagram.com/mauriceandrewssolicitors/", label: "Instagram", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { href: "https://twitter.com/MASolicitorsUK", label: "Twitter/X", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { href: "https://www.linkedin.com/company/maurice-andrews-solicitors/", label: "LinkedIn", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/assets/whiteLogo.svg" alt="Maurice Andrews" width={160} height={60} className="mb-4 h-auto w-[140px]" />
          <h3 className="mb-3 text-lg font-medium">THERE IS A <span className="text-accent">DEFENCE</span><br />FOR EVERY <span className="text-accent">OFFENCE</span></h3>
          <p className="mb-3 text-xs uppercase text-accent">FIND US ON</p>
          <div className="flex gap-3 text-xl">{socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="transition-colors hover:text-accent">{s.icon}</a>)}</div>
        </div>
        <div><h4 className="mb-3 text-xs font-bold uppercase text-accent">DEFENCE</h4>{defence.map(([l, h]) => <FL key={l} href={h}>{l}</FL>)}</div>
        <div><h4 className="mb-3 text-xs font-bold uppercase text-accent">MORE LINKS</h4>{moreLinks.map(([l, h]) => <FL key={l} href={h}>{l}</FL>)}</div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase text-accent">ABOUT US</h4>{aboutLinks.map(([l, h]) => <FL key={l} href={h}>{l}</FL>)}
          <div className="mt-6"><h4 className="mb-3 text-xs font-bold uppercase text-accent">OFFICE OPENING HOURS</h4><p className="text-sm">Mon to Fri : 9.00am to 5:30 pm</p></div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-10 border-t border-grey px-5 py-6">
        <div className="flex flex-col items-center gap-2">
          <a href="https://www.sra.org.uk/solicitors/firm-based-authorisation/abs-register/668336/" target="_blank" rel="noopener noreferrer" aria-label="SRA Authorised & Regulated - Solicitors Regulation Authority register entry for Maurice Andrews Solicitors (firm ID 668336)">
            <img src="/assets/sra-regulated.svg" alt="SRA Authorised & Regulated" className="h-[80px] w-auto" />
          </a>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-grey">SRA Regulated · Firm ID 668336</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a href="https://www.lawsociety.org.uk/topics/firm-accreditations/lexcel" target="_blank" rel="noopener noreferrer" aria-label="Lexcel Accredited Practice Management Standard - The Law Society">
            <img src="/assets/lexcel-badge.png" alt="Lexcel Accredited Practice Management Standard" className="h-[100px] w-auto" />
          </a>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-grey">Lexcel Accredited</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a href="https://www.gov.uk/legal-aid" target="_blank" rel="noopener noreferrer" aria-label="GOV.UK - Legal Aid information">
            <img src="/assets/legal-aid-logo.svg" alt="Legal Aid Agency" className="h-[80px] w-auto" />
          </a>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-grey">Legal Aid Agency</span>
        </div>
      </div>
      <div className="border-t border-grey py-5 text-center text-lg text-accent">MAURICE ANDREWS SOLICITORS | COPYRIGHT 2026 | ALL RIGHTS RESERVED</div>
      <div className="px-5 pb-8 pt-2 text-right text-base font-semibold text-muted"><a href="https://aqldigital.co.uk/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">WEB APP BY ❤ AQL DIGITAL</a></div>
    </footer>
  );
}
function FL({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="block border-b border-grey py-1.5 text-sm transition-colors hover:text-accent">{children}</Link>;
}
