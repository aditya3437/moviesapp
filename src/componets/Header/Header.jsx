import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <header>
      <div className='container flexSB'>
        <nav className='flexSB'>
          <div className='logo'>
            <img src='./Images/logo.png' alt='' />
          </div>
          <ul>
          <Link to='/'>Home</Link>
          <Link to='/series'>Series</Link>
          <Link to='/movies'>Movies</Link>
          <Link to='/contact'>Contact</Link>
          </ul>
          <button className='toggle'>
            <i  className='fa fa-bars'></i>
          </button>
        </nav>
        <div className='account flexSB'>
          <i className='fa fa-search'></i>
          <i className='fa fa-bell'></i>
          <Link to={"/signup"}> <i className='fa fa-user'></i></Link>
          <button>Subscribe Now</button>
        </div>
      </div>
    </header>
      
    </div>
 
  )
}

export default Header;
