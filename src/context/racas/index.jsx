import React from 'react';
import { buscaImagemPorRaca } from '../../api';

const valorPadrao = {
  racas: [],
  selecionaCachorro: () => {}
};

const statusContext = React.createContext(valorPadrao);

export default statusContext;
