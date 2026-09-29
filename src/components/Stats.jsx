import { stats } from '../data/content.js'
import './Stats.css'

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="wrap stats-row">
        {stats.map((s) => (
          <div className="stat" key={s.num}>
            <div className="num display">{s.num}</div>
            <div className="desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
