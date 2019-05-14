import { connect } from 'react-redux'
import {
  adicionaRacas,
  adicionaRacaSelecionada,
  adicionaStatus
} from '../../store/actions'
import ListaRacas from './ListaRacas'

const mapDispatchToProps = dispatch => ({
  adicionaRacas: racas => dispatch(adicionaRacas(racas)),
  adicionaRacaSelecionada: racaSelecionada => dispatch(adicionaRacaSelecionada(racaSelecionada)),
  adicionaStatus: status => dispatch(adicionaStatus(status))
})

const mapStateToProps = state => ({
  racas: state.racas
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaRacas)