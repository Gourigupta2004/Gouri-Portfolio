import React from 'react';
import './About.css';
import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container row ml-0">
        <div className="col-md-4 mt-4 mb-4 mb-md-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
          <h2 className="about-heading neon-text">ABOUT ME</h2>
        </div>
        <div className="col-md-8 text-center mt-3 mb-4 mb-md-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Fade direction="right" triggerOnce={false} easing="ease-in-out">
            <div className="about-card p-5">
              <h3 className="about-name">GOURI<br />GUPTA</h3>
              <p className="about-description mt-4">
              I’m a software developer with a background in content strategy. After years of guiding narratives, I’m now deeply immersed in coding.
              My projects reflect my passion for creating practical, impactful solutions.
              I’m constantly evolving, learning new technologies, and tackling challenges to grow as a developer.
            </p>
          </div>
        </Fade>
      </div>
      </div>
    </section>
  );
}

export default About;
