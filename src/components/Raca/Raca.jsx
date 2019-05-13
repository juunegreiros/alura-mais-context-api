import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'

const Raca = props => {
  const racaFoiSelecionada = Boolean(props.raca.name)

  if (racaFoiSelecionada) {
    return (<RacaSelecionada {...props} />)
  } else {
    return (<RacaNaoSelecionada />)
  }
}

export default Raca