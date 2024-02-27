import React from 'react';
import Beneficio from './Beneficio';

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
    link_redireccion
 }) => {
    return <div>
        {/* Seccion de titulo */}
        <h2>{titulo}</h2>
{/* Seccion de precio */}
        <h1>{precio}</h1>
{/* Seccion de lista */}

        {
            lista.map((beneficio, indice) => (
                <Beneficio 
                key={'_beneficio_'+indice}
                titulo={beneficio.titulo} 
                valor={beneficio.valor} />
            ))
        }
{/* Breve descripcion */}
<p>{descripcion}</p>
{/* Boton call to action */}
<p>{link_redireccion}</p>
    </div>
}

export default Oferta;