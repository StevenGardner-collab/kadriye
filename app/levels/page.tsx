"use client";
import Link from "next/link";

const levels = [
  {
    code: "A1",
    name: "Survivor",
    desc: "Greetings, numbers, survival phrases. The basics Barış expects you to already know.",
    hours: "60–80 hours",
    lessons: 12,
    topics: ["Greetings & introductions", "Numbers 1–100", "Days & months", "Basic questions", "Family vocabulary", "Colours & shapes"],
    free: true,
  },
  {
    code: "A2",
    name: "Visitor",
    desc: "Daily life, transport, shopping. You can get around — but Barış isn't impressed yet.",
    hours: "180–200 hours",
    lessons: 18,
    topics: ["Shopping & markets", "Directions & transport", "Food & restaurants", "Present tense", "Simple past", "Telling the time"],
    free: false,
  },
  {
    code: "B1",
    name: "Resident",
    desc: "Real conversations. Opinions. Past tense. This is where Turkish gets interesting.",
    hours: "350–400 hours",
    lessons: 24,
    topics: ["Past & future tense", "Expressing opinions", "Turkish conditional", "Talking about work", "Health & body", "Turkish culture"],
    free: false,
  },
  {
    code: "B2",
    name: "Local",
    desc: "Complex grammar, nuance, idioms. You start to sound like you belong here.",
    hours: "500–600 hours",
    lessons: 24,
    topics: ["Advanced grammar", "Turkish idioms", "News & media", "Formal writing", "Debate & argument", "Regional dialects"],
    free: false,
  },
  {
    code: "C1",
    name: "Fluent",
    desc: "Academic and formal Turkish. Barış is starting to nod with approval.",
    hours: "700–800 hours",
    lessons: 20,
    topics: ["Academic writing", "Legal & formal language", "Literature", "Complex clauses", "Professional Turkish", "Turkish history"],
    free: false,
  },
  {
    code: "C2",
    name: "Barış-Approved",
    desc: "You've done it. Barış won't admit he's proud. But he is.",
    hours: "1000+ hours",
    lessons: 16,
    topics: ["Native-level fluency", "Cultural mastery", "Turkish philosophy", "Poetry & literature", "Debate at native level", "Final assessment"],
    free: false,
  },
];

const colors = [
  "bg-[#1a2a1a] border-[#2a3e2a]",
  "bg-[#1a1a2a] border-[#2a2a3e]",
  "bg-[#2a1a1a] border-[#3e2a2a]",
  "bg-[#1a1f2a] border-[#2a2f3e]",
  "bg-[#1f1a2a] border-[#2f2a3e]",
  "bg-[#2a1a10] border-[#3e2a18]",
];

export default function LevelsPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#c84b2f] text-xs uppercase tracking-widest mb-3">Curriculum</p>
          <h1 className="text-4xl font-bold text-white mb-4">A1 to C2 — the full journey</h1>
          <p className="text-[#666] max-w-lg mx-auto">
            Every level is aligned to CEFR hours. No shortcuts. Barış won't allow it.
          </p>
        </div>

        <div className="space-y-4">
          {levels.map((level, i) => (
            <div key={level.code} className={`${colors[i]} border rounded-2xl p-6`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-[#888] bg-[#0f0e0c] px-2 py-0.5 rounded">{level.code}</span>
                    <span className="text-xs text-[#555]">{level.hours}</span>
                    {level.free && (
                      <span className="text-xs bg-[#1a2a1a] text-[#4caf50] border border-[#2a3e2a] px-2 py-0.5 rounded-full">Free forever</span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">{level.name}</h2>
                  <p className="text-[#666] text-sm leading-relaxed mb-4">{level.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {level.topics.map((topic) => (
                      <span key={topic} className="text-xs text-[#555] bg-[#0f0e0c] border border-[#1a1917] px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                  <p className="text-xs text-[#555]">{level.lessons} lessons</p>
                  {level.free ? (
                    <Link href="/signup" className="bg-[#c84b2f] text-white px-5 py-2 rounded-full text-sm hover:bg-[#e05535] transition-colors">
                      Start free →
                    </Link>
                  ) : (
                    <Link href="/pricing" className="border border-[#333] text-[#888] px-5 py-2 rounded-full text-sm hover:border-[#555] hover:text-white transition-colors">
                      Unlock with trial →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#444] text-sm mb-4">All levels include offline PDF exercises</p>
          <Link href="/signup" className="bg-[#c84b2f] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#e05535] transition-colors">
            Start your free trial →
          </Link>
        </div>

      </div>
    </main>
  );
}