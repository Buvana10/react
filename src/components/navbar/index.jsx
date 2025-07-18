import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 



function Navbar() {
  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Details', path: '/details' },
    { name: 'Course', path: '/course' },
  ];

  return (
    <div className="component">
      <h1> HELLO! </h1>
      <nav className="navbar">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path} className="nav-link">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
