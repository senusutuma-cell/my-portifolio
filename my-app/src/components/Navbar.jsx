 // src/components/Navbar.jsx
function Navbar({ brandName }) {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <a href="#hero" className="navbar-brand"> ~/Senu</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;