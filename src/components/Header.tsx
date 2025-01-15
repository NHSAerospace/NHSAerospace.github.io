import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <a href='#' className='title'>Northville Aerospace</a>
        <a href='#about'>ABOUT</a>
        <a href='#sponsors'>SPONSORS</a>
        <a href="#nasasli">NASA SLI</a>
        <a href='#awards'>AWARDS</a>
        <a href='#gallery'>GALLERY</a>
    </div>
  );
}

export default Header;