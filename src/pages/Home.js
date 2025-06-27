import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import GouriImage from '../assets/Gouri.jpeg'; // Adjust the path as necessary


function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container py-5 py-lg-0">
        <div className="row align-items-center min-vh-100 g-4 g-md-0">
          {/* Photo Section */}
          <div className="col-md-5 text-center mb-0 mb-md-0">
            <img
              src={GouriImage}
              alt="Gouri Gupta"
              className="profile-photo"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-7 text-light text-start">
            <h1 className="display-4 fw-bold neon-text">Hi, I'm Gouri</h1>
            <h4 className="mt-3 typewriter">
              <Typewriter
                words={[
                  'Content Strategist turned Coder',
                  'Building real-world web apps',
                  'Crafting code with creativity',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h4>
            <p className="lead mt-4">
              I'm a creative mind exploring the world of code — currently learning full-stack development to bring real ideas to life.
            </p>
            <div className="mt-4">
              <a href="#projects" className="btn btn-outline-cyan resume-btn me-3">View Projects</a>
              <a href="#contact" className="btn btn-outline-white contact-btn">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
