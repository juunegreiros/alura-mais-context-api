import { ADICIONA_STATUS } from './types'

export const adicionaStatus = status => {
  return {
    type: ADICIONA_STATUS,
    status
  }
}