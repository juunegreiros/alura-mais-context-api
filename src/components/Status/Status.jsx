import React from 'react'
import './styles.scss'
import StatusContext from '../../context/status'

const Status = () => (
  <StatusContext.Consumer>
    {
      status => (
        <p className="status">{status}</p>
      )
    }
  </StatusContext.Consumer>
)

export default Status