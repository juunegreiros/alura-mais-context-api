import {
  ADICIONA_STATUS,
  ADICIONA_RACAS,
  ADICIONA_RACA_SELECIONADA
} from './types'

export const adicionaStatus = status => {
  return {
    type: ADICIONA_STATUS,
    status
  }
}

export const adicionaRacas = racas => {
  return {
    type: ADICIONA_RACAS,
    racas
  }
}

export const adicionaRacaSelecionada = racaSelecionada => {
  return {
    type: ADICIONA_RACA_SELECIONADA,
    racaSelecionada
  }
}