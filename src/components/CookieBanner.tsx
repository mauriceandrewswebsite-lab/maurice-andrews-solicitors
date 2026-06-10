"use client";
import { useState, useEffect } from "react";
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (!localStorage.getItem("cookie-dismissed")) setVisible(true); }, []);
  if (!visible) return null;
  const dismiss = () => { setVisible(false); localStorage.setItem("cookie-dismissed", "true"); };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-4 text-sm text-black shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
      <span>This website uses cookies to ensure you get the best experience.</span>
      <button onClick={dismiss} className="cursor-pointer rounded border-none bg-[#eee] px-5 py-2 text-sm font-semibold text-[#333]">Decline</button>
      <button onClick={dismiss} className="cursor-pointer rounded border-none bg-primary px-5 py-2 text-sm font-semibold text-white">Accept</button>
    </div>
  );
}
