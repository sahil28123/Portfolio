// src/components/Timeline.js
import { motion } from 'framer-motion';
import '../styles/Timeline.css'; // Import CSS file

const timelineData = [
  {
    year: "2022 – 2024",
    role: "Founder | Grownity",
    description: <ul>
    <li>Founded and scaled Grownity, a community platform connecting 10,000+ students, job seekers, and founders.</li><br></br>
    <li>Developed the app using FlutterFlow, saving ₹2L+ in development costs.</li><br></br>
    <li>Organized events like trading hackathons with ₹25K sponsorships and 1,000+ registrations..</li><br></br>
    </ul>,
    tags: ["Community building", "No code builder","Feature Prioritization" ],
    color: "pink", // Custom color for this entry
  },
  {
    year: "2023 – 2023",
    role: "PR and Marketing Head | Computer Society of India (CSI)",
    description: <ul>
    <li>Increased Instagram reach by 200% through innovative strategies.</li><br></br>
    <li>Secured ₹50K+ sponsorships for a hackathon.</li><br></br>
    <li>Led a team of 20+ members to execute marketing campaigns.</li><br></br>
    </ul>,
    tags: ["Public relations", "Marketing"],
    color: "purple", // Custom color for this entry
  },
  {
    year: "2023 – 2023",
    role: "Community Manager | Coding Ninjas CU Chapter",
    description: <ul>
    <li>Achieved 1,000+ registrations for multiple events across 10+ colleges.</li><br></br>
    <li>Organized coding competitions and workshops to engage students.</li><br></br>
    </ul>,
    tags: ["Promotions", "Event management"],
    color: "blue", // Custom color for this entry
  },
  {
    year: "2020 – 2022",
    role: "Founder | Meetworld",
    description: <ul>
    <li>Launched a video conferencing app with over 500K downloads across 20+ countries.</li><br></br>
    <li> Ranked in the top 50 apps in multiple regions, including India, Italy, and Brazil. </li><br></br>
    <li>Featured by major publications as a top video conferencing platform.</li><br></br>
    </ul> ,
    tags: ["Flutter development", "Growth marketing"],
    color: "green", // Custom color for this entry
  },
];

export default function Timeline() {
  return (
    <section id="Timeline" className="timeline-section">
      <div className="timeline-container">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="timeline-heading"
        >
          Professional Journey
        </motion.h1>

        {/* Timeline */}
        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className={`timeline-content ${item.color}`}>
                <div className="timeline-year">{item.year}</div>
                <h2 className="timeline-role">{item.role}</h2>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}