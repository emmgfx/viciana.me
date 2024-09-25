import "./globals.css";
import "./code.css";

import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josep Viciana",
  description: "WIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`flex flex-col min-h-screen bg-slate-900 text-slate-100 ${inter.className}`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl grow px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
