import './App.css'
import Navbar from './Navbar'

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
        <h2>Selected Projects</h2>
        <p>Engineering projects, experiments, and things I'm learning by building.</p>
      </section>

      <section id="research">
        <h2>Research Notes</h2>
        <p>My notes on mathematics, machine learning, and computer systems.</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>I'm developing my skills in AI engineering and systems programming.</p>
      </section>
    </main>
  )
}

export default App
