import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className='bg-dark-cyan lg:flex lg:justify-between lg:shadow-lg'>
      <div className='bg-dark-cyan flex justify-between items-center px-4 py-4'>
        <div
          style={{ whiteSpace: 'nowrap' }}
          className='text-bright-turquoise ml-3 lg:ml-4 bold mt-1 font-semibold text-2xl tracking-tight'>
          Sherlogs
        </div>
        <div className='lg:hidden pt-2'>
          {open ? (
            <CgMenu
              className='text-tomato'
              fontSize={28}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <CgMenu
              className='text-tomato'
              fontSize={28}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </div>
      <div className={open ? 'hidden px-4 lg:block' : 'block px-4 lg:block'}>
        <a
          href='#'
          style={{ whiteSpace: 'nowrap', fontSize: '18px' }}
          className='text-bright-turquoise duration-300 block mr-3 ml-3 lg:inline-block  rounded pr-2 pl-2 mt-3 hover:border-b-4 border-tomato pb-1 pt-1'>
          Home
        </a>
        <a
          href='#'
          style={{ whiteSpace: 'nowrap', fontSize: '18px' }}
          className='text-bright-turquoise duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2 hover:border-b-4  mt-3 hover:border-b-4 border-tomato pb-1 pt-1'>
          Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
