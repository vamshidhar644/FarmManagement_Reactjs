import React, {useState} from 'react';

import MainNavbar from '../NavBars/MainNavbar'
import LoginNavbar from '../NavBars/LoginNavbar';

export default function Navbar() {
  
  const [active, setActive] = useState("LoginNavbar");
  

  return (
    <div>
    {active === "MainNavbar" && <MainNavbar/>}
    {active === "LoginNavbar" && <LoginNavbar/>}
    </div>
  );
}
