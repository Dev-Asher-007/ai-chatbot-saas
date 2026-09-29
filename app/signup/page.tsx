import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-glow">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 font-bold text-white">
            F
          </div>
          <h1 className="mt-5 text-3xl font-bold">Start free</h1>
          <p className="mt-2 text-sm text-slate-400">Build your first AI support bot in minutes</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Name</label>
            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Work email</label>
            <input type="email" placeholder="you@company.com" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" placeholder="Create a password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" />
          </div>

          <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-3 font-medium text-white">
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          Already have an account? <Link href="/login" className="text-brand-200">Log in</Link>
        </div>
      </div>
    </main>
  );
}
