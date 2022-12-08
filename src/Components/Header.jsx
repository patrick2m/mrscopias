import React, { useEffect, useState } from 'react';
import './Header.scss';

import imglogo from '../Assets/mrscopiaslogo.png';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  function checkScrollForNavbar(scrollY) {
    const navbar = document.getElementById('header-nav');
    const carousel = document.getElementById('carousel-container');
    if (scrollY > 80) {
      navbar.classList.add('header-nav-fixo');
      carousel.classList.add('margintop');
    } else if (scrollY <= 80) {
      navbar.classList.remove('header-nav-fixo');
      carousel.classList.remove('margintop');
    }
  }

  function checkScrollForNavbarMenu(scrollY) {
    // Função que adiciona classe css que modifica cor do item no menu
    // de acordo com a altura da página
  }

  window.addEventListener("scroll", () => {setScrollY(window.pageYOffset)});

  useEffect(() => {
    checkScrollForNavbar(scrollY);
    checkScrollForNavbarMenu(scrollY);
    
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

      <div className='nav-bar' id='header-nav'>
        <div className='container-fluid' >
          <nav className='nav-menu'>
            <div className='nav-menu-div'>
              <div className='nav-menu-buttons'>
                <a href=" " className='nav-item'>Início</a>
                <a href=" " className='nav-item'>Produtos</a>
                <a href=" " className='nav-item'>Contato</a>
              </div>

              <div className='nav-top-button-container'>
                <a href=" " className='nav-top-button'>
                  Voltar ao Topo
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default Header;