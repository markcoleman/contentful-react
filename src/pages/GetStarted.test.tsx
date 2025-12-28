import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { GetStartedPage } from './GetStarted'

describe('GetStartedPage', () => {
  it('surfaces the key steps and actions to begin', () => {
    render(
      <MemoryRouter>
        <GetStartedPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /Get Started\s+In Minutes/i })).toBeInTheDocument()

    expect(screen.getByText('Tell us your goals')).toBeInTheDocument()
    expect(screen.getByText('Choose the right mix')).toBeInTheDocument()
    expect(screen.getByText('Launch with a guide')).toBeInTheDocument()

    const startOnline = screen.getByRole('link', { name: /Start online/i })
    expect(startOnline).toHaveAttribute('href', '/get-started/open')

    expect(screen.getByText(/Valid ID and your Social Security number/i)).toBeInTheDocument()
  })
})
