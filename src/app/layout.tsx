import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
                "description": "Expert criminal defence solicitors in Birmingham. 24/7 emergency helpline. Legal Aid available.",
                "url": "https://maurice-andrews-solicitors-bice.vercel.app",
                "telephone": "+441215544900",
                "email": "info@mauriceandrewssolicitors.co.uk",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "180-182 Soho Hill",
                  "addressLocality": "Birmingham",
                  "postalCode": "B19 1AG",
                  "addressCountry": "GB"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "17:30"
                },
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
