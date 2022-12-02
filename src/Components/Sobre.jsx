import React from 'react';
import './Sobre.scss';
import CarouselContainer from './partials/Carousel'

import img1 from '../Assets/carousel/carousel_home_1.png'
import img2 from '../Assets/carousel/carousel_home_2.jpg'
import img3 from '../Assets/carousel/carousel_home_3.jpg'

export default function Sobre() {
  return (
    <>
      <CarouselContainer
        img1={img1}
        img2={img2}
        img3={img3}
        title1="Bem-vindo à Casa das Fechaduras"
        title2="Localizada no centro de Niterói"
        title3="Grande variedade de produtos"
        desc1="Utensílios para a casa é aqui."
        desc2="No centro comercial da cidade, área de fácil acesso para você."
        desc3="Contamos com mais de 1000 produtos diferentes, para satisfazer o seu pedido."
      />
    </>
  )
}