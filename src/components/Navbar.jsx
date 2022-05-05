import React, { useState } from 'react';
import logo from '../assets/Sherlogs-horiz-logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className='bg-main lg:flex lg:justify-between lg:shadow-lg'>
      <div className='bg-main flex justify-between items-center px-4 py-4'>
        <img src={logo} className='h-10' alt='logo'></img>
      </div>
    </nav>
  );
};

export default Navbar;
