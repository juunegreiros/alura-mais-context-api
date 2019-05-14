import {
  ADICIONA_STATUS,
  ADICIONA_RACAS,
  ADICIONA_RACA_SELECIONADA
} from './types'

const estadoInicial = {
  status: 'Você ainda não selecionou nenhum cachorro :(',
  racas: [],
  racaSelecionada: {}
}

const infoCaoReducer = (state = estadoInicial, action) => {
  switch(action.type) {
    case ADICIONA_STATUS:
      return {...state, status: action.status}
    case ADICIONA_RACAS:
      return {...state, racas: action.racas}
    case ADICIONA_RACA_SELECIONADA:
      return {...state, racaSelecionada: action.racaSelecionada}
    default:
      return state
  }
}

export default infoCaoReducer