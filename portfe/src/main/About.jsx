import React from 'react'
import './user.css' // Import CSS file

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Me</h1>
        <p><strong className="backend-data-label">Name:</strong> <span className="backend-data-value">T.K. Chandan</span></p>
        <p><strong className="backend-data-label">Course:</strong> <span className="backend-data-value">BTECH</span></p>
        <p><strong className="backend-data-label">College:</strong> <span className="backend-data-value">KL University</span></p>
        <p><strong className="backend-data-label">Field of Interest:</strong> <span className="backend-data-description">Full Stack Development, Data Science, and Cloud (AWS & Azure)</span></p>
        
        <p><strong className="backend-data-label">Achievements:</strong></p>
        <ul className="about-list-enhanced">
          <li><span className="achievement-icon">🏆</span> <span className="backend-data-value">Gold Medalist in Chess</span></li>
          <li><span className="achievement-icon">✅</span> <span className="backend-data-value">Certified in MongoDB</span></li>
          <li><span className="achievement-icon">💻</span> <span className="backend-data-value">Projects: Online Auction System, Employee Management System, Spring Boot Product Management</span></li>
        </ul>

        <p><strong className="backend-data-label">Hobbies:</strong> <span className="backend-data-value">♟ Playing chess, 🌍 following current affairs, 💡 exploring new technologies</span></p>
      </div>
    </div>
  )
}
