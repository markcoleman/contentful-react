import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the hero content', () => {
    render(<App />)

    expect(screen.getByText(/Contentful-powered frontends/i)).toBeInTheDocument()
    expect(screen.getByText(/Build Contentful-powered frontends/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Start building/i })).toBeInTheDocument()
  })
})
