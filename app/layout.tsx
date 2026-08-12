import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://willemgrobler.tech"),
  title: {
    default: "Willem Grobler | Senior Infrastructure Engineer",
    template: "%s | Willem Grobler"
  },
  description: "Senior Infrastructure Engineer and Microsoft cloud professional with 20+ years across Microsoft 365, Azure, Windows Server, Hyper-V, MSP, aerospace, government and enterprise IT operations.",
  keywords: [
    "Senior Infrastructure Engineer",
    "Microsoft 365 Administrator",
    "Azure Administrator",
    "Windows Server",
    "Hyper-V",
    "IT Operations",
    "Remote Infrastructure Engineer",
    "MSP Engineer",
    "Willem Grobler"
  ],
  authors: [{ name: "Willem Grobler", url: "https://willemgrobler.tech" }],
  creator: "Willem Grobler",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Willem Grobler | Senior Infrastructure Engineer",
    description: "Microsoft 365, Azure, Windows Server, Hyper-V, disaster recovery and IT operations. Based in South Africa and open to remote international opportunities.",
    url: "https://willemgrobler.tech",
    siteName: "Willem Grobler",
    locale: "en_ZA",
    type: "profile",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Willem Grobler - Senior Infrastructure Engineer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Willem Grobler | Senior Infrastructure Engineer",
    description: "Microsoft 365 · Azure · Windows Server · Hyper-V · IT Operations",
    images: ["/opengraph-image.png"]
  },
  robots: { index: true, follow: true }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Willem Grobler",
  url: "https://willemgrobler.tech",
  jobTitle: "Senior Infrastructure Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Johannesburg", addressCountry: "ZA" },
  sameAs: [
    "https://www.linkedin.com/in/willem-grobler-b17746347",
    "https://github.com/wgrobler72"
  ],
  knowsAbout: [
    "Microsoft 365", "Microsoft Azure", "Windows Server", "Active Directory",
    "Hyper-V", "VMware", "Microsoft Entra ID", "Intune", "IT Operations",
    "Disaster Recovery", "Veeam"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        {children}
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
