import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { metadata as siteMetadata } from "./metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-green-400 font-mono">
          {/* Top header navigation */}
          <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-lg font-semibold text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-orange-500">~/</span>esteban
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/projects"
                  className="text-green-400 glow-green hover:text-orange-400 transition-colors"
                >
                  projects
                </Link>
              </li>
            </ul>
          </nav>

          {/* Content container */}
          <main className="container mx-auto px-4 pb-16">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
