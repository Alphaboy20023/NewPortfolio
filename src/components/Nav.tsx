import { useState, useEffect } from "react";
import "../Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home")

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "Contact Me", target: "contact" },
  ];

  useEffect(() => {
    const handleScrollY = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  const handleScrollNavigate = (id: string) => {
    // const (el) = document.getElementById(id);
    const el: HTMLElement | null = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100; // adjust for navbar height
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

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
            backdropFilter: "blur(18px) brightness(1.2)",
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

      <div className="logo hidden lg:block">I AM AKINOLAVICTOR</div>

      {/* Desktop Nav */}
      <ul className="navbar-links">
        {navLinks.map((link, i) => (
          <li key={i}>
            <button onClick={() => handleScrollNavigate(link.target)} className={`nav-btn ${activeSection === link.target ? "active" : ""}`}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="text-2xl font-semibold mb-4">Porfolio Menu</div>
        <ul>
          {navLinks.map((link, i) => (
            <li key={i}>
              <button onClick={() => handleScrollNavigate(link.target)} className={`nav-btn ${activeSection === link.target ? "active" : ""}`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;