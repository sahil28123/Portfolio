import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    query: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector(".contact-container");
      if (contactSection) {
        const top = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // Allow the form to submit traditionally
    setFormData({
      name: "",
      mobile: "",
      query: "",
    });
  };

  return (
    <section id="Contact">
      <div className={`contact-container ${isVisible ? "fade-in" : ""}`}>
        <h2>Message Me</h2>
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/sahilverma455665@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="query">Your Query:</label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;