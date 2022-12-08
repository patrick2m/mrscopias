import React from 'react'
import './Locais.scss';


const Locais = () => {
  return (
    <div className='locais-container'>
      <div>
        <h1>
          Texto Grande falando sobre a MRS estar espalhada garantindo seu atendimento com qualidade aos estudantes de niterói
        </h1>
      </div>
      <div className='faculdades-container'>
        <div className='faculdade-esquerda'>
          <h2 className='titulo-faculdade'>
            Nome da faculdade
          </h2>
          <p className='subtitulo-faculdade'>
            Texto falando sobre onde fica a Uff Gragoatá
          </p>
        </div>
        <div className='faculdade-meio'>
          <h2 className='titulo-faculdade'>
            Nome da faculdade
          </h2>
          <p className='subtitulo-faculdade'>
            Texto falando sobre onde fica a Anhaguera Niterói
          </p>
        </div>
        <div className='faculdade-direita'>
          <h2 className='titulo-faculdade'>
            Nome da faculdade
          </h2>
          <p className='subtitulo-faculdade'>
            Texto falando sobre onde fica a Famath Niterói
          </p>
        </div>

      </div>
    </div>
  )
}

export default Locais;