
import './App.css'
import Oferta from './componentes/Oferta'
import database from './database/db'
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  const [ofertaSeleccionada, setearOfertaSeleccionada] = React.useState(null);

  const manejadorCallbackSeleccion = (dato) => {
    setearOfertaSeleccionada(dato)
  }

  return (
    <main className='flexibilizado'>
      {
        database.map((oferta, indice) => (
          <Oferta
          key={'_oferta'+indice}
          is_seleccionada={ofertaSeleccionada === '_oferta'+indice}
          indice={indice}
          callbackSeleccion={manejadorCallbackSeleccion}
          {...oferta}
          />
        ))
      }
    </main>
  )
}

export default App
