import type { Metadata } from "next";
import GoogleReviews from "@/components/GoogleReviews";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Murder | Maurice Andrews Solicitors" };

const subItems = [
  "ATTEMPTED MURDER",
  "CONSPIRACY TO MURDER",
  "CORPORATE MANSLAUGHTER",
  "DEATH BY DANGEROUS DRIVING",
  "FIRST-DEGREE MURDER",
  "FELONY MURDER",
  "INVOLUNTARY MANSLAUGHTER",
  "SECOND-DEGREE MURDER",
  "VOLUNTARY MANSLAUGHTER",
  "OTHERS"
];

const process = [
  "INITIAL CONTACT AND CONSULTATION",
  "HIRING AND CASE BUILDING",
  "PRE-TRIAL AND TRIAL PREPARATION",
  "TRIAL AND ADVOCACY",
  "POST-TRIAL AND FUTURE SUPPORT"
];

const faqs = [
  { q: "What distinguishes manslaughter from murder?", a: "Murder involves the intention to kill or cause serious harm, while manslaughter typically involves unintentional killing or killing under mitigating circumstances. Our solicitors can explain the specific differences as they apply to your case." },
  { q: "How does Maurice Andrews Solicitors approach murder and manslaughter defence?", a: "We provide meticulous investigation, expert legal representation, and robust defence strategies, exploring every angle to protect your rights and work towards the best possible outcome in your case." },
  { q: "Are there different penalties for different types of murder and manslaughter?", a: "Yes, penalties vary significantly. Murder carries a mandatory life sentence, while manslaughter sentences depend on the specific circumstances. We can advise on the potential outcomes in your specific situation." }
];

