import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import logo from '../assets/Sherlogs-horiz-logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className='bg-main lg:flex lg:justify-between lg:shadow-lg'>
      <div className='bg-main flex justify-between items-center px-4 py-4'>
        <img src={logo} className='h-10' alt='logo'></img>
        <div className='lg:hidden pt-2'>
          {open ? (
            <CgMenu
              className='text-main_eighty'
              fontSize={28}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <CgMenu
              className='text-main_eighty'
              fontSize={28}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </div>
      <div className={open ? 'hidden px-4 lg:block' : 'block px-4 lg:block'}>
        {/* <a
          href='#'
          style={{ whiteSpace: 'nowrap', fontSize: '18px' }}
          className='text-bright-turquoise font-semibold tracking-tight duration-300 block mr-3 ml-3 mt-3 pr-2 pl-2 lg:inline-block rounded hover:border-b-4 border-bright-turquoise pb-1 pt-1'>
          Home
        </a>
        <a
          href='#'
          style={{ whiteSpace: 'nowrap', fontSize: '18px' }}
          className='text-bright-turquoise font-semibold tracking-tight duration-300 block mr-3 ml-3 mt-3 pl-2 pr-2 lg:inline-block rounded hover:border-b-4 border-bright-turquoise pb-1 pt-1'>
          Account
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
