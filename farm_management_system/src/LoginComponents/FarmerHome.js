import React from 'react'
import { useNavigate } from 'react-router';
import '../Styles/OwnerHome.css'

const FarmerHome = () => {

  const navigate = useNavigate();
  function ToLogout() {
    navigate('/');
  }
  function ToAddProduct(){
    navigate('/addproduct')
  }

  function ToProducts() {
    navigate('/services');
  }
  
  return (
    <div className='OwnerhomeContainer'>
      <h1>Hello <span></span></h1>
      <h3>Farmer</h3>
      <div className='OwnerhomeBody'>
        <ul>
          <li onClick={ToProducts}><h4>Buy Products</h4></li>
          <li onClick={ToLogout}><h4>Logout</h4></li>
        </ul>
      </div>
    </div>
  )
}

export default FarmerHome