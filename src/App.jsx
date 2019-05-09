import React from 'react';

import CachorroSelecionado from './components/CachorroSelecionado';
import ListaCachorros from './components/ListaCachorros';

import { buscaTodasInformacoes, buscaImagemPorRaca } from './api';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      racas: [],
      racaSelecionada: {}
    }

  }

  componentDidMount() {
    this.carregaInformacoesIniciais()
  }

  carregaInformacoesIniciais() {
    buscaTodasInformacoes().then(informacoes =>
      this.setState({racas: [...informacoes]})
    )
  }

  selecionaCachorro = raca => {
    buscaImagemPorRaca(raca)
      .then(imagem =>
        this.setState({racaSelecionada: {...this.state.racaSelecionada, imagem}})
      )
  }

  render() {
    console.log(this.state)
    return (
      <>
        <CachorroSelecionado cachorro={this.state.racaSelecionada} />
        <ListaCachorros cachorros={this.state.racas} selecionaCachorro={this.selecionaCachorro} />
      </>
    )
  }
}

export default App;
