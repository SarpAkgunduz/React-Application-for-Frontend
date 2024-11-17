import "./NavigateBar.css";

const NavBar = () => {
  return (
    <nav className="navigate__bar">
      <ul>
        <li>
          <a href="/" className="links">Home</a>
        </li>
        <li>
          <a href="/about" className="links">About</a>
        </li>
        <li>
          <a href="/services" className="links">Services</a>
        </li>
        <li>
          <a href="/contact" className="links">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
