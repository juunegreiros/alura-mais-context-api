import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'

const Raca = props => {
  const racaFoiSelecionada = Boolean(props.racaSelecionada.name)

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca