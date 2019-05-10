import React from 'react';
import './styles.scss';

const CachorroSelecionado = props => {
  const visivel = props.cachorro.hasOwnProperty('name') ? 'visivel' : 'invisivel';
  return (
    <div className={`cachorro-selecionado ${visivel}`}>
      <h2 className="cachorro-selecionado__nome">
        {props.cachorro.name}
      </h2>
      <p className="cachorro-selecionado__info">
        <span className="cachorro-selecionado__info__descricao">
          Tempo de vida:
        </span>
        {props.cachorro.life_span}
      </p>
      <img
        alt="Imagem de cachorro"
        className="cachorro-selecionado__imagem"
        src={props.cachorro.imagem}
      />
    </div>
  )
}

export default CachorroSelecionado