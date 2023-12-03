import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='fixed z-10 flex w-full  justify-center bg-white py-2  shadow-lg border'>
        <div className='px-3'>
          <ul className='items-center gap-5 flex flex-row'>
            <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
            <Link to='/favorites'>Favorites</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
