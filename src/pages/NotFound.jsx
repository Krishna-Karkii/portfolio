import { Link } from 'react-router-dom'
import usePageTitle from '../lib/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section>
      <h1>Page not found</h1>
      <p>
        That address doesn't exist. <Link to="/">Go to the home page</Link>.
      </p>
    </section>
  )
}
