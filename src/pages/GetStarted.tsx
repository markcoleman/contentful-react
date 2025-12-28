import { ArrowRight, CheckCircle2, ClipboardList, Compass } from 'lucide-react'
import { HeroSection } from '../components/sections/HeroSection'
import { FeatureTiles } from '../components/sections/FeatureTiles'
import { buttonVariants } from '../components/ui/button'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

const steps = [
  {
    title: 'Tell us your goals',
    copy: 'Share what you want to achieve: home, retirement, education, or growing savings.',
    icon: <Compass className="h-5 w-5 text-primary" />,
  },
  {
    title: 'Choose the right mix',
    copy: 'We tailor portfolios and accounts to your timeline and risk comfort.',
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
  },
  {
    title: 'Launch with a guide',
    copy: 'Onboarding support, funding help, and quick answers from real advisors.',
    icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
  },
]

export function GetStartedPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Next step"
        title={
          <>
            Get Started
            <br />
            In Minutes
          </>
        }
        description="Pick the path that fits you: open an account online, book time with an advisor, or compare plan options. Transparent steps, clear requirements, and real support when you need it."
        actions={[
          { label: 'Open an account', href: '/get-started/open', variant: 'primary' },
          { label: 'Talk to an advisor', href: '/get-started/contact', variant: 'secondary' },
        ]}
        stats={[
          { label: 'Online setup', value: '10 min' },
          { label: 'Human support', value: '24/7' },
          { label: 'Minimums from', value: '$25' },
          { label: 'Coverage', value: 'NCUA insured' },
        ]}
        tone="dark"
      />

      <section className="bg-white py-12">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary">How it works</p>
            <h2 className="text-3xl font-semibold text-foreground">Three simple steps</h2>
            <p className="text-muted-foreground">
              Start online or in-person—either way we keep your checklist short, your fees
              transparent, and your progress clear.
            </p>
            <div className="space-y-3">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-3 rounded-2xl border border-border/70 bg-slate-50/70 p-4 shadow-sm"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/get-started/open"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'bg-primary text-white shadow-lg shadow-primary/20',
                )}
              >
                Start online
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/get-started/book"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'border-border text-foreground hover:bg-slate-50',
                )}
              >
                Book a meeting
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-slate-50/60 p-6 shadow-md">
            <p className="text-sm font-semibold text-primary">Bring this with you</p>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Valid ID and your Social Security number</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Funding source (another account or debit card)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Estimated monthly contribution amount</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Any beneficiaries you want to add now (optional)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-white py-12">
        <div className="container flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
              Get started
            </div>
            <span className="text-muted-foreground">Pick the best path for your next move.</span>
          </div>

          <FeatureTiles
            features={[
              {
                badge: 'Online',
                title: 'Open an account now',
                copy: 'Move from application to approval in minutes with guided forms and instant verification.',
              },
              {
                badge: 'Human help',
                title: 'Meet with an advisor',
                copy: 'Schedule a quick consult to align products to your timeline and comfort with risk.',
              },
              {
                badge: 'Compare',
                title: 'Review options side-by-side',
                copy: 'Line up account types, minimums, and fees so you can choose without guesswork.',
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
