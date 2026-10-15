import site from '../data/site'
import ContactLinks from './ContactLinks'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <span>
        © {year} {site.name}
      </span>
      <ContactLinks />
    </footer>
  )
}
