import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <ul className='navbar'>
    <li>
      <Link to="/">Photos</Link>
    </li>
    <li>
      <Link to="/favourites">Favourites</Link>
    </li>
  </ul>
)

export default Navbar;
