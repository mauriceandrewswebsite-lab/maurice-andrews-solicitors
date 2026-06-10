import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollButton from "@/components/ScrollButton";

export const metadata: Metadata = { title: "Careers | Maurice Andrews Solicitors" };

const roles = ["ADMIN STAFF","BACK OFFICE","CONSULTANCY","HIGH COURT ADVOCACY","PARALEGAL","RECEPTION STAFF","SOLICITOR"];

export default function CareerPage() {
  return (
    <>
      <Header /><CookieBanner />
      <main>
        {/* HERO */}
        <section className="bg-primary px-4 py-14 text-center text-white"><div className="mx-auto max-w-[1240px]">
          <h1 className="mx-auto mb-6 max-w-[700px] text-[28px] font-bold leading-tight sm:text-[36px]">JOIN OUR TEAM FASTEST GROWING THRIVING FIRM IN THE UK</h1>
          <ScrollButton />
        </div></section>
        {/* VALUES */}
        <section className="bg-white px-4 py-14"><div className="mx-auto max-w-[900px]">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary">Our values</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[{t:"Hard working",d:"We value dedication and a strong work ethic in everything we do."},{t:"Diversity",d:"We embrace diversity and believe it strengthens our team and our service."},{t:"Training",d:"We invest in continuous learning and professional development."},{t:"Support",d:"We provide a supportive environment where every team member can thrive."}].map(c => <div key={c.t} className="text-center p-4"><div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-light-bg text-xl font-bold text-primary">{c.t[0]}</div><h3 className="mb-2 text-sm font-bold uppercase text-primary">{c.t}</h3><p className="text-xs leading-relaxed text-grey">{c.d}</p></div>)}
          </div>
        </div></section>
        {/* APPLICATION FORM */}
        <section id="apply-form" className="bg-light-bg px-4 py-14"><div className="mx-auto max-w-[700px]">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary">Hello, Maurice Andrews team!</h2>
          <form className="space-y-5">
            <div><label className="mb-1 block text-sm font-semibold text-primary">My name is</label><input type="text" placeholder="YOUR FULL NAME" className="w-full rounded-md border border-[#ddd] px-4 py-3 text-base" /></div>
            <div><label className="mb-1 block text-sm font-semibold text-primary">from</label><input type="text" placeholder="COMPANY NAME" className="w-full rounded-md border border-[#ddd] px-4 py-3 text-base" /></div>
            <div><label className="mb-2 block text-sm font-semibold text-primary">I&apos;d like to add value as</label><div className="flex flex-wrap gap-2">{roles.map(r => <button key={r} type="button" className="rounded-full border border-primary px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white">{r}</button>)}</div></div>
            <div><label className="mb-1 block text-sm font-semibold text-primary">Please find my cv</label><input type="file" className="w-full rounded-md border border-[#ddd] px-4 py-3 text-base" /></div>
            <div><label className="mb-1 block text-sm font-semibold text-primary">I learned about your company through</label><input type="text" className="w-full rounded-md border border-[#ddd] px-4 py-3 text-base" /></div>
            <div><label className="mb-1 block text-sm font-semibold text-primary">Contact me back at</label><input type="text" className="w-full rounded-md border border-[#ddd] px-4 py-3 text-base" /></div>
            <button type="submit" className="w-full rounded-md bg-primary px-8 py-3.5 font-bold text-white hover:bg-primary-light">SEND MESSAGE</button>
          </form>
        </div></section>
        {/* DETAILS */}
        <section className="bg-white px-4 py-14"><div className="mx-auto max-w-[900px]">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary">Details</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[["Email","info@mauriceandrewssolicitors.co.uk"],["Landline","0121 554 4900"],["Mobile","0121 554 4900"],["Address","180-182 Soho Hill, Birmingham B19 1AG"]].map(([t,v]) => <div key={t} className="rounded-lg bg-light-bg p-5"><h3 className="mb-1 text-sm font-bold uppercase text-primary">{t}</h3><p className="text-base text-grey">{v}</p></div>)}
          </div>
        </div></section>
        {/* CTA */}
        <section className="bg-primary-dark px-4 py-14 text-center text-white"><h1 className="mb-6 text-3xl font-bold">THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY <span className="text-accent">OFFENCE</span></h1>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">FIND US ON</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/mauriceandrewssolicitors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.instagram.com/mauriceandrewssolicitors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://twitter.com/MASolicitorsUK" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.linkedin.com/company/maurice-andrews-solicitors/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}