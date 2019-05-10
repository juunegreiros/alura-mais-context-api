import { connect } from 'react-redux';

import Cabecalho from './componente';

const mapStateToProps = state => ({
  status: state.status
});

export default connect(
  mapStateToProps
)(Cabecalho);
