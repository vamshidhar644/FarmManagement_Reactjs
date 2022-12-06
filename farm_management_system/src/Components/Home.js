import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import sanityClient from '../client';
import '../Styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"] {title, subtitle, image {asset -> {_id, url}, alt}}`
      )
      .then((HomeData) => setHomeData(HomeData))
      .catch(console.error);
  });
  // console.log(HomeData)

  
  function ToLogin() {
    navigate('/login');
  }
  function ToRegister() {
    navigate('/register');
  }
  return (
    <div>
      {HomeData.map((homedata) => (
        <div>
          <div className="Home-Container">
            <img src={homedata.image.asset.url} alt="" />
            <div className="HomeHeader">
              <h1>{homedata.title}</h1>
              <h4>{homedata.subtitle}</h4>
            </div>
            <div className="HomeBody">
              <h4>Farm Management</h4>
              <h4>Employee Management</h4>
              <h4>Growth Management</h4>
              <h4>Medicine Management</h4>
              <h4>Plants Management</h4>
              <h4>Treatment Management</h4>
            </div>

            <div className="SignInSignUp">
              <h5 onClick={ToRegister}>Register</h5>
              <h5 onClick={ToLogin}>Login</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
