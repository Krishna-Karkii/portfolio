
function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="technology-list">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-links">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            Source code ↗
          </a>
        )}

        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer">
            Live demo ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
