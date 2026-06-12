"use client";
import Link from "next/link";

const plans = [
  {
    name: "Trial",
    price: "Free",
    period: "7 days",
    description: "Full access, no card needed",
    features: [
      "All 6 levels unlocked",
      "Unlimited Kadriye chat",
      "PDF exercises for every lesson",
      "Progress tracking",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Monthly",
    price: "£12",
    period: "per month",
    description: "Everything, cancel anytime",
    features: [
      "All 6 levels unlocked",
      "Unlimited Kadriye chat",
      "PDF exercises for every lesson",
      "Progress tracking",
      "New content every month",
      "Certificate of completion",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: true,
  },
  {
    name: "Annual",
    price: "£89",
    period: "per year",
    description: "Save £55 vs monthly",
    features: [
      "Everything in Monthly",
      "Priority support",
      "Early access to new features",
      "Annual certificate",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#c84b2f] text-xs uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-4xl font-bold text-white mb-4">Simple, honest pricing</h1>
          <p className="text-[#666] max-w-md mx-auto">Start free. No credit card. Kadriye will tell you if it's worth it — and she doesn't lie.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border ${
                plan.highlight
                  ? "bg-[#1f1410] border-[#c84b2f]"
                  : "bg-[#1a1917] border-[#2a2926]"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-[#c84b2f] text-white text-xs px-3 py-1 rounded-full mb-4">
                  Most popular
                </span>
              )}
              <p className="text-[#888] text-sm mb-1">{plan.name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-[#555] text-sm">/ {plan.period}</span>
              </div>
              <p className="text-[#555] text-xs mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#aaa]">
                    <span className="text-[#4caf50] mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center py-3 rounded-xl text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-[#c84b2f] text-white hover:bg-[#e05535]"
                    : "border border-[#333] text-[#aaa] hover:border-[#555] hover:text-white"
                }`}
              >
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Common questions</h2>
          <div className="space-y-4">
            {[
              { q: "Do I need a credit card for the trial?", a: "No. 7 days completely free, no card required. We'll ask for payment details when your trial ends." },
              { q: "Can I cancel anytime?", a: "Yes. Cancel from your dashboard at any time. No fees, no drama. Kadriye might be disappointed, but she'll understand." },
              { q: "What happens when my trial ends?", a: "You'll be prompted to choose a plan. If you don't subscribe, you keep access to A1 content forever for free." },
              { q: "Is there a student discount?", a: "Email us with your student ID and we'll sort you out with 30% off." },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#1a1917] border border-[#2a2926] rounded-xl p-5">
                <p className="text-white font-medium mb-2">{faq.q}</p>
                <p className="text-[#666] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}