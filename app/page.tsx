import Link from 'next/link';

const features = [
  {
    title: 'Instant answers',
    description: 'Answer high-volume support questions instantly with a custom AI assistant.',
  },
  {
    title: 'Brand-aware',
    description: 'Train your chatbot on your documents, FAQs, and product knowledge base.',
  },
  {
    title: '24/7 coverage',
    description: 'Never leave customers waiting with continuous support coverage.',
  },
];

const metrics = [
  { label: 'Responses handled', value: '85%' },
  { label: 'Avg. time saved', value: '8 hrs' },
  { label: 'Customer satisfaction', value: '4.9/5' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-bold text-white">
            F
          </div>
          <span className="text-lg font-semibold">FlowBot AI</span>
        </div>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#customers">Customers</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
            Log in
          </Link>
          <Link href="/signup" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-glow">
            Start free
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm text-brand-100">
            Built for support teams and startups
          </div>
          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Turn your support into an AI-powered growth engine.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-300">
            FlowBot AI lets you deploy a smart support chatbot for your site, FAQs, and product docs in minutes — so your team can focus on the conversations that matter.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/signup" className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white shadow-glow">
              Try for free
            </Link>
            <Link href="/dashboard" className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200">
              View dashboard
            </Link>
          </div>

          <div className="mt-12 flex gap-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500/40 to-cyan-400/10 blur-2xl" />
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-glow">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Support Bot</div>
                <div className="mt-1 text-xl font-semibold">Website Assistant</div>
              </div>
              <div className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                Online
              </div>
            </div>

            <div className="space-y-4">
              <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-800 p-3 text-sm text-slate-200">
                Hi! I can help with pricing, onboarding, and troubleshooting.
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-500 p-3 text-sm text-white">
                How much does your Pro plan cost?
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-800 p-3 text-sm text-slate-200">
                Pro starts at $29/month and includes live chat, analytics, and 3 team seats.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Why teams use FlowBot</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything your support team needs</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200">
                ✓
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Simple pricing</p>
              <h2 className="mt-3 text-3xl font-bold">Clear pricing for growing teams</h2>
            </div>
            <div className="rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm text-brand-100">
              14-day free trial
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
              <div className="text-sm text-slate-400">Starter</div>
              <div className="mt-3 text-4xl font-bold">$29<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>• 1 chatbot</li>
                <li>• 2k monthly messages</li>
                <li>• Email support</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-500/40 bg-brand-500/10 p-6 shadow-glow">
              <div className="text-sm text-brand-100">Growth</div>
              <div className="mt-3 text-4xl font-bold">$79<span className="text-lg text-brand-100">/mo</span></div>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li>• Advanced AI training</li>
                <li>• Custom workflows</li>
                <li>• Priority support</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
              <div className="text-sm text-slate-400">Scale</div>
              <div className="mt-3 text-4xl font-bold">Custom</div>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>• Multi-brand deployment</li>
                <li>• Premium SLA</li>
                <li>• Dedicated onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
