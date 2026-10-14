import './App.css'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import projects from './data/projects'
import BlogPost from './BlogPost'

function App() {

  return (
    <main>
      <Navbar />

      <section className="hero">
        <p>AI SYSTEMS · SOFTWARE ENGINEERING</p>

        <h1>
          Learning how systems work.
          <br />
          Building them from first principles.
        </h1>

        <p>
          I build software, experiment with machine learning,
          and document what I learn along the way.
        </p>

        <a href="#projects">Explore my work →</a>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </section>

      <section id="research">
        <h2>Research Notes</h2>
        <p>My notes on mathematics, machine learning, and computer systems.</p>
        <BlogPost />
      </section>

      <section id="about">
        <h2>About</h2>
        <p>I'm developing my skills in AI engineering and systems programming.</p>
      </section>
    </main>
  )
}

export default App
