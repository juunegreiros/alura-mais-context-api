import React from 'react'
import './styles.scss'

const RacaSelecionada = props => (
  <div className={`raca-selecionada`}>
    <h2 className="raca-selecionada__nome">
      {props.racaSelecionada.name}
    </h2>
    <p className="raca-selecionada__info">
      <span className="raca-selecionada__info__descricao">
        Tempo de vida:
      </span>
      {props.racaSelecionada.life_span}
    </p>
    <img
      alt="Imagem de raca"
      className="raca-selecionada__imagem"
      src={props.racaSelecionada.imagem}
    />
  </div>
)

export default RacaSelecionada