import NoteList from '../components/NoteList'
import { notes } from '../lib/notes'
import usePageTitle from '../lib/usePageTitle'

export default function Research() {
  usePageTitle('Research notes')

  return (
    <section>
      <h1>Research notes</h1>
      <p className="lede">
        Each note follows the same arc: concept, question, experiment or proof,
        result, insight, next question. The status shows how far it has got.
      </p>
      <NoteList items={notes} />
    </section>
  )
}
