import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../../assets/Logo-Photo.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">

      <div className="container header-inner">

        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="GV Technologies"
          />
        </Link>

        <nav className={`main-nav ${menuOpen ? "show" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

        <div className="header-actions">

          <span className="header-phone">
            +91 7299128552
          </span>

          <a href="#contact" className="header-button">
            Let's Talk
            <ArrowRight size={15} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

    </header>
  );
}