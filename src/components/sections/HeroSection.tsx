import { ReactNode } from 'react'
import { buttonVariants } from '../ui/button'
import { cn } from '../../lib/utils'
import { Link } from 'react-router-dom'

export type Stat = {
  label: string
  value: string
}

export type Action = {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type HeroSectionProps = {
  eyebrow?: string
  eyebrowIcon?: ReactNode
  title: ReactNode
  description: string
  actions?: Action[]
  stats?: Stat[]
  rightSlot?: ReactNode
  tone?: 'dark' | 'light'
}

export function HeroSection({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  actions = [],
  stats,
  rightSlot,
  tone = 'dark',
}: HeroSectionProps) {
  const isDark = tone === 'dark'

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden',
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'
          : 'bg-white text-foreground',
      )}
    >
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
          {eyebrow ? (
            <div
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]',
                isDark
                  ? 'border-white/15 bg-white/10 text-white/80'
                  : 'border-border/70 bg-slate-50 text-muted-foreground',
              )}
            >
              {eyebrowIcon ? (
                <span
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-full text-white',
                    isDark ? 'bg-primary/90' : 'bg-primary',
                  )}
                >
                  {eyebrowIcon}
                </span>
              ) : null}
              {eyebrow}
            </div>
          ) : null}

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          <p className={cn('max-w-xl text-lg', isDark ? 'text-white/85' : 'text-muted-foreground')}>
            {description}
          </p>

          {actions.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {actions.map((action) => {
                const variantClass =
                  action.variant === 'secondary'
                    ? 'border-white/30 bg-white/10 text-white hover:bg-white/15'
                    : action.variant === 'ghost'
                      ? 'text-white hover:text-white/80'
                      : 'bg-primary text-white shadow-lg shadow-primary/30'

                return (
                  <Link
                    key={action.label}
                    to={action.href}
                    className={cn(buttonVariants({ size: 'lg' }), variantClass)}
                  >
                    {action.label}
                  </Link>
                )
              })}
            </div>
          ) : null}

          {stats && stats.length > 0 ? (
            <div className="mt-4 grid w-full max-w-xl grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-3 py-2',
                    isDark ? 'bg-white/5 text-white' : 'bg-slate-100 text-foreground',
                  )}
                >
                  <span className={isDark ? 'text-white/70' : 'text-muted-foreground'}>
                    {item.label}
                  </span>
                  <span className="text-base font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {rightSlot ? <div className="relative">{rightSlot}</div> : null}
      </div>
    </section>
  )
}
