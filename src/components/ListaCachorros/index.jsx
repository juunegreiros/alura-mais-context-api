import React from 'react'
import './styles.scss'

const ListaCachorros = props => {
  return (
    <ul className="lista-cachorros">
      {
        props.cachorros.map(cachorro => (
          <li
            className="lista-cachorros__item"
            key={cachorro.id}
            onClick={() => props.selecionaCachorro(cachorro.name)}
          >
            {cachorro.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaCachorros