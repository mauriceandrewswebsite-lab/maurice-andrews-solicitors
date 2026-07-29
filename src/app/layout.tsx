import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { offices } from "@/data/offices";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maurice-andrews-solicitors-bice.vercel.app"),
  title: "Maurice Andrews Solicitors — Criminal Defence Lawyers Birmingham",
  description: "Expert criminal defence solicitors in Birmingham. 24/7 emergency helpline. Legal Aid available.",
  openGraph: {
    title: "Maurice Andrews Solicitors",
    description: "Expert criminal defence solicitors in Birmingham. 24/7 emergency helpline.",
    type: "website",
    siteName: "Maurice Andrews Solicitors",
    locale: "en_GB",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "Maurice Andrews Solicitors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurice Andrews Solicitors",
    description: "Expert criminal defence solicitors in Birmingham. 24/7 emergency helpline.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://maurice-andrews-solicitors-bice.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const birmingham = offices.find((o) => o.isMain)!;
  const wolverhampton = offices.find((o) => !o.isMain)!;

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LegalService",
                "name": "Maurice Andrews Solicitors",
                "description": "Expert criminal defence solicitors in Birmingham and Wolverhampton. 24/7 emergency helpline. Legal Aid available.",
                "url": "https://maurice-andrews-solicitors-bice.vercel.app",
                "telephone": birmingham.phoneE164,
                "email": "info@mauriceandrewssolicitors.co.uk",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": birmingham.street,
                  "addressLocality": birmingham.city,
                  "postalCode": birmingham.postcode,
                  "addressCountry": birmingham.country
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "17:30"
                },
                "department": [
                  {
                    "@type": "LegalService",
                    "name": "Maurice Andrews Solicitors — Birmingham (Main Office)",
                    "telephone": birmingham.phoneE164,
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": birmingham.street,
                      "addressLocality": birmingham.city,
                      "postalCode": birmingham.postcode,
                      "addressCountry": birmingham.country
                    }
                  },
                  {
                    "@type": "LegalService",
                    "name": "Maurice Andrews Solicitors — Wolverhampton (Branch Office)",
                    "telephone": wolverhampton.phoneE164,
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": wolverhampton.street,
                      "addressLocality": wolverhampton.city,
                      "postalCode": wolverhampton.postcode,
                      "addressCountry": wolverhampton.country
                    }
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/mauriceandrewssolicitors",
                  "https://www.instagram.com/mauriceandrewssolicitors/",
                  "https://twitter.com/MASolicitorsUK",
                  "https://www.linkedin.com/company/maurice-andrews-solicitors/"
                ]
              })
            }}
          />
        </head>
        <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
