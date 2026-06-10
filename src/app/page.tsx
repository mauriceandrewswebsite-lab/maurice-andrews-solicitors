import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleReviews from "@/components/GoogleReviews";
import Accordion from "@/components/Accordion";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Maurice Andrews Solicitors — Criminal Defence Lawyers Birmingham",
  description: "Expert criminal defence solicitors in Birmingham. 24/7 emergency helpline. Legal Aid available. Drug, fraud, murder, and violent crime defence.",
};
const services = [
  ["01", "DRUGS", "/criminal-defence-drugs"], ["02", "FINANCIAL CRIMES", "/criminal-defence-financial-crimes"],
  ["03", "MURDER DEFENCE", "/criminal-defence-murder"], ["04", "NATIONAL SECURITY CRIMES", "/criminal-defence-national-security-crimes"],
  ["05", "SEX & HUMAN RIGHTS CRIMES", "/criminal-defence-sex-human-rights-crimes"], ["06", "TRAFFIC OFFENCES", "/criminal-defence-traffic-offences"],
  ["07", "VIOLENT CRIMES", "/criminal-defence-violent-crimes"], ["08", "OTHERS", "/"],
];
const companyCards = [
  { t: "Mission", d: "We are driven by one thing — securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.", icon: "/assets/mission.37392e83.svg" },
  { t: "Vision", d: "We dream of a future where everyone gets the justice they deserve. We are here to make it happen, one case at a time.", icon: "/assets/icon-vision.svg" },
  { t: "Values", d: "We stand for fairness, respect, and fierce advocacy. Your rights are our command, your battle is ours.", icon: "/assets/icon-values.svg" },
  { t: "Promise", d: "You are never alone in your journey. We promise to stand beside you, be your voice, and tirelessly work towards justice.", icon: "/assets/icon-promise.svg" },
];
const foundationCards = [
  { t: "Advocacy", d: "We are driven by one thing — securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.", icon: "/assets/icon-advocacy.svg" },
  { t: "Expertise", d: "We dream of a future where everyone gets the justice they deserve. We are here to make it happen, one case at a time.", icon: "/assets/icon-expertise.svg" },
  { t: "Communication", d: "We stand for fairness, respect, and fierce advocacy. Your rights are our command, your battle is ours.", icon: "/assets/icon-communication.svg" },
  { t: "Perseverance", d: "We exhibit relentless perseverance. No matter how tough the fight gets, we commit ourselves to stand by our clients and fight tirelessly.", icon: "/assets/icon-perseverance.svg" },
];
const values = ["DETERMINATION","EXCELLENCE","PERSISTENCE","SOLIDARITY","BRAVERY","EMPATHY","RESILIENCE","WISDOM"];
const team = [
  { name: "Mariam Khan", photo: null, initials: "MK", title: "", profileTitle: "Trainee Solicitor", bio: "Miss Khan joined Maurice Andrews Solicitors as a Trainee Solicitor, having completed her LPC at the University of Law. She works alongside our senior solicitors on a broad range of criminal defence matters, from initial police station attendance through to Crown Court preparation. Her particular interests include drug offences, financial crime, and youth justice. Miss Khan holds a degree in Law from the University of Birmingham and speaks English, Urdu, and Punjabi. She is dedicated to client care and continues to develop her advocacy skills through ongoing professional training with the firm." },
  { name: "Mazar Iqbal", photo: "/assets/other-01.mazar.jpg", initials: null, title: "SENIOR SOLICITOR & HIGH COURT ADVOCATE", profileTitle: "Senior Solicitor & High Court Advocate", bio: "Joining Maurice Andrews Solicitors in 2018, Mr. Iqbal has established himself as an integral part of our team, bringing with him over two decades of rich legal experience. As a Senior Solicitor and High Court Advocate, he has a commendable track record of defending clients in both Magistrates Court and Crown Court. Having handled numerous high-profile cases, Mr. Iqbal's expertise spans a broad spectrum, from handling serious offenses like Rape and Terrorism to complex matters involving Money Laundering, Fraud, and Business Investigations. Beyond his legal acumen, Mr. Iqbal is renowned for his ability to craft compelling defenses that not only resonate in the courtroom but also ensure his clients' voices are genuinely heard and heeded. Often referred to as a \"problem solver,\" he is relentless in his pursuit of innovative solutions to the challenges that arise. Clients can be confident when Mr. Iqbal is in their corner; his success rate speaks for itself. Described by those he represents as a robust and eloquent advocate, Mr. Iqbal consistently approaches each case with professionalism and unwavering commitment." },
  { name: "Tabrace Hussain", photo: "/assets/P1345612-1.1d45a86b.jpg", initials: null, title: "PARALEGAL - POLICE STATION ACCREDITED", profileTitle: "Paralegal — Police Station Accredited", bio: "Tabrace Hussain is an integral part of the Maurice Andrews Solicitors team, consistently proving his worth through his meticulous work and dedication. Armed with his Police Station Accreditation, he serves as a beacon of support for clients during their preliminary engagements with the legal system, a time that can often be fraught with uncertainty and anxiety. His deep understanding of the complexities involved in early-stage legal processes ensures that clients are not only well-represented, but also informed every step of the way. Beyond his technical knowledge, Tabrace is known for his ability to empathise with clients, offering a reassuring presence when it's needed most. Collaborative by nature, he works seamlessly with other members of our team, ensuring that all aspects of a client's case are thoroughly examined and addressed. Furthermore, his continuous pursuit of professional growth is testament to his commitment to excellence in the field of law." },
];

