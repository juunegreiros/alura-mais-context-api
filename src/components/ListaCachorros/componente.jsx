import React from 'react';
import './styles.scss';
import { buscaImagemPorRaca, buscaTodasInformacoes, buscaTodasRacas } from '../../api';

class ListaCachorros extends React.Component {
  componentDidMount() {
    this.carregaInformacoesIniciais()
  }

  carregaInformacoesIniciais() {
    buscaTodasInformacoes()
      .then(informacoes => {
        this.carregaListaRacas(informacoes)
      })
      .catch(erro => this.props.adicionaStatus('Oops, algo deu errado no carregamento da página. Pode tentar novamente?'))
  }

  carregaListaRacas(informacoes) {
    buscaTodasRacas()
      .then(racas => {
        const listaRacas = informacoes.filter(
          informacao => racas.includes(informacao.name.toLowerCase())
        )
        this.props.adicionaRacas([...listaRacas])
      })
  }

  selecionaCachorro = raca => {
    const infoSelecionada = this.props.cachorros.filter(infoRaca => infoRaca.name === raca)
    console.log('oi', this.props)
    buscaImagemPorRaca(raca)
      .then(imagem => {
        this.props.adicionaRacaSelecionada({ ...this.props.racaSelecionada, imagem, ...infoSelecionada[0] })
        this.props.adicionaStatus('A imagem sempre será diferente, pode clicar quantas vezes quiser!')
      })
      .catch(erro => {
        const eh404 = erro.response.status === 404;
        const mensagem = eh404 ? 'Não encontramos essa raça :(' : 'Oops, algo deu errado. Pode tentar novamente?'

        this.props.adicionaStatus(mensagem)
      })
  }

  render() {
    return (
      <ul className="lista-cachorros">
        {
          this.props.cachorros.map(cachorro => (
            <li
              className="lista-cachorros__item"
              key={cachorro.id}
              onClick={() => this.selecionaCachorro(cachorro.name)}
            >
              {cachorro.name}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default ListaCachorros