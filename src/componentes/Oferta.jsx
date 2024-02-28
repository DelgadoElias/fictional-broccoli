import React from 'react';
import Beneficio from './Beneficio';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

// Yo tengo un modelo de oferta
// Yo puedo hacer dos cosas:
// 1. Puedo pedir uno por uno 
// las propiedades por props
// 2. Un objeto o clase hecha
// con todos los datos
const Oferta = ({
    titulo,
    descripcion,
    lista,
    precio,
    link_redireccion,
    is_seleccionada,
    indice,
    callbackSeleccion
}) => {

    const [seleccionado, setearSeleccionado] = React.useState({ box: { minWidth: 275 }, text: { color: '#202020'}})
    
    // Hook para manejar el ciclo de vida del componente
    React.useEffect(() => {
        // Si la prop is_seleccionada es verdadera
        if(is_seleccionada){
            // Cambio el estado para generar una nueva configuracion
            setearSeleccionado({ box: { minWidth: 275, backgroundColor: '#084C61' }, text: { color: 'white'}});
        } else {
            // Regenero el estado con la configuracion por defecto
            setearSeleccionado({ box: { minWidth: 275 }, text: { color: '#202020'}})
        }
    },[is_seleccionada])
    // En el array de observacion le dijimos que observe si esta seleccionada cambia de estado

    return <Card sx={seleccionado.box}>
        <CardContent>
            <Typography sx={{ fontSize: 24, ...seleccionado.text }} color="text.secondary">
                {titulo}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: 48, paddingTop: 4, ...seleccionado.text }} color="text.secondary">
                {precio}
            </Typography>
            <List>
                {
                    lista.map((beneficio, indice) => (
                        <React.Fragment key={'_beneficio_' + indice}>
                            <Beneficio
                                titulo={beneficio.titulo}
                                valor={beneficio.valor} />
                            <Divider />
                        </React.Fragment>
                    ))
                }
            </List>

            {/* Breve descripcion */}
            <p>{descripcion}</p>

        </CardContent>
        <CardActions>
            <Button sx={{ color: seleccionado.text, width: '100%' }} onClick={() => callbackSeleccion('_oferta'+indice)} >{link_redireccion}</Button>
        </CardActions>
    </Card>
}

export default Oferta;