// src/data/cars.js

import ninef from '../Images/9f.jpg';
import balista from '../Images/Balista.jpg';
import blazer from '../Images/Blazer.jpg';
import senitnelxs from '../Images/SentinelXs.jpg';
import corquette from '../Images/CorquetteD10.jpg';
import oracle from '../Images/Oracle.jpg';
import felon from '../Images/Felon.jpg';
import blistareg from '../Images/BlistaReg.jpg';
import penumbra from '../Images/Penumbra.jpg';
import gauntletone from '../Images/Gauntlet1.jpg'


const carData = [
   {
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
    name: 'Sentinel XS',
    image: senitnelxs,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$85,000',
    state: 'available', 
  },
  {
    name: 'Corquette D10',
    image: corquette,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$250,000',
    state: 'available', 
  },
  {
    name: 'Blista Compact',
    image: balista,
    class: 'B',
    strikes: '0',
    transmission: 'Manual',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$9,000',
    state: 'available', 
  },
  {
    name: 'Oracle',
    image: oracle,
    class: 'B',
    strikes: '0',
    transmission: 'Automatic',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$19,995',
    state: 'available', 
  },
  {
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
    name: 'Felon',
    image: felon,
    class: 'B',
    strikes: '0',
    transmission: 'Automatic',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$25,995',
    state: 'available', 
  },
  {
    name: 'Blista',
    image: blistareg,
    class: 'B',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '41mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$48,995',
    state: 'available', 
  },
  {
    name: 'Penumbra',
    image: penumbra,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '0mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$129,995',
    state: 'available', 
  },
    {
    name: 'Gauntlet',
    image: gauntletone,
    class: 'A',
    strikes: '0',
    transmission: 'Sequential',
    turbo: '60mm',
    trunk: '400kg',
    glovebox: '150kg',
    price: '$115,000', 
  },
];

// Add IDs dynamically
const cars = carData.map((car, index) => ({ ...car, id: index + 1 }));

export default cars;
