import React, { useState, useEffect } from 'react';

// Importation des images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import './Slider.css'; // Assure-toi que ce fichier existe et est bien dans le même dossier que Slider.jsx

const images = [slide1, slide2, slide3]; // Tableau des images

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // Change l'image automatiquement toutes les 5 secondes
    }, 5000);
    return () => clearInterval(interval); // Nettoyage au démontage du composant
  }, []);

  const goToSlide = (index) => {
    setCurrent(index); // Fonction pour naviguer manuellement vers une image spécifique
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length); // Fonction pour passer à l'image suivante
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length); // Fonction pour revenir à l'image précédente
  };

  return (
    <div className="slider-container">
      {/* Boutons de navigation "Précédent" et "Suivant" */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dots de navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)} // Change l'image manuellement en cliquant sur un point
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
