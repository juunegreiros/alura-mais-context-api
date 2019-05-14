import { connect } from 'react-redux'
import RacaSelecionada from './RacaSelecionada'

const mapStateToProps = state => ({
  racaSelecionada: state.racaSelecionada
})
export default connect(mapStateToProps)(RacaSelecionada)