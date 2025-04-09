import { useEffect } from 'react';
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos"; // AOS library

const SkillCard = ({ title, skills }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slightly longer animation duration
      easing: 'ease-out', // Different easing function
      once: true, // Animation only triggers once
      mirror: false, // Prevent mirror effect when scrolling back up
    });
  }, []);

  return (
    <div
      data-aos="zoom-in" // Use zoom-in animation
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <h3 className="text-3xl font-bold text-white mb-6 text-center">{title}</h3>
      <ul className="list-disc pl-6 space-y-3 text-white text-lg">
        {skills.map((skill, index) => (
          <li key={index} className="hover:text-yellow-300 transition-colors">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
