import {
  ADICIONA_RACAS,
  ADICIONA_RACA_SELECIONADA,
  ADICIONA_STATUS
} from './types'

export const adicionaRacaSelecionada = (racaSelecionada) => {
  return { type: ADICIONA_RACA_SELECIONADA, racaSelecionada}
}

export const adicionaRacas = (racas) => {
  return { type: ADICIONA_RACAS, racas}
}

export const adicionaStatus = (status) => {
  return { type: ADICIONA_STATUS, status}
}