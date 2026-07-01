import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Privacy Notice | Maurice Andrews Solicitors" };

export default function Page() {
  return (
    <>
      <Header /><CookieBanner />
      <main className="bg-white px-4 py-14">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-8 border-b-[3px] border-primary pb-4 text-3xl font-bold text-primary">
            Maurice Andrews Solicitors
          </h1>
          <h2 className="mb-6 text-2xl font-bold text-primary">Privacy Notice</h2>

          <p className="mb-2 text-base leading-relaxed text-[#333]">
            On 19 June 2025 the Data (Use and Access) Act (DUAA) became law in the UK.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            The DUAA amends, but does not replace, the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (DPA) or the Privacy and Electronic Communications Regulations (PECR).
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Phased implementation of DUAA</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The DUAA changes are being phased in mainly between June 2025 and June 2026.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The first DUAA provisions came into force on 19 and 20 August 2025.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The latest set of DUAA provisions came into force on 05 February 2026.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            This last set included most of the DUAA provisions with some exceptions such as the requirement for a Data Complaints Procedure which will become mandatory from the 19 June 2026.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Data Protection Complaints Procedure</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            In anticipation of the above we have created a Data Protection Complaints Procedure.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You will find a Data Protection Complaints Form{" "}
            <a href="/data-protection-complaint-form" className="text-[#3C78F4] hover:underline">on our website</a>{" "}
            which will enable you to make a Data Protection Complaint (DPC)/or you may set out your Data Protection Complaint in an email to Mariam Khan at{" "}
            <a href="mailto:info@mauriceandrewssolicitors.co.uk" className="text-[#3C78F4] hover:underline">info@mauriceandrewssolicitors.co.uk</a>
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You are not obliged to use the DPCF, but it would help us deal with your complaint more efficiently and we recommend that you use it.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            This type of complaint will normally be dealt with by our Data Protection Supervisor, Mariam Khan
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            To help ensure that your DPC is dealt with promptly and to help protect confidentiality it is probably not prudent to send us a DPC via our Social Media platforms or other Portals and Platforms e.g. reviewsolicitors.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            However you decide to submit your Data Protection Complaint it would be helpful if you provided us with:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Your ID (where appropriate)</li>
            <li>Your Full name</li>
            <li>Your preferred contact details (email / phone / postal address)</li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">Your relationship to the firm:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>A current client</li>
            <li>A former client</li>
            <li>An employee or former employee</li>
            <li>Another affected individual</li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Please then describe your concern about how we have handled your personal data.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            For further information on timescales etc please see{" "}
            <a href="#appendix-1" className="text-[#3C78F4] hover:underline">Appendix 1</a>{" "}
            below.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">The Information Commissioner</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            You also have the right to complain to the Information Commissioner&rsquo;s Office (ICO) at any time or if you are not satisfied with our response to your Complaint. You will find further information on the following link.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/" className="text-[#3C78F4] hover:underline">https://ico.org.uk/make-a-complaint/data-protection-complaints/</a>
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Service Complaints</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Please note that a Data Protection Complaint is different from a service complaint i.e. where you are dissatisfied with any aspect of the service you have received from us. Our{" "}
            <a href="/complaints-policy" className="text-[#3C78F4] hover:underline">Service Complaints Procedure</a>{" "}
            for this latter type of complaint is also found on our website. That type of complaint will normally be dealt with by our Complaints Partner.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Data Subject Rights</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The right to make a Data Protection complaint is separate from and additional to your rights numbered 1. to 8. set out below.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Before making a Data Protection Complaint you may wish to consider whether exercising one of more the rights below (e.g. 1. Making a data subject access request (DSAR) is more appropriate. If you are unsure as to which route to take, then please contact us and we will do what we can to assist you. The following examples of a DPC may help you choose.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">Examples of circumstances where a Data Protection Complaint may be more appropriate:</p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>We didn&rsquo;t respond to your Data Subject Access Request.</li>
            <li>We have refused to provide the data you have requested.</li>
            <li>Your data was shared with someone else.</li>
            <li>You believe that we hold inaccurate information about you.</li>
            <li>You think that we have kept your data for too long.</li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you are an individual, the rights you have under the UK GDPR include the following:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>The right to access the personal data that we hold about you;</li>
            <li>The right to object to us sending you information;</li>
            <li>The right to be informed about the collection and use of your personal data;</li>
            <li>The right to rectification of personal data we may hold about you if it is inaccurate or incomplete;</li>
            <li>The right to erasure of your personal data in some circumstances;</li>
            <li>The right to restrict processing your personal data where you may have a particular reason for wanting the restriction;</li>
            <li>The right to data portability which will allow you to obtain and reuse your personal data across different services;</li>
            <li>Rights in relation to automated decision making and profiling – please note we do not use automated decision making and profiling.</li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Data Subject Access Request (DSAR)</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The DUAA has made some changes in this area and the ICO has published updated guidance which can be found on the ICO website{" "}
            <a href="https://ico.org.uk/for-the-public/" className="text-[#3C78F4] hover:underline">https://ico.org.uk/for-the-public/</a>
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The right of access, commonly referred to as subject access or data subject access request, gives people the right to obtain a copy of their personal information, as well as other supplementary information.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">The relevant individual has the right to obtain the following from us:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Confirmation that we are processing their personal information.</li>
            <li>A copy of their personal information.</li>
            <li>Other supplementary information.</li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            In most cases, we would confirm, in general terms, whether or not we are processing a person&rsquo;s personal information/data.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            However, this will depend on the nature of the request. If the request is for a specific piece of information, we must confirm or deny whether we are processing this information unless an exemption applies. Whether or not an exemption applies will be decided on a case-by-case basis.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-bold text-primary">Manifestly unfounded or excessive Requests</h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will take reasonable steps to respond positively and efficiently to your requests.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            To protect your privacy, we will of course ask you to evidence your identity as appropriate in the circumstances.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            However, we could refuse to respond to a request if it is manifestly unfounded or excessive. We will assess this on a case-by-case basis.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Alternatively, if we consider the request to be manifestly unfounded or excessive, rather than refuse the request we could charge a reasonable fee for dealing with the request. If we decide to charge a fee, we will notify the requester and explain why. We then do not need to take further action in response to the request until we receive the fee. The time limit for responding to the request begins to run again only once we have received the fee. We will explain how we have calculated the fee charged based on our administrative expenses.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We will explain to you why we consider your request to be manifestly unfounded or excessive.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Our Use of your Personal Data</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We use your personal data to help us provide an excellent client service, which includes tailoring the information we share with you to help ensure that it&rsquo;s relevant, useful and timely.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will respect your privacy and work hard to ensure we meet strict regulatory requirements.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">We will not sell your personal data to third parties.</p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will provide you with easy ways to manage and review your marketing choices if you receive direct marketing communications from us.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We are a firm that is authorised and regulated by the Solicitors Regulation Authority (SRA). As you might expect, we are already subject to strict rules of confidentiality. It is therefore already part of the fabric and culture of our firm to keep your information private and secure.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We would ask you to help us keep your data secure by carefully following any guidance and instructions we give e.g. communicating bank account details and transferring funds to us.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We are sometimes obliged to share your Personal Data with external authorities without notifying you e.g. as required by the Money Laundering &amp; Terrorist Financing Act 2017 (as amended), our Sanctions Policy and Proliferation Financing Policy. The prevention of Crime and the Protection of Vulnerable Individuals are now both a Recognised Legitimate Interest [RLI] under the DUAA.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            In all other cases, we will be transparent, and we will explain to you why we are requesting your data and how we are using it.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Lawful Bases for Processing your Data</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The law states that we are allowed to use personal information only if we have a proper and lawful reason to do so. This includes sharing it with others outside the firm e.g. an auditor of a relevant quality standard.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The amended UK GDPR says we must have one or more of the, now seven, (Article 6) bases:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li><strong>Contract:</strong> the processing is necessary for a contract we have with an individual, or because they have asked us to take specific steps before entering a contract.</li>
            <li><strong>Legal obligation:</strong> the processing is necessary for you to comply with the law (not including contractual obligations).</li>
            <li><strong>Legitimate interests:</strong> the processing is necessary for our legitimate interests or the legitimate interests of a third party unless there is a good reason to protect the individual&rsquo;s personal data which overrides those legitimate interests. A legitimate interest is when we have a business or commercial reason to use your information.</li>
            <li><strong>Consent:</strong> the individual has given clear consent for us to process their personal data for a specific purpose.</li>
            <li><strong>Recognised Legitimate Interest (7th basis added by DUAA):</strong> see examples above.</li>
          </ul>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Here is a list of all the ways that we may use your personal data, and which of the reasons we normally rely on to do so.
          </p>

          {/* Table 1: Use of your Personal Data */}
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc] bg-[#f7f7f7]">
                  <th className="p-3 text-left font-bold text-primary">Use of your Personal Data</th>
                  <th className="p-3 text-left font-bold text-primary">Our reason/justification for processing</th>
                  <th className="p-3 text-left font-bold text-primary">Legitimate Business Interest + RLI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">Opening, progressing, closing, archiving and storing a matter/case file</td>
                  <td className="p-3 align-top text-[#333]">Contract<br />Legitimate Interest<br />Legal Obligation</td>
                  <td className="p-3 align-top text-[#333]">Fulfilling your instructions (the retainer)<br />Complying with regulations and the law</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">Direct marketing to you</td>
                  <td className="p-3 align-top text-[#333]">Legitimate Interest</td>
                  <td className="p-3 align-top text-[#333]">Keeping our records up to date, working out which of our products and services may interest you and telling you about them<br />Providing information on changes in the law and inviting you to contact us for advice</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">To make and manage client payments.<br />To manage fees, charges and interest due to clients.<br />To collect and recover money that is owed to us.</td>
                  <td className="p-3 align-top text-[#333]">Contract<br />Legitimate Interest<br />Legal Obligation</td>
                  <td className="p-3 align-top text-[#333]">Keeping accounts systems up to date<br />Complying with SRA Accounts Rules and other regulations<br />Effective and efficient management of a sustainable business</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">To detect, investigate, report, and seek to prevent financial crime.<br />To share personal information where necessary for purposes of safeguarding national security, protecting public security or defence.<br />To help Safeguard vulnerable individuals.<br />To make disclosures to public bodies, or bodies carrying out public tasks where the requesting body has confirmed it needs the information to carry out its public task.<br />To manage risk for us and our customers.<br />To comply with laws and regulations that apply to us.<br />To respond to complaints and seek to resolve them.</td>
                  <td className="p-3 align-top text-[#333]">Contract<br />Legitimate Interest<br />Legal Obligation<br />Recognised Legitimate Interest<br />[RLI] (DUAA)</td>
                  <td className="p-3 align-top text-[#333]">Developing and improving how we deal with financial crime including suspected money laundering as well as complying with our legal obligations in this respect<br />Complying with regulations that apply to us.<br />Being efficient about how we fulfil our legal and contractual duties.<br />RLI</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">To run our business in an efficient and proper way. This includes managing our financial stability, business capability, planning, communications, corporate governance, and audit.</td>
                  <td className="p-3 align-top text-[#333]">Legitimate Interest<br />Legal Obligation</td>
                  <td className="p-3 align-top text-[#333]">Complying with the SRA Accounts Rules and Code of Conduct and other regulations that apply to us<br />Being effective and efficient about how we run our business<br />To allow external consultants, advisers and auditors to inspect files</td>
                </tr>
                <tr>
                  <td className="p-3 align-top text-[#333]">To exercise our rights and comply with obligations set out in agreements or contracts</td>
                  <td className="p-3 align-top text-[#333]">Legitimate Interest<br />Legal Obligation<br />RLI</td>
                  <td className="p-3 align-top text-[#333]">Complying with contractual requirements e.g. for the provision to clients of Public Funding by Public Bodies RLI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Criminal Convictions Data</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Further to our lawful bases for processing personal data we rely on further conditions contained within the Data Protection Act 2018 (as amended) for processing these types of data. These conditions are contained in Schedule 1, Part 3 of the Act. The primary condition we rely on is known as &ldquo;legal claims&rdquo; where;
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">This condition is met if the processing&mdash;</p>
          <ol className="mb-4 ml-8 list-[lower-alpha] space-y-1 text-base leading-relaxed text-[#333]">
            <li>is necessary for the purpose of, or in connection with, any legal proceedings (including prospective legal proceedings),</li>
            <li>is necessary for the purpose of obtaining legal advice, or</li>
            <li>is otherwise necessary for the purposes of establishing, exercising or defending legal rights</li>
          </ol>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We would normally also rely on another condition in Schedule 1, Part 3 of the Act known as &ldquo;consent&rdquo; where, due to the nature of these types of data we would obtain your consent prior to processing them.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If our reason for processing data is in connection with the Schedule 1, Part 2 of the Act, condition 18, safeguarding of individuals and children at risk. This is because the processing will be necessary for the purposes of;
          </p>
          <ol className="mb-4 ml-8 list-[lower-alpha] space-y-1 text-base leading-relaxed text-[#333]">
            <li>protecting an individual from neglect or physical, mental or emotional harm, or</li>
            <li>protecting the physical, mental or emotional well-being of an individual,</li>
          </ol>
          <p className="mb-4 text-base leading-relaxed text-[#333]">In this condition;</p>
          <ol className="mb-4 ml-8 list-[lower-alpha] space-y-1 text-base leading-relaxed text-[#333]">
            <li>in the circumstances, consent to the processing cannot be given by the data subject.</li>
            <li>in the circumstances, we cannot reasonably be expected to obtain the consent of the data subject to the processing.</li>
            <li>the processing must be carried out without the consent of the data subject because obtaining the consent of the data subject would prejudice the provision of the protection</li>
          </ol>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Also, due to the nature of these data types, we comply with Schedule 1, Part 4 of the Data Protection Act which requires us to have an appropriate written policy explaining our security procedures, and data retention periods and we are required to retain this policy document and produce it to the Information Commissioner on request. Our policy is set out in the firm&rsquo;s Information Management &amp; Security Policy.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Types of Personal Data we process</h2>
          {/* Table 2: Types of Personal Information */}
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc] bg-[#f7f7f7]">
                  <th className="p-3 text-left font-bold text-primary">Type of Personal Information</th>
                  <th className="p-3 text-left font-bold text-primary">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Financial</td><td className="p-3 align-top text-[#333]">Your Bank account details and your financial status and information</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Contact Information</td><td className="p-3 align-top text-[#333]">Where you live and how to contact you</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Socio-Demographic</td><td className="p-3 align-top text-[#333]">This includes details about your work or profession, nationality etc.</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Transactional</td><td className="p-3 align-top text-[#333]">Details about payments to and from your bank accounts</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Contractual</td><td className="p-3 align-top text-[#333]">Details about the products or services we provide to you</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Behavioural</td><td className="p-3 align-top text-[#333]">Details about how you use our services</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Communications</td><td className="p-3 align-top text-[#333]">What we learn about you from letters, emails, and conversations between us</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Social Relationships</td><td className="p-3 align-top text-[#333]">Your family, friends and other relationships</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Open Data and Public Records</td><td className="p-3 align-top text-[#333]">Details about you that are in public records such as the Land Registry, and information about you that is openly available on the internet</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Documentary Data</td><td className="p-3 align-top text-[#333]">Details about you that are stored in documents in different formats, or copies of them. This could include things like your passport, drivers&rsquo; licence, or birth certificate</td></tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top font-medium text-[#333]">Special Category Data</td>
                  <td className="p-3 align-top text-[#333]">
                    The Law and other regulations treat some types of personal information as a special category. We will only collect and use these types of data if the law allows or requires us to do so. The UK GDPR defines special category data as: personal data revealing:
                    <br />Racial or ethnic origin
                    <br />Political Opinions
                    <br />Religious or philosophical beliefs
                    <br />Trade union membership
                    <br />Genetic Data
                    <br />Biometric data (where used for ID purposes)
                    <br />Data concerning Health
                    <br />Data concerning a person&rsquo;s sex life;
                    <br />Data concerning a person&rsquo;s sexual orientation.
                    <br />Please note that biometric data may be used and processed by our suppliers to verify your ID. Details of such suppliers will be provided if requested together with details of where you can view their Privacy Policy.
                  </td>
                </tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Consents</td><td className="p-3 align-top text-[#333]">Any permissions, consents or preferences that you give us. This includes things like how you want us to contact you.</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">National Identifier</td><td className="p-3 align-top text-[#333]">A number or code given to you by a government to identify who you are, such as a National Insurance Number</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top font-medium text-[#333]">Legal Aid Application and Bill and any information provided to enable the LAA to enforce its statutory charge etc.</td><td className="p-3 align-top text-[#333]">Information required to submit an application for public funding and to claim our fees under any legal aid certificate issued to you. This may be &ldquo;shared data&rdquo; under our contract with the Legal Aid Agency. [See LAA Privacy Notice]</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Sources of Data</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">We collect personal data from various sources:</p>
          {/* Table 3: Sources of Data */}
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc] bg-[#f7f7f7]">
                  <th className="p-3 text-left font-bold text-primary">Data</th>
                  <th className="p-3 text-left font-bold text-primary">Source</th>
                  <th className="p-3 text-left font-bold text-primary">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Data you give us when you instruct us to advise you or act for you</td><td className="p-3 align-top text-[#333]">You</td><td className="p-3 align-top text-[#333]">To enable us to decide whether to accept your instructions and to progress your matter</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Data you give us by letter/phone/email and other documents</td><td className="p-3 align-top text-[#333]">You</td><td className="p-3 align-top text-[#333]">To enable us to decide whether to accept your instructions and to progress your matter</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Data you give us when you visit our website, via a messaging service or social media</td><td className="p-3 align-top text-[#333]">You</td><td className="p-3 align-top text-[#333]">To enable us to deal with your query or request and to contact you if appropriate</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Data you give us during interviews</td><td className="p-3 align-top text-[#333]">You</td><td className="p-3 align-top text-[#333]">To enable us to advise and represent you and to communicate with other solicitors and third parties on your behalf</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Data you give us in client surveys</td><td className="p-3 align-top text-[#333]">You</td><td className="p-3 align-top text-[#333]">To enable us to improve our services and respond to any expressions of dissatisfaction</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Data provided to us by referrers and introducers</td><td className="p-3 align-top text-[#333]">Referrers</td><td className="p-3 align-top text-[#333]">To enable us to contact you and to enable us to decide whether to accept your instructions and to progress your matter</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Fraud Prevention Applications e.g. InfoTrack: Ecos; Thirdfort etc.</td><td className="p-3 align-top text-[#333]">Agency</td><td className="p-3 align-top text-[#333]">To enable us to comply with the law and regulations and carry out client due diligence checks</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Estate Agents</td><td className="p-3 align-top text-[#333]">Agents</td><td className="p-3 align-top text-[#333]">To enable us to act on your behalf in relation to a land transaction</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Other Solicitors</td><td className="p-3 align-top text-[#333]">Solicitor Firms</td><td className="p-3 align-top text-[#333]">As part of an exchange of information to enable us to progress the matter and advise you</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Public Bodies</td><td className="p-3 align-top text-[#333]">Public Body such as HMRC, HM Treasury, Local Authority, Land Registry, Land Charges Registry, Probate Registry, Legal Aid Agency, Police, CPS, Courts Service and other government departments</td><td className="p-3 align-top text-[#333]">To enable us to advise you and progress your matter.<br />To prevent fraud and money laundering</td></tr>
                <tr className="border-b border-[#eee]"><td className="p-3 align-top text-[#333]">Your GP or other medical professional</td><td className="p-3 align-top text-[#333]">Doctor</td><td className="p-3 align-top text-[#333]">To obtain appropriate medical reports</td></tr>
                <tr><td className="p-3 align-top text-[#333]">The Legal Aid Agency [LAA]</td><td className="p-3 align-top text-[#333]">LAA</td><td className="p-3 align-top text-[#333]">Under our contractual obligations we will receive &ldquo;Shared Data&rdquo; from the LAA if your matter is legally aided</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Who we share your Data with</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Subject to the SRA Code of Conduct and the requirements regarding client confidentiality, we may share your personal information with:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>Lawyers or other organisations on the other side of a matter or case</li>
            <li>Barristers or experts we instruct</li>
            <li>The courts and other tribunals</li>
            <li>Your Personal Representatives or Attorneys</li>
            <li>Auditors</li>
            <li>Compliance &amp; Management Consultants</li>
            <li>Lenders</li>
            <li>Estate Agents, IFAs, Referrers, etc</li>
            <li>Organisations that we introduce you to.</li>
            <li>HM Revenue and Customs</li>
            <li>The government both Central, Local and Devolved</li>
            <li>Fraud Prevention Agencies including the National Crime Agency</li>
            <li>Government Departments like OFSI</li>
            <li>The SRA and other regulators</li>
            <li>ID checking organisations and</li>
            <li>SOW and SOF checking organisations.</li>
            <li>Independent complaint handling organisations</li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Automated Decision-Making</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We do not currently use automated decision-making systems. All decisions relating to you and your matter are made by a human.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            We may from time to time use artificial intelligence (AI) to support the progress of your matter. However, the decision on how to proceed will be made by a suitably qualified/authorised person within our firm.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Personal Data we use</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">We typically will use the following types of personal data:</p>
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

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            Sending Data outside the European Economic Area (EEA)
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Unless you instruct us in a matter or case that involves an international element, we do not normally send your personal data outside the UK or EEA.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-bold text-primary">International Data Transfers</h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We confirm that we do not normally hold or process your data outside the UK but if we do, we will ensure there are sufficient &ldquo;adequacy&rdquo; arrangements or &ldquo;safeguards&rdquo; in place to protect your rights.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We will rely on the &ldquo;UK-Extension&rdquo; where appropriate. The UK Extension to the EU-US Data Privacy Framework refers to the UK&rsquo;s adequacy regulations for the US.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            The UK Extension is a partial adequacy finding. It allows UK organisations, to make restricted transfers to certain self-certified businesses in the US.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Certain US businesses can choose to participate in the UK Extension by self-certifying to the US Department of Commerce that they will comply with the Data Privacy Framework (DPF) requirements.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If we rely on the UK Extension, we will only make a restricted transfer to a US business that has an active status on the DPF list. We will also be mindful of the type of data we are transferring e.g.HR or Special Category Data and take additional steps as necessary.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            Your refusal to provide Personal Data requested
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If you refuse to provide the information requested, then it may cause delay, and we may be unable to continue to act for you or complete your matter.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Marketing Information</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            We may from time to time send you letters or emails about changes in the law and suggestions about actions that you might consider taking in the light of that information e.g. reviewing your will. We will send you this marketing information either because you have consented to receive it or because we have a &ldquo;legitimate interest&rdquo;.
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            You have the right to object and to ask us to stop sending you marketing information by contacting us at any time. You can of course change your mind and ask us to send the information again.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            How long we keep your personal information
          </h2>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>We are legally obliged to keep certain information for at least 5 years and typically store your file for 6 years before destroying it. In the case of LAA funded matters and cases involving a minor the files may be kept for a longer period of time.</li>
            <li>This period will be set out in our closing letter to you.</li>
            <li>We will store most Wills and other important deeds and documents indefinitely unless we are required to release them.</li>
            <li>We will keep your name and personal contact details on our database until you tell us that you would like them removed e.g. where you have changed solicitor.</li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            How to get a copy of your Personal Information
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">If you wish to access your personal data, then write to:</p>
          <p className="mb-1 text-base leading-relaxed text-[#333]"><strong>Name:</strong> Mariam Khan</p>
          <p className="mb-1 text-base leading-relaxed text-[#333]">Data Protection Supervisor</p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">182 Soho Hill, Birmingham, England, B19 1AG</p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            Telling us if your Personal Information is incorrect (The right to rectification)
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            If you think any information we have about you is incomplete or wrong, then you have the right to ask us to correct it. Please contact us as above.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Other Rights</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">As mentioned above you also have other rights, namely</p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed text-[#333]">
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            You have the right to ask us to delete (erase) or stop us using your data if there is no longer any need for us to keep it (e.g. under a legal obligation). In terms of data portability then subject to any lien we may enjoy for non-payment of fees, we will comply promptly (where permitted) to your request to transfer your physical paper file to another solicitor upon receipt of your signed consent. If your file is in electronic format, we will take reasonable steps to export the file to a &ldquo;portable format&rdquo; where possible so that your new solicitor can upload it to their system. As many different IT systems are used by the legal profession, we cannot guarantee that we can provide data in a compatible format.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Updating this Notice</h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            This Privacy Notice will be updated from time to time as required, and as relevant changes under the DUAA come into force.
          </p>

          {/* APPENDIX 1 — Table 4 */}
          <h2 id="appendix-1" className="mb-4 mt-12 text-2xl font-bold text-primary scroll-mt-20">APPENDIX 1</h2>
          <h3 className="mb-4 text-xl font-bold text-primary">
            Complaints under Section 103 of the Data Use and Access Act 2025
          </h3>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            (Section 164A Data Protection Act 2018)
          </p>

          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <tbody>
                <tr className="border-b border-[#ccc] align-top">
                  <td className="w-1/3 p-3 align-top font-semibold text-[#333]">1. Statutory Complaints Rights</td>
                  <td className="p-3 text-[#333]">
                    Data subjects have a right to make complaints directly to the data controller concerning personal data handling.<br />Complaint channels must be electronically accessible (e.g. via email or web form) so we will provide a link via our website.
                  </td>
                </tr>
                <tr className="border-b border-[#ccc] align-top">
                  <td className="p-3 font-semibold text-[#333]">2. Acknowledgement and Timelines</td>
                  <td className="p-3 text-[#333]">
                    2.1 Complaints must be acknowledged within 30 calendar days of receipt of the complaint so such complaints should be referred to the DPS immediately.<br />
                    2.2 The DPS must undertake investigation without undue delay, including follow-up queries as necessary.<br />
                    2.3 The outcome must be communicated in writing to the complainant once the investigation is concluded.
                  </td>
                </tr>
                <tr className="border-b border-[#ccc] align-top">
                  <td className="p-3 font-semibold text-[#333]">3. Escalation Procedure</td>
                  <td className="p-3 text-[#333]">
                    3.1 Complaints may be escalated to the Information Commissioner&rsquo;s Office (ICO) only after the controller&rsquo;s response has been provided.<br />
                    3.2 The DPS must inform the complainant in writing of their escalation rights and refer them the ICO&rsquo;s website for further information{" "}
                    <a href="https://ico.org.uk/make-a-complaint/" className="text-[#3C78F4] hover:underline">https://ico.org.uk/make-a-complaint/</a>
                  </td>
                </tr>
                <tr className="border-b border-[#ccc] align-top">
                  <td className="p-3 font-semibold text-[#333]">4. Reporting Obligations</td>
                  <td className="p-3 text-[#333]">
                    4.1 If directed by the Secretary of State, the DPS may be required to report anonymised complaint data to the ICO, so it is vitally important that we keep careful central records and analysis of all complaints in an appropriate format.
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 font-semibold text-[#333]">5. Organisational Compliance Measures</td>
                  <td className="p-3 text-[#333]">
                    <ul className="ml-6 list-disc space-y-1">
                      <li>We will review and revise existing data complaint handling policies.</li>
                      <li>Provide staff training on the DUA-compliant complaints response process.</li>
                      <li>Implement a tracking system for dates, actions, and outcomes.</li>
                      <li>Ensure alignment with quality protocols such as LEXCEL and/or the LAA&rsquo;s current Data Security Requirements as applicable.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
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
