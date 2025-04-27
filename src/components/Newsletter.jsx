import React from "react";
import "./Newsletter.css";
import { FaApple, FaHome, FaPhoneAlt, FaDollarSign } from "react-icons/fa"; // Import des icônes

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h1>Abonnez-vous à notre Newsletter</h1>
          <p>et recevez toutes nos nouveautés et nos promotions</p>
        </div>
        
        <div className="newsletter-form">
          <div className="form-row">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="email-input"
            />
            <button className="subscribe-btn">S'abonner</button>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="feature-item">
          <FaApple className="icon" />
          <span>Revendeur Agréé Apple</span>
        </div>
        <div className="feature-item">
          <FaHome className="icon" />
          <span>Livraison à domicile</span>
        </div>
        <div className="feature-item">
          <FaPhoneAlt className="icon" />
          <span>Service commercial 58 402 400</span>
        </div>
        <div className="feature-item">
          <FaDollarSign className="icon" />
          <span>Paiement à la livraison</span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
