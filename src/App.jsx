import React from 'react'
import './styles/index.scss'

import Raca from './components/Raca'
import ListaRacas from './components/ListaRacas'
import Cabecalho from './components/Cabecalho'

const App = () => (
  <div className="container">
    <Cabecalho />
    <Raca />
    <ListaRacas />
  </div>
)

export default App
