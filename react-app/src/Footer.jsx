import { MapPin, Phone, Mail } from "lucide-react";
import logo from "./assets/logo_CAFE.png";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer id="contact" className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Logo & Description */}
          <div className="footer__brand">
            <img src={logo} alt="Young Leader" className="footer__logo" />
            <p className="footer__desc">
              Helping young entrepreneurs build their digital dreams, one startup at a time.
            </p>
          </div>
          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer__nav-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__heading">Contact Us</h4>
            <div className="footer__contact-list">
              <p className="footer__contact-item">
                <MapPin className="footer__contact-icon" />
                <span>Alger - Boumerdes</span>
              </p>
              <p className="footer__contact-item">
                <Phone className="footer__contact-icon" />
                <span>0557845648</span>
              </p>
              <p className="footer__contact-item">
                <Mail className="footer__contact-icon" />
                <span>Young_Leader@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer__copyright">
          <p>© {currentYear} Young Leader. All rights reserved. Start Young... Dream Big.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;