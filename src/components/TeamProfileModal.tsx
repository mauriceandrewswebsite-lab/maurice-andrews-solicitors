'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { TeamMember } from '@/data/team';

function TeamProfileModalInner({ team }: { team: TeamMember[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const memberParam = searchParams.get('member');
  const [member, setMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!memberParam) {
      setMember(null);
      return;
    }
    const found = team.find(
      (m) => encodeURIComponent(m.name).toLowerCase() === encodeURIComponent(memberParam).toLowerCase()
    );
    setMember(found || null);
  }, [memberParam, team]);

  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [member]);

  function close() {
    setMember(null);
    router.push('/ourTeam', { scroll: false });
  }

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={close}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[1100px] overflow-y-auto rounded-lg bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white transition-colors hover:bg-primary-light"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
            <h2 className="mb-2 text-3xl font-bold text-primary md:text-4xl">{member.name}</h2>
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-[#8B9DC3]">
              {member.profileTitle || member.title}
            </p>
            <p className="text-sm leading-relaxed text-[#333] md:text-base">{member.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contactUs"
                onClick={close}
                className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-light"
              >
                Contact Us
              </Link>
              <button
                onClick={close}
                className="inline-flex items-center gap-2 rounded border border-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-white"
              >
                ← Back to team
              </button>
            </div>
          </div>

          <div className="relative bg-[#23355B] md:w-1/2">
            <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full">
              {member.img ? (
                <Image
                  src={member.img}
                  alt={member.name}
                  width={500}
                  height={625}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[400px] w-full items-center justify-center">
                  <span className="font-serif text-9xl font-bold text-white/30">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamProfileModal({ team }: { team: TeamMember[] }) {
  return (
    <Suspense fallback={null}>
      <TeamProfileModalInner team={team} />
    </Suspense>
  );
}