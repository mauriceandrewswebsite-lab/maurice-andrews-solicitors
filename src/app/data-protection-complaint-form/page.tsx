import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Data Protection Complaint Form | Maurice Andrews Solicitors" };

export default function Page() {
  return (
    <>
      <Header /><CookieBanner />
      <main className="bg-white px-4 py-14">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-8 border-b-[3px] border-primary pb-4 text-3xl font-bold text-primary">
            Data Protection Complaint Form
          </h1>
          <p className="mb-2 text-base leading-relaxed text-[#333]">
            (For concerns about how we have handled your personal information)
          </p>
          <p className="mb-6 text-sm italic text-[#666]">
            Using this form is optional.
          </p>

          {/* Download .docx banner — top of page so it's obvious */}
          <div className="mb-8 rounded-lg border-2 border-accent bg-[#FFF9E6] p-5">
            <p className="mb-2 text-base font-semibold text-[#333]">
              Download the form as a Word document
            </p>
            <p className="mb-3 text-sm text-[#333]">
              You can fill in this form on your computer, print it, or handwrite it. If you can&rsquo;t open the Word file, you can still complete the form by hand on a printed copy, or by email/post/in person.
            </p>
            <a
              href="/documents/data-protection-complaint-form.docx"
              download="Data Protection Complaint Form.docx"
              className="inline-block rounded bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0a1426]"
            >
              ↓ Download the form (Word .docx, 18 KB)
            </a>
          </div>

          {/* Form fields — pixel-perfect to the .docx, with the 5 tables */}
          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">1. Your Details</h2>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#ccc]">
                  <td className="w-1/3 p-2 align-top font-semibold text-[#333]">Full Name</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Address</td>
                  <td className="p-2">
                    <span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span>
                    <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
                    <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
                  </td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Telephone Number</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Email Address</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Preferred Contact Method</td>
                  <td className="p-2 text-[#333]">☐ Email &nbsp;&nbsp;&nbsp; ☐ Telephone &nbsp;&nbsp;&nbsp; ☐ Post</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">2. Your Connection to the Matter</h2>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#ccc]">
                  <td className="w-1/2 p-2 align-top font-semibold text-[#333]">How you are connected to the matter (e.g., client, former client, third party)</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">3. Details of Your Data Protection Complaint</h2>

          <h3 className="mb-3 mt-4 text-lg font-semibold text-primary">a. What personal information is affected?</h3>
          <p className="mb-3 text-sm italic text-[#666]">(Examples: contact details, identification documents, case information, financial information)</p>
          <div className="mb-6">
            <span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
          </div>

          <h3 className="mb-3 mt-4 text-lg font-semibold text-primary">b. What happened, and when?</h3>
          <p className="mb-3 text-sm italic text-[#666]">Please describe the events, including dates if known.</p>
          <div className="mb-6">
            <span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
          </div>

          <h3 className="mb-3 mt-4 text-lg font-semibold text-primary">c. Why are you unhappy with how we handled your personal information?</h3>
          <div className="mb-6">
            <span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
          </div>

          <h3 className="mb-3 mt-4 text-lg font-semibold text-primary">d. What outcome are you seeking?</h3>
          <div className="mb-6">
            <span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
            <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">4. Supporting Information</h2>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#ccc]">
                  <td className="w-1/3 p-2 align-top font-semibold text-[#333]">Reference Numbers (if any)</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Attachments Provided</td>
                  <td className="p-2 text-[#333]">☐ Yes &nbsp;&nbsp;&nbsp; ☐ No</td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">If yes, please list</td>
                  <td className="p-2">
                    <span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span>
                    <span className="block w-full border-b border-dotted border-[#999] mt-2">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">5. Identity Verification (If Required)</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We may need to verify your identity before sharing information with you. We will not ask for more information than necessary and will not insist on ID where it would be unreasonable.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If we require ID, we will contact you.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">6. Complaints Made on Behalf of a Child (If Applicable)</h2>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#ccc]">
                  <td className="w-1/3 p-2 align-top font-semibold text-[#333]">Child&rsquo;s Name</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Your Relationship to the Child</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Does the child have capacity to understand the complaint?</td>
                  <td className="p-2 text-[#333]">☐ Yes &nbsp;&nbsp;&nbsp; ☐ No &nbsp;&nbsp;&nbsp; ☐ Unsure</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">7. Declaration</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            I confirm that the information provided is accurate to the best of my knowledge.
          </p>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#ccc]">
                  <td className="w-1/3 p-2 align-top font-semibold text-[#333]">Signature</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
                <tr className="border-b border-[#ccc]">
                  <td className="p-2 align-top font-semibold text-[#333]">Date</td>
                  <td className="p-2"><span className="block w-full border-b border-dotted border-[#999]">&nbsp;</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">How We Will Handle Your Complaint</h2>
          <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-relaxed text-[#333]">
            <li>We will acknowledge your complaint within 30 days.</li>
            <li>We will investigate without undue delay.</li>
            <li>We may contact you for clarification.</li>
            <li>We will provide a written response including the outcome and your right to escalate to the ICO.</li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Submitting This Form</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You may return this form by:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Email: <a href="mailto:info@mauriceandrewssolicitors.co.uk" className="text-[#3C78F4] hover:underline">info@mauriceandrewssolicitors.co.uk</a></li>
            <li>Post: 182 Soho Hill, Birmingham, England, B19 1AG</li>
            <li>In person: hand to your usual contact at the firm</li>
          </ul>

          {/* Cross-link */}
          <div className="mt-10 border-t border-[#ccc] pt-6">
            <p className="text-sm italic text-[#666]">
              See our{" "}
              <a href="/data-protection-complaints-procedure" className="text-[#3C78F4] hover:underline">Data Protection Complaints Procedure</a>{" "}
              for full details on how we handle your complaint, your right to escalate to the ICO, and how we record complaint information.
            </p>
            <p className="text-sm italic text-[#666] mt-2">
              See our{" "}
              <a href="/complaints-policy" className="text-[#3C78F4] hover:underline">Service Complaints Policy</a>{" "}
              if your concern is about the legal services we provide (not how we handle your personal data).
            </p>
          </div>
        </div>

        {/* SOCIAL CTA */}
        <section className="bg-[#0F1B33] px-4 py-14 text-center text-white"><h1 className="mb-6 text-2xl font-bold sm:text-3xl">THERE IS A <span className="text-accent">DEFENCE</span> FOR EVERY <span className="text-accent">OFFENCE</span></h1>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">FIND US ON</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/mauriceandrewssolicitors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.instagram.com/mauriceandrewssolicitors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://twitter.com/MASolicitorsUK" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="24 24 0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.linkedin.com/company/maurice-andrews-solicitors/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
