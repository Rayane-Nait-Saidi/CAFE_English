import { Globe, Printer, FileText, Rocket, Code, ShoppingCart, Users } from "lucide-react";
import "./Services.css";
const Services = () => {
  const regularServices = [
    {
      icon: Globe,
      title: "Internet Access",
      description: "High-speed browsing and research for all your needs",
    },
    {
      icon: Printer,
      title: "Printing & Scanning",
      description: "Quality document services for personal and professional use",
    },
    {
      icon: FileText,
      title: "CV/Resume Writing",
      description: "Professional CV assistance to help you land your dream job",
    },
  ];
  const specialServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites tailored for your business needs",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Online stores to sell your products to the world",
    },
    {
      icon: Users,
      title: "Digital Consulting",
      description: "Expert guidance on building your digital presence",
    },
  ];
  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Section Header */}
        <div className="services__header">
          <h2 className="services__title">Our Services</h2>
          <div className="services__divider"></div>
        </div>
        {/* Regular Services */}
        <div className="services__regular">
          <h3 className="services__section-title">Regular Services</h3>
          <div className="services__grid">
            {regularServices.map((service) => (
              <div key={service.title} className="services__card">
                <div className="services__icon-wrapper">
                  <service.icon className="services__icon" />
                </div>
                <h4 className="services__card-title">{service.title}</h4>
                <p className="services__card-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Special Service - Highlighted */}
        <div className="services__special">
          <div className="services__special-glow"></div>
          <div className="services__special-content">
            <div className="services__special-header">
              <Rocket className="services__special-rocket" />
              <h3 className="services__special-title">Startup Digital Solutions</h3>
              <span className="services__special-badge">SPECIAL</span>
            </div>
            
            <p className="services__special-desc">
              The heart of Young Leader. We help young entrepreneurs bring their business
              ideas to life with professional digital solutions.
            </p>
            <div className="services__grid">
              {specialServices.map((service) => (
                <div key={service.title} className="services__card services__card--special">
                  <div className="services__icon-wrapper services__icon-wrapper--accent">
                    <service.icon className="services__icon services__icon--accent" />
                  </div>
                  <h4 className="services__card-title">{service.title}</h4>
                  <p className="services__card-desc">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;