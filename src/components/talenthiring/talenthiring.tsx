import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
//import '../index.css'; // Optional: Only if global styles are needed here

const TalentHiring: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'TalentSphere | Expert Talent Acquisition';
  }, []);

  // Inject keyframe animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .animate-fade-in {
        animation: fadeIn 1s ease forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans">
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default TalentHiring;
