import { useState } from 'react'
import Header from './components/Header';
import Modal from './components/Modal';
import IconoNuvoGasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState();

  const [isValidPresupuesto, setIsValidoPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);
  }


  return (
    <div>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidoPresupuesto={setIsValidoPresupuesto}
      />

      {isValidPresupuesto && (
      <div className='nuevo-gasto'>
        <img 
          src={IconoNuvoGasto} 
          alt="Icono nuevo gasto"
          onClick={handleNuevoGasto}
          />
      </div>) 
      }

      {modal && <Modal 
                  setModal = {setModal}
      
                /> }
      

    </div>
  )
}

export default App
