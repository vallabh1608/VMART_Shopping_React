import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-card">
          <h3>VMart Shopping</h3>
          <p>
            Your one-stop shop for Men, Women, Beauty & Children fashion. 
            Quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-card">
          <h4>Quick Links</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Beauty</li>
            <li>Children</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-card">
          <h4>Contact</h4>
          <p>Email: support@vmart.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Hyderabad, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-card">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 VMart Shopping. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
