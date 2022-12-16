import React from 'react';
import './Header.scss';

import imglogo from '../Assets/mrscopiaslogo.png';

const Header = () => {
  const componenteLocais = document.querySelector('#locais-container');
 
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


  // const alturaLocais = componenteLocais.offsetTop;

  console.log(componenteLocais);
 

  window.addEventListener("scroll", () => { ScrollYValue(window.pageYOffset)});

  function ScrollYValue(scrollY) {
    checkScrollForNavbar(scrollY);
    checkScrollForNavbarMenu(scrollY);
  };

  function irParaElemento(scrollHeight) {
    window.scroll(0, scrollHeight)
  }

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
                <button 
                  onClick={() => {irParaElemento(0)}} 
                  className='nav-item'
                >
                  Início
                </button>
                <button 
                  // onClick={() => {irParaElemento(alturaLocais)}} 
                  className='nav-item'
                >
                  Locais
                </button>
                <button 
                  onClick={() => {irParaElemento(1530)}} 
                  className='nav-item'
                >
                  Produtos
                </button>
                <button 
                  onClick={() => {irParaElemento(1000)}} 
                  className='nav-item'
                >
                  Contato
                </button>
              </div>

              <div className='nav-top-button-container'>
                <button  onClick={() => {irParaElemento(0)}} className='nav-top-button'>
                  Voltar ao Topo
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default Header;