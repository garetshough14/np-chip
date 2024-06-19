import React from 'react';
import '../CSS/Home.css';
import ninef from '../Images/9f.jpg'; // Path to your image file
import balista from '../Images/Balista.jpg'
import blazer from '../Images/Blazer.jpg'
import senitnelxs from '../Images/SentinelXs.jpg'
import corquette from '../Images/CorquetteD10.jpg'
import vdm from '../Images/VDMLogo.png'

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
    name: 'Balista Compact',
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
    id: 4,
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
    id: 5,
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
  
];

function Home() {
  return (
    <div className='main-container'>
          <div className='main-logo-container'>
            <img className='main-logo' src={vdm} alt="Car" />
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
      <div className='main-container'>
      <div className='contact-wrapper'>
        <div className='contact-container'>
          <div className='contact'>Text or Call Chip (420) 971-5077</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;