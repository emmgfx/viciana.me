import "./globals.css";
import "./code.css";

import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Josep Viciana",
    default: "Josep Viciana",
  },
  description:
    "Some of my thoughts, projects, photos. I usually write about technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`flex flex-col min-h-screen bg-slate-900 text-slate-100 ${inter.className} has-[dialog[open]]:overflow-hidden`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl grow px-4 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
