"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will connect to auth later
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#0f0e0c] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-[#c84b2f] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">K</div>
          <h1 className="text-2xl font-bold text-white mb-2">Start your free trial</h1>
          <p className="text-[#666] text-sm">7 days free. No credit card required.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs text-[#666] uppercase tracking-wider mb-2">Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What should Kadriye call you?"
              className="w-full bg-[#1a1917] border border-[#2a2926] rounded-xl px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c84b2f] transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-[#666] uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#1a1917] border border-[#2a2926] rounded-xl px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c84b2f] transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-[#666] uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full bg-[#1a1917] border border-[#2a2926] rounded-xl px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c84b2f] transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c84b2f] text-white py-4 rounded-xl font-medium hover:bg-[#e05535] transition-colors mt-2"
          >
            Start 7-day free trial →
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#555] text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c84b2f] hover:underline">Log in</Link>
          </p>
        </div>

        <div className="mt-8 border-t border-[#1a1917] pt-6">
          <p className="text-center text-xs text-[#444]">
            After your trial, plans start at £9/month. Cancel anytime.
          </p>
        </div>
      </div>
    </main>
  );
}