import type { Metadata } from "next";
import { Aboreto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Elis Family Law",
  description:
    "Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle, and Throughout North Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aboreto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden bg-[#FFF7F0]">
          {children}
        </main>
      </body>
    </html>
  );
}
