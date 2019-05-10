import React from 'react';
import { connect } from 'react-redux';
import { adicionaRacas, adicionaRacaSelecionada, adicionaStatus } from './store/actions';

import './styles/index.scss';

import CachorroSelecionado from './components/CachorroSelecionado';
import ListaCachorros from './components/ListaCachorros';
import Cabecalho from './components/Cabecalho';

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
      .catch(erro => this.setState({
        status: 'Oops, algo deu errado no carregamento da página. Pode tentar novamente?'
      }))
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
      const infoSelecionada = this.state.racas.filter(infoRaca => infoRaca.name === raca)

      buscaImagemPorRaca(raca)
        .then(imagem => this.setState({
          racaSelecionada: {...this.state.racaSelecionada, imagem, ...infoSelecionada[0]},
          status: 'A imagem sempre será diferente, pode clicar quantas vezes quiser!'
        }))
        .catch(erro => {
          const eh404 = erro.response.status === 404;
          const mensagem = eh404 ? 'Não encontramos essa raça :(' : 'Oops, algo deu errado. Pode tentar novamente?'

          this.setState({status: mensagem})
        })
  }

  render() {
    return (
      <div className="container">
        <Cabecalho status={this.state.status} />
        <CachorroSelecionado cachorro={this.state.racaSelecionada} />
        <ListaCachorros cachorros={this.state.racas} selecionaCachorro={this.selecionaCachorro} />
      </div>
    )
  }
}

export default App;
