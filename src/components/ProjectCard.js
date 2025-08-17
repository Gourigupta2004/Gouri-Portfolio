import React from 'react';
import './ProjectCard.css';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

function ProjectCard({ project, reverse }) {
  return (
    <Fade direction={reverse ? 'right' : 'left'} triggerOnce>
      <div className={`row align-items-center project-card ${reverse ? 'flex-row-reverse' : ''}`}>
        
        {/* Video */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <div className="video-wrapper mx-4" >
            <video
              className="demo-video"
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Text Info */}
        <div className="col-md-6 text-light text-start">
          <h3 className="project-name">
            {/* <Typewriter
              words={[project.name]}
              loop={false}
              cursor
              typeSpeed={80}
              deleteSpeed={50} */}
            {project.name}
          </h3>

          <h6 className="project-type">
            <Typewriter
              words={[project.type]}
              loop={false}
              cursor
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={700}
            />
          </h6>
          <p className="mt-3 project-description">{project.description}</p>

          <div className="mt-3">
            <a 
              href={project.github} 
              className="btn github-gradient me-3" 
              target="_blank" 
              rel="noreferrer"
            >
              GitHub
            </a>

            {project.live === '#' ? (
              <span className="btn btn-disabled">Live Demo coming soon</span>
            ) : (
              <a href={project.live} className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>

          {/* Future Improvements */}
          {project.future && (
            <div className="mt-4">
              <h6 className="future-heading">Future Improvements:</h6>
              <ul className="future-list">
                {project.future.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
