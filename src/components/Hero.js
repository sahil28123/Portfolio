// src/components/Hero.js
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css'; // Import CSS file

export default function Hero() {
  return (
    <section id="Home" className="hero-section">
      <div className="hero-container">
        {/* Left Side: Title and Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-title"
          >
            Hi 👋, I'm{' '}
            <span className="typewriter-text">
              <Typewriter
                options={{
                  strings: ["Product Manager", "Flutter Developer", "Entrepreneur","Growth Hacker"],
                  autoStart: true,
                  loop: true,
                  delay: 50, // Faster typing speed
                  deleteSpeed: 30, // Faster deletion speed
                  cursor: '', // Remove cursor after typing
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-subtitle"
          >
            "Love Building Products which user love and solve real-world problems."
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="hero-button"
          ><a href="mailto:sahilverma455665@gmail.com">
            Contact Me
            </a>
          </motion.button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-image-container"
        >
          <img
            src="/profile.JPG" // Path to image in public folder
            alt="Profile"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
}