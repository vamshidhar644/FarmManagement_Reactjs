import React from 'react'
import { useNavigate } from 'react-router';
import '../Styles/OwnerHome.css'

const OwnerHome = () => {

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
      <h3>Owner</h3>
      <div className='OwnerhomeBody'>
        <ul>
          <li onClick={ToAddProduct}><h4>Add Product</h4></li>
          <li onClick={ToProducts}><h4>View Products</h4></li>
          <li onClick={ToLogout}><h4>Logout</h4></li>
        </ul>
      </div>
    </div>
  )
}

export default OwnerHome