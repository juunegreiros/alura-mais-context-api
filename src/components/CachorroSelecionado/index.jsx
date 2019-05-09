import React from 'react';
import './styles.scss';

import { RacaSelecionadaContext } from '../../context/index';

const CachorroSelecionado = () => (
  <RacaSelecionadaContext.Consumer>
    {({ name, life_span, imagem}) => {
      const visivel = name ? 'visivel' : 'invisivel';

      return (
        <div className={`cachorro-selecionado ${visivel}`}>
          <h2 className="cachorro-selecionado__nome">
            {name}
          </h2>
          <p className="cachorro-selecionado__info">
            <span className="cachorro-selecionado__info__descricao">
              Tempo de vida:
            </span>
            {life_span}
          </p>
          <img
            alt="Imagem de cachorro"
            className="cachorro-selecionado__imagem"
            src={imagem}
          />
        </div>
      )
    }}
  </RacaSelecionadaContext.Consumer>
)

export default CachorroSelecionado