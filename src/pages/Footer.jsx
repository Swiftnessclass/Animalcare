import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
  <div className="footer-container">
 
    <div className="footer-about">
      <h2>About Us</h2>
      <p>We are dedicated to ensuring the well-being of animals through adoption, donations, and spreading awareness. Join us in making a difference!</p>
    </div>
    <div className="footer-links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#donation">Donate</a></li>
        <li><a href="#adoption">Adopt</a></li>
        <li><a href="#contact1">Contact</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h2>Contact Us</h2>
      <p><a href='mailto:animalcare@gmail.com'>Email: animalcare@gmail.com</a></p>
      <p> <a href="tel:+918217580842"/>Phone: 8217580842</p>
      <div className="footer-social">
        <a href="https://facebook.com/animalcaretrust"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.youtube.com/@actmangalore"><i className="fa-brands fa-youtube"></i></a>
        <a href="https://instagram.com/animalcaretrust"><i className="fab fa-instagram"></i></a>
        <a href="https://wa.me/+918217580842"><i className="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
    <div className="footer-newsletter">
      <h2>Newsletter</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Animal Care. All Rights Reserved.</p>
  </div>
</footer>


    </div>
  )
}

export default Footer
