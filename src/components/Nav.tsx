import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contact Me", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={
        scrolled
          ? {
              backgroundImage: "url('/Img/Rectangle 12.png')",
              backgroundPosition: "top left",
              backgroundSize: "cover",
              backdropFilter: "blur(10px) brightness(1.2)",
            }
          : { background: "transparent" }
      }
    >
      {/* Mobile: Hamburger + Logo */}
      <div className="navbar-mobile">
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="logo">I AM AKINOLAVICTOR</div>
      </div>

      {/* Desktop Nav */}
      <ul className="navbar-links">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="text-2xl font-semibold mb-4">Porfolio Menu</div>
        <ul>
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
