// src/components/Team.js
import React from 'react';
import '../CSS/Team.css'; // Import the new CSS file
import vdm from '../Images/VDMLogo.png';
import employees from '../data/Employees';

function Team() {
  return (
    <div className='team-main-container'>
      <div className='team-logo-container'>
        <img className='team-logo' src={vdm} alt="VDM Logo" />
      </div>
      <div className='team-wrapper'>
        {/* Map over the employees array to render each employee dynamically */}
        {employees.map(employee => (
          <div key={employee.id} className='team-container'>
            <img className='team-image' src={employee.image} alt="Employee" />
            <div className='team-description-container'>
              <p className='team-name-container'>{employee.name}</p>
              <p className='team-title-container'>{employee.title}</p>
              <p className='team-number-container'>{employee.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
