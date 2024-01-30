import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1>My Website</h1>
        <ul className="navlinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
