import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact Us | Maurice Andrews Solicitors", description: "Contact Maurice Andrews Solicitors for immediate criminal defence help. 24/7 emergency helpline at 0121 554 4900. WhatsApp, email, or call us now." };

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <CookieBanner />
      <main>
        {/* HERO */}
        <section className="bg-primary pb-16 pt-14 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center px-4 md:flex-row">
            <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
              <h1 className="mx-auto mb-6 max-w-[800px] text-[26px] font-bold leading-tight sm:text-[34px] md:mx-0">
                CONTACTING THE BEST DEFENCE SOLICITORS IN BIRMINGHAM IS SO EASY.
              </h1>
              <Link
                href="tel:01215544900"
                className="mb-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary transition-colors hover:bg-white/90"
              >
                LETS TALK IT OVER <ArrowRight size={18} />
              </Link>
              <div className="mx-auto max-w-[600px] md:mx-0">
                <h2 className="mb-1 text-2xl font-bold">EMERGENCY?</h2>
                <Link
                  href="tel:01215544900"
                  className="text-[30px] font-bold text-accent underline decoration-accent sm:text-[38px]"
                >
                  0121 554 4900
                </Link>
                <p className="mt-8 mb-4 text-sm font-bold uppercase tracking-wider">
                  CONTACT US NOW
                </p>
                <div className="flex justify-center gap-8 md:justify-start">
                  <a href="https://wa.me/447956169333" title="WhatsApp" className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="white" className="h-11 w-11"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a href="mailto:info@mauriceandrewssolicitors.co.uk" title="Email" className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="h-11 w-11"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/></svg>
                    Email
                  </a>
                  <a href="tel:01215544900" title="Call us" className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-accent">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="h-11 w-11"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                    Call us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-[900px]">
            <h2 className="mb-8 text-center text-2xl font-bold text-primary">
              SEND A SECURE MESSAGE NOW
            </h2>
            <Suspense fallback={<div className="mx-auto max-w-[600px]"><div className="h-[400px] animate-pulse rounded-lg bg-light-bg" /></div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>

        {/* CONTACT PREFERENCE */}
        <section className="bg-[#F0F3F6] px-4 py-10">
          <div className="mx-auto flex max-w-[600px] flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              {["PHONE", "EMAIL", "EITHER"].map((t) => (
                <button
                  key={t}
                  className="rounded-full border-2 border-primary px-8 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {t}
                </button>
              ))}
            </div>
            <button className="w-full rounded-md bg-primary px-8 py-3.5 font-bold text-white transition-colors hover:bg-primary-light sm:w-auto">
              SEND MESSAGE
            </button>
            <p className="mt-4 max-w-[500px] text-center text-[13px] leading-relaxed text-[#666]">
              All information given to us is confidential and further protected by legal privilege. Legal privilege is additional protection to keep solicitor and client discussions private at all times.
            </p>
          </div>
        </section>

        {/* COMPANY */}
        <section className="bg-[#F5F7FA] px-4 py-14">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10">
              <h2 className="mb-6 text-2xl font-bold text-primary">Company</h2>
              <Link
                href="/aboutUs"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary underline transition-colors hover:text-primary-dark"
              >
                Commitment <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Confidentiality */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Confidentiality</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  Your privacy is paramount. All communications with Maurice Andrews Solicitors are strictly confidential and protected under solicitor-client privilege.
                </p>
              </div>
              {/* Quick Response */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Quick Response</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  We understand the urgency of your legal matters. Our dedicated team ensures rapid response to all inquiries, providing swift legal support when you need it most.
                </p>
              </div>
              {/* Assessment */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Assessment</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  Our experienced legal team will thoroughly assess your case, offering a comprehensive evaluation and a clear outline of your options moving forward.
                </p>
              </div>
              {/* Assistance */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2946" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-primary">Assistance</h3>
                <p className="text-[13px] leading-relaxed text-[#555]">
                  Our compassionate team offers continuous support throughout your legal journey, ensuring you feel informed and confident at every stage of your case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="bg-white py-10">
          <div className="mx-auto flex max-w-[1240px] flex-col px-4 md:px-10 lg:flex-row lg:px-20">
            {/* Left heading */}
            <div className="mb-6 lg:mb-0 lg:w-[15%]">
              <h2 className="mb-3 text-xl font-medium text-primary md:text-2xl">Details</h2>
              <a
                href="/contactUs"
                className="flex items-center justify-center text-base text-[#3C78F4] lg:justify-start"
              >
                Contact us
                <span className="ml-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" clipRule="evenodd"/></svg>
                </span>
              </a>
            </div>
            {/* Cards grid */}
            <div className="grid w-[90%] grid-cols-1 gap-5 min-w-0 md:grid-cols-2 lg:w-[85%] xl:grid-cols-4">
              {/* Email */}
              <a
                href="mailto:info@mauriceandrewssolicitors.co.uk"
                className="group space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:shadow-lg xl:p-8"
              >
                <div className="mt-7 inline-flex h-[57px] w-[57px] items-center justify-center bg-[#E8F1FE]">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none"><path d="M28.875 6.1875H4.125C2.6043 6.1875 1.375 7.4168 1.375 8.9375V24.0625C1.375 25.5832 2.6043 26.8125 4.125 26.8125H28.875C30.3957 26.8125 31.625 25.5832 31.625 24.0625V8.9375C31.625 7.4168 30.3957 6.1875 28.875 6.1875Z" stroke="#1C2946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.375 8.9375L16.5 18.5625L31.625 8.9375" stroke="#1C2946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-primary md:text-[25px]">Email</h3>
                <p title="info@mauriceandrewssolicitors.co.uk" className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-[#646F85]">
                  info@mauriceandrewssolicitors.co.uk
                </p>
                <p className="flex items-center gap-6 pb-4 text-[15px] text-[#3C78F4]">
                  Email us
                  <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                  </span>
                </p>
              </a>
              {/* Landline */}
              <a
                href="tel:0121 554 4900"
                className="group space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:shadow-lg xl:p-8"
              >
                <div className="mt-7 inline-flex h-[57px] w-[57px] items-center justify-center bg-[#E8F1FE]">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none"><path d="M30.25 23.375v4.125a2.75 2.75 0 01-3 2.75A27.22 27.22 0 011.375 5.563a2.75 2.75 0 012.736-3h4.125a2.75 2.75 0 012.75 2.365c.174 1.319.497 2.604.96 3.835a2.75 2.75 0 01-.62 2.9l-1.746 1.746a22 22 0 008.25 8.25l1.746-1.746a2.75 2.75 0 012.9-.62c1.231.463 2.516.786 3.835.96a2.75 2.75 0 012.379 2.764z" stroke="#1C2946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-primary md:text-[25px]">Landline</h3>
                <p className="text-[12px] text-[#646F85]">0121 554 4900</p>
                <p className="flex items-center gap-6 pb-4 text-[15px] text-[#3C78F4]">
                  Call us
                  <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                  </span>
                </p>
              </a>
              {/* Mobile */}
              <a
                href="tel:0121 554 4900"
                className="group space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:shadow-lg xl:p-8"
              >
                <div className="mt-7 inline-flex h-[57px] w-[57px] items-center justify-center bg-[#E8F1FE]">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none"><rect x="7.5625" y="1.375" width="17.875" height="30.25" rx="3" stroke="#1C2946" strokeWidth="2"/><line x1="14.4375" y1="26.125" x2="18.5625" y2="26.125" stroke="#1C2946" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-primary md:text-[25px]">Mobile</h3>
                <p className="text-[12px] text-[#646F85]">0121 554 4900</p>
                <p className="flex items-center gap-6 pb-4 text-[15px] text-[#3C78F4]">
                  Call us
                  <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                  </span>
                </p>
              </a>
              {/* Address */}
              <a
                href="https://maps.google.com/?q=180-182+Soho+Hill+Birmingham+B19+1AG"
                target="_blank"
                rel="noopener noreferrer"
                className="group space-y-6 border-2 border-[#E5E6EB] p-4 transition duration-300 ease-in-out hover:shadow-lg xl:p-8"
              >
                <div className="mt-7 inline-flex h-[57px] w-[57px] items-center justify-center bg-[#E8F1FE]">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none"><path d="M16.5 17.875a4.125 4.125 0 100-8.25 4.125 4.125 0 000 8.25z" stroke="#1C2946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.125 13.75c0 9.625-9.625 16.5-9.625 16.5S6.875 23.375 6.875 13.75a9.625 9.625 0 0119.25 0z" stroke="#1C2946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-primary md:text-[25px]">Address</h3>
                <p className="text-[12px] text-[#646F85]">180-182 Soho Hill, Birmingham B19 1AG</p>
                <p className="flex items-center gap-6 pb-4 text-[15px] text-[#3C78F4]">
                  Get directions
                  <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                  </span>
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* OFFICE HOURS */}
        <section className="bg-white px-4 pb-14">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-primary">Office hours</h2>
              <Link
                href="/aboutUs"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary underline transition-colors hover:text-primary-dark"
              >
                Details <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {[
                { day: "Monday", hours: "9:00 AM – 5:30 PM" },
                { day: "Tuesday", hours: "9:00 AM – 5:30 PM" },
                { day: "Wednesday", hours: "9:00 AM – 5:30 PM" },
                { day: "Thursday", hours: "9:00 AM – 5:30 PM" },
                { day: "Friday", hours: "9:00 AM – 5:30 PM" },
                { day: "Saturday", hours: "Closed" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <div key={day} className="rounded-lg bg-[#F5F7FA] p-4 text-center">
                  <p className="text-sm font-bold text-primary">{day}</p>
                  <p className="mt-1 text-xs text-[#555]">{hours}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TESTIMONIALS */}
        <GoogleReviews />

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
        <section className="map mt-16 mb-0">
          <iframe
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=180%20Soho%20Hill%20Birmingham%20B19%201AG&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            style={{ width: "100%", height: "465px" }}
            frameBorder="0"
            scrolling="no"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