export default function HomePage() {
  return (
    <>
      <Header /><CookieBanner />
      <main>
        {/* HERO — photo only, text is baked into the image */}
        <section
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/front-page-banner.png')",
            aspectRatio: '1706 / 922',
            minHeight: '280px',
          }}
        >
          <div className="absolute inset-0 bg-primary-dark/40" />
        </section>

        {/* CTA — Left white + Right dark blue emergency box */}
        <section>
          <div className="flex flex-col md:flex-row max-md:justify-center">
            {/* LEFT — white bg */}
            <div className="flex-1 px-4 py-8 md:py-10 md:pl-10 md:pr-10 lg:py-16 lg:pl-16 max-md:text-center">
              <h2 className="mb-10 text-xl font-medium text-primary md:mb-12 md:text-3xl lg:mb-24 lg:text-5xl">
                GET IMMEDIATE<br />ENGAGEMENT AND<br />YOUR BEST CHANCE<br />OF ACQUITTAL
              </h2>
              <a
                href="/contactUs"
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-black px-8 py-3 text-base font-semibold text-white transition-all duration-300"
              >
                <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                <span className="relative z-10">LETS TALK IT OVER</span>
                <ArrowRight size={18} className="relative z-10" />
              </a>
            </div>
            {/* RIGHT — dark blue emergency box */}
            <div className="relative flex-1 bg-[#1C2946] px-4 py-8 text-white md:py-10 md:pl-10 md:pr-10 lg:py-16 lg:pl-16">
              <Image src="/assets/brand.svg" alt="" width={200} height={200} className="absolute right-10 bottom-10 hidden lg:block opacity-10" />
              <h2 className="mb-8 text-xl font-semibold md:mb-10 md:text-3xl lg:mb-16 lg:text-5xl">EMERGENCY?</h2>
              <p className="mb-2 text-lg text-[#B5E6EA] md:text-lg lg:mb-6 lg:text-2xl">Call 24 hours a day, 7 days a week.</p>
              <a href="tel:01215544900" className="text-2xl font-bold text-[#B5E6EA] md:text-3xl lg:text-4xl">0121 554 4900</a>
              <p className="mt-6 text-lg font-semibold lg:text-xl">CONTACT US NOW</p>
              <div className="mt-6 flex gap-8">
                <CI href="https://wa.me/447956169333" src="/assets/whatsapp.3c762c72.svg" label="WhatsApp" />
                <CI href="mailto:info@mauriceandrewssolicitors.co.uk" src="/assets/email.f3d854a7.svg" label="Email" />
                <CI href="tel:01215544900" src="/assets/call.1d4f873d.svg" label="Call us" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white px-4 pb-14"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-10 text-center text-2xl font-bold text-primary lg:text-3xl">DEFENDING YOUR RIGHTS ACROSS CRIMINAL CHARGES</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([n, l, h]) => <Link key={n} href={h} className="group flex items-center gap-3 rounded-lg bg-light-bg p-5 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"><span className="text-[22px] font-extrabold opacity-50">{n}</span>{l}<ArrowRight size={16} className="ml-auto transition-transform group-hover:translate-x-1" /></Link>)}
          </div>
        </div></section>

        {/* LEGAL AID */}
        <section className="bg-primary px-4 py-14 text-center text-white"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-2 text-2xl font-bold lg:text-3xl">Legal Aid Available at Maurice Andrews Solicitors</h2>
          <p className="mb-1 text-xl text-accent lg:text-2xl">Don&apos;t Let Costs Stop You!</p>
          <p className="mx-auto mb-6 max-w-[650px] text-sm leading-relaxed opacity-90">At Maurice Andrews Solicitors, We understand that legal fees can be a concern. Explore whether you qualify for Legal Aid and secure the expert legal representation you deserve without the financial burden.</p>
          <a href="tel:01215544900" className="text-xl font-bold text-accent sm:text-2xl">0121 554 4900</a>
          <div className="mt-6"><Link href="tel:01215544900" className="btn-primary">CALL US <ArrowRight size={18} /></Link></div>
        </div></section>

        {/* COMPANY — cards with icons */}
        <section className="bg-white px-4 py-14"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-2 text-center text-2xl font-bold text-primary lg:text-3xl">Company</h2>
          <p className="mb-8 text-center font-semibold"><Link href="/aboutUs" className="inline-flex items-center gap-1 text-primary hover:underline">About Us <ArrowRight size={16} /></Link></p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyCards.map(c => (
              <div key={c.t} className="space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:scale-100 hover:shadow-lg xl:p-8">
                <div className="mt-7 inline-block bg-[#1C2946] p-3">
                  <Image src={c.icon} alt="" width={32} height={32} />
                </div>
                <h3 className="text-lg font-semibold text-primary md:text-xl">{c.t}</h3>
                <p className="pb-5 text-[#646F85]">{c.d}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* FOUNDATIONS — cards with icons */}
        <section className="bg-white px-4 pb-14"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-2 text-center text-2xl font-bold text-primary lg:text-3xl">Foundations</h2>
          <p className="mb-8 text-center font-semibold"><Link href="/contactUs" className="inline-flex items-center gap-1 text-primary hover:underline">Contact Us <ArrowRight size={16} /></Link></p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foundationCards.map(c => (
              <div key={c.t} className="space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:scale-100 hover:shadow-lg xl:p-8">
                <div className="mt-7 inline-block bg-[#E8F1FE] p-3">
                  <Image src={c.icon} alt="" width={32} height={32} />
                </div>
                <h3 className="text-lg font-semibold text-primary md:text-xl">{c.t}</h3>
                <p className="pb-5 text-[#646F85]">{c.d}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* HELPLINE */}
        <div className="bg-primary px-4 py-8 text-center text-white"><h3 className="text-base">Call our 24-hour emergency helpline: <a href="tel:01215544900" className="text-2xl font-bold text-accent">0121 554 4900</a></h3><div className="mt-4 flex justify-center gap-5 text-sm"><CI href="https://wa.me/447956169333" src="/assets/whatsapp.3c762c72.svg" label="WhatsApp" /><CI href="mailto:info@mauriceandrewssolicitors.co.uk" src="/assets/email.f3d854a7.svg" label="Email" /><CI href="tel:01215544900" src="/assets/call.1d4f873d.svg" label="Call" /></div></div>

        {/* VALUES */}
        <div className="mx-auto max-w-[900px] px-4 pb-10"><div className="grid grid-cols-4 lg:grid-cols-8 gap-1">{values.map(v => <div key={v} className="cursor-pointer rounded py-4 text-center transition-colors hover:bg-light-bg"><div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-bg text-lg font-bold text-primary">{v[0]}</div><span className="text-[10px] font-bold uppercase text-primary">{v}</span></div>)}</div></div>

        {/* APPROACH & VALUES — two-column accordion + images */}
        {/* NEED URGENT HELP bar */}
        <div className="bg-primary px-4 py-3 text-center text-white">
          <p className="flex items-center justify-center gap-2 text-sm">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-white/60 text-[10px] font-bold">!</span>
            <span className="uppercase tracking-wide">NEED URGENT HELP?</span>
            <span className="hidden sm:inline">Call our 24-hour emergency helpline:</span>
            <a href="tel:01215544900" className="font-bold text-accent">0121 554 4900</a>
          </p>
        </div>

        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-4 py-12 lg:py-20">
            {/* TOP ROW: accordion left + image right */}
            <div className="mb-12 grid gap-10 md:grid-cols-2 md:gap-16 lg:mb-20">
              {/* LEFT — accordion */}
              <div>
                <p className="mb-8 text-lg leading-relaxed text-gray-700 lg:text-xl">
                  Our Comprehensive and Strategic Approach to Defending Your Rights and Achieving the Best Possible Outcome in Your Case.
                </p>
                <Accordion
                  items={companyCards.map(c => ({ title: c.t, content: c.d }))}
                />
              </div>
              {/* RIGHT — image */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/assets/our-fight.png"
                    alt="Your Battle, Our Fight"
                    width={750}
                    height={540}
                    className="w-full max-w-[500px] rounded"
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM ROW: image left + accordion right */}
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              {/* LEFT — image */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/assets/winning-case.png"
                    alt="Delighting Clients, Winning Cases"
                    width={750}
                    height={540}
                    className="w-full max-w-[500px] rounded"
                  />
                </div>
              </div>
              {/* RIGHT — accordion */}
              <div>
                <p className="mb-8 text-lg leading-relaxed text-gray-700 lg:text-xl">
                  At Maurice Andrews Solicitors, we believe that the cornerstone of successful legal representation lies not just in our expertise, but also in the way we treat our clients.
                </p>
                <Accordion
                  items={foundationCards.map(c => ({ title: c.t, content: c.d }))}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-white px-4 py-14"><div className="mx-auto max-w-[1240px]"><h2 className="mb-2 text-center text-2xl font-bold text-primary lg:text-3xl">Our team</h2><p className="mb-8 text-center font-semibold"><Link href="/ourTeam" className="inline-flex items-center gap-1 text-primary hover:underline">See all <ArrowRight size={16} /></Link></p><div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">{team.map(m => <Link key={m.name} href={"/ourTeam?member=" + encodeURIComponent(m.name)} className="group text-center"><div className="relative mx-auto mb-4 overflow-hidden bg-[#E8F1FE]">{m.photo ? <Image src={m.photo} alt={m.name} width={280} height={320} className="w-full object-cover" /> : <div className="flex aspect-[4/5] w-full items-center justify-center bg-primary"><svg width="100" height="130" viewBox="0 0 120 150" fill="none" className="text-white/40"><circle cx="60" cy="40" r="30" fill="currentColor"/><path d="M10 150c0-40 22.4-60 50-60s50 20 50 60" fill="currentColor"/></svg></div>}<div className="absolute inset-0 bg-[#1C2946]/0 transition-colors duration-300 group-hover:bg-[#1C2946]/40" /></div><h3 className="mb-1 text-lg font-bold text-primary">{m.name}</h3><p className="line-clamp-3 text-[13px] leading-relaxed text-grey">{m.bio}</p></Link>)}</div></div></section>

        {/* TESTIMONIALS */}
        <GoogleReviews />

        {/* SOCIAL CTA */}
        <section className="bg-[#0F1B33] px-4 py-14 text-center text-white"><h1 className="mb-6 text-2xl font-bold sm:text-3xl">THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY <span className="text-accent">OFFENCE</span></h1>
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
function CI({ href, src, label }: { href: string; src: string; label: string }) { return <a href={href} className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent"><Image src={src} alt={label} width={44} height={44} className="h-11 w-11" />{label}</a>; }
