import { useState } from 'react'
import { ChevronDown, Menu, Phone, Search, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '../../lib/utils'

export type NavItem = {
  label: string
  href: string
}

export type UtilityLink = {
  label: string
  href: string
}

type SiteHeaderProps = {
  brand?: { label: string; sublabel?: string }
  navItems: NavItem[]
  utilityLinks: UtilityLink[]
  primaryCta?: { label: string; href: string }
}

export function SiteHeader({ brand, navItems, utilityLinks, primaryCta }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3 text-left">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-rose-500 to-slate-900 text-white shadow-lg shadow-primary/20">
            <span className="text-xl font-bold">M¹</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">{brand?.label ?? 'MEMBERS 1st'}</p>
            <p className="text-xs text-muted-foreground">
              {brand?.sublabel ?? 'FEDERAL CREDIT UNION'}
            </p>
          </div>
        </Link>

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
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'transition hover:text-primary',
                    isActive ? 'text-primary font-semibold' : 'text-foreground',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button className="font-semibold text-primary" type="button">
              Sign In
            </button>
          </div>
          {primaryCta ? (
            <Link
              to={primaryCta.href}
              className={cn(
                buttonVariants({ size: 'sm' }),
                'min-w-[150px] bg-primary text-white shadow-lg shadow-primary/20',
              )}
            >
              {primaryCta.label}
            </Link>
          ) : null}
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Button variant="secondary" size="icon" className="bg-secondary text-white">
            <Phone className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div className="border-t border-border/70 bg-white/90">
        <div className="container hidden items-center gap-6 py-3 text-sm font-semibold text-foreground lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center gap-1 hover:text-primary',
                  isActive ? 'text-primary' : 'text-foreground',
                )
              }
            >
              <span className="tracking-tight">{item.label}</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </NavLink>
          ))}
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="lg:hidden border-t border-border/70 bg-white/95 shadow-xl backdrop-blur-sm"
          data-testid="mobile-menu"
        >
          <div className="container space-y-6 py-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-white px-3 py-2 shadow-sm">
                <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <input
                  className="flex-1 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  placeholder="Search products, rates, support"
                  aria-label="Search products, rates, and support"
                />
              </div>
              {primaryCta ? (
                <Link
                  to={primaryCta.href}
                  onClick={closeMobile}
                  className={cn(
                    buttonVariants({ size: 'sm' }),
                    'bg-primary text-white shadow-lg shadow-primary/30',
                  )}
                >
                  {primaryCta.label}
                </Link>
              ) : null}
            </div>

            <div className="space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between rounded-xl border px-4 py-3 text-base font-semibold transition',
                      isActive
                        ? 'border-primary/30 bg-primary/5 text-primary'
                        : 'border-border bg-white text-foreground hover:border-primary/30 hover:bg-primary/5',
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </NavLink>
              ))}
            </div>

            <div className="grid gap-3">
              {utilityLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition',
                      isActive
                        ? 'border-primary/30 bg-primary/5 text-primary'
                        : 'border-border bg-white text-foreground hover:border-primary/30 hover:bg-primary/5',
                    )
                  }
                >
                  <span>{link.label}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </NavLink>
              ))}

              <button
                type="button"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary/30 hover:bg-primary/5"
                onClick={closeMobile}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
