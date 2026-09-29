import Link from 'next/link';

const stats = [
  { label: 'Active chatbots', value: '12' },
  { label: 'Resolved via AI', value: '84%' },
  { label: 'Avg. response time', value: '8 sec' },
];

const conversations = [
  { user: 'Customer', text: 'Do you offer onboarding for a team of 10?', type: 'user' },
  { user: 'Bot', text: 'Yes — we have a guided onboarding workflow and enterprise support.', type: 'bot' },
  { user: 'Customer', text: 'Can I try before paying?', type: 'user' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Dashboard</p>
            <h1 className="text-3xl font-bold">FlowBot AI</h1>
          </div>

          <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
            Public site
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="mt-3 text-3xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Website assistant</h2>
              <div className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                Active
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-slate-950 p-4">
              {conversations.map((item, index) => (
                <div key={`${item.user}-${index}`} className={item.type === 'user' ? 'ml-auto max-w-[80%]' : 'max-w-[80%]'}>
                  <div className={`rounded-2xl p-3 text-sm ${item.type === 'user' ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-200'}`}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold">Knowledge sources</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Help center</li>
                <li>• Pricing docs</li>
                <li>• Product tour</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold">Quick actions</h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-medium text-white">
                  Deploy to website
                </button>
                <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200">
                  Train knowledge base
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
