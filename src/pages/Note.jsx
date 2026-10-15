import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { getNote } from '../lib/notes'
import usePageTitle from '../lib/usePageTitle'
import NotFound from './NotFound'

export default function Note() {
  const { slug } = useParams()
  const note = getNote(slug)
  usePageTitle(note?.title)

  if (!note) return <NotFound />

  return (
    <section>
      <p>
        <Link to="/research">All research notes</Link>
      </p>
      <article className="blog-post">
        <h1>{note.title}</h1>
        <div className="note-meta">
          <time>{note.date}</time>
          <span className="status">{note.status}</span>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {note.body}
        </ReactMarkdown>
      </article>
    </section>
  )
}
