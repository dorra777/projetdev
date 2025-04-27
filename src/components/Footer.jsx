import React from 'react';
import { FaTruck, FaBalanceScale, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-inform-title">S'informer</h3>
          <ul className="footer-inform-list">
            <li className="footer-inform-item">A propos</li>
            <li className="footer-inform-item">Livraison</li>
            <li className="footer-inform-item">Mentions légales</li>
            <li className="footer-inform-item">Contactez-nous</li>
          </ul>
        </div>

        {/* Ligne blanche entre S'informer et Nous contacter */}
        <hr className="footer-divider" />

        <div className="footer-column contact-column">
          <h4 className="footer-title"><FaEnvelope className="footer-icon" /> Nous contacter</h4>
          <p className="footer-subtitle">iTech Store</p>
          <ul className="contact-info">
            <li><FaMapMarkerAlt className="link-icon" /> Boulevard Grand Maghreb Arabe, Sousse</li>
            <li><FaPhoneAlt className="link-icon" /> SB 402 400 | SB 603 604</li>
            <li><FaEnvelope className="link-icon" /> <a href="mailto:store@itech.tn" className="footer-link">store@itech.tn</a></li>
          </ul>
        </div>
      </div>

      {/* Section des icônes des réseaux sociaux */}
      <div className="footer-socials">
        <h4 className="footer-socials-title">Suivez-nous</h4>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com" className="social-icon facebook"><FaFacebook /></a>
          <a href="https://www.twitter.com" className="social-icon twitter"><FaTwitter /></a>
          <a href="https://www.instagram.com" className="social-icon instagram"><FaInstagram /></a>
          <a href="https://www.google.com" className="social-icon google"><FaGoogle /></a>
          <a href="https://www.youtube.com" className="social-icon youtube"><FaYoutube /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 iTech Store. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
