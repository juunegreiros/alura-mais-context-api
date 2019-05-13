import React from 'react'

const valorPadrao = {
  racas: [],
  selecionaRaca: () => {}
}

const RacasContext = React.createContext(valorPadrao)

export default RacasContext