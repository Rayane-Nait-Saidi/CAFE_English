import { ChevronDown } from "lucide-react";
import logo from "./assets/logo_CAFE.png";
import "./Hero.css";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        {/* Logo */}
        <div className="hero__logo-container">
          <img src={logo} alt="Young Leader" className="hero__logo" />
        </div>
        
        {/* Main Slogan */}
        <h1 className="hero__title">
          Start Young... <span className="hero__title-accent">Dream Big</span>
        </h1>
        
        {/* Tagline */}
        <p className="hero__tagline">
          Your first step to building your dream starts here. We help young
          entrepreneurs transform their ideas into digital reality.
        </p>
        
        {/* CTA Buttons - ADDED WALK BUTTON */}
        <div className="hero__cta-container">
          <button onClick={scrollToServices} className="hero__cta hero__cta--primary">
            Discover Our Services
          </button>
          <button 
            onClick={() => {
              const element = document.querySelector("#walk");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }} 
            className="hero__cta hero__cta--secondary"
          >
            Take a Virtual Walk
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;