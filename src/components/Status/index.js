import React from 'react';
import './styles.scss';
import { StatusContext } from '../../context/index';

const Status = () => (
  <StatusContext.Consumer>
    {
      (status) => {
        console.log(status)
        return (<p>{status}</p>)
      }
    }
  </StatusContext.Consumer>
)

export default Status;