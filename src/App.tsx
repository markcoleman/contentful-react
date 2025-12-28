import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/layout/SiteHeader'
import { HomePage } from './pages/Home'
import { GetStartedPage } from './pages/GetStarted'

const navItems = [
  { label: 'Personal', href: '/' },
  { label: 'Get Started', href: '/get-started' },
  { label: 'Business', href: '/business' },
  { label: 'Financial Wellness', href: '/wellness' },
]

const utilityLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Rates', href: '/rates' },
  { label: 'ATM & Branch Locations', href: '/locations' },
  { label: 'Careers', href: '/careers' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-foreground">
        <SiteHeader
          navItems={navItems}
          utilityLinks={utilityLinks}
          primaryCta={{ label: 'Open an Account', href: '/get-started' }}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/get-started/*" element={<GetStartedPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
