import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Verordening Workshop MKB | 1 Dag In-Company | €1.495",
  description:
    "In-company workshop EU AI Act voor MKB. 1 dag, max 12 deelnemers, certificaat AI-geletterdheid (art. 4). Klaar voor 2 augustus 2026. Vanaf €1.495.",
  metadataBase: new URL("https://aiverordening.eu"),
  alternates: {
    canonical: "https://aiverordening.eu/",
    languages: {
      "nl-NL": "https://aiverordening.eu/",
      "x-default": "https://aiverordening.eu/",
    },
  },
  openGraph: {
    title: "AI Verordening Workshop voor het MKB",
    description:
      "Eén dag. Een ingevuld AI-register, risico-classificatie en certificaat AI-geletterdheid. Vanaf €1.495.",
    url: "https://aiverordening.eu",
    siteName: "AI Verordening",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Verordening Workshop MKB | 1 Dag In-Company",
    description:
      "Workshop EU AI Act voor MKB. 1 dag, max 12 deelnemers. Compliant vóór 2 augustus 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
