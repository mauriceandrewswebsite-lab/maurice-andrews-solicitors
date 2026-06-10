import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { team } from "@/data/team";
import TeamProfileModal from "@/components/TeamProfileModal";

export const metadata: Metadata = { title: "Our Team | Maurice Andrews Solicitors", description: "Meet the team at Maurice Andrews Solicitors — Miss Mariam Khan, Mazar Iqbal, and Tabrace Hussain. Expert criminal defence lawyers in Birmingham." };

export default function OurTeamPage() {
  return (
    <>
      <Header /><CookieBanner />
      <TeamProfileModal team={team} />
      <main>
        <section className="min-h-screen w-full bg-primary px-4 py-14 pt-24 lg:px-10 lg:pt-32">
          <div className="mx-auto max-w-[1240px]">
            <h1 className="mb-12 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              THE TEAM BEHIND<br />YOUR VICTORIES
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {team.map((member) => (
                <Link
                  key={member.name}
                  href={"/ourTeam?member=" + encodeURIComponent(member.name)}
                  className="group"
                >
                  <div className="relative mb-4 overflow-hidden bg-[#23355B]">
                    {member.img ? (
                      <Image src={member.img} alt={member.name} width={400} height={500} className="w-full object-cover" />
                    ) : (
                      <div className="flex aspect-[4/5] w-full items-center justify-center bg-[#23355B]">
                        <span className="font-serif text-4xl font-bold text-white/30">{member.initials}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#1C2946]/0 transition-colors duration-300 group-hover:bg-[#1C2946]/40" />
                  </div>
                  <p className="text-xl font-bold text-white lg:text-2xl">{member.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8B9DC3]">{member.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL CTA */}
        <section className="bg-[#0F1B33] px-4 py-14 text-center text-white">
          <h1 className="mb-6 text-2xl font-bold sm:text-3xl">THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY <span className="text-accent">OFFENCE</span></h1>
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