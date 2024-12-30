import "./Navbar.css";
import "./Navbar.js";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Uptown</h1>
        <div className="navbar-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Agent</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <span className="menu-icon">
          <box-icon name="menu" id="menu-icon"></box-icon>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
