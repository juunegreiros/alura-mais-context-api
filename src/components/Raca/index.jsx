import { connect } from 'react-redux'
import Raca from './Raca'

const mapStateToProps = state => ({
  racaSelecionada: state.racaSelecionada
})

export default connect(mapStateToProps)(Raca)