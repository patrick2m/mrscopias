import React from 'react';
import './wppButton.css';

import wppsvg from '../../Assets/wpp.svg'


const wppButton = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=5521975483289" target="_blanck">
        <img src={wppsvg} alt="Wpp" className='wppicon' />
      </a>
    </div>
  )
}

export default wppButton