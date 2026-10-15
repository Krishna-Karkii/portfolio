import site from '../data/site'

export default function ContactLinks() {
  const links = [
    ['GitHub', site.github],
    ['LinkedIn', site.linkedin],
    ['Email', site.email && `mailto:${site.email}`],
    ['Resume', site.resume],
  ].filter(([, href]) => href)

  return (
    <ul className="contact-links">
      {links.map(([label, href]) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
