import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { SiteHeader, NavItem, UtilityLink } from './SiteHeader'

type SetupArgs = {
  navItems?: NavItem[]
  utilityLinks?: UtilityLink[]
}

const defaultNavItems: NavItem[] = [
  { label: 'Personal', href: '/' },
  { label: 'Get Started', href: '/get-started' },
  { label: 'Business', href: '/business' },
  { label: 'Financial Wellness', href: '/wellness' },
]

const defaultUtility: UtilityLink[] = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Rates', href: '/rates' },
  { label: 'ATM & Branch Locations', href: '/locations' },
  { label: 'Careers', href: '/careers' },
]

function setup({ navItems = defaultNavItems, utilityLinks = defaultUtility }: SetupArgs = {}) {
  return render(
    <MemoryRouter>
      <SiteHeader
        navItems={navItems}
        utilityLinks={utilityLinks}
        primaryCta={{ label: 'Open an Account', href: '/get-started' }}
      />
    </MemoryRouter>,
  )
}

describe('SiteHeader', () => {
  it('shows mobile navigation with primary CTA and utility links when toggled', async () => {
    setup()
    const toggle = screen.getByTestId('mobile-menu-toggle')

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

    await userEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByTestId('mobile-menu')

    // Nav items and primary CTA are available inside the mobile menu
    const menuQueries = within(menu)
    defaultNavItems.forEach((item) => {
      expect(menuQueries.getByRole('link', { name: item.label })).toBeInTheDocument()
    })
    expect(menuQueries.getByRole('link', { name: 'Open an Account' })).toHaveAttribute(
      'href',
      '/get-started',
    )

    // Utility links and sign-in action are present
    expect(menuQueries.getByRole('link', { name: 'Rates' })).toBeInTheDocument()
    expect(menuQueries.getByRole('button', { name: /Sign In/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav item is selected', async () => {
    setup()
    const toggle = screen.getByTestId('mobile-menu-toggle')

    await userEvent.click(toggle)
    const menu = screen.getByTestId('mobile-menu')

    await userEvent.click(within(menu).getByRole('link', { name: 'Get Started' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })
})
