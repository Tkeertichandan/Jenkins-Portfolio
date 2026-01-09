import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "./user.css"; // reuse the same card/grid styles

export default function UserViewEducation() {
  const [educationList, setEducationList] = useState([]);
  const [error, setError] = useState("");

  const fetchEducation = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewalleducation`);
      setEducationList(response.data);
    } catch (error) {
      setError("Failed to fetch education records");
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div className="user-view-container">
      <h2>Education Records</h2>
      {error && <p className="user-message error">{error}</p>}

      {educationList.length === 0 ? (
        <p style={{ textAlign: "center" }}>No education records available</p>
      ) : (
        <div className="user-card-grid">
          {educationList.map((edu) => (
            <div key={edu.id} className="user-card">
              <h3 className="backend-data-title">{edu.name}</h3>
              <p>
                <strong className="backend-data-label">Category:</strong> <span className="backend-data-value">{edu.category}</span>
              </p>
              <p>
                <strong className="backend-data-label">Place:</strong> <span className="backend-data-value">{edu.place}</span>
              </p>
              <p>
                <strong className="backend-data-label">Start Date:</strong> <span className="backend-data-value">{edu.startdate}</span>
              </p>
              <p>
                <strong className="backend-data-label">End Date:</strong> <span className="backend-data-value">{edu.enddate}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
