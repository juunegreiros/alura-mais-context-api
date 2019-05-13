import React from 'react'
import './styles/index.scss'

import Raca from './components/Raca'
import ListaRacas from './components/ListaRacas'
import Cabecalho from './components/Cabecalho'

import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from './api'

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
    buscaSobreRacas()
      .then(informacoes => {
        this.carregaListaRacas(informacoes)
      })
      .catch(erro => this.setState({
        status: 'Oops, algo deu errado no carregamento da página. Pode tentar novamente?'
      }))
    }

    carregaListaRacas(sobreRacas) {
      buscaTodasRacas()
        .then(racas => {
          const listaRacasMostradas = sobreRacas.filter(
            sobre => racas.includes(sobre.name.toLowerCase())
          )
          this.setState({ racas: [...listaRacasMostradas] })
        })
    }

    selecionaRaca = raca => {
      const infoSelecionada = this.state.racas.filter(infoRaca => infoRaca.name === raca)

      buscaImagemPorRaca(raca)
        .then(imagem => this.setState({
          racaSelecionada: {...this.state.racaSelecionada, imagem, ...infoSelecionada[0]},
          status: 'A imagem sempre será diferente, pode clicar quantas vezes quiser!'
        }))
        .catch(erro => {
          const eh404 = erro.response.status === 404
          const mensagem = eh404 ? 'Não encontramos essa raça :(' : 'Oops, algo deu errado. Pode tentar novamente?'

          this.setState({status: mensagem})
        })
  }

  render() {
    return (
      <div className="container">
        <Cabecalho status={this.state.status} />
        <Raca raca={this.state.racaSelecionada} />
        <ListaRacas racas={this.state.racas} selecionaRaca={this.selecionaRaca} />
      </div>
    )
  }
}

export default App
