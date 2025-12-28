import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from './Home'

describe('HomePage', () => {
  it('shows the invest hero, stats, and feature highlights', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /Invest Strategically/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toHaveAttribute(
      'href',
      '/get-started',
    )

    expect(screen.getByText('97%')).toBeInTheDocument()
    expect(screen.getByText('70+')).toBeInTheDocument()

    expect(screen.getByText('Strategy built around your life')).toBeInTheDocument()
    expect(screen.getByText('Digital where it matters')).toBeInTheDocument()
    expect(screen.getByText('Safe, insured, and transparent')).toBeInTheDocument()
  })
})
