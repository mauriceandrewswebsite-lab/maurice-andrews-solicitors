"use client";
import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "ma-cookie-consent";

type ConsentValue = "accepted" | "declined";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
      setVisible(true);
    } else {
      applyConsent(localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue);
    }
  }, []);

  const setConsent = (value: ConsentValue) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    applyConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-4 text-sm text-black shadow-[0_-2px_10px_rgba(0,0,0,0.15)]"
    >
      <span>
        This website uses cookies to ensure you get the best experience.{" "}
        <a href="/cookie" className="text-primary underline">Learn more</a>
      </span>
      <button
        onClick={() => setConsent("declined")}
        className="cursor-pointer rounded border border-grey bg-white px-5 py-2 text-sm font-semibold text-[#333] transition-colors hover:bg-grey/20 min-h-[44px] min-w-[88px]"
      >
        Decline
      </button>
      <button
        onClick={() => setConsent("accepted")}
        className="cursor-pointer rounded border-none bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark min-h-[44px] min-w-[88px]"
      >
        Accept
      </button>
    </div>
  );
}

function applyConsent(value: ConsentValue) {
  if (typeof document === "undefined") return;
  // Toggle Google Analytics consent state if loaded. When user declines, GA stays
  // in its default "no consent" state and no tracking cookies are written.
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  if (value === "accepted") {
    gtag("consent", "update", { analytics_storage: "granted" });
  } else {
    gtag("consent", "update", { analytics_storage: "denied" });
  }
}
