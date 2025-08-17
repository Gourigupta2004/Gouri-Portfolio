import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const iconsWithColors = [
  { Icon: FaHtml5, color: '#E34F26' },
  { Icon: FaCss3Alt, color: '#1572B6' },
  { Icon: FaJsSquare, color: '#F7DF1E' },
  { Icon: FaReact, color: '#61DAFB' },
  { Icon: FaNodeJs, color: '#339933' },
  { Icon: SiMongodb, color: '#47A248' },
  { Icon: FaGit, color: '#F05032' },
  { Icon: FaGithub, color: '#181717' },
];

export default function TechStrip() {
  return (
    <div className="tech-strip">
      <div className="tech-track">
        {[...iconsWithColors, ...iconsWithColors, ...iconsWithColors].map(({ Icon, color }, i) => (
          <span key={i} className="tech-icon" style={{ color }}>
            <Icon style={{ fontSize: '60px', marginBottom: '60px' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
