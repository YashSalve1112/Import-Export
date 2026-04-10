import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container navbar">

        <Link to="/" className="brand" onClick={closeMenu}>
          <img src="/Images/logo.jpeg" alt="BHATIYANIJI Majisa logo" className="brand-logo" />
          <div className="brand-text">
            <span>BHATIYANIJI Majisa</span>
            <span>Overseas</span>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link to="/contact" className="nav-cta">
          Get Inquiry
        </Link>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/products" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <Link to="/contact" className="mobile-cta" onClick={closeMenu}>
          Get Inquiry
        </Link>
      </div>
    </header>
  );
};

export default Navbar;