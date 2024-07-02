import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <a href='#' className='title'>NHS Aerospace</a>
        <a href='#about'>About</a>
        <a href='#sponsors'>Sponsors</a>
        <a href='#awards'>Awards</a>
        <a href='#gallery'>Gallery</a>
    </div>
  );
}

export default Header;