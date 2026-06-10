"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i} className="py-1">
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-lg font-bold text-primary">{item.title}</span>
            {openIdx === i ? (
              <Minus size={20} className="text-primary flex-shrink-0" />
            ) : (
              <Plus size={20} className="text-primary flex-shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIdx === i ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-[15px] leading-relaxed text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
