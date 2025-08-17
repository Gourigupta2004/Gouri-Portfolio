import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tech-strip">
      <div className="tech-track">
        {[...iconsWithColors, ...iconsWithColors, ...iconsWithColors].map(
          ({ Icon, color }, i) => (
            <span key={i} className="tech-icon" style={{ color }}>
              <Icon
                style={{
                  fontSize: isMobile ? "50px" : "60px",
                  marginBottom: isMobile ? "30px" : "60px",
                }}
              />
            </span>
          )
        )}
      </div>
    </div>
  );
}
