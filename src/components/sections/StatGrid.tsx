export type StatItem = {
  label: string
  value: string
}

type StatGridProps = {
  stats: StatItem[]
  tone?: 'light' | 'dark'
}

export function StatGrid({ stats, tone = 'light' }: StatGridProps) {
  const isDark = tone === 'dark'
  return (
    <div
      className={`grid w-full max-w-xl grid-cols-2 gap-3 rounded-xl border p-4 text-sm ${isDark ? 'border-white/10 bg-white/5 text-white' : 'border-border bg-slate-50 text-foreground'}`}
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className={`flex items-center justify-between rounded-lg px-3 py-2 ${isDark ? 'bg-white/5 text-white' : 'bg-white text-foreground'}`}
        >
          <span className={isDark ? 'text-white/70' : 'text-muted-foreground'}>{item.label}</span>
          <span className="text-base font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  )
}
