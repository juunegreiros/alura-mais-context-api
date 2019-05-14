import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'

const Raca = props => {
  const racaFoiSelecionada = Boolean(props.raca.name)

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada {...props} />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca