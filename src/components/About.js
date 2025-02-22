// src/components/AboutMe.js
import { motion } from 'framer-motion';
import '../styles/About.css'; // Import CSS file

export default function AboutMe() {
  return (
    <section id="About" className="about-section">
      <div className="about-container">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-heading"
        >
          About Me
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="about-subheading"
        >
          Flutter Developer × Product Manager × Growth Marketer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="about-description"
        >
          I build and scale apps that users love—like Meetworld, a video-conferencing platform in Flutter/Firebase, reaching 500K+ downloads across 20+ countries. As a growth-obsessed engineer, I blend code with marketing hacks and community-building (10K+ members on Grownity). Fast Learner, Market research expert and resourcefullness Person. When not coding or marketing, I strategize chess moves (district champ), Learn new things or build community. 
        </motion.p>

        
      </div>
    </section>
  );
}