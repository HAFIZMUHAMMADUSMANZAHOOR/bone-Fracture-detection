import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const skills = [
    { name: 'System Performance', percentage: 87 },
    { name: 'Bone Fracture Detection System', percentage: 96 },
    { name: 'Detection Accuracy', percentage: 83 }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-800 text-white p-8 w-full mx-auto shadow-lg shadow-white/10 h-auto lg:h-[400px] gap-8">
      {/* Left Side - Image Box */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex justify-center items-center">
        <img 
          src="/images/about.jpg" 
          alt="Bone Fracture Detection" 
          className="w-full h-full lg:w-full lg:h-full object-cover rounded-xl shadow-lg shadow-yellow-400/30 lg:object-cover"
        />
      </div>

      {/* Right Side - About Content */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center space-y-4">
        <h2 className="text-3xl font-bold text-yellow-400">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
        </h2>
        
        <ul className="space-y-2 text-slate-200">
          <li>• Quickly and accurately detects fractures in X-ray images.</li>
          <li>• Ensures better patient outcomes.</li>
        </ul>
        
        <div className="space-y-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="text-slate-200">
                {skill.name}: <span className="font-semibold">{skill.percentage}%</span>
              </div>
              <div className="w-full lg:w-3/4 h-2 bg-slate-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="bg-yellow-400 hover:bg-blue-800 hover:text-white text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 mt-4 w-full sm:w-48 text-lg"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;