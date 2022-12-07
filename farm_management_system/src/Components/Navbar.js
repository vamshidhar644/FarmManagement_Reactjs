import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { GiFarmTractor } from 'react-icons/gi';
import '../Styles/Navbar.css';

export default function Navbar({ checkstatus }) {
  const navigate = useNavigate();
  function ToHome() {
    navigate('/');
  }
  function ToProducts() {
    navigate('/services');
  }
  function ToAbout() {
    navigate('/about');
  }
  function ToContact() {
    navigate('/contact');
  }
  function ToLogin() {
    navigate('/login');
  }
  function ToRegister() {
    navigate('/register');
  }

  // console.log(checkstatus);

  return (
    <div className="navbar-container">
      <div className="nav-item logo">
        <GiFarmTractor />
      </div>
      <ul className="navi-items">
        <li className="item" onClick={ToHome}>
          <p>Home</p>
        </li>
        <li className="item" onClick={ToProducts}>
          <p>Products</p>
        </li>
        <li className="item" onClick={ToContact}>
          <p>Contact us</p>
        </li>
      </ul>
    </div>
  );
}
