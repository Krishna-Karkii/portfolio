function Navbar() {
  return (
    <header>
      <a href="/" className="site-name">
        Engineering Notebook
      </a>

      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#research">Research Notes</a>
        <a href="#about">About</a>
      </nav>
    </header>
  )
}

export default Navbar