export default function Page() {
  return (
    <>
      <Header />
      <CookieBanner />
      <main>
        {/* HERO — side-by-side */}
        <section className="bg-white">
          <div className="mx-auto flex max-w-[1240px] flex-col md:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 md:w-1/2 md:px-12 md:py-20">
              <h1 className="mb-2 text-[26px] font-bold leading-tight text-primary sm:text-[34px] md:text-[40px]">
                HERE TO DEFEND YOU
              </h1>
              <p className="mb-4 text-lg font-bold uppercase text-primary">
                MURDER & MANSLAUGHTER DEFENCE
              </p>
              <p className="mb-8 max-w-[500px] text-[15px] leading-relaxed text-[#555]">
                When facing accusations or charges related to murder or manslaughter, the stakes are extremely high. At Maurice Andrews Solicitors, we provide expert legal representation to ensure your rights are defended to the fullest extent.
              </p>
              <Link
                href="tel:01215544900"
                className="inline-flex w-fit items-center gap-2 rounded bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                CALL US <ArrowRight size={18} />
              </Link>
            </div>
            <div className="md:w-1/2"><img src="/assets/defence.png" alt="Murder & manslaughter defence — Maurice Andrews Solicitors" className="block h-auto w-full" style={{aspectRatio: '1691 / 930'}} /></div>
          </div>
        </section>

        {/* NATIONWIDE + EMERGENCY split section */}
        <section>
          <div className="mx-auto flex max-w-[1240px] flex-col md:flex-row">
            {/* Left: NATIONWIDE */}
            <div className="flex flex-col items-start bg-white px-6 py-12 text-left md:w-1/2 md:px-12 md:py-20">
              <h2 className="mb-6 text-2xl font-bold text-primary sm:text-[28px]">
                NATIONWIDE<br />MURDER & MANSLAUGHTER OFFENCE SOLICITORS
              </h2>
              <Link
                href="tel:01215544900"
                className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                CALL US <ArrowRight size={18} />
              </Link>
            </div>
            {/* Right: EMERGENCY */}
            <div className="flex flex-col items-center bg-primary px-6 py-12 text-center text-white md:w-1/2 md:py-16">
              <h2 className="mb-1 text-2xl font-bold">EMERGENCY?</h2>
              <p className="mb-2 text-sm">Call 24 hours a day, 7 days a week.</p>
              <Link
                href="tel:01215544900"
                className="text-[30px] font-bold leading-tight text-accent underline decoration-accent sm:text-[38px]"
              >
                0121 554 4900
              </Link>
              <p className="mt-8 mb-4 text-sm font-bold uppercase tracking-wider">
                CONTACT US NOW
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://wa.me/447956169333" title="WhatsApp" className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="white" className="h-11 w-11"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>WhatsApp</span>
                </Link>
                <Link
                  href="mailto:info@mauriceandrewssolicitors.co.uk" title="Email" className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="h-11 w-11"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/></svg>
                  <span>Email</span>
                </Link>
                <Link href="tel:01215544900" title="Call us" className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="h-11 w-11"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                  <span>Call us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DEFENCE grid */}
        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="mb-8 text-2xl font-bold text-primary">Defence</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {subItems.map((item, i) => (
                <Link
                  key={i}
                  href={`/contactUs?serviceName=MURDER`}
                  className="group flex items-center gap-3 rounded border border-[#e0e0e0] bg-white p-4 font-bold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <span className="text-lg font-extrabold opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                  <ArrowRight
                    size={16}
                    className="ml-auto shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LEGAL AID split section */}
        <section>
          <div className="mx-auto flex max-w-[1240px] flex-col md:flex-row">
            {/* Left */}
            <div className="flex flex-col items-start bg-white px-6 py-12 text-left md:w-1/2 md:px-12 md:py-20">
              <h2 className="mb-6 text-2xl font-bold text-primary sm:text-[28px]">
                LEGAL AID AVAILABLE AT<br />MAURICE ANDREWS SOLICITORS
              </h2>
              <Link
                href="tel:01215544900"
                className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                CALL US <ArrowRight size={18} />
              </Link>
            </div>
            {/* Right */}
            <div className="flex flex-col items-center bg-primary px-6 py-12 text-center text-white md:w-1/2 md:py-16">
              <h2 className="mb-3 text-2xl font-bold">Don&apos;t Let Costs Stop You!</h2>
              <p className="mx-auto mb-4 max-w-[420px] text-sm leading-relaxed opacity-90">
                At Maurice Andrews Solicitors, We understand that legal fees can be a concern.
                Explore whether you qualify for legal aid to help cover the cost of your legal representation.
              </p>
              <p className="mb-1 text-sm font-bold">CALL US</p>
              <Link
                href="tel:01215544900"
                className="text-[28px] font-bold text-accent underline decoration-accent"
              >
                0121 554 4900
              </Link>
            </div>
          </div>
        </section>

        {/* COMPANY section */}
        <section className="bg-[#F5F7FA] px-4 py-14">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10">
              <h2 className="mb-6 text-2xl font-bold text-primary">Company</h2>
              <Link
                href="/aboutUs"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary underline transition-colors hover:text-primary-dark"
              >
                About Us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Mission */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Mission</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.
                </p>
              </div>
              {/* Vision */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M12 2L2 22h20L12 2z"/><path d="M12 10v12"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Vision</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We dream of a future where everyone gets the justice they deserve. We are here to make it happen, one case at a time.
                </p>
              </div>
              {/* Values */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Values</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We stand for fairness, respect, and fierce advocacy. Your rights are our command, your battle is ours.
                </p>
              </div>
              {/* Promise */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Promise</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  You are never alone in your journey. We promise to stand beside you, be your voice, and tirelessly work towards justice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDATIONS section */}
        <section className="bg-[#F5F7FA] px-4 pb-14">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10">
              <h2 className="mb-6 text-2xl font-bold text-primary">Foundations</h2>
              <Link
                href="/contactUs"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary underline transition-colors hover:text-primary-dark"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Advocacy */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Advocacy</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.
                </p>
              </div>
              {/* Expertise */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Expertise</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We dream of a future where everyone gets the justice they deserve. We are here to make it happen, one case at a time.
                </p>
              </div>
              {/* Communication */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Communication</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We stand for fairness, respect, and fierce advocacy. Your rights are our command, your battle is ours.
                </p>
              </div>
              {/* Perseverance */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Perseverance</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We exhibit relentless perseverance. No matter how tough the fight gets, we commit ourselves to stand by our clients and fight tirelessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INNOCENT banner */}
        <section className="bg-[#0F1B33] px-4 py-12 text-center text-white">
          <h1 className="text-2xl font-bold tracking-wide sm:text-3xl">
            YOUR ARE INNOCENT UNTIL PROVEN GUILTY
          </h1>
        </section>

        {/* EMERGENCY HELPLINE */}
        <section className="bg-[#1a1a2e] px-4 py-8">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border-2 border-[#f5a623] text-[#f5a623]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#f5a623]">NEED URGENT HELP?</p>
                <p className="text-sm text-white/80">
                  Call our 24-hour emergency helpline:{" "}
                  <Link href="tel:01215544900" className="font-bold text-white underline">
                    0121 554 4900
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="https://wa.me/447956169333" title="WhatsApp" className="flex items-center gap-1 text-xs text-white/70 transition-colors hover:text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </Link>
              <Link href="mailto:info@mauriceandrewssolicitors.co.uk" title="Email" className="flex items-center gap-1 text-xs text-white/70 transition-colors hover:text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/></svg>
              Email
            </Link>
              <Link href="tel:01215544900" title="Call us" className="flex items-center gap-1 text-xs text-white/70 transition-colors hover:text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              Call us
            </Link>
            </div>
          </div>
        </section>

        {/* DEFENCE PROCESS */}
        <section className="bg-[#F0F3F6] px-4 py-14">
          <div className="mx-auto max-w-[800px]">
            <h2 className="mb-2 text-center text-2xl font-bold text-primary">OUR DEFENCE PROCESS</h2>
            <p className="mb-8 text-center text-xs text-[#777]">
              * Please note, the defence process outlined is a general guideline. Your specific case may require a tailored approach due to unique circumstances.*
            </p>
            <div className="space-y-3">
              {process.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded bg-white p-4 shadow-sm"
                >
                  <span className="text-xl font-extrabold text-primary/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-bold text-primary">{step}</span>
                  <ChevronDown size={18} className="text-primary/30" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <GoogleReviews />

        {/* INNOCENT */}
        <section className="bg-[#0F1B33] px-4 py-12 text-center text-white">
          <h2 className="text-2xl font-bold tracking-wide">INNOCENT UNTIL PROVEN GUILTY</h2>
        </section>

        {/* FAQ */}
        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-[800px]">
            <h2 className="mb-8 text-center text-2xl font-bold text-primary">
              Frequently asked questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded border border-[#e0e0e0] bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-primary">
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-primary/50 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[14px] leading-relaxed text-[#555]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F1B33] px-4 py-14 text-center text-white">
          <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
            THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY{" "}
            <span className="text-accent">OFFENCE</span>
          </h1>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            FIND US ON
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/mauriceandrewssolicitors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-accent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/mauriceandrewssolicitors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-accent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href="https://twitter.com/MASolicitorsUK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="transition-colors hover:text-accent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/maurice-andrews-solicitors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
