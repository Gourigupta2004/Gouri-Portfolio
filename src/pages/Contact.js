import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="contact-heading">GET IN TOUCH</h2>

        <p className="contact-text">
          I’d love to hear from you—whether it’s a job opportunity, project collaboration, or just a hello!
        </p>

        <div className="contact-icons mt-4 mb-4">
          <a href="mailto:gourigupta.dev@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="contact-icon" />
          </a>
          <a href="https://github.com/gourigupta" target="_blank" rel="noreferrer">
            <FaGithub className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/gourigupta" target="_blank" rel="noreferrer">
            <FaLinkedin className="contact-icon" />
          </a>
        </div>

        <p className="contact-email">gourigupta.dev@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
