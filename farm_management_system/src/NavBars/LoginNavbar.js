import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { GiFarmTractor } from 'react-icons/gi';
import '../Styles/Navbar.css';

export default function LoginNavbar() {
  const navigate = useNavigate();
  function ToHome() {
    navigate('/');
  }
  function ToServices() {
    navigate('/services');
  }
  function ToAbout() {
    navigate('/about');
  }
  function ToContact() {
    navigate('/contact');
  }

  return (
    <div className="navbar-container">
      <div className="nav-item logo">
        <GiFarmTractor />
      </div>
      <ul className="navi-items">
        <li className="item">
          <p onClick={ToHome}>Home</p>
        </li>
        <li className="item">
          <p onClick={ToServices}>Products</p>
        </li>
        <li className="item">
          <p onClick={ToAbout}>About</p>
        </li>
        <li className="item">
          <p onClick={ToContact}>Contact us</p>
        </li>
        <li className="item">
          <p onClick={ToHome}>Log out</p>
        </li>
      </ul>
    </div>
  );
}
