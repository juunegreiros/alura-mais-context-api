import { connect } from 'react-redux'

import Status from './Status'

const mapStateToProps = state => ({
  status: state.status
})

export default connect(
  mapStateToProps
)(Status)