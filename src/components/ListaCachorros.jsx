import React from 'react'

const ListaCachorros = props => {
  return (
    <ul>
      {
        props.cachorros.map(cachorro => (
          <li key={cachorro.id} onClick={() => props.selecionaCachorro(cachorro.name)}>
            {cachorro.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaCachorros