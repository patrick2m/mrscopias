import React, { useEffect, useState } from 'react';
import './Header.scss';

import imglogo from '../Assets/mrscopiaslogo.png';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  function checkScroll(scrollY) {
    const navbar = document.getElementById('header-nav');
    if (scrollY > 80) {
      navbar.classList.add('header-nav-fixo');
    } else if (scrollY <= 80) {
      navbar.classList.remove('header-nav-fixo');
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {setScrollY(window.pageYOffset)});
    checkScroll(scrollY);
  }, [scrollY]);

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
      <div className='header-nav' id='header-nav'>
        <div className='header-nav-menu'>
          <a href=" ">Início</a>
          <a href=" ">Produtos</a>
          <a href=" ">Contato</a>
        </div>
        <div className='header-nav-top-button'>
          <a href=" ">
            Voltar ao Topo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;