import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <h2 className="display">Seen something broken today?</h2>
        <div className="cta-actions">
          <a href="#report" className="btn btn-outline-dark btn-lg">Report an issue</a>
          <a href="#how" className="btn btn-navy btn-lg">Track an existing report</a>
        </div>
      </div>
    </section>
  )
}
