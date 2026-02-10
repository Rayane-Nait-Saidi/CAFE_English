import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Walk.css";

// Import your local images (update these paths to match your actual images)
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

const Walk = () => {
  const images = [pic1, pic2, pic3, pic4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="walk" className="walk">
      <div className="walk__container">
        {/* Section Header */}
        <div className="walk__header">
          <h2 className="walk__title">Take a Walk Through Our Space</h2>
          <div className="walk__divider"></div>
          <p className="walk__subtitle">
            See where young entrepreneurs bring their digital dreams to life
          </p>
        </div>

        {/* Image Grid */}
        <div className="walk__grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="walk__image-container"
              onClick={() => openModal(index)}
            >
              <img 
                src={image} 
                alt={`Our local space ${index + 1}`}
                className="walk__image"
                loading="lazy"
              />
              <div className="walk__image-overlay">
                <span className="walk__image-number">{index + 1}</span>
                <span className="walk__view-text">Click to view</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="walk__counter">
          <span className="walk__counter-current">{currentIndex + 1}</span>
          <span className="walk__counter-divider">/</span>
          <span className="walk__counter-total">{images.length}</span>
        </div>

        {/* Full-screen Modal/Lightbox */}
        {isModalOpen && (
          <div className="walk__modal">
            <button 
              className="walk__modal-close"
              onClick={closeModal}
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            
            <button 
              className="walk__modal-nav walk__modal-nav--prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <div className="walk__modal-content">
              <img 
                src={images[currentIndex]} 
                alt={`Our local space ${currentIndex + 1}`}
                className="walk__modal-image"
              />
            </div>

            <button 
              className="walk__modal-nav walk__modal-nav--next"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Walk;