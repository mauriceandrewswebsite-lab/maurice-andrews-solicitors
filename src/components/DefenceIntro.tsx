"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DefenceIntroProps {
  headline: string;
  subheadline: string;
  text: string;
}

export default function DefenceIntro({ headline, subheadline, text }: DefenceIntroProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col md:flex-row">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-6 py-12 md:w-1/2 md:px-12 md:py-20">
          <h1 className="mb-2 text-[26px] font-bold leading-tight text-primary sm:text-[34px] md:text-[40px]">
            {headline}
          </h1>
          <p className="mb-4 text-lg font-bold uppercase text-primary">
            {subheadline}
          </p>
          <p className="mb-8 max-w-[500px] text-[15px] leading-relaxed text-[#555]">
            {text}
          </p>
          <Link
            href="tel:01215544900"
            className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            CALL US <ArrowRight size={18} />
          </Link>
        </div>
        {/* Right: Image */}
        <div className="relative md:w-1/2">
          <Image
            src="/assets/Hero-section-Image.e87b1b0c.jpg"
            alt="Maurice Andrews Solicitors"
            width={984}
            height={656}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
      </div>
    </section>
  );
}
