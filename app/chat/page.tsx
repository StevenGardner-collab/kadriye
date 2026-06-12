"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "kadriye";
  text: string;
};

const opening: Message = {
  role: "kadriye",
  text: "Merhaba. I'm Kadriye. You want to learn Turkish? Good. Type something in Turkish — or try to. I'll tell you exactly what's wrong with it.",
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([opening]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    // Placeholder response — will be replaced with real API call
    setTimeout(() => {
      const response: Message = {
        role: "kadriye",
        text: "Hmm. I see what you were trying to say. We'll work on this. The API connection is coming — Kadriye will be fully awake very soon.",
      };
      setMessages((m) => [...m, response]);
      setLoading(false);
    }, 1000);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <main className="h-screen bg-[#0f0e0c] flex flex-col">

      {/* Chat header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1917]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#c84b2f] flex items-center justify-center text-sm font-bold text-white">K</div>
          <div>
            <p className="text-sm font-medium text-white">Kadriye Hanım</p>
            <p className="text-xs text-[#555]">Turkish language tutor · Trabzon, 1956</p>
          </div>
        </div>
        <Link href="/dashboard" className="text-xs text-[#555] hover:text-white transition-colors">
          ← Dashboard
        </Link>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "kadriye" && (
              <div className="w-7 h-7 rounded-full bg-[#c84b2f] flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mr-2 mt-0.5">K</div>
            )}
            <div
              className={`max-w-sm rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#1a1917] text-white border border-[#2a2926]"
                  : "bg-[#1f1410] text-[#e8d5b0] border border-[#3a2218]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-full bg-[#c84b2f] flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mr-2 mt-0.5">K</div>
            <div className="bg-[#1f1410] border border-[#3a2218] rounded-2xl px-4 py-3">
              <div className="flex gap-1 items-center h-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c84b2f] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#c84b2f] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#c84b2f] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-[#1a1917]">
        <div className="flex gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type in Turkish — or try to..."
            rows={1}
            className="flex-1 bg-[#1a1917] border border-[#2a2926] rounded-xl px-4 py-3 text-white placeholder-[#444] text-sm focus:outline-none focus:border-[#c84b2f] transition-colors resize-none"
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="bg-[#c84b2f] text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#e05535] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-[#444] mt-2 text-center">Press Enter to send · Shift+Enter for new line</p>
      </div>

    </main>
  );
}