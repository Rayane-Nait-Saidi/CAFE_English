import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo_CAFE.png";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#walk", label: "Walk" }, // ← Added this line
  { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav className="header__nav">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="header__logo-link"
        >
          <img src={logo} alt="Young Leader Logo" className="header__logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="header__nav-list">
          {navLinks.map((link) => (
            <li key={link.href} className="header__nav-item">
              <button
                onClick={() => scrollToSection(link.href)}
                className="header__nav-link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="header__mobile-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="header__mobile-menu">
          <ul className="header__mobile-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="header__mobile-link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;