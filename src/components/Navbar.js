import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Photos</Link>
    </li>
    <li>
      <Link to="/favourites">Favourites</Link>
    </li>
  </ul>
)

export default Navbar;
