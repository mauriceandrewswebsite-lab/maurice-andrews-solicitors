import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Privacy Policy | Maurice Andrews Solicitors" };

export default function Page() {
  return (
    <>
      <Header /><CookieBanner />
      <main className="bg-white px-4 py-14">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-8 border-b-[3px] border-primary pb-4 text-3xl font-bold text-primary">
            Website Privacy Policy
          </h1>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            Maurice Andrews Solicitors Privacy Notice
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            UK Data Privacy/Data Protection Law changed significantly on 25 May 2018.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The EU General Data Protection Regulation (or GDPR for short) was a positive step towards you
            having more control over how your data is used and how you are contacted by us.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            At 11pm on 31 December 2020, EU GDPR will no longer apply to personal data held or processed
            within the UK. Instead, &ldquo;UK GDPR&rdquo; will apply to such data. The provisions of UK
            GDPR are essentially the same as EU GDPR and therefore the following rights continue to apply.
            We confirm that we do not normally hold or process your data outside the UK but if we do, we
            will ensure there are sufficient &ldquo;adequacy&rdquo; arrangements or
            &ldquo;safeguards&rdquo; in place to protect your rights.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you are an individual, the rights you have under the UK GDPR include the following:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>The right to access the personal data that we hold about you;</li>
            <li>The right to object to us sending you information;</li>
            <li>The right to be informed about the collection and use of your personal data;</li>
            <li>
              The right to rectification of personal data we may hold about you if it is inaccurate or
              incomplete;
            </li>
            <li>The right to erasure of your personal data in some circumstances;</li>
            <li>
              The right to restrict processing your personal data where you may have a particular reason for
              wanting the restriction;
            </li>
            <li>
              The right to data portability which will allow you to obtain and reuse your personal data
              across different services;
            </li>
            <li>
              Rights in relation to automated decision making and profiling – please note we do not use
              automated decision making and profiling.
            </li>
          </ul>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We have therefore updated our privacy notice to reflect these changes.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We use your personal data to help us provide an excellent client service, which includes
            tailoring the information we share with you to help ensure that it&apos;s relevant, useful and
            timely.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will respect your privacy and work hard to ensure we meet strict regulatory requirements.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will not sell your personal data to third parties.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will provide you with easy ways to manage and review your marketing choices if you receive
            direct marketing communications from us.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We are a firm that is authorised and regulated by the Solicitors Regulation Authority (SRA). As
            you might expect, we are already subject to strict rules of confidentiality. It is therefore
            already part of the fabric and culture of our firm to keep your information private and secure.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We would ask you to help us keep your data secure by carefully following any guidance and
            instructions we give e.g., communicating bank account details and transferring funds to us.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            Lawful Bases for Processing your Data
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The law states that we are allowed to use personal information only if we have a proper and
            lawful reason to do so. This includes sharing it with others outside the firm e.g., an auditor
            of a relevant quality standard.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The GDPR says we must have one or more of these reasons:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>
              <strong>Contract:</strong> the processing is necessary for a contract we have with an
              individual, or because they have asked us to take specific steps before entering into a
              contract.
            </li>
            <li>
              <strong>Legal obligation:</strong> the processing is necessary for you to comply with the law
              (not including contractual obligations).
            </li>
            <li>
              <strong>Legitimate interests:</strong> the processing is necessary for our legitimate
              interests or the legitimate interests of a third party unless there is a good reason to
              protect the individual&apos;s personal data which overrides those legitimate interests.
            </li>
            <li>
              <strong>Consent:</strong> the individual has given clear consent for us to process their
              personal data for a specific purpose
            </li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            A legitimate interest is when we have a business or commercial reason to use your information.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Here is a list of all the ways that we may use your personal data, and which of the reasons we
            rely on to do so.
          </p>

          {/* Data Use Table */}
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc]">
                  <th className="p-3 text-left font-bold text-primary">Use of your Personal Data</th>
                  <th className="p-3 text-left font-bold text-primary">
                    Our reason/justification for processing
                  </th>
                  <th className="p-3 text-left font-bold text-primary">Legitimate Business Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">
                    Opening, progressing, closing, archiving and storing a matter/case file
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Contract<br />Legitimate Interest<br />Legal Obligation
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Fulfilling your instructions (the retainer)<br />
                    Complying with regulations and the law
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">Direct marketing to you</td>
                  <td className="p-3 align-top text-[#333]">Legitimate Interest</td>
                  <td className="p-3 align-top text-[#333]">
                    Keeping our records up-to-date, working out which of our products and services may
                    interest you and telling you about them
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">
                    To make and manage client payments.<br />
                    To manage fees, charges and interest due to clients.<br />
                    To collect and recover money that is owed to us.
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Contract<br />Legitimate Interest<br />Legal Obligation
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Keeping accounts systems up-to-date<br />
                    Complying with SRA Accounts Rules and other regulations<br />
                    Effective and efficient management of a sustainable business
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">
                    To detect, investigate, report, and seek to prevent financial crime.<br />
                    To manage risk for us and our customers.
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Contract<br />Legitimate Interest<br />Legal Obligation
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Developing and improving how we deal with financial crime including suspected money
                    laundering as well as complying with our legal obligations in this respect
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">
                    To comply with laws and regulations that apply to us.<br />
                    To respond to complaints and seek to resolve them.
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Legitimate Interest<br />Legal Obligation
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Complying with regulations that apply to us.<br />
                    Being efficient about how we fulfil our legal and contractual duties.
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">
                    To run our business in an efficient and proper way. This includes managing our financial
                    stability, business capability, planning, communications, corporate governance, and
                    audit.
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Legitimate Interest<br />Legal Obligation
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Complying with the SRA Accounts Rules and Code of Conduct and other regulations that
                    apply to us<br />
                    Being effective and efficient about how we run our business<br />
                    To allow external consultants, advisers and auditors to inspect files
                  </td>
                </tr>
                <tr>
                  <td className="p-3 align-top text-[#333]">
                    To exercise our rights and comply with obligations set out in agreements or contracts
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Legitimate Interest<br />Legal Obligation
                  </td>
                  <td className="p-3 align-top text-[#333]">
                    Complying with contractual requirements e.g., for the provision to clients of Public
                    Funding by Public Bodies
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            Special Categories and Criminal Convictions Data
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Further to our lawful bases for processing personal data we rely on further conditions contained
            within the Data Protection Act 2018 (as amended by the Data Protection, Privacy and Electronic
            Communications (Amendments etc.,) (EU Exit) Regulations 2019 and 2020) for processing these
            types of data. These conditions are contained in Schedule 1, Part 3 of the Act. The primary
            condition we rely on is known as &ldquo;legal claims&rdquo; where;
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            This condition is met if the processing—
          </p>
          <ol className="mb-4 ml-8 list-[lower-alpha] space-y-1 text-base leading-relaxed text-[#333]">
            <li>
              is necessary for the purpose of, or in connection with, any legal proceedings (including
              prospective legal proceedings),
            </li>
            <li>is necessary for the purpose of obtaining legal advice, or</li>
            <li>
              is otherwise necessary for the purposes of establishing, exercising or defending legal rights
            </li>
          </ol>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We would normally also rely on another condition in Schedule 1, Part 3 of the Act known as
            &ldquo;consent&rdquo; where, due to the nature of these types of data we would obtain your
            consent prior to processing them.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            Types of Personal Data we process
          </h2>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc]">
                  <th className="p-3 text-left font-bold text-primary">Type of Personal Information</th>
                  <th className="p-3 text-left font-bold text-primary">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Financial", "Your Bank account details and your financial status and information"],
                  ["Contact Information", "Where you live and how to contact you"],
                  ["Socio-Demographic", "This includes details about your work or profession, nationality etc."],
                  ["Transactional", "Details about payments to and from your bank accounts"],
                  ["Contractual", "Details about the products or services we provide to you"],
                  ["Behavioural", "Details about how you use our services"],
                  ["Communications", "What we learn about you from letters, emails, and conversations between us"],
                  ["Social Relationships", "Your family, friends and other relationships"],
                  ["Open Data and Public Records", "Details about you that are in public records such as the Land Registry, and information about you that is openly available on the internet"],
                  ["Documentary Data", "Details about you that are stored in documents in different formats, or copies of them. This could include things like your passport, drivers' licence, or birth certificate"],
                  ["Special types of data", "The Law and other regulations treat some types of personal information as a special category. We will only collect and use these types of data if the law allows or requires us to do so: Racial or ethnic origin, Religious or philosophical beliefs, Trade union membership, Genetic and bio-metric data, Health data including gender, Criminal convictions and offences"],
                  ["Consents", "Any permissions, consents or preferences that you give us. This includes things like how you want us to contact you."],
                  ["National Identifier", "A number or code given to you by a government to identify who you are, such as a National Insurance Number"],
                  ["Legal Aid Application and Bill", "Information required to submit an application for public funding and to claim our fees under any legal aid certificate issued to you."],
                ].map(([type, desc], i) => (
                  <tr key={i} className="border-b border-[#eee]">
                    <td className="p-3 align-top font-medium text-[#333]">{type}</td>
                    <td className="p-3 align-top text-[#333]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Sources of Data</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We collect personal data from various sources:
          </p>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc]">
                  <th className="p-3 text-left font-bold text-primary">Data</th>
                  <th className="p-3 text-left font-bold text-primary">Source</th>
                  <th className="p-3 text-left font-bold text-primary">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Data you give us when you instruct us to advise you or act for you", "You", "To enable us to decide whether to accept your instructions and to progress your matter"],
                  ["Data you give us by letter/phone/email and other documents", "You", "To enable us to decide whether to accept your instructions and to progress your matter"],
                  ["Data you give us when you visit our website, via a messaging service or social media", "You", "To enable us to deal with your query or request and to contact you if appropriate"],
                  ["Data you give us during interviews", "You", "To enable us to advise and represent you and to communicate with other solicitors and third parties on your behalf"],
                  ["Data you give us in client surveys", "You", "To enable us to improve our services and respond to any expressions of dissatisfaction"],
                  ["Data provided to us by referrers and introducers", "Referrers", "To enable us to contact you and to enable us to decide whether to accept your instructions and to progress your matter"],
                  ["Fraud Prevention agencies", "Agency", "To enable us to comply with the law and regulations and carry out client due diligence checks"],
                  ["Estate Agents", "Agents", "To enable us to act on your behalf in relation to a land transaction"],
                  ["Other Solicitors", "Solicitor Firms", "As part of an exchange of information to enable us to progress the matter and advise you"],
                  ["Public Bodies", "", "To enable us to advise you and progress your matter. To prevent fraud and money laundering. As part of an exchange of information to enable us to progress the matter and advise you"],
                  ["Your GP or other medical professional", "Doctor", "To obtain appropriate medical reports"],
                  ["The Legal Aid Agency", "LAA", "Under our contractual obligations we will receive \"Shared Data\" from the LAA if your matter is legally aided"],
                ].map(([data, source, purpose], i) => (
                  <tr key={i} className="border-b border-[#eee]">
                    <td className="p-3 align-top text-[#333]">{data}</td>
                    <td className="p-3 align-top text-[#333]">{source}</td>
                    <td className="p-3 align-top text-[#333]">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Who we share your Data with</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Subject to the SRA Code of Conduct and the requirements with regard to client confidentiality,
            we may share your personal information with:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Lawyers or other organisations on the other side of a matter or case</li>
            <li>Barristers or experts we instruct</li>
            <li>The courts and other tribunals</li>
            <li>Your Personal Representatives or Attorneys</li>
            <li>Auditors</li>
            <li>Lenders</li>
            <li>Estate Agents, IFAs, Referrers, etc</li>
            <li>Organisations that we introduce you to</li>
            <li>HM Revenue and Customs</li>
            <li>The government both Central and Devolved</li>
            <li>Fraud Prevention Agencies including the National Crime Agency</li>
            <li>The SRA and other regulators</li>
            <li>ID checking organisations</li>
          </ul>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Automated Decision-Making</h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We do not use automated decision-making systems. All decisions relating to you and your matter
            are made by a person.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Personal Data we use</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We typically will use the following types of personal data:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Your Name</li>
            <li>Date of Birth</li>
            <li>Home address</li>
            <li>Contact details such as phone numbers and email addresses</li>
            <li>Bank details and account information</li>
            <li>Medical information (where applicable)</li>
            <li>Employment details</li>
            <li>Data that identifies you by cookies when you use our website</li>
          </ul>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            Sending Data outside the European Economic Area (EEA)
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Unless you instruct us in a matter or case that involves an international element, we do not
            normally send your personal data outside the UK or EEA. If we do, then we will seek your
            consent to do so, explain the risks to you and talk to you about UK adequacy decisions and
            potential safeguards depending on the country involved.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            Your refusal to provide Personal Data requested
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If you refuse to provide the information requested, then it may cause delay and we may be
            unable to continue to act for you or complete your matter.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Marketing Information</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We may from time to time send you letters or emails about changes in the law and suggestions
            about actions that you might consider taking in the light of that information e.g., reviewing
            your will. We will send you this marketing information either because you have consented to
            receive it or because we have a &ldquo;legitimate interest&rdquo;.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            You have the right to object and to ask us to stop sending you marketing information by
            contacting us at any time. You can of course change your mind and ask us to send the
            information again.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            How long we keep your personal information
          </h2>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>
              We are legally obliged to keep certain information for at least 5 years and typically store
              your file for 6 years before destroying it.
            </li>
            <li>
              In some cases, e.g., Legal Aid Matters we are obliged to keep your files for a longer period
              of time, this period will be set out in our closing letter to you.
            </li>
            <li>We will store Wills and other documents indefinitely.</li>
            <li>
              We will keep your name and personal contact details on our database until you tell us that you
              would like them removed e.g., where you have changed solicitor.
            </li>
          </ul>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            How to get a copy of your Personal Information
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you wish to access your personal data then write to:
          </p>
          <p className="mb-1 text-base leading-relaxed text-[#333]">
            <strong>Mariam Khan</strong>
          </p>
          <p className="mb-1 text-base leading-relaxed text-[#333]">Data Protection Officer</p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            182 Soho Hill, Birmingham, England, B19 1AG
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">
            Telling us if your Personal Information is incorrect (The right to rectification)
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If you think that any information we have about you is incomplete or wrong, then you have the
            right to ask us to correct it. Please contact us as above.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Other Rights</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            As mentioned above you also have other rights, namely:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            You have the right to ask us to delete (erase) or stop us using your data if there is no longer
            any need for us to keep it (e.g., under a legal obligation). In terms of data portability then
            subject to any lien we may enjoy for non-payment of fees; we will comply promptly (where
            permitted) to your request to transfer your physical paper file to another solicitor upon
            receipt of your signed consent. If your file is in electronic format, we will take reasonable
            steps to export the file to a &ldquo;portable format&rdquo; where possible so that your new
            solicitor can upload it to their system. As many different IT systems are used by the legal
            profession, we cannot guarantee that we can provide data in a compatible format.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Consent</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            UK GDPR in some cases requires us to obtain your explicit consent i.e.
          </p>
          <ol className="mb-6 ml-8 list-[lower-alpha] space-y-1 text-base leading-relaxed text-[#333]">
            <li>the racial or ethnic origin of the data subject,</li>
            <li>his political opinions,</li>
            <li>his religious beliefs or other beliefs of a similar nature,</li>
            <li>
              whether he is a member of a trade union (within the meaning of the Trade Union and Labour
              Relations (Consolidation) Act 1992),
            </li>
            <li>his physical or mental health or condition,</li>
            <li>his sexual life,</li>
            <li>the commission or alleged commission by him of any offence, or</li>
            <li>
              any proceedings for any offence committed or alleged to have been committed by him, the
              disposal of such proceedings or the sentence of any court in such proceedings.
            </li>
          </ol>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Where acting for you involves us processing such data, we will seek your explicit consent e.g.,
            when we plan to obtain your medical records. You have the right to withdraw your consent by
            contacting us as stated above. However, if you do so then we may not be able to progress your
            case or indeed continue to act for you.
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">How to Complain</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you are unhappy about how we are using your Personal Data then you can complain to us using
            the contact information above.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You also have the right to complain to the Information Commissioner&apos;s Office (ICO). Further
            details on how to raise a concern about our information rights practices with the ICO can be
            found on the ICO&apos;s website:{" "}
            <a href="https://ico.org.uk/concerns" className="text-[#3C78F4] hover:underline">
              https://ico.org.uk/concerns
            </a>
          </p>

          <h2 className="mb-4 mt-10 text-xl font-bold text-primary">Updating this Notice</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
