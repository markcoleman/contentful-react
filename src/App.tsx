import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { Button } from './components/ui/button'

const navItems = ['About Us', 'Personal', 'Business', 'Financial Wellness']
const utilityLinks = ['Contact Us', 'Rates', 'ATM & Branch Locations', 'Careers']

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-white/80 backdrop-blur">
        <div className="container flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-rose-500 to-slate-900 text-white shadow-lg shadow-primary/20">
              <span className="text-xl font-bold">M¹</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">MEMBERS 1st</p>
              <p className="text-xs text-muted-foreground">FEDERAL CREDIT UNION</p>
            </div>
          </div>

          <div className="hidden flex-1 items-center gap-3 lg:flex">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-foreground shadow-sm outline-none ring-2 ring-transparent transition focus:ring-primary/30 placeholder:text-muted-foreground"
                placeholder="Search products, rates, support"
              />
            </div>
            <div className="ml-auto flex items-center gap-3 text-sm">
              {utilityLinks.map((link) => (
                <button
                  key={link}
                  className="text-foreground transition hover:text-primary"
                  type="button"
                >
                  {link}
                </button>
              ))}
              <button className="font-semibold text-primary" type="button">
                Sign In
              </button>
            </div>
            <Button
              size="sm"
              className="min-w-[150px] bg-primary text-white shadow-lg shadow-primary/20"
            >
              Open an Account
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Button variant="secondary" size="icon" className="bg-secondary text-white">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-border/70 bg-white/90">
          <div className="container hidden items-center gap-6 py-3 text-sm font-semibold text-foreground lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                className="inline-flex items-center gap-1 hover:text-primary"
                type="button"
              >
                <span className="tracking-tight">{item}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_70%_0%,rgba(255,255,255,0.06),transparent_32%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[-8%] top-10 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl"
            aria-hidden
          />
          <div className="container relative z-10 grid min-h-[520px] gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="flex flex-col justify-center gap-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/90 text-white">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                Personal · Invest
              </div>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Invest
                <br />
                Strategically
              </h1>
              <p className="max-w-xl text-lg text-white/85">
                When you start looking at money management in terms of life&apos;s moments and
                milestones, a thoughtful financial strategy makes even more sense. Our advisors help
                you plan what&apos;s next with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button className="gap-2 bg-primary text-white shadow-lg shadow-primary/30">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/15"
                >
                  Schedule a call
                </Button>
              </div>
              <div className="mt-4 grid w-full max-w-xl grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                {[
                  { label: 'Wealth advisors', value: '40+' },
                  { label: 'Client satisfaction', value: '97%' },
                  { label: 'Branches & ATMs', value: '70+' },
                  { label: 'Years of service', value: '70' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                  >
                    <span className="text-white/70">{item.label}</span>
                    <span className="text-base font-semibold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-rose-400/25 blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/30">
                <div className="grid gap-6 p-6 text-sm text-white/90">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Featured Offering
                    </p>
                    <p className="mt-2 text-2xl font-semibold">Managed portfolios built for you</p>
                    <p className="mt-1 text-white/70">
                      Goals-based strategies, transparent pricing, and responsive guidance when
                      markets move.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { label: 'Minimum', value: '$2,500' },
                      { label: 'Advisor access', value: '24/7' },
                      { label: 'Annual fee', value: '0.45%' },
                      { label: 'Support', value: 'Priority' },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/15 bg-white/5 px-3 py-3"
                      >
                        <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                          {metric.label}
                        </p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold">NMLS #472081</p>
                      <p className="text-xs text-white/60">
                        Federally insured by NCUA · Equal Housing Lender
                      </p>
                    </div>
                    <Star className="h-5 w-5 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-white py-12">
          <div className="container flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                <Shield className="h-4 w-4" />
                Personal · Invest
              </div>
              <span className="text-muted-foreground">
                Member-first service with modern digital tools.
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Strategy built around your life',
                  copy: 'Advisors who listen first, then craft plans spanning retirement, college, and legacy goals.',
                },
                {
                  title: 'Digital where it matters',
                  copy: 'Streamlined onboarding, e-signature, secure messaging, and clear dashboards for every account.',
                },
                {
                  title: 'Safe, insured, and transparent',
                  copy: 'NCUA insured, low-fee products, and simple disclosures so you always know what you pay.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-slate-50/70 p-6 shadow-sm shadow-slate-200/80"
                >
                  <p className="text-sm font-semibold text-primary">Invest</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
                  <button
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                    type="button"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
