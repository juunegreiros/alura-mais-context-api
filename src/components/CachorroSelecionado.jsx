import React from 'react';

const CachorroSelecionado = props => {
  return (
    <div>
      {props.cachorro.name}
      <img src={props.cachorro.imagem} />
    </div>
  )
}

export default CachorroSelecionado