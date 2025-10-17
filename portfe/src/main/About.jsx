import React from 'react'
import './user.css' // Import CSS file

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Me</h1>
        <p><strong>Name:</strong> T.K. Chandan</p>
        <p><strong>Course:</strong> BTECH</p>
        <p><strong>College:</strong> KL University</p>
        <p><strong>Field of Interest:</strong> Full Stack Development, Data Science, and Cloud (AWS & Azure)</p>
        
        <p><strong>Achievements:</strong></p>
        <ul>
          <li>🏆 Gold Medalist in Chess</li>
          <li>✅ Certified in MongoDB </li>
          <li>💻 Projects: Online Auction System, Employee Management System, Spring Boot Product Management</li>
        </ul>

        <p><strong>Hobbies:</strong> ♟ Playing chess, 🌍 following current affairs, 💡 exploring new technologies</p>
      </div>
    </div>
  )
}
