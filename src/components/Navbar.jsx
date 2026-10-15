import { Link } from 'react-router-dom'
import site from '../data/site'

export default function Navbar() {
  return (
    <header>
      <Link to="/" className="site-name">
        {site.name}
      </Link>

      <nav aria-label="Main navigation">
        <Link to="/#projects">Projects</Link>
        <Link to="/research">Research</Link>
        <Link to="/#about">About</Link>
        {site.resume && (
          <a href={site.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        )}
      </nav>
    </header>
  )
}
