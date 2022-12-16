import React from 'react';
import './Locais.scss';

import imgUffGragoata from '../Assets/locais/uffB.jpg';
import imgAnhaguera from '../Assets/locais/anhaguera.jpg';
import imgFamath from '../Assets/locais/famath.jpg';

const Locais = () => {
  return (
    <div className='locais-container' id='locais-container'>
      <div className='locais-intro'>
        <h1 className='locais-titulo'>
          Texto Grande falando sobre a MRS estar espalhada garantindo seu atendimento com qualidade aos estudantes de niterói
        </h1>
      </div>
      <div className='faculdades-container'>
        <div className='faculdade'>
          <h2 className='titulo-faculdade'>
            Uff gragoatá
          </h2>
          <p className='subtitulo-faculdade'>
            Localizada no bloco B ( Instituto de Letras ) no campo do gragoatá, a MRS cópias oferece aos universitários os serviços que os ajudam a evoluir.
          </p>
          <img 
            src={imgUffGragoata} 
            alt="Faculdade Uff Gragoatá"
            className='faculdade-image'
          />
        </div>
        <div className='faculdade'>
          <h2 className='titulo-faculdade'>
            Anhaguera Niterói
          </h2>
          <p className='subtitulo-faculdade'>
            Localizada na Anhanguera Niterói, próximo ao Terminal Rodoviário no Centro de niterói, a MRS Cópias oferece os serviços necessários aos alunos e professores desse instituto de ensino com 20 anos de experiência.
          </p>
          <img 
            src={imgAnhaguera} 
            alt="Faculdade Anhanguera Niterói"
            className='faculdade-image'
          />
        </div>
        <div className='faculdade'>
          <h2 className='titulo-faculdade'>
            Famath Niterói
          </h2>
          <p className='subtitulo-faculdade'>
            Localizada em São Domingos, a faculdade Maria Thereza, instituição privada de ensino superior com 46 anos anos também possui sua loja da MRS Cópias.
          </p>
          <img 
            src={imgFamath} 
            alt="Faculdade Famath Niterói"
            className='faculdade-image'
          />
        </div>

      </div>
    </div>
  )
}

export default Locais;