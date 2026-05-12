import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-verordening voor het MKB | In één dag geregeld",
  description:
    "Praktische in-company workshop over de EU AI-verordening voor MKB-organisaties. AI-register, risico-classificatie en 30/60/90-dagen plan. Vanaf €1.495.",
  metadataBase: new URL("https://ai-verordening.nl"),
  openGraph: {
    title: "AI-verordening voor het MKB",
    description:
      "In één dag een ingevuld AI-register, risico-classificatie en actieplan. Praktisch, geen juridisch college.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
