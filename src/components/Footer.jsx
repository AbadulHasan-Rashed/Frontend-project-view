import { useState } from 'react'
import Logo from './Logo.jsx'
import './Footer.css'

const columns = [
  {
    title: 'For citizens',
    links: [
      ['Report an issue', '#report'],
      ['Track a report', '#how'],
      ['Public statistics', '#stats'],
      ['Help center', '#'],
    ],
  },
  {
    title: 'Staff sign in',
    links: [
      ['Department staff', '#'],
      ['Technician', '#'],
      ['Department manager', '#'],
      ['City admin', '#'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['SLA policy', '#'],
      ['Open data', '#'],
      ['Departments A–Z', '#departments'],
      ['Privacy', '#'],
    ],
  },
]

export default function Footer() {
  const [lang, setLang] = useState('EN')
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <a href="#top" className="brand">
            <Logo />
            <span className="brand-word display">Nagar</span>
          </a>
          <p className="footer-tagline">
            The City Complaint &amp; Service Request Platform for Dhaka — one front door to every
            municipal department.
          </p>
        </div>
        {columns.map((c) => (
          <div className="footer-col" key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map(([label, href]) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Nagar — CSE352 Advanced Java Lab project, Southeast University.</span>
        <div className="lang-toggle">
          {['EN', 'বাংলা'].map((l) => (
            <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
