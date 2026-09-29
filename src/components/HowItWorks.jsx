import { steps } from '../data/content.js'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section className="section-pad" id="how">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">From report to resolved, in four stops</h2>
          <p>Every request follows the same transparent route — you can see exactly which stop it&apos;s at.</p>
        </div>
        <div className="metro">
          <div className="metro-line" />
          <ol className="metro-steps">
            {steps.map((s, i) => (
              <li className="metro-step" key={s.title}>
                <div className="stop display">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
