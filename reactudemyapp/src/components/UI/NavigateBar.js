import "./NavigateBar.css"

const NavBar = () => {
  return (
    <nav className="navigate__bar">
      <ul>
        <li>
          <links href="/">Home</links>
        </li>
        <li>
          <links href="/about">About</links>
        </li>
        <li>
          <links href="/services">Services</links>
        </li>
        <li>
          <links href="/contact">Contact</links>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;