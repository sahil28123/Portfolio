// src/components/Footer.js
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css'; // Import CSS file

export default function Footer() {
  return (
    <footer id="Footer" className="footer-section">
      <div className="footer-container">
        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h2 className="footer-heading">Get in Touch</h2>
            <p className="footer-description">
              Let's collaborate and build something amazing together!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span><a href="mailto:sahilverma455665@gmail.com">Contact me</a></span>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <span><a href='https://www.linkedin.com/in/sahil-verma-b22887215/'>https://www.linkedin.com/in/sahil-verma-b22887215/</a></span>
              </div>
            </div>
          </div>

          {/* Right Side: Social Links */}
          <div className="social-links">
            <h3 className="social-heading">Connect with Me</h3>
            <div className="social-icons">
              <a href="https://github.com/sahil28123" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-verma-b22887215/" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/sahilverma158/" className="social-icon">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p className="copyright">
            © 2025 Sahil. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}