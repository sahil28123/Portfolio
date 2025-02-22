// src/components/SkillStack.js
import { motion } from 'framer-motion';
import '../styles/SkillStack.css'; // Import CSS file

const skills = [
  {
    category: "Software Development",
    items: [
      { name: "Flutter", percentage: 85 },
      { name: "No-code tools", percentage: 95 },
      { name: "Python", percentage: 85 },
    ],
  },
  {
    category: "Product Management",
    items: [
      { name: "Agile/Scrum", percentage: 95 },
      { name: "User Research & Understanding", percentage: 90 },
      { name: "Feature Prioritization & Roadmapping", percentage: 85 },
    ],
  },
  {
    category: "Entrepreneurship",
    items: [
      { name: "Business Strategy", percentage: 90 },
      { name: "Partnership skill", percentage: 85 },
      { name: "Community building", percentage: 95 },
    ],
  },
  {
    category: "Growth Hacker",
    items: [
      { name: "SEO and ASO", percentage: 85 },
      { name: "Content Strategy", percentage: 90 },
      { name: "Paid ads and influencer marketing", percentage: 95 },
    ],
  },
];

export default function SkillStack() {
  return (
    <section id="Skills" className="skill-stack-section">
      <div className="skill-stack-container">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skill-stack-heading"
        >
          My Skill Stack
        </motion.h1>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <h2 className="category-title">{skillCategory.category}</h2>
              <div className="skill-items">
                {skillCategory.items.map((item, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-percentage">{item.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="progress-fill"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}