import React from 'react';
import '../CSS/Home.css';
import ninef from '../Images/9f.jpg'; // Path to your image file

const cars = [
  {
    id: 1,
    image: ninef,
    class: 'A',
    strikes: '1',
    transmission: 'Sequential',
    turbo: '100mm',
    trunk: '150kg',
    glovebox: '150kg',
    price: '$5,000',
  },
  
];

function Home() {
  return (
    <div className='main-container'>
      <div className='car-wrapper'>
        {/* Map over the cars array to render each car dynamically */}
        {cars.map(car => (
          <div key={car.id} className='car-container'>
            <img className='car-image' src={car.image} alt="Car" />
            <div className='description-container'>
              <p>Transmission: {car.transmission}</p>
              <p>Turbo: {car.turbo}</p>
              <p>Trunk: {car.trunk}</p>
              <p>Glovebox: {car.glovebox}</p>
              <p>Class: {car.class}</p>
              <p>strikes: {car.strikes}</p>
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