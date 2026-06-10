"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const services = [
  "DRUGS",
  "FINANCIAL CRIMES",
  "NATIONAL SECURITY CRIMES",
  "SEX & HUMAN RIGHTS CRIMES",
  "TRAFFIC OFFENCES",
  "VIOLENT CRIMES",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("serviceName") || "";
  const [selected, setSelected] = useState(initialService);

  return (
    <form
      className="mx-auto flex max-w-[600px] flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const subject = encodeURIComponent(
          `New enquiry from ${formData.get("name")} — ${formData.get("serviceName") || "General"}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.get("name")}\n` +
          `Email: ${formData.get("email")}\n` +
          `Phone: ${formData.get("phone")}\n` +
          `Service: ${formData.get("serviceName") || "Not specified"}\n\n` +
          `Message:\n${formData.get("message")}`
        );
        window.location.href = `mailto:info@mauriceandrewssolicitors.co.uk?subject=${subject}&body=${body}`;
      }}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="My name is"
        aria-label="Your full name"
        required
        className="w-full rounded border border-[#ddd] px-4 py-3 text-base text-[#333] placeholder:text-[#999] outline-none focus:border-primary"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="My email address is"
        aria-label="Your email address"
        required
        className="w-full rounded border border-[#ddd] px-4 py-3 text-base text-[#333] placeholder:text-[#999] outline-none focus:border-primary"
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="My phone number is"
        aria-label="Your phone number"
        className="w-full rounded border border-[#ddd] px-4 py-3 text-base text-[#333] placeholder:text-[#999] outline-none focus:border-primary"
      />
      <div>
        <p className="mb-3 text-sm font-bold text-primary uppercase tracking-wide">
          I want to discuss
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((label) => {
            const active = selected === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setSelected(active ? "" : label)}
                className={`rounded-full border-2 px-5 py-2 text-[13px] font-bold transition-colors ${
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-[#ccc] text-primary hover:border-primary"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <input type="hidden" name="serviceName" value={selected} />
      <p className="text-[13px] leading-relaxed text-[#555]">
        To ensure that we connect you with the best lawyer for your case, please provide details of the nature of the allegation you are facing. All information will be treated in the strictest confidence.
      </p>
      <textarea
        name="message"
        placeholder="MESSAGE"
        rows={5}
        className="w-full rounded border border-[#ddd] px-4 py-3 text-base text-[#333] placeholder:text-[#999] outline-none focus:border-primary"
      />
      <Link
        href="/complaints-policy"
        className="text-[13px] font-medium text-[#3C78F4] underline transition-colors hover:text-[#2B5EC4]"
      >
        Click here to view Maurice Andrews Solicitors Complaints Policy*
      </Link>
      <button
        type="submit"
        className="w-full rounded bg-primary px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-light sm:w-auto sm:self-start"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
