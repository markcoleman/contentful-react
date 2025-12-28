import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the hero content', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Invest Strategically/i })).toBeInTheDocument()
    const ctas = screen.getAllByRole('link', { name: /Get Started/i })
    expect(ctas.length).toBeGreaterThan(0)
  })
})
