import Script from "next/script";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";
import "./code.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Josep Viciana",
    default: "Josep Viciana",
  },
  description:
    "Some of my thoughts, projects, photos. I usually write about technology.",
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`flex flex-col min-h-screen bg-slate-900 text-slate-100 ${inter.className} has-[dialog[open]]:overflow-hidden`}
      >
        <Script
          defer
          strategy="beforeInteractive"
          src="https://cloud.umami.is/script.js"
          data-website-id="94d6fa02-be4a-440f-80fc-47b129fbfbaa"
        />
        <Header />
        <main className="mx-auto w-full max-w-5xl grow px-4 md:px-8">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
