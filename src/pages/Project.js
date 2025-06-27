import React from 'react';
import './Project.css';
import ProjectCard from '../components/ProjectCard';
import demoVideo from '../assets/demoVideo.mp4'; // Adjust the path as necessary

const projectList = [
  {
    name: 'News App',
    type: 'React | News API',
    description: 'A real-time news feed app built using React and NewsAPI, showing top headlines by category.',
    github: 'https://github.com/gourigupta/newsapp',
    live: 'https://gouri-newsapp.netlify.app',
    video: demoVideo, 
    future: [
      'Add search functionality to find news by keywords',
      'Implement user authentication for personalized news feeds',
      'Enhance UI with animations and better styling'
    ]
  },
  {
    name: 'Portfolio Website',
    type: 'React | Animated UI',
    description: 'This very portfolio you’re exploring now, built with animations, responsive design, and love.',
    github: 'https://github.com/gourigupta/portfolio',
    live: '#',
    video: demoVideo,
    future: [
      'Add a blog section to share my coding journey',
      'Implement a dark mode toggle for better user experience',
      'Enhance SEO for better visibility'
    ]   
  },
  {
    name: 'News App',
    type: 'React | News API',
    description: 'A real-time news feed app built using React and NewsAPI, showing top headlines by category.',
    github: 'https://github.com/gourigupta/newsapp',
    live: 'https://gouri-newsapp.netlify.app',
    video: demoVideo, 
    future: [
      'Add search functionality to find news by keywords',
      'Implement user authentication for personalized news feeds',
      'Enhance UI with animations and better styling'
    ]
  },
  {
    name: 'Portfolio Website',
    type: 'React | Animated UI',
    description: 'This very portfolio you’re exploring now, built with animations, responsive design, and love.',
    github: 'https://github.com/gourigupta/portfolio',
    live: '#',
    video: demoVideo,
    future: [
      'Add a blog section to share my coding journey',
      'Implement a dark mode toggle for better user experience',
      'Enhance SEO for better visibility'
    ]   
  }
  // Add more projects here...
];

function Project() {
  return (
    <section id="projects" className="projects-section py-28">
      <div className="container">
        <h2 className="text-center neon-text mb-5">Projects</h2>
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} project={project} reverse={idx % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

export default Project;
