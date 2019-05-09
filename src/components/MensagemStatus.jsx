import React from 'react';

const MensagemStatus = props => {
  return (
    <div>
      <h1>Seja bem-vindo ao InfoCão!</h1>
      <p>Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.</p>

      <p>{props.status}</p>
    </div>
  )
}

export default MensagemStatus