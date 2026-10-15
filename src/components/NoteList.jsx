import { Link } from 'react-router-dom'

export default function NoteList({ items }) {
  return (
    <ul className="note-list">
      {items.map((note) => (
        <li key={note.slug}>
          <Link to={`/research/${note.slug}`}>{note.title}</Link>
          <div className="note-meta">
            <time>{note.date}</time>
            <span className="status">{note.status}</span>
          </div>
          {note.summary && <p>{note.summary}</p>}
        </li>
      ))}
    </ul>
  )
}
