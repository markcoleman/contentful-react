import { Shield, ShieldCheck, Star } from 'lucide-react'
import { HeroSection } from '../components/sections/HeroSection'
import { FeatureTiles } from '../components/sections/FeatureTiles'

export function HomePage() {
  return (
    <main>
      <HeroSection
        eyebrow="Personal · Invest"
        eyebrowIcon={<ShieldCheck className="h-3.5 w-3.5" />}
        title={
          <>
            Invest
            <br />
            Strategically
          </>
        }
        description="When you start looking at money management in terms of life's moments and milestones, a thoughtful financial strategy makes even more sense. Our advisors help you plan what's next with confidence."
        actions={[
          {
            label: 'Get Started',
            href: '/get-started',
            variant: 'primary',
          },
          {
            label: 'Schedule a call',
            href: '/get-started',
            variant: 'secondary',
          },
        ]}
        stats={[
          { label: 'Wealth advisors', value: '40+' },
          { label: 'Client satisfaction', value: '97%' },
          { label: 'Branches & ATMs', value: '70+' },
          { label: 'Years of service', value: '70' },
        ]}
        tone="dark"
        rightSlot={
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
        }
      />

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

          <FeatureTiles
            features={[
              {
                badge: 'Invest',
                title: 'Strategy built around your life',
                copy: 'Advisors who listen first, then craft plans spanning retirement, college, and legacy goals.',
              },
              {
                badge: 'Digital',
                title: 'Digital where it matters',
                copy: 'Streamlined onboarding, e-signature, secure messaging, and clear dashboards for every account.',
              },
              {
                badge: 'Security',
                title: 'Safe, insured, and transparent',
                copy: 'NCUA insured, low-fee products, and simple disclosures so you always know what you pay.',
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
