import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willem Grobler | IT Infrastructure & Microsoft Cloud",
  description: "IT Infrastructure Manager and Microsoft cloud professional with 20+ years of experience across enterprise, MSP, government, aerospace and manufacturing environments.",
  metadataBase: new URL("https://willemgrobler.tech"),
  openGraph: {
    title: "Willem Grobler | IT Infrastructure & Microsoft Cloud",
    description: "Microsoft 365, Azure, Windows Server, Hyper-V, IT Operations and enterprise infrastructure.",
    url: "https://willemgrobler.tech",
    siteName: "Willem Grobler",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
