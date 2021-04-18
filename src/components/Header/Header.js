import React from 'react';
import img from './sejal.jpg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img className="image" src={img} height="200px" width="200px" />
      <div className="profile">
        <h1 className="hello">Hello!</h1>
        <h2>I am Sejal Jain</h2>
      </div>
    </div>
  );
}

export default Header;
