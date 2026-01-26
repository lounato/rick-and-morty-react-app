import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

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
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__links--active" : ""
          }
          to="/home"
        >
          <img src={logo} alt="Rick and Morty logo" className="navbar__logo" />
        </NavLink>

        <ul className="navbar__links">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__links--active" : ""
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__links--active" : ""
              }
              to="/favorites"
              end
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
