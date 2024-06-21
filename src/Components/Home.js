// src/components/Home.js

import React from 'react';
import '../CSS/Home.css';
import vdm from '../Images/VDMLogo.png';
import cars from '../data/Cars';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='main-container'>
      <div className='main-logo-container'>
        <img className='main-logo' src={vdm} alt="Car" />
      </div>
      <div className='contact-wrapper'>
        <div className='contact-container'>
        <Link className='contact' to="/team">Click Here to Contact Us</Link>
        </div>
      </div>
      <div className='car-wrapper'>
        {cars.map(car => (
          <div key={car.id} className='car-container'>
            <img className='car-image' src={car.image} alt="Car" />
            <p className='car-name'>{car.name}</p>
            <div className='description-container'>
              <p>Transmission: {car.transmission}</p>
              <p>Turbo: {car.turbo}</p>
              <p>Trunk: {car.trunk}</p>
              <p>Glovebox: {car.glovebox}</p>
              <p>Class: {car.class}</p>
              <p>Strikes: {car.strikes}</p>
            </div>
            {car.state === 'available' ? (
              <div className='price-wrapper'>
                <div className='price-container'>
                  <div className='car-price'>Price {car.price}</div>
                </div>
              </div>
            ) : (
              <div className='sold-price-wrapper'>
              <div className='sold-price-container'>
                <p className='car-price'>SOLD</p>
              </div>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
