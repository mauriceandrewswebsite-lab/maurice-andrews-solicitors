"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Mail, Phone } from "lucide-react";

const categories: { label: string; href: string }[] = [
  { label: "DRUGS", href: "/criminal-defence-drugs" },
  { label: "FINANCIAL CRIMES", href: "/criminal-defence-financial-crimes" },
  { label: "MURDER DEFENCE", href: "/criminal-defence-murder" },
  { label: "NATIONAL SECURITY CRIMES", href: "/criminal-defence-national-security-crimes" },
  { label: "SEX & HUMAN RIGHTS CRIMES", href: "/criminal-defence-sex-human-rights-crimes" },
  { label: "TRAFFIC OFFENCES", href: "/criminal-defence-traffic-offences" },
  { label: "VIOLENT CRIMES", href: "/criminal-defence-violent-crimes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeAll = () => setOpen(false);

  // Close on Escape + focus trap while menu is open
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeAll();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    // Move focus to first menu link
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Return focus to the menu button
      menuButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[999]">
        {/* White top bar */}
        <div className="bg-white">
          <div className="mx-auto flex max-w-[1240px] items-center px-4 py-3 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image src="/assets/whiteLogo.svg" alt="Maurice Andrews Solicitors" width={45} height={45} className="h-[38px] w-auto brightness-0 lg:h-[45px]" />
              <div className="hidden sm:block">
                <div className="font-serif text-sm font-bold leading-tight text-primary lg:text-base">Maurice Andrews</div>
                <div className="font-serif text-[10px] tracking-[0.3em] text-primary lg:text-xs">SOLICITORS</div>
              </div>
            </Link>

            {/* Search */}
            <div className="relative ml-auto mr-3 hidden lg:block">
              <input type="text" placeholder="Find my offence" aria-label="Find my offence" className="w-[260px] rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-10 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-primary" />
              <Search className="absolute right-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" aria-hidden="true" />
            </div>

            {/* EMAIL US + CALL US NOW buttons */}
            <div className="hidden gap-2 lg:flex">
              <a href="mailto:info@mauriceandrewssolicitors.co.uk" className="flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white">
                <Mail size={14} aria-hidden="true" />EMAIL US
              </a>
              <a href="tel:01215544900" className="flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white">
                <Phone size={14} aria-hidden="true" />CALL US NOW
              </a>
            </div>

            {/* Menu button — minimum 44x44px touch target */}
            <button
              ref={menuButtonRef}
              className="ml-3 flex min-h-[44px] min-w-[44px] items-center gap-3 px-1 lg:ml-4"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="hamburger-menu"
            >
              <span className="text-sm font-semibold text-primary underline">Menu</span>
              <span className="relative h-10 w-10" aria-hidden="true">
                <span className="absolute left-1/2 top-3 h-0.5 w-[22px] -translate-x-1/2 bg-primary" />
                <span className="absolute left-1/2 top-1/2 h-0.5 w-[22px] -translate-x-1/2 -translate-y-1/2 bg-primary" />
                <span className="absolute bottom-3 left-1/2 h-0.5 w-[22px] -translate-x-1/2 bg-primary" />
              </span>
            </button>
          </div>
        </div>

        {/* Navy navigation strip — 7 crime categories */}
        <nav className="flex overflow-x-auto bg-primary">
          <div className="mx-auto flex max-w-[1240px]">
            {categories.map((c) => (
              <Link key={c.label} href={c.href} className="whitespace-nowrap px-4 py-3 text-[13px] font-bold uppercase tracking-[0.5px] text-white transition-colors hover:bg-white/10 lg:px-[18px]">{c.label}</Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Hamburger sidebar */}
      {open && (
        <>
          <div className="fixed inset-0 z-[1000] bg-black/50" onClick={closeAll} />
          <nav
            ref={menuRef}
            id="hamburger-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed right-0 top-0 z-[1001] h-full w-[350px] overflow-y-auto bg-nav-bg p-10"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-lg font-bold text-primary">Menu</span>
              <button className="text-2xl text-primary" onClick={closeAll} aria-label="Close menu"><X /></button>
            </div>

            <ML href="/" onClick={closeAll}>Home</ML>

            {categories.map((c) => (
              <ML key={c.label} href={c.href} onClick={closeAll}>{c.label}</ML>
            ))}

            <ML href="/aboutUs" onClick={closeAll}>About Us</ML>
            <ML href="/ourTeam" onClick={closeAll}>Our Team</ML>
            <ML href="/contactUs" onClick={closeAll}>Contact Us</ML>
            <ML href="/career" onClick={closeAll}>Career</ML>
          </nav>
        </>
      )}
    </>
  );
}

function ML({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="flex cursor-pointer items-center justify-between border-b border-black/5 py-2.5 text-base font-medium text-black transition-colors hover:text-primary hover:underline">
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}