import heroNight from '../assets/hero-night.jpg'
import { timeline } from '../data/content.js'
import './TrackingSection.css'

export default function TrackingSection() {
  return (
    <section className="night section-pad on-dark">
      <div className="night-media" style={{ '--img': `url(${heroNight})` }} />
      <div className="wrap night-inner">
        <div>
          <div className="section-head">
            <h2 className="display">Tracked around the clock</h2>
            <p>
              SLA deadlines don&apos;t pause at 5pm. If a request is at risk of running late, it&apos;s
              escalated automatically to the department manager — day or night.
            </p>
          </div>
          <a href="#" className="btn btn-ghost-light">See a live report</a>
        </div>

        <div className="track-card">
          <div className="track-head">
            <span className="track-id">REQUEST #88012</span>
            <span className="sla-badge">18h left on SLA</span>
          </div>
          <div className="track-cat">Pothole — Road 7, Block C</div>
          <div className="track-loc">Roads &amp; Infrastructure · Zone C</div>
          <div className="timeline">
            {timeline.map((t) => (
              <div className={`tl-row ${t.active ? 'active' : ''}`} key={t.text}>
                <div className="tl-dot" />
                <div>
                  <div className="tl-text">{t.text}</div>
                  <div className="tl-time">{t.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
