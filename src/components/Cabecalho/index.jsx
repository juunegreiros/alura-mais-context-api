import React from 'react';
import './styles.scss';

const Cabecalho = props => {
  return (
    <div className="cabecalho">
      <h1 className="cabecalho__titulo">Seja bem-vindo ao InfoCão</h1>

      <p className="cabecalho__texto">Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.</p>

      <p className="cabecalho__status">{props.status}</p>
    </div>
  )
}

export default Cabecalho