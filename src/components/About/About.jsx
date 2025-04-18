import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const skills = [
    { name: 'System Performance', percentage: 87 },
    { name: 'Bone Fracture Detection System', percentage: 96 },
    { name: 'Detection Accuracy', percentage: 83 }
  ]

  return (
    <div className="about-container">
      {/* Left Side - Image Box */}
      <div className="image-box">
        <img src="/images/about.jpg" alt="Bone Fracture Detection" />
      </div>

      {/* Right Side - About Content */}
      <div className="about-content">
        <h2>
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </h2>
        <ul>
          <li>Quickly and accurately detects fractures in X-ray images.</li>
          <li>Ensures better patient outcomes.</li>
        </ul>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name">
                {skill.name}: {skill.percentage}%
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
        <button id="cta-button">Learn More</button>
      </div>
    </div>
  )
}

export default About
