"use client";
import { useState } from "react";
import Link from "next/link";

const roasts = [
  { mistake: "Merhaba, ben iyi.", correction: "Ben iyiyim.", roast: "Sıfat mı fiil mi bilmiyorsun? Benim komşum daha iyi Türkçe konuşuyor — duymazın istersen." },
  { mistake: "Ben gitmek istiyorum.", correction: "Gitmek istiyorum.", roast: "Neden 'ben' diyorsun? Zaten kim olduğunu biliyoruz. Gereksiz. Tıpkı bu hata gibi." },
  { mistake: "Dün ben markete gitti.", correction: "Dün markete gittim.", roast: "Sen mi gittin, başkası mı? Fiil sonu her şeyi söyler. Tekrar et. Şimdi." },
  { mistake: "Su içmek lazım.", correction: "Su içmem lazım.", roast: "Kimin içmesi lazım? Benim mi? Mahallenin mi? Özne belirt, evlat." },
  { mistake: "Ben seni seviyorum çok.", correction: "Seni çok seviyorum.", roast: "Kelime sırası Türkçede önemli. Bu cümle beni utandırdı. Ve ben çok şey gördüm." },
];

export default function Home() {
  const [currentRoast, setCurrentRoast] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const nextRoast = () => {
    setRevealed(false);
    setTimeout(() => setCurrentRoast((c) => (c + 1) % roasts.length), 150);
  };

  const roast = roasts[currentRoast];

  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white font-sans">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-[#c84b2f] text-sm font-medium tracking-widest uppercase mb-4">Turkish — the hard way. The right way.</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
          Learn Turkish.<br />
          <span className="text-[#e8d5b0]">Get roasted doing it.</span>
        </h1>
        <p className="text-[#888] text-lg max-w-xl mx-auto mb-10">
          Meet Barış — your AI Turkish tutor who will correct every mistake, roast every error, and never, ever let you get away with sloppy grammar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/signup" className="bg-[#c84b2f] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#e05535] transition-all hover:scale-105">
            Meet Barış — it's free
          </Link>
          <Link href="/levels" className="border border-[#333] text-[#aaa] px-8 py-4 rounded-full text-base hover:border-[#555] hover:text-white transition-colors">
            See all levels →
          </Link>
        </div>
      </section>

      {/* Barış avatar strip */}
      <div className="flex justify-center pb-12">
        <div className="flex items-center gap-3 bg-[#1a1917] border border-[#2a2926] rounded-2xl px-6 py-4">
          <div className="w-12 h-12 rounded-full bg-[#c84b2f] flex items-center justify-center text-xl font-bold text-white">B</div>
          <div>
            <p className="text-sm font-medium text-white">Barış</p>
            <p className="text-xs text-[#666]">Your TurkBite tutor · Knows every grammar rule · Will use them against you</p>
          </div>
          <div className="ml-4 flex gap-1">
            <span className="w-2 h-2 rounded-full bg-[#c84b2f] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-[#c84b2f] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-[#c84b2f] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Live roast demo */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <p className="text-center text-xs text-[#555] uppercase tracking-widest mb-6">Live demo — Barış corrects you</p>

        <div className="bg-[#1a1917] border border-[#2a2926] rounded-2xl p-6 mb-4">
          <p className="text-xs text-[#555] mb-2 uppercase tracking-wider">You wrote</p>
          <p className="text-xl text-[#aaa] italic">"{roast.mistake}"</p>
        </div>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full bg-[#c84b2f] text-white py-4 rounded-2xl text-base font-medium hover:bg-[#e05535] transition-all hover:scale-[1.02]"
          >
            Show Barış's reaction →
          </button>
        ) : (
          <div className="space-y-4">
            <div className="bg-[#1a1917] border border-[#2a2926] rounded-2xl p-6">
              <p className="text-xs text-[#4caf50] mb-2 uppercase tracking-wider">Correct Turkish</p>
              <p className="text-xl text-white font-medium">"{roast.correction}"</p>
            </div>
            <div className="bg-[#1f1410] border border-[#3a2218] rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c84b2f] flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-0.5">B</div>
                <div>
                  <p className="text-xs text-[#c84b2f] mb-2 uppercase tracking-wider">Barış says</p>
                  <p className="text-[#e8d5b0] leading-relaxed">"{roast.roast}"</p>
                </div>
              </div>
            </div>
            <button
              onClick={nextRoast}
              className="w-full border border-[#333] text-[#888] py-3 rounded-2xl text-sm hover:border-[#555] hover:text-white transition-colors"
            >
              Try another →
            </button>
          </div>
        )}
      </section>

      {/* Levels */}
      <section id="levels" className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-center text-xs text-[#555] uppercase tracking-widest mb-3">CEFR aligned curriculum</p>
        <h2 className="text-3xl font-bold text-center mb-12">Pick your level. Barış will meet you there.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { level: "A1", name: "Survivor", desc: "Greetings, numbers, survival phrases", price: "Free", color: "bg-[#1a2a1a] border-[#2a3e2a]" },
            { level: "A2", name: "Visitor", desc: "Daily life, transport, shopping", price: "£9/mo", color: "bg-[#1a1a2a] border-[#2a2a3e]" },
            { level: "B1", name: "Resident", desc: "Past tense, opinions, real conversations", price: "£12/mo", color: "bg-[#2a1a1a] border-[#3e2a2a]" },
            { level: "B2", name: "Local", desc: "Complex grammar, nuance, idioms", price: "£15/mo", color: "bg-[#1a1f2a] border-[#2a2f3e]" },
            { level: "C1", name: "Fluent", desc: "Academic, formal, media Turkish", price: "£18/mo", color: "bg-[#1f1a2a] border-[#2f2a3e]" },
            { level: "C2", name: "Barış-Approved", desc: "You've earned his respect. Almost.", price: "£20/mo", color: "bg-[#2a1a10] border-[#3e2a18]" },
          ].map((l) => (
            <Link key={l.level} href="/levels" className={`${l.color} border rounded-2xl p-5 hover:scale-[1.02] transition-transform cursor-pointer block`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#888] tracking-widest">{l.level}</span>
                <span className="text-xs text-[#c84b2f] font-medium">{l.price}</span>
              </div>
              <p className="font-semibold text-white mb-1">{l.name}</p>
              <p className="text-xs text-[#666] leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-t border-[#1a1917] py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { stat: "6 levels", label: "A1 to C2, full CEFR curriculum" },
            { stat: "Barış", label: "Your AI tutor who tells it like it is" },
            { stat: "PDF exercises", label: "Offline practice for every lesson" },
          ].map((s) => (
            <div key={s.stat}>
              <p className="text-3xl font-bold text-[#e8d5b0] mb-2">{s.stat}</p>
              <p className="text-sm text-[#555]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA footer */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">Barış is waiting.</h2>
        <p className="text-[#666] mb-8">He's not patient. But he is effective.</p>
        <Link href="/signup" className="bg-[#c84b2f] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-[#e05535] transition-all hover:scale-105 inline-block">
          Start learning — it's free
        </Link>
      </section>

      <footer className="border-t border-[#1a1917] py-8 text-center text-xs text-[#444]">
        © 2025 TurkBite · Turkish language learning · Made with tough love
      </footer>

    </main>
  );
}