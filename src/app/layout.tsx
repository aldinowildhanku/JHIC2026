import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { school } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${school.name} — ${school.tagline}`,
    template: `%s | ${school.name}`,
  },
  description: school.description,
  keywords: [
    "sekolah Malang",
    "JHIC 1 Malang",
    "sekolah Dinoyo",
    "sekolah dasar",
    "sekolah menengah",
    "pendaftaran siswa baru",
  ],
  openGraph: {
    title: `${school.name} — ${school.tagline}`,
    description: school.description,
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1113",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}