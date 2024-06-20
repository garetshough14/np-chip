// src/components/Home.js
import React from 'react';
import '../CSS/Home.css';
import vdm from '../Images/VDMLogo.png';
import cars from '../data/Cars';

function Home() {
  return (
    <div className='main-container'>
      <div className='main-logo-container'>
        <img className='main-logo' src={vdm} alt="Car" />
      </div>
      <div className='contact-wrapper'>
        <div className='contact-container'>
          <p className='contact'>Text or Call Chip (420) 971-5077</p>
        </div>
        <div className='contact-container'>
          <p className='contact'>Text or Call Vinny (420) 927-6221</p>
        </div>
      </div>
      <div className='car-wrapper'>
        {/* Map over the cars array to render each car dynamically */}
        {cars.map(car => (
          <div key={car.id} className='car-container'>
            <img className='car-image' src={car.image} alt="Car" />
            <div className='description-container'>
              <p>{car.name}</p>
              <p>Transmission: {car.transmission}</p>
              <p>Turbo: {car.turbo}</p>
              <p>Trunk: {car.trunk}</p>
              <p>Glovebox: {car.glovebox}</p>
              <p>Class: {car.class}</p>
              <p>Strikes: {car.strikes}</p>
            </div>
            <div className='price-wrapper'>
              <div className='price-container'>
                <div className='car-price'>Price {car.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
