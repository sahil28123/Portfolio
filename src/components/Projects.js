// src/components/Projects.js
import { motion } from 'framer-motion';
import '../styles/Projects.css'; // Import CSS file

const projects = [
  {
    category: "Startup",
    year: "2025",
    title: "Snappy – Swipe, Match & Shop",
    description: "Snappy is the ultimate AI-powered fashion shopping app, designed to give you a Tinder-like swipe experience while exploring the latest fashion trends.",
    tech: ["Flutter", "Supabase", "Google Analytics"],
    link: "https://play.google.com/store/apps/details?id=com.snappy.app",
  },
  {
    category: "Blog Website",
    year: "2023",
    title: "Founderhub - Where Big Ideas Take Flight",
    description: "FounderHub is the premier community and collaboration platform built exclusively for startup founders and innovators.",
    tech: ["Google analytics", "Seo", "Wordpress"],
    link: "https://founderhub.in/",
  },
  {
    category: "College Project",
    year: "2022-2024",
    title: "UniConnect: College Community",
    description: "UniConnect is your one-stop shop to connect with classmates, tackle fun challenges, and unlock exciting career opportunities.",
    tech: ["Flutter", "Firebase", "Algolia"],
    link: "https://github.com/sahil28123/uniconnect",
  },

  {
    category: "Covid Project",
    year: "2020-2022",
    title: "Meet - Video Conferencing App",
    description: "Meet is a video conferencing app that lets you connect with your friends, family, or colleagues with ease.",
    tech: ["Paid ads", "ASO", "Kotlin"],
    link: "https://github.com/sahil28123/Meet",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-heading"
        >
          Featured Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                Check it out →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}