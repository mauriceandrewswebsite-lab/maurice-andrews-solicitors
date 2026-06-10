'use client';
import { ArrowRight } from 'lucide-react';

export default function ScrollButton() {
  return (
    <button
      className="btn-primary"
      onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
    >
      APPLY NOW <ArrowRight size={18} />
    </button>
  );
}