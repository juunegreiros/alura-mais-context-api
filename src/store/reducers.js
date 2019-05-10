import {
  ADICIONA_RACAS,
  ADICIONA_RACA_SELECIONADA,
  ADICIONA_STATUS
} from './types'

const estadoInicial = {
  racas: [],
  racaSelecionada: {},
  status: 'Você ainda não selecionou nenhum cachorro :('
}

function infoCaoReducer (state = estadoInicial, action) {
  switch(action.type) {
    case ADICIONA_RACAS:
      return {...state, racas: action.racas}
    case ADICIONA_RACA_SELECIONADA:
      console.log(action)
      return {...state, racaSelecionada: action.racaSelecionada}
    case ADICIONA_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }
}

export default infoCaoReducer;