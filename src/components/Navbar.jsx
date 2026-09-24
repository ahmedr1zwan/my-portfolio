export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="nav-name" aria-label="Ahmed Rizwan home">Ahmed R.</a>
        <div className="nav-links">
          <a href="#home">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
}
