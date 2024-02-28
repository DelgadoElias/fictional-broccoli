import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

const Beneficio = ({ titulo, valor, color = '#202020' }) => {

  return (<ListItem disablePadding>
    <ListItemButton>
      <ListItemText
        primary={<BeneficioTexto texto={valor} numeroFuente={24} />}
        secondary={<BeneficioTexto texto={titulo} numeroFuente={18} />} />
    </ListItemButton>
  </ListItem>)
};

// "Mini" Componente que solamente es utilizado dentro del componente de benficio
const BeneficioTexto = ({ texto, numeroFuente, color }) => (
  <Typography sx={{ fontSize: numeroFuente, textAlign: 'center', color }}>{texto}</Typography>
);

export default Beneficio;