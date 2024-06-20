// src/components/Home.js
import React from 'react';
import '../CSS/Home.css';
import ninef from '../Images/9f.jpg'; // Path to your image file
import balista from '../Images/Balista.jpg'
import blazer from '../Images/Blazer.jpg'
import senitnelxs from '../Images/SentinelXs.jpg'
import corquette from '../Images/CorquetteD10.jpg'
import vdm from '../Images/VDMLogo.png'
import oracle from '../Images/Oracle.jpg'
import felon from '../Images/Felon.jpg'
import blistareg from '../Images/BlistaReg.jpg'

const cars = [
  {
    id: 1,
    name: "9F",
    image: ninef,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '99mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$300,000',
  },
  {
    id: 2,
    name: 'Blazer',
    image: blazer,
    class: 'D',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '0mm',
    trunk: '0kg',
    glovebox: '150kg',
    price: '$7,900',
  },
  {
    id: 3,
    name: 'Sentinel XS',
    image: senitnelxs,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$85,000',
  },
  {
    id: 4,
    name: 'Corquette D10',
    image: corquette,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$250,000',
  },
  {
    id: 5,
    name: 'Blista Compact',
    image: balista,
    class: 'B',
    strikes: '0',
    transmission: 'Manual',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$9,000',
  },
  {
    id: 6,
    name: 'Oracle',
    image: oracle,
    class: 'B',
    strikes: '0',
    transmission: 'Automatic',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$19,995',
  },
  {
    id: 7,
    name: 'Felon',
    image: felon,
    class: 'B',
    strikes: '0',
    transmission: 'Automatic',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$25,995',
  },
  {
    id: 8,
    name: 'Blista',
    image: blistareg,
    class: 'B',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '41mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$48,995',
  },
];

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
