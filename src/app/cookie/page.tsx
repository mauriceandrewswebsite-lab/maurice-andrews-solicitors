import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = { title: "Cookie Policy | Maurice Andrews Solicitors" };

export default function Page() {
  return (
    <>
      <Header /><CookieBanner />
      <main className="bg-white px-4 py-14">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-8 border-b-[3px] border-primary pb-4 text-3xl font-bold text-primary">
            Cookie Policy
          </h1>

          <h2 className="mb-4 text-xl font-bold text-primary">What is a cookie</h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Cookies are text files containing small amounts of information which are downloaded to your
            personal computer, mobile or other device when you visit a website. Cookies are then sent back
            to the originating website on each subsequent visit, or to another website that recognises that
            cookie. Cookies are useful because they allow a website to recognise a user&apos;s device.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            How long are cookies stored for?
          </h2>
          <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-relaxed text-[#333]">
            <li>
              <strong>Persistent cookies</strong> - these cookies remain on a user&apos;s device for the
              period of time specified in the cookie. They are activated each time that the user visits the
              website that created that particular cookie.
            </li>
            <li>
              <strong>Session cookies</strong> - these cookies allow website operators to link the actions
              of a user during a browser session. A browser session starts when a user opens the browser
              window and finishes when they close the browser window. Session cookies are created
              temporarily. Once you close the browser, all session cookies are deleted.
            </li>
          </ul>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            Cookies do lots of different jobs, like letting you navigate between pages efficiently,
            remembering your preferences, and generally improve the user experience.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">
            Types of cookies used on this website?
          </h2>
          <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-relaxed text-[#333]">
            <li>
              <strong>Strictly necessary cookies</strong> - These cookies enable services you have
              specifically asked for. These cookies are essential in order to enable you to move around the
              Website and use its features, such as accessing secure areas of the Website.
            </li>
            <li>
              <strong>Performance cookies</strong> - These cookies collect anonymous information on the
              pages visited. By using the Website, you agree that we can place these types of cookies on
              your device. These cookies collect information about how visitors use the Website, for
              instance which pages visitors go to most often, and if they get error messages from web
              pages. These cookies don&apos;t collect information that identifies a visitor. All
              information these cookies collect is aggregated and therefore anonymous. It is only used to
              improve how the Website works.
            </li>
            <li>
              <strong>Functionality cookies</strong> - These cookies allow the Website to remember choices
              you make (such as your user name, language or the region you are in) and provide enhanced,
              more personal features. These cookies can also be used to remember changes you have made to
              text size, fonts and other parts of web pages that you can customise. They may also be used
              to provide services you have asked for such as watching a video or commenting on a blog. The
              information these cookies collect may be anonymised and they cannot track your browsing
              activity on other websites.
            </li>
            <li>
              <strong>Google Analytics</strong> - We use Google Analytics to analyse the use of this
              website. Google Analytics generates statistical and other information about website use. The
              information generated relating to our website is used to create reports about the use of the
              website. Google will store this information. Google&apos;s privacy policy is available at:{" "}
              <a href="https://www.google.com/privacypolicy.html" className="text-[#3C78F4] hover:underline">
                https://www.google.com/privacypolicy.html
              </a>
            </li>
          </ul>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Cookies we use</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">We use the following cookies:</p>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-[#ccc]">
                  <th className="p-3 text-left font-bold text-primary">Category</th>
                  <th className="p-3 text-left font-bold text-primary">Cookie Name</th>
                  <th className="p-3 text-left font-bold text-primary">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">Necessary Cookies</td>
                  <td className="p-3 align-top font-mono text-[#333]">PHPSESSID</td>
                  <td className="p-3 align-top text-[#333]">
                    Necessary cookies enable core functionality. The website cannot function properly
                    without these cookies, and can only be disabled by changing your browser preferences.
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">Necessary Cookies</td>
                  <td className="p-3 align-top font-mono text-[#333]">__utma, __utmb</td>
                  <td className="p-3 align-top text-[#333]">
                    These cookies are used to store information, such as what time your current visit
                    occurred, whether you have been to the site before, and what site referred you to the
                    web page.
                  </td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-3 align-top text-[#333]">Necessary Cookies</td>
                  <td className="p-3 align-top font-mono text-[#333]">__utmc</td>
                  <td className="p-3 align-top text-[#333]">
                    These cookies contain no personally identifiable information but they will use your
                    computer&apos;s IP address to know from where in the world you are accessing the
                    Internet.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 align-top text-[#333]">Necessary Cookies</td>
                  <td className="p-3 align-top font-mono text-[#333]">__utmv, __utmz</td>
                  <td className="p-3 align-top text-[#333]">
                    Google stores the information collected by these cookies on servers in the United
                    States. Google may transfer this information to third-parties where required to do so by
                    law, or where such third-parties process the information on Google&apos;s behalf.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Opt-Out</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            In order to provide website visitors with more choice on how data is collected by Google
            Analytics, Google has developed the Google Analytics Opt-out Browser Add-on. The add-on
            communicates with the Google Analytics JavaScript (ga.js) to stop data being sent to Google
            Analytics. The Google Analytics Opt-out Browser Add-on does not affect usage of the website in
            any other way. A link to further information on the Google Analytics Opt-out Browser Add-on is
            provided below for your convenience.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            Download the Addon{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=None" className="text-[#3C78F4] hover:underline">
              Click here
            </a>
          </p>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            For more information on the usage of cookies by Google Analytics please see the Google website.
            A link to the privacy advice for this product is provided below for your convenience.{" "}
            <a href="https://www.google.com/analytics/learn/privacy.html" className="text-[#3C78F4] hover:underline">
              Click here
            </a>
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Third Party Cookies</h2>
          <p className="mb-6 text-base leading-relaxed text-[#333]">
            These cookies allow third parties to track the success of their application or customise the
            application for you. Because of how cookies work we cannot access these cookies, nor can the
            third parties access the data in cookies used on our site. For example, if you choose to
            &apos;share&apos; content through Twitter or other social networks you might be sent cookies
            from these websites. We don&apos;t control the setting of these cookies, so please check those
            websites for more information about their cookies and how to manage them.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Disabling Cookies</h2>
          <p className="mb-4 text-base leading-relaxed text-[#333]">
            If you would like to restrict the use of cookies you can control this in your Internet browser.
            Links to advice on how to do this for the most popular Internet browsers are provided below for
            convenience and will be available for the Internet browser of your choice either online or via
            the software help (normally available via key F1).
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 text-base leading-relaxed">
            <li>
              <a href="https://windows.microsoft.com/en-GB/windows7/Block-enable-or-allow-cookies" className="text-[#3C78F4] hover:underline">
                Internet Explorer
              </a>
            </li>
            <li>
              <a href="https://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647&p=cpn_cookies" className="text-[#3C78F4] hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/en-US/kb/Blocking%20cookies" className="text-[#3C78F4] hover:underline">
                Mozilla Firefox
              </a>
            </li>
          </ul>
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
