import React from 'react';
import './Header.css';

import imglogo from '../Assets/mrscopiaslogo.png';

const Header = () => {
  return (
    <div className='header-container' id='header'>
      <div className='header-wrapper'>
        <div>
          <a href='#header'>
            <img src={imglogo} alt="MRS Cópias" className='imglogo' />
          </a>
          <div className=''>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header