import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Complaints Policy | Maurice Andrews Solicitors" };

export default function Page() {
  return (
    <>
      <Header /><CookieBanner />
      <main className="bg-white px-4 py-14">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-8 border-b-[3px] border-primary pb-4 text-3xl font-bold text-primary">
            Maurice Andrews Solicitors Complaints Policy
          </h1>

          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We want to give you the best possible service. However, if at any point you become unhappy or
            concerned about the service we have provided then you should inform us immediately so that we can
            do our best to resolve the problem.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            In the first instance, it may be helpful to contact the person who is working on your case to
            discuss your concerns and we will do our best to resolve any issues at this stage. If you would
            like to make a formal complaint, then you can read our full complaints procedure below. Making a
            complaint will not affect how we handle your case.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Our complaints policy</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Maurice Andrews Solicitors is committed to providing a high-quality legal service to all our
            clients. When something goes wrong, we want you to tell us about it. This will help us to
            improve our standards.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Our complaints procedure</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you have a concern or a complaint, please contact us as soon as you are aware of the problem
            so this can be addressed.
          </p>
          <p className="mb-2 text-base font-semibold leading-relaxed text-[#333]">
            Please address your concerns in writing to
          </p>
          <p className="mb-1 text-base leading-relaxed text-[#333]">
            <strong>Miss Mariam Khan:</strong>
          </p>
          <p className="mb-1 text-base leading-relaxed text-[#333]">
            Maurice Andrews Solicitors Limited, 182, Soho Hill, Hockley, Birmingham, B19 1AG,
          </p>
          <p className="mb-1 text-base leading-relaxed text-[#333]">
            Telephone{" "}
            <a href="tel:0121 554 4900" className="text-[#3C78F4] hover:underline">
              0121 – 554 4900
            </a>
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Or via email at:{" "}
            <a href="mailto:maurice.andrews@mauriceandrewsandpartners.co.uk" className="text-[#3C78F4] hover:underline">
              maurice.andrews@mauriceandrewsandpartners.co.uk
            </a>
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">What will happen next?</h2>
          <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-relaxed text-[#333]">
            <li>
              We will review your submission and respond to you with acknowledgement of receipt of your
              complaint within five working days of our having received it. If you have special requirements
              in regard to the correspondence due to a disability, please let us know and we shall do our
              best to accommodate any alternative arrangements you may require.
            </li>
            <li>
              We will then investigate your complaint. This will normally involve passing your complaint to
              our complaints handling partner, Mariam Khan, who will review your matter file and speak to
              the member of staff who acted for you.
            </li>
            <li>
              Mariam Khan will then respond to you in writing or call you to discuss and, it is hoped,
              resolve your complaint. She will do this within 14 working days of sending you the
              acknowledgement letter. Within 7 working days of the call, Mariam Khan will write to you to
              confirm what took place and any solutions she has agreed with you.
            </li>
            <li>
              Mariam Khan will then send you a detailed written reply to your complaint, including her
              suggestions for resolving the matter, within 21 working days.
            </li>
            <li>
              At this stage, if you are still not satisfied, you should contact us again to explain why you
              remain unhappy with our response and we will review your comments.
            </li>
            <li>
              We will write to you within 14 working days of receiving your request for a review, confirming
              our final position on your complaint and explaining our reasons.
            </li>
            <li>
              If you are still not satisfied, you can then contact the Legal Ombudsman using the details
              that follow.
            </li>
          </ul>
          <p className="mb-4 text-sm italic text-[#666]">
            (Our timescales are subject to be amended depending on the complexity of the matter and
            submission. If we have to change any of the timescales above, we will let you know and explain why.)
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            What to do if we cannot resolve your complaint?
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The Legal Ombudsman can help you if we are unable to resolve your complaint ourselves. They will
            look at your complaint independently and it will not affect how we handle your case.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Before accepting a complaint for investigation, the Legal Ombudsman will check that you have
            tried to resolve your complaint with us first. If you have, then you must take your complaint to
            the Legal Ombudsman:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Within six months of receiving a final response to your complaint</li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            From the 1st of April 2023, the Legal Ombudsman expects complaints to be made to them within a
            year of the date of the act or omission about which you are concerned, or within a year of your
            realising there was a concern.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Contact details</h2>
          <div className="mb-6 space-y-1 text-base leading-relaxed text-[#333]">
            <p>
              Visit:{" "}
              <a href="https://www.legalombudsman.org.uk" className="text-[#3C78F4] hover:underline">
                www.legalombudsman.org.uk
              </a>
            </p>
            <p>
              Call:{" "}
              <a href="tel:0300 555 0333" className="text-[#3C78F4] hover:underline">
                0300 555 0333
              </a>{" "}
              between 9am to 5pm.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:enquiries@legalombudsman.org.uk" className="text-[#3C78F4] hover:underline">
                enquiries@legalombudsman.org.uk
              </a>
            </p>
            <p>Legal Ombudsman, PO Box 6167, Slough, SL1 0EH</p>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            Please Note before contacting the Legal Ombudsman:
          </h2>
          <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-relaxed text-[#333]">
            <li>
              If your complaint is specifically about our bill, you have the right to object to it and apply
              for an assessment of it under part III of the Solicitors Act 1974. If you should choose to
              exercise this right, and the court is assessing our bill, you may be unable to use the Legal
              Ombudsman service.
            </li>
            <li>
              If you are complaining as a business client, unless you are a &ldquo;micro business&rdquo; (as
              defined by the European Union), you may not be able to use the Legal Ombudsman scheme and
              should check the guidance on Legal Ombudsman&apos;s website.
            </li>
            <li>
              If you refer your complaint to the Legal Ombudsman as a trustee/personal representative
              (executor/administrator) or beneficiary of the estate/trust of a person who, before they died,
              had not referred the complaint to the Legal Ombudsman the period runs from when the deceased
              should reasonably have known there was cause for complaint; and when the complainant (or the
              deceased) should reasonably have known there was a cause for complaint will be assessed on the
              basis of the complainant&apos;s (or deceased&apos;s) own knowledge, disregarding what the
              complainant (or the deceased) might have been told if he/she had sought advice.
            </li>
            <li>
              If the Ombudsman considers there are exceptional circumstances (e.g. serious illness or you
              were still within the time limits when you made your initial complaint to them) then he/she
              may extend any of the above time limits to the extent that he/she considers fair.
            </li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            The Solicitors Regulation Authority
          </h2>
          <p className="mb-2 text-base leading-relaxed text-[#333]">
            The Solicitors Regulation Authority can help you if you are concerned about our behaviour. This
            could be for things like dishonesty, taking or losing your money or treating you unfairly because
            of your age, a disability or other protected characteristic.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            You can raise your concerns with the{" "}
            <a href="https://www.sra.org.uk/consumers/problems/" className="text-[#3C78F4] hover:underline">
              Solicitors Regulation Authority.
            </a>
          </p>
        </div>
      
        {/* SOCIAL CTA */}
        <section className="bg-[#0F1B33] px-4 py-14 text-center text-white"><h1 className="mb-6 text-2xl font-bold sm:text-3xl">THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY <span className="text-accent">OFFENCE</span></h1>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">FIND US ON</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/mauriceandrewssolicitors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.instagram.com/mauriceandrewssolicitors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://twitter.com/MASolicitorsUK" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.linkedin.com/company/maurice-andrews-solicitors/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
