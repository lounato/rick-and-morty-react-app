import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__content">
        <Link to="/home">
          <img src={logo} alt="MyHomeCinema Logo" className="navbar__logo" />
        </Link>

        <ul className="navbar__links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
