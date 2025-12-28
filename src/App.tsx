import { ArrowRight, LayoutDashboard, PlugZap, Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { cn } from './lib/utils'

const features = [
  {
    title: 'Composable blocks',
    description: 'Drop in content layouts that map to Contentful models and render instantly.',
    icon: LayoutDashboard,
  },
  {
    title: 'Edge-ready performance',
    description: 'Optimized for Vite + React 19 with streaming-friendly patterns.',
    icon: Rocket,
  },
  {
    title: 'API-first workflows',
    description: 'Ship faster with typed queries, live previews, and one-click staging.',
    icon: PlugZap,
  },
]

const highlights = [
  { label: 'Deploy ready', value: '60s' },
  { label: 'Components', value: '25+' },
  { label: 'Uptime', value: '99.99%' },
  { label: 'Locales', value: '40+' },
]

function GradientBar() {
  return (
    <div className="absolute inset-x-0 top-32 mx-auto h-28 max-w-5xl rounded-full bg-gradient-to-r from-indigo-400/50 via-cyan-300/40 to-emerald-300/50 blur-3xl opacity-50" />
  )
}

function App() {
  return (
    <div className="relative min-h-screen text-foreground">
      <GradientBar />
      <header className="sticky top-0 z-20 border-b border-white/5 bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 via-accent/80 to-secondary/80 text-background shadow-lg shadow-primary/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                Contentful React
              </p>
              <p className="text-base font-semibold text-foreground">Composable content starter</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              UI Kit
            </Button>
            <Button size="sm">Launch demo</Button>
          </div>
        </div>
      </header>

      <main className="container pb-20 pt-10 md:pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/60 bg-primary/10 text-primary">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Production-ready React 19 starter
              </div>
            </Badge>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Build Contentful-powered frontends that feel bespoke, not boilerplate.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Opinionated defaults, shadcn/ui components, Tailwind theming, and a testing stack
              tuned for modern React. Deploy in minutes, iterate in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2">
                Start building
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" className="gap-2">
                View live preview
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item) => (
                <Card key={item.label} className="border-white/10 bg-white/5">
                  <CardHeader className="pb-3">
                    <CardDescription className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {item.label}
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {item.value}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-white/10 bg-card/80 shadow-2xl shadow-primary/10">
            <CardHeader className="space-y-2">
              <CardDescription className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <Sparkles className="h-4 w-4" />
                UI stack, ready out of the box
              </CardDescription>
              <CardTitle className="text-3xl">What you get</CardTitle>
              <CardDescription className="leading-relaxed text-base">
                Tailwind v3 + shadcn/ui, Vitest + Testing Library, Husky + lint-staged, and
                production-ready Vite config.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
                  >
                    <div
                      className={cn(
                        'mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-primary-foreground shadow-inner shadow-primary/20">
                <p className="font-semibold text-foreground">DX niceties included</p>
                <ul className="mt-2 grid list-disc gap-2 pl-5 text-muted-foreground">
                  <li>Prettier + ESLint flat config with React 19 rules</li>
                  <li>Husky pre-commit hook wired to lint-staged</li>
                  <li>Vitest + Testing Library + jsdom for UI coverage</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <Badge variant="outline" className="border-white/10 bg-white/5 text-foreground">
                Powered by Tailwind + shadcn/ui
              </Badge>
              <h2 className="text-3xl font-semibold">Launch fast with curated sections</h2>
              <p className="max-w-2xl text-muted-foreground">
                Copy-paste friendly sections you can map to Contentful entries: hero, feature grid,
                testimonial, and CTA blocks with consistent spacing and typography.
              </p>
            </div>
            <Button variant="ghost" className="hidden gap-2 md:inline-flex">
              Browse components
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: 'Adaptive hero',
                text: 'Gradient overlays, layered badges, and responsive typography baked in.',
              },
              {
                title: 'Rich content cards',
                text: 'Card primitives with states, hover treatments, and compact variants.',
              },
              {
                title: 'Accessible buttons',
                text: 'Variants and sizes powered by cva + tailwind-merge for predictable theming.',
              },
              {
                title: 'Analytics-ready',
                text: 'Ship with sensible aria labels and semantic HTML for better tracking.',
              },
              {
                title: 'Dark-forward palette',
                text: 'HSL-based tokens mapped to Tailwind so you can swap themes quickly.',
              },
              {
                title: 'QA friendly',
                text: 'Vitest + Testing Library setup to exercise your slices with jsdom.',
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group border-white/10 bg-card/70 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary via-accent to-secondary shadow shadow-primary/40" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Card className="flex flex-col gap-6 border-primary/30 bg-primary/10 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <Badge className="bg-foreground text-background">Ready to ship</Badge>
              <h3 className="text-2xl font-semibold">
                Spin up your next launch without rebuilding the basics.
              </h3>
              <p className="max-w-xl text-muted-foreground">
                Clone, connect Contentful, and deploy. The starter keeps the tooling sharp while you
                focus on crafting content and experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2">
                Open in your IDE
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg">
                Watch the walkthrough
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
