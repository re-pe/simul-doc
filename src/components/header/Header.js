import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Simul-Doc</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/documents">Documents</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
