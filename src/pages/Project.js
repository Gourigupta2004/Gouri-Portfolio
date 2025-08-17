import React from 'react';
import './Project.css';
import ProjectCard from '../components/ProjectCard';
import TextUtils from '../assets/TextUtils.mp4'; // Example video for TextUtils project
import NewsDose from '../assets/NewsDose.mp4'; // Example video for News Dose project
import WeatherVibes from '../assets/WeatherVibes.mp4'; // Example video for Weather Vibes project
import iNotebookDemo from '../assets/InoteBook.mp4'; // Example video for iNotebook project

const projectList = [
  {
  name: 'iNotebook',
  type: 'MERN Stack | MongoDB | Express | React | Node.js',
  description: 'A secure cloud notebook with user authentication for creating & managing personal notes anywhere.',
  github: 'https://github.com/Gourigupta2004/cloud-notebook.git',
  live: 'https://my-cloud-notebook.onrender.com',
  video: iNotebookDemo,
  future: [
    'Integrate AI for smart note suggestions, summaries, & context-based search',
    'Add rich text editor for advanced formatting',
    'Enable cloud storage for media and file attachments'
  ]
},
  {
  name: 'News App',
  type: 'React | NewsData.io | React Router',
  description: 'A real-time news feed app built using React and NewsAPI, showing top headlines by category.',
  github: 'https://github.com/gourigupta/newsapp',
  live: 'https://newsdosedaily.netlify.app/',
  video: NewsDose,
  future: [
    'Add search functionality to find news by keywords',
    'Build a custom backend API to make it publicly deployable without CORS issues',
    'Implement user authentication for personalized news feeds'
  ]
},
  {
  name: 'TextUtils',
  type: 'React | Bootstrap | Text Utility',
  description: 'A simple and responsive React app to format, clean, and analyze text with dark mode & theme support.',
  github: 'https://github.com/Gourigupta2004/TextUtils-React',
  live: 'https://textutils-utility.netlify.app/',
  video: TextUtils,
  future: [
    'Add a text translator for multiple languages',
    'Create a blog section with facts about text and language',
    'Implement multi-language UI support'
  ]
}
,
  {
  name: 'Weather Vibes',
  type: 'Tailwind | JS | Weather API | Map | Lottie',
  description: 'A weather app with Map built using Vanilla JS, Tailwind, and Lottie animations and deployed on Vercel.',
  github: 'https://github.com/gourigupta/weather-vibes', // update if needed
  live: 'https://weather-vibes-3x77.vercel.app/',
  video: WeatherVibes, // replace with actual video variable if needed
  future: [
    'Add multi-day and hourly forecast support',
    'Use geolocation to auto-detect the users location',
    'Implement a backend to store user-preferred locations'
  ]
}
];

function Project() {
  return (
    <section id="projects" className="projects-section py-18">
      <div className="container">
        <h1 className="text-center neon-text mb-5" style={{ color: '#ffff', fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,  fontSize: '2.8rem', paddingBottom: '3rem'}}>Projects</h1>
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} project={project} reverse={idx % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

export default Project;
