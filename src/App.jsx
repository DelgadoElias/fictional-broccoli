
import './App.css'
import Oferta from './componentes/Oferta'
import database from './database/db'


function App() {


  return (
    <main>
      {
        database.map((oferta, indice) => (
          <Oferta
          key={'_oferta'+indice}
          {...oferta}
          />
        ))
      }
    </main>
  )
}

export default App
