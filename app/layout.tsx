import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kadriye — Learn Turkish the hard way",
  description: "Turkish language learning with Kadriye, the AI grandmother who tells it like it is.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0f0e0c] text-white`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}