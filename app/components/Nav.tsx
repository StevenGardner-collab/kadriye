"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard") || pathname?.startsWith("/chat");

  if (isDashboard) return null;

  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
      <Link href="/" className="text-lg font-semibold tracking-tight text-[#e8d5b0]">
        kadriye.
      </Link>
      <div className="flex gap-6 text-sm text-[#888] items-center">
        <Link href="/levels" className="hover:text-white transition-colors">Levels</Link>
        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        <Link href="/login" className="hover:text-white transition-colors">Log in</Link>
        <Link href="/signup" className="bg-[#c84b2f] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e05535] transition-colors">
          Start free trial
        </Link>
      </div>
    </nav>
  );
}