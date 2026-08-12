import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Willem Grobler | IT Infrastructure & Microsoft Cloud", template: "%s | Willem Grobler" },
  description: "IT Infrastructure Manager and Microsoft cloud professional with 20+ years of experience across enterprise, MSP, government, aerospace and manufacturing environments.",
  metadataBase: new URL("https://willemgrobler.tech"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Willem Grobler | IT Infrastructure & Microsoft Cloud",
    description: "Microsoft 365, Azure, Windows Server, Hyper-V, IT Operations and enterprise infrastructure.",
    url: "https://willemgrobler.tech", siteName: "Willem Grobler", type: "website"
  },
  twitter: { card: "summary", title: "Willem Grobler | IT Infrastructure & Microsoft Cloud", description: "Senior IT infrastructure and Microsoft cloud professional." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context":"https://schema.org","@type":"Person","name":"Willem Grobler","url":"https://willemgrobler.tech",
    "jobTitle":"IT Infrastructure Manager","sameAs":["https://www.linkedin.com/in/willem-grobler-b17746347","https://github.com/wgrobler72"],
    "knowsAbout":["Microsoft 365","Microsoft Azure","Windows Server","Active Directory","Hyper-V","IT Operations","Disaster Recovery"]
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}</body></html>;
}
