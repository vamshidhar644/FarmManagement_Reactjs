import React, { useState } from 'react';

import MainNavbar from '../NavBars/MainNavbar';
import LoginNavbar from '../NavBars/LoginNavbar';

export default function Navbar(props) {

  console.log(props.checkstatus);
  
  return (
    <div>
      <MainNavbar/>
      {/* {status.checkstatus === 'MainNavbar' && <MainNavbar />} */}
      {/* {status.checkstatus === 'LoginNavbar' && <LoginNavbar />} */}
    </div>
  );
}
