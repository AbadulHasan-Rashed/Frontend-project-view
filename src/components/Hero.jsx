import { useState } from 'react'
import heroDay from '../assets/hero-day.jpg'
import { categories } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  const [category, setCategory] = useState(categories[0])
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!location.trim()) {
      setMessage('Add a road, area or ward so we can send this to the right department.')
      return
    }
    setMessage(
      `Ready to report: ${category} at ${location.trim()}. Sign in to add a photo and submit.`
    )
  }

  return (
    <header className="hero" id="report">
      <div className="hero-media" style={{ '--img': `url(${heroDay})` }} />
      <div className="wrap hero-content">
        <div className="hero-note">
          <span className="dot" /> Serving 10 city zones, around the clock
        </div>
        <h1 className="display">
          Dhaka doesn&apos;t fix<br />itself. <em>Report it.</em>
        </h1>
        <p className="hero-sub">
          Potholes, broken streetlights, blocked drains, missed collections — tell us where, and
          Nagar routes it straight to the department responsible. No phone queues, no lost paperwork.
        </p>

        <form className="dock" onSubmit={handleSubmit}>
          <div className="dock-field">
            <label htmlFor="cat">Category</label>
            <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="dock-field">
            <label htmlFor="loc">Location</label>
            <input
              id="loc"
              type="text"
              placeholder="Road, area or ward"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button className="btn btn-amber btn-lg" type="submit">Report an issue</button>
        </form>

        {message && <p className="dock-message" role="status">{message}</p>}

        <div className="hero-trust">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 8.5l4 4L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          12,406 issues resolved across Dhaka since launch
        </div>
      </div>
    </header>
  )
}
