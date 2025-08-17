import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import TechStrip from '../components/Tech-Strip';

function Contact() {
  return (
    <>


      <section id="contact" className="contact-section">
    <TechStrip />

      <div className="container text-center">
        {/* <h2 className="contact-heading">GET IN TOUCH</h2> */}
        <h2 className="accent" style={{ fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '2.8rem', margin: '2.5rem'}}>GET IN TOUCH</h2>

        <p className="contact-text">
          I’d love to hear from you—whether it’s a job opportunity, project collaboration, or just a hello!
        </p>

        <div className="contact-icons mt-4 mb-4">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=guptagouri89@gmail.com" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaEnvelope className="contact-icon" />
          </a>
          <a href="https://github.com/Gourigupta2004" target="_blank" rel="noreferrer">
            <FaGithub className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/gouri-gupta-a3513424a/" target="_blank" rel="noreferrer">
            <FaLinkedin className="contact-icon" />
          </a>
        </div>

        <p className="contact-email">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=guptagouri89@gmail.com"
            className="btn-link"
            target="_blank"
            rel="noreferrer"
          >
            guptagouri89@gmail.com
          </a>
        </p>
      </div>
    </section>
    </>
  );
}

export default Contact;
