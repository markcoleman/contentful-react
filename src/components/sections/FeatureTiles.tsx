import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export type FeatureTile = {
  title: string
  copy: string
  badge?: string
  icon?: ReactNode
  href?: string
}

type FeatureTilesProps = {
  features: FeatureTile[]
  tone?: 'light' | 'dark'
}

export function FeatureTiles({ features, tone = 'light' }: FeatureTilesProps) {
  const isDark = tone === 'dark'
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((item) => (
        <div
          key={item.title}
          className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isDark ? 'border-white/20 bg-white/5 text-white' : 'border-border/70 bg-slate-50/70 text-foreground shadow-slate-200/80'}`}
        >
          {item.badge ? (
            <p className={`text-sm font-semibold ${isDark ? 'text-primary/90' : 'text-primary'}`}>
              {item.badge}
            </p>
          ) : null}
          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
          <p className={`mt-2 text-sm ${isDark ? 'text-white/80' : 'text-muted-foreground'}`}>
            {item.copy}
          </p>
          <button
            className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${isDark ? 'text-white hover:text-white/80' : 'text-primary hover:text-primary/80'}`}
            type="button"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
