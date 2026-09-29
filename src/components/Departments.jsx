import heroAerial from '../assets/hero-aerial.jpg'
import { departments } from '../data/content.js'
import './Departments.css'

const icons = {
  road: <path d="M3 17l6-10 4 6 3-4 5 8" />,
  water: <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />,
  waste: (
    <>
      <path d="M5 8h14l-1.4 11.2a2 2 0 0 1-2 1.8H8.4a2 2 0 0 1-2-1.8L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  power: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  parks: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 21c1-4 4-6 7-6s6 2 7 6" />
    </>
  ),
  signal: (
    <>
      <rect x="9" y="3" width="6" height="18" rx="1" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="16.5" r="1" />
    </>
  ),
  drain: <path d="M4 12h16M4 6h16M4 18h10" />,
}

export default function Departments() {
  return (
    <section className="depts" id="departments">
      <div className="depts-texture" style={{ '--img': `url(${heroAerial})` }} />
      <div className="wrap depts-body">
        <div className="section-head">
          <h2 className="display">Ten departments, one front door</h2>
          <p>Whoever is responsible, you only need to remember one place to report it.</p>
        </div>
        <div className="dept-grid">
          {departments.map((d) => (
            <a href="#" key={d.name} className={`dept-card span-${d.span}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[d.icon]}
              </svg>
              <div>
                <div className="dept-name">{d.name}</div>
                <div className="dept-time">{d.time}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
