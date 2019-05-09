import React from 'react'
import './styles.scss'

import { RacasContext } from '../../context';

const ListaCachorros = () => {
  return (
    <RacasContext.Consumer>
      {
        ({ cachorros, selecionaCachorro }) => (
          <ul className="lista-cachorros">
            {
              cachorros.map(cachorro => (
                <li
                className="lista-cachorros__item"
                key={cachorro.id}
                onClick={() => selecionaCachorro(cachorro.name)}
                >
                  {cachorro.name}
                </li>
              ))
            }
          </ul>
        )
      }
    </RacasContext.Consumer>
  )
}

export default ListaCachorros