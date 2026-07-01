import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Data Protection Complaints Procedure | Maurice Andrews Solicitors" };

export default function Page() {
  return (
    <>
      <Header /><CookieBanner />
      <main className="bg-white px-4 py-14">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-8 border-b-[3px] border-primary pb-4 text-3xl font-bold text-primary">
            Data Protection Complaints Procedure
          </h1>

          <p className="mb-4 text-base leading-relaxed text-[#333]">
            This procedure explains how you can raise a Data Protection Complaint if you are unhappy with how we have handled your personal information. It is separate from our service complaints process, which deals with concerns about the legal services we provide.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            A data protection complaint may relate to issues such as how we have used your personal information, how long we have kept it, the accuracy of the information we hold, our response to a data rights request, or concerns arising from a data breach.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">1. How to Make a Data Protection Complaint</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You may make a complaint through any channel. You do not need to use a specific form.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You can contact us in any of the following ways:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Email: <a href="mailto:info@mauriceandrewssolicitors.co.uk" className="text-[#3C78F4] hover:underline">info@mauriceandrewssolicitors.co.uk</a></li>
            <li>Post: 182 Soho Hill, Birmingham, England, B19 1AG</li>
            <li>Telephone: 0121 554 4900</li>
            <li>In person: speak to your usual contact at the firm, who will pass your complaint to the appropriate person.</li>
          </ul>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If you would like a copy of our{" "}
            <a href="/data-protection-complaint-form" className="text-[#3C78F4] hover:underline">Data Protection Complaints Form</a>
            , we will provide one on request. If you need help making a complaint or require this procedure in an alternative format, please tell us.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">2. What to Include in Your Complaint</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Providing the following information will help us investigate your concerns efficiently:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Your name and contact details</li>
            <li>How you are connected to the matter (e.g., client, former client, third party)</li>
            <li>What personal information you believe is affected</li>
            <li>What happened and when</li>
            <li>Why you are unhappy with how we handled your personal information</li>
            <li>What outcome you are seeking</li>
            <li>Any relevant reference numbers or correspondence</li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">3. What Happens After You Complain</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Your complaint will be passed to our Data Protection Supervisor (DPS) who is responsible for handling data protection complaints.
          </p>

          <h3 className="mb-3 mt-4 text-lg font-bold text-primary">Acknowledgement</h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will acknowledge your complaint within 30 days of receiving it.
          </p>

          <h3 className="mb-3 mt-4 text-lg font-bold text-primary">Investigation</h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will investigate your complaint without undue delay and may contact you if we need more information.
          </p>

          <h3 className="mb-3 mt-4 text-lg font-bold text-primary">Identity Checks</h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            To protect confidentiality, we may need to verify your identity before sharing information with you. We will not ask for more information than necessary and will not insist on ID where it would be unreasonable.
          </p>

          <h3 className="mb-3 mt-4 text-lg font-bold text-primary">Requests for Clarification</h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If your complaint is unclear or very broad, we may ask you to clarify your concerns.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Where clarification is requested, the response deadline may be paused until we receive the information needed.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">4. Complaints Involving Children</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If a complaint is made by a child or on their behalf, we will:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Communicate in clear, plain language appropriate to the child&rsquo;s age</li>
            <li>Assess the child&rsquo;s capacity to understand and exercise their rights</li>
            <li>Accept complaints from parents, guardians, advocates, charities, or solicitors acting for the child</li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">5. Our Response</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Once our investigation is complete, we will write to you with:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>The outcome of our investigation</li>
            <li>Any steps we have taken or propose to take</li>
            <li>Information about your right to escalate the matter to the ICO</li>
          </ul>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We cannot refuse to accept a data protection complaint.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">6. Escalating Your Complaint to the ICO</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you are unhappy with our response, or if we fail to respond within a reasonable time, you may escalate your complaint to the Information Commissioner&rsquo;s Office (ICO).
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Further information is available at:
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            <a href="https://ico.org.uk/make-a-complaint" className="text-[#3C78F4] hover:underline">https://ico.org.uk/make-a-complaint</a>
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We will inform you of your escalation rights in our written response.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">7. How We Record and Use Complaint Information</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We keep central records of all data protection complaints.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If required by the Secretary of State, we may need to report anonymised complaint data to the ICO.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">8. Difference Between Data Protection Complaints and Service Complaints</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            A data protection complaint concerns how we handle your personal information.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            A service complaint concerns dissatisfaction with the legal services we provide.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Service complaints are handled under our{" "}
            <a href="/complaints-policy" className="text-[#3C78F4] hover:underline">Complaints Procedure</a>{" "}
            and by our Client Care Partner.
          </p>

          {/* Cross-link to Service Complaints (locked pattern from ref) */}
          <div className="mt-10 border-t border-[#ccc] pt-6">
            <p className="text-sm italic text-[#666]">
              This procedure covers data protection complaints only. For service complaints (legal advice quality, fees, conduct), see our{" "}
              <a href="/complaints-policy" className="text-[#3C78F4] hover:underline">Service Complaints Policy</a>.
            </p>
            <p className="text-sm italic text-[#666] mt-2">
              For our general website privacy notice, see our{" "}
              <a href="/privacy-policy" className="text-[#3C78F4] hover:underline">Privacy Notice</a>.
            </p>
          </div>
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
