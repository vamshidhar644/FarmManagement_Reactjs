import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import OwnerHome from './LoginComponents/OwnerHome';
import FarmerHome from './LoginComponents/FarmerHome';
import AddProducts from './LoginComponents/AddProducts';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/ownerHome" element={<OwnerHome />} />
      <Route path="/farmerHome" element={<FarmerHome />} />
      <Route path="/addproduct" element={<AddProducts />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  // <App2/>
);
