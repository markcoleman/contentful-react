import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the hero content', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Invest Strategically/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })
})
