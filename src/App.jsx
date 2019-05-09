import React from 'react';

import CachorroSelecionado from './components/CachorroSelecionado';
import ListaCachorros from './components/ListaCachorros';
import MensagemStatus from './components/MensagemStatus';

import { buscaTodasInformacoes, buscaImagemPorRaca, buscaTodasRacas } from './api';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      racas: [],
      racaSelecionada: {},
      status: 'Você ainda não selecionou nenhum cachorro :('
    }

  }

  componentDidMount() {
    this.carregaInformacoesIniciais()
  }

  carregaInformacoesIniciais() {
    buscaTodasInformacoes()
      .then(informacoes => {
        this.carregaListaRacas(informacoes)
      })
      .catch(erro => this.setState({ status: 'Oops, algo deu errado no carregamento da página. Pode tentar novamente?'}))
    }

    carregaListaRacas(informacoes) {
      buscaTodasRacas()
        .then(racas => {
          const listaRacas = informacoes.filter(
            informacao => racas.includes(informacao.name.toLowerCase())
          )
          this.setState({ racas: [...listaRacas] })
        })
    }

    selecionaCachorro = raca => {
      buscaImagemPorRaca(raca)
      .then(imagem => this.setState({
        racaSelecionada: {...this.state.racaSelecionada, imagem},
        status: 'A imagem sempre será diferente, pode clicar quantas vezes quiser!'
      }))
      .catch(erro => {
        const eh404 = erro.response.status === 404;
        const mensagem = eh404 ? 'Não encontramos essa raça :(' : 'Oops, algo deu errado. Pode tentar novamente?'

        this.setState({status: mensagem})
      })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <MensagemStatus status={this.state.status} />
        <CachorroSelecionado cachorro={this.state.racaSelecionada} />
        <ListaCachorros cachorros={this.state.racas} selecionaCachorro={this.selecionaCachorro} />
      </>
    )
  }
}

export default App;
