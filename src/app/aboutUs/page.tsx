import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "About Us | Maurice Andrews Solicitors", description: "Learn about Maurice Andrews Solicitors — Birmingham&apos;s trusted criminal defence firm. Our story, values, and commitment to justice since 1988." };

const timeline = [
  { year: "1988", title: "Company first established", text: "Maurice Andrews Solicitors was founded with a vision to provide exceptional criminal defence services to the community." },
  { year: "2023", title: "A Year of distinction", text: "Recognised for outstanding service, Maurice Andrews Solicitors continues to set the standard in criminal defence." },
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

export default function AboutUsPage() {
  return (
    <>
      <Header /><CookieBanner />
      <main>
        <section className="bg-white px-4 py-14"><div className="mx-auto max-w-[900px]">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Who we are.</p>
          <p className="mb-12 text-base leading-relaxed text-[#333]">At Maurice Andrews Solicitors, we anchor ourselves in the heart of the UK&apos;s criminal law sector. Beyond our renowned expertise, it&apos;s our dedication to each individual case that sets us apart. Whether faced with straightforward matters or intricate legal labyrinths, clients choose us for our unparalleled commitment, astute insights, and the promise of a formidable defence. In a realm where every decision matters, we stand steadfastly by our clients, ensuring their story is heard and their rights championed.</p>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Our Promise.</p>
          <p className="mb-12 text-base leading-relaxed text-[#333]">In establishing Maurice Andrews Solicitors, we made a profound commitment. Our aim is not merely representation; it&apos;s about ensuring that every client feels understood, informed, and empowered. No case is too intricate; no challenge is too daunting. Our dedicated team is on hand to unravel the complexities, ensuring that you are always at the forefront, benefitting from bespoke legal strategies tailored to your unique circumstances.</p>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Let&apos;s Begin Together.</p>
          <p className="mb-12 text-base leading-relaxed text-[#333]">If you&apos;re facing legal complexities, or simply need a guiding hand to understand your options, reach out to us. Every successful legal journey commences with a single step — a conversation. Share your story with us, and let us show you the value of partnering with expertise that truly understands. At Maurice Andrews Solicitors, it&apos;s not just about law; it&apos;s about you.</p>
        </div></section>

        <section className="bg-light-bg px-4 py-14"><div className="mx-auto max-w-[900px]">
          <h2 className="mb-10 text-center text-2xl font-bold text-primary lg:text-3xl">Our story.</h2>
          <div className="space-y-0">{timeline.map((t, i) => <div key={i} className="flex gap-6 border-l-2 border-primary py-6 pl-6"><div className="text-2xl font-extrabold text-primary min-w-[80px]">{t.year}</div><div><h3 className="mb-1 text-lg font-bold text-primary">{t.title}</h3><p className="text-sm leading-relaxed text-grey">{t.text}</p></div></div>)}</div>
        </div></section>

        <section className="bg-primary px-4 py-14 text-center text-white"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-2 text-2xl font-bold">LEGAL AID AVAILABLE AT MAURICE ANDREWS SOLICITORS</h2>
          <p className="mb-1 text-xl text-accent">Don&apos;t Let Costs Stop You!</p>
          <p className="mx-auto mb-6 max-w-[650px] text-sm leading-relaxed opacity-90">At Maurice Andrews Solicitors, We understand that legal fees can be a concern. Explore whether you qualify for Legal Aid.</p>
          <a href="tel:01215544900" className="text-xl font-bold text-accent">0121 554 4900</a>
          <div className="mt-6"><Link href="tel:01215544900" className="btn-primary">CALL US <ArrowRight size={18} /></Link></div>
        </div></section>

        <section className="bg-white px-4 py-14"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-2 text-center text-2xl font-bold text-primary lg:text-3xl">Company</h2>
          <p className="mb-8 text-center font-semibold"><Link href="/aboutUs" className="inline-flex items-center gap-1 text-primary hover:underline">About Us <ArrowRight size={16} /></Link></p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyCards.map(c => (
              <div key={c.t} className="space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:scale-100 hover:shadow-lg xl:p-8">
                <div className="mt-7 inline-block bg-[#1C2946] p-3"><Image src={c.icon} alt="" width={32} height={32} /></div>
                <h3 className="text-lg font-semibold text-primary md:text-xl">{c.t}</h3>
                <p className="pb-5 text-[#646F85]">{c.d}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="bg-white px-4 pb-14"><div className="mx-auto max-w-[1240px]">
          <h2 className="mb-2 text-center text-2xl font-bold text-primary lg:text-3xl">Foundations</h2>
          <p className="mb-8 text-center font-semibold"><Link href="/contactUs" className="inline-flex items-center gap-1 text-primary hover:underline">Contact Us <ArrowRight size={16} /></Link></p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foundationCards.map(c => (
              <div key={c.t} className="space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:scale-100 hover:shadow-lg xl:p-8">
                <div className="mt-7 inline-block bg-[#E8F1FE] p-3"><Image src={c.icon} alt="" width={32} height={32} /></div>
                <h3 className="text-lg font-semibold text-primary md:text-xl">{c.t}</h3>
                <p className="pb-5 text-[#646F85]">{c.d}</p>
              </div>
            ))}
          </div>
        </div></section>

        <GoogleReviews />
        <section className="bg-primary-dark px-4 py-14 text-center text-white"><h1 className="mx-auto mb-6 max-w-[800px] text-3xl font-bold">THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY <span className="text-accent">OFFENCE</span></h1>
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
