import { boardData } from '../data/content.js'
import './StatusBoard.css'

export default function StatusBoard() {
  // rendered twice so the scroll animation loops without a gap
  const items = [...boardData, ...boardData]
  return (
    <div className="board" aria-hidden="true">
      <div className="board-track">
        {items.map((item, i) => (
          <div className="board-item" key={i}>
            <span className="label">{item.label}</span>
            <span className="count">{item.count}</span>
            <span className={`delta ${item.down ? 'down' : ''}`}>{item.delta}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
