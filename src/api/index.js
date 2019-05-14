import axios from 'axios'

const imagensApiUrl = 'https://dog.ceo/api'
const sobreApiUrl = 'https://api.thedogapi.com/v1'

const buscaImagemPorRaca = raca => axios
  .get(`${imagensApiUrl}/breed/${raca}/images/random`)
  .then(resposta => resposta.data.message)

const buscaSobreRacas = () => axios
  .get(`${sobreApiUrl}/breeds`)
  .then(resposta => resposta.data)

const buscaTodasRacas = () => axios
  .get(`${imagensApiUrl}/breeds/list/all`)
  .then(resposta => Object.keys(resposta.data.message))

export {
  buscaImagemPorRaca,
  buscaSobreRacas,
  buscaTodasRacas
}
