"use client";
import Link from "next/link";

const levels = [
  { code: "A1", name: "Survivor", desc: "Greetings, numbers, survival phrases", lessons: 12, unlocked: true },
  { code: "A2", name: "Visitor", desc: "Daily life, transport, shopping", lessons: 18, unlocked: true },
  { code: "B1", name: "Resident", desc: "Past tense, opinions, real conversations", lessons: 24, unlocked: true },
  { code: "B2", name: "Local", desc: "Complex grammar, nuance, idioms", lessons: 24, unlocked: false },
  { code: "C1", name: "Fluent", desc: "Academic, formal, media Turkish", lessons: 20, unlocked: false },
  { code: "C2", name: "Kadriye-Approved", desc: "You've earned her respect. Almost.", lessons: 16, unlocked: false },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] px-6 py-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link href="/" className="text-[#e8d5b0] font-semibold text-lg">kadriye.</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/chat" className="bg-[#c84b2f] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e05535] transition-colors">
              Talk to Kadriye →
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#1a1917] border border-[#2a2926] flex items-center justify-center text-xs text-[#888]">
              S
            </div>
          </div>
        </div>

        {/* Trial banner */}
        <div className="bg-[#1f1410] border border-[#3a2218] rounded-2xl p-4 mb-8 flex items-center justify-between">
          <div>
            <p className="text-[#e8d5b0] text-sm font-medium">Free trial — 5 days remaining</p>
            <p className="text-[#666] text-xs mt-0.5">After your trial, choose a plan to keep learning</p>
          </div>
          <Link href="/pricing" className="bg-[#c84b2f] text-white px-4 py-2 rounded-full text-xs hover:bg-[#e05535] transition-colors whitespace-nowrap">
            See plans
          </Link>
        </div>

        {/* Kadriye prompt */}
        <div className="bg-[#1a1917] border border-[#2a2926] rounded-2xl p-6 mb-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#c84b2f] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">K</div>
          <div>
            <p className="text-white font-medium mb-1">Kadriye says:</p>
            <p className="text-[#aaa] text-sm leading-relaxed">"Hoş geldin. Pick a level and start. I'll be watching. Don't embarrass yourself."</p>
            <Link href="/chat" className="inline-block mt-3 text-[#c84b2f] text-sm hover:underline">
              Start a conversation with Kadriye →
            </Link>
          </div>
        </div>

        {/* Levels grid */}
        <h2 className="text-lg font-semibold text-white mb-4">Your levels</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {levels.map((level) => (
            <div
              key={level.code}
              className={`border rounded-2xl p-5 transition-all ${
                level.unlocked
                  ? "bg-[#1a1917] border-[#2a2926] hover:border-[#444] cursor-pointer"
                  : "bg-[#141413] border-[#1e1e1c] opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#888] bg-[#0f0e0c] px-2 py-0.5 rounded">{level.code}</span>
                  {!level.unlocked && <span className="text-xs text-[#555]">🔒 Trial ended</span>}
                </div>
                <span className="text-xs text-[#555]">{level.lessons} lessons</span>
              </div>
              <p className="font-semibold text-white mb-1">{level.name}</p>
              <p className="text-xs text-[#666] leading-relaxed mb-4">{level.desc}</p>
              {level.unlocked ? (
                <Link
                  href={`/levels/${level.code.toLowerCase()}`}
                  className="text-xs text-[#c84b2f] hover:underline"
                >
                  Start lessons →
                </Link>
              ) : (
                <Link href="/pricing" className="text-xs text-[#555] hover:text-[#888] transition-colors">
                  Upgrade to unlock →
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}