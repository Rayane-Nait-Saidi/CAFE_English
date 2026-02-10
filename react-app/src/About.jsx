import { MapPin, Phone, Mail } from "lucide-react";
import visitCard from "./assets/carte_visite_CAFE.png";
import "./About.css";
const About = () => {
  const contactDetails = [
    { icon: MapPin, label: "Location", value: "Alger - Boumerdes" },
    { icon: Phone, label: "Phone", value: "0557845648" },
    { icon: Mail, label: "Email", value: "Young_Leader@gmail.com" },
  ];
  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Section Header */}
        <div className="about__header">
          <h2 className="about__title">About Young Leader</h2>
          <div className="about__divider"></div>
        </div>
        <div className="about__grid">
          {/* Visit Card Image */}
          <div className="about__card-wrapper">
            <div className="about__card-container">
              <img
                src={visitCard}
                alt="Young Leader Visit Card"
                className="about__card-image"
              />
              <div className="about__card-bg"></div>
            </div>
          </div>
          {/* About Content */}
          <div className="about__content">
            <h3 className="about__subtitle">More Than Just a Cyber Cafe</h3>
            <p className="about__text">
              Young Leader is not your ordinary cyber cafe. We're a launching pad
              for young entrepreneurs and dreamers. Our mission is to help the
              next generation of business owners take their first steps into the
              digital world.
            </p>
            <p className="about__text">
              Whether you need to create a website for your startup, develop an
              e-commerce platform for your clothing business, or simply need
              professional document services, we're here to help you succeed.
            </p>
            {/* Contact Details */}
            <div className="about__contacts">
              {contactDetails.map((contact) => (
                <div key={contact.label} className="about__contact-card">
                  <div className="about__contact-icon-wrapper">
                    <contact.icon className="about__contact-icon" />
                  </div>
                  <div className="about__contact-info">
                    <p className="about__contact-label">{contact.label}</p>
                    <p className="about__contact-value">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;