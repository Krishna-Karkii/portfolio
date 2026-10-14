
function ProjectCard({ title, description, technologies }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="technology-list">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
