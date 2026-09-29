import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import './Navbar.css'

const links = [
  { href: '#report', label: 'Report an issue' },
  { href: '#how', label: 'Track a report' },
  { href: '#departments', label: 'Departments' },
  { href: '#stats', label: 'Public stats' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${solid ? 'is-solid' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Nagar home">
          <Logo />
          <span className="brand-word display">Nagar</span>
          <span className="brand-sub">City Complaint &amp; Service Request Platform</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#" className="btn btn-ghost-light nav-staff">Staff sign in</a>
          <a href="#report" className="btn btn-amber">Report an issue</a>
          <button
            className="nav-burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#" onClick={() => setOpen(false)}>Staff sign in</a>
        </div>
      )}
    </nav>
  )
}
