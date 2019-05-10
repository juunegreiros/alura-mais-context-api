import { connect } from 'react-redux';

import CachorroSelecionado from './componente';

const mapStateToProps = state => ({
  cachorro: state.racaSelecionada
});

export default connect(
  mapStateToProps
)(CachorroSelecionado);
