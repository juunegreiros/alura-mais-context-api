import { connect } from 'react-redux';
import { adicionaRacas, adicionaRacaSelecionada, adicionaStatus } from '../../store/actions';
import ListaCachorros from './componente';

const mapDispatchToProps = dispatch => ({
  adicionaRacas: racas => dispatch(adicionaRacas(racas)),
  adicionaRacaSelecionada: racaSelecionada => dispatch(adicionaRacaSelecionada(racaSelecionada)),
  adicionaStatus: status => dispatch(adicionaStatus(status))
})

const mapStateToProps = state => ({
  cachorros: state.racas,
  racaSelecionada: state.racaSelecionada
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaCachorros);
