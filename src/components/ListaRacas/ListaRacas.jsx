import React from 'react'
import './styles.scss'

import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from '../../api'

class ListaRacas extends React.Component {
  componentDidMount() {
    this.carregaInformacoesIniciais()
  }

  carregaInformacoesIniciais() {
    buscaSobreRacas()
      .then(informacoes => {
        this.carregaListaRacas(informacoes)
      })
      .catch(erro => this.props.adicionaStatus('Oops, algo deu errado no carregamento da página. Pode tentar novamente?'))
  }

  carregaListaRacas(sobreRacas) {
    buscaTodasRacas()
      .then(racas => {
        const listaRacasMostradas = sobreRacas.filter(
          sobre => racas.includes(sobre.name.toLowerCase())
        )
        this.props.adicionaRacas([...listaRacasMostradas])
      })
  }

  selecionaRaca = raca => {
    const infoSelecionada = this.props.racas.filter(infoRaca => infoRaca.name === raca)

    buscaImagemPorRaca(raca)
      .then(imagem => {
        this.props.adicionaRacaSelecionada({imagem, ...infoSelecionada[0] })
        this.props.adicionaStatus('A imagem sempre será diferente, pode clicar quantas vezes quiser!')
      })
      .catch(erro => {
        const eh404 = erro.response.status === 404
        const mensagem = eh404 ? 'Não encontramos essa raça :(' : 'Oops, algo deu errado. Pode tentar novamente?'

        this.props.adicionaStatus(mensagem)
      })
  }

  render() {
    return (
      <ul className="lista-racas">
        {
          this.props.racas.map(raca => (
            <li
              className="lista-racas__item"
              key={raca.id}
              onClick={() => this.selecionaRaca(raca.name)}
            >
              {raca.name}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default ListaRacas