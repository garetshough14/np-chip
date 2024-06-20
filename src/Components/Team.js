// src/components/Team.js
import React from 'react';
import '../CSS/Home.css';
import vdm from '../Images/VDMLogo.png';
import employees from '../data/Employees';

function Team() {
    return (
        <div className='main-container'>
          <div className='main-logo-container'>
            <img className='main-logo' src={vdm} alt="Car" />
          </div>
          <div className='car-wrapper'>
            {/* Map over the cars array to render each car dynamically */}``
            {employees.map(employees => (
              <div key={employees.id} className='car-container'>
                <img className='car-image' src={employees.image} alt="Car" />
                <div className='description-container'>
                  <p>Name: {employees.name}</p>
                  <p>Title: {employees.title}</p>
                  <p>Number: {employees.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Team;





