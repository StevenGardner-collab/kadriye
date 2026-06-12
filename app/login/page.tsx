"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#0f0e0c] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-[#c84b2f] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">K</div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-[#666] text-sm">Kadriye has been waiting. Impatiently.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Your password"
              className="w-full bg-[#1a1917] border border-[#2a2926] rounded-xl px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c84b2f] transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c84b2f] text-white py-4 rounded-xl font-medium hover:bg-[#e05535] transition-colors mt-2"
          >
            Log in →
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-[#555] text-sm">
            <Link href="/forgot-password" className="text-[#666] hover:text-white transition-colors">Forgot your password?</Link>
          </p>
          <p className="text-[#555] text-sm">
            No account yet?{" "}
            <Link href="/signup" className="text-[#c84b2f] hover:underline">Start free trial</Link>
          </p>
        </div>
      </div>
    </main>
  );
}