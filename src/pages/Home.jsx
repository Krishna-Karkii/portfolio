import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import NoteList from '../components/NoteList'
import ContactLinks from '../components/ContactLinks'
import projects from '../data/projects'
import site from '../data/site'
import { notes } from '../lib/notes'
import usePageTitle from '../lib/usePageTitle'

export default function Home() {
  usePageTitle()

  return (
    <>
      <section className="hero">
        <p>{site.role}</p>
        <h1>{site.headline}</h1>
        <p>{site.intro}</p>
        <Link to="/#projects">See my projects</Link>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section id="research">
        <h2>Latest research notes</h2>
        <NoteList items={notes.slice(0, 3)} />
        <p>
          <Link to="/research">All research notes</Link>
        </p>
      </section>

      <section id="about">
        <h2>About</h2>
        {site.about.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <ContactLinks />
      </section>
    </>
  )
}
