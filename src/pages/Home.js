import React from 'react';
import './Home.css';
import GouriImage from '../assets/Gouri.png';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section id="home" className="hero-section">
      {/* Left diagonal background image section */}
      <div
        className="hero-left"
        style={{ backgroundImage: `url(${GouriImage})` }}
      ></div>

      {/* Right content section */}
      <div className="hero-right text-light">
        <h1 className="hero-title">
          Hi, I'm <span className="accent">Gouri</span>
        </h1>

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
          Full-stack developer with a creative edge — building seamless, impactful, and user-focused digital experiences.
        </p>

        <div className="mt-4">
          <a href="#projects" className="btn primary-btn me-3">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>

        <div className="coming-soon mt-5">
          Coming Soon... AI-powered Ecommerce Platform & Mood Analyzer.
        </div>
      </div>
    </section>
  );
}

export default Home;
