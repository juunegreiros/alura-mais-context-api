import React from 'react';

import './styles/index.scss';
import CachorroSelecionado from './components/CachorroSelecionado';
import ListaCachorros from './components/ListaCachorros';
import Cabecalho from './components/Cabecalho';

const App = () => (
  <div className="container">
    <Cabecalho />
    <CachorroSelecionado />
    <ListaCachorros />
  </div>
)


export default App;
