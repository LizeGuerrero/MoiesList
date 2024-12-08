import React from 'react';
import './Footer.css'; // Para aplicar los estilos personalizados

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="intro">
          <h3 className="text-center">¿Quieres agregar más películas?</h3>
          <p className="text-center">
            Contactanos<br />

          </p>
          <center>
            <button className="btn">Get Started</button>
          </center>
          <hr />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h1 className="fw-bold">ML</h1>
            <h4>Movie List</h4>
          </div>
          <div className="footer-column">
            <ul>
              <li className="fw-bold">Partnership</li>
              <li><a href="#" className="footer-link">Website</a></li>
              <li><a href="#" className="footer-link">Social Media</a></li>
              <li><a href="#" className="footer-link">Branding</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li className="fw-bold">About</li>
              <li><a href="#" className="footer-link">Our Project</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li className="fw-bold">Support</li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Support Request</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <li className="fw-bold">Follow us</li>
            <ul className="social-links">
              <li><a href="#" className="footer-link"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#" className="footer-link"><i className="fa-brands fa-whatsapp"></i></a></li>
              <li><a href="#" className="footer-link"><i className="fa-brands fa-youtube"></i></a></li>
              <li><a href="#" className="footer-link"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>&copy; 2022 Copyright <a href="#" className="footer-link">Movie List</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
