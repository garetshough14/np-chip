import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

function NavBar() {
  return (
    <div className='nav-container'>
      <Link className='nav-divs' to="/">Home</Link>
      {/* <Link to="/about">About</Link> */}
      <Link className='nav-divs' to="/team">Team</Link>
    </div>
  );
}

export default NavBar;