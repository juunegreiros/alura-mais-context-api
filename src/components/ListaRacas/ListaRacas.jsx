import React from 'react'
import './styles.scss'

const ListaRacas = props => {
  return (
    <ul className="lista-racas">
      {
        props.racas.map(raca => (
          <li
            className="lista-racas__item"
            key={raca.id}
            onClick={() => props.selecionaRaca(raca.name)}
          >
            {raca.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaRacas