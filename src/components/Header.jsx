import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";


const Header = ({presupuesto, setPresupuesto, isValidPresupuesto,setIsValidPresupuesto, gastos, setGastos}) => {
  return (
    <header>
        <h1>Planificador de Datos</h1>
        {
            isValidPresupuesto ? 
            <ControlPresupuesto
                presupuesto = {presupuesto}
                setGastos = {setGastos}
                gastos = {gastos}
                setPresupuesto = {setPresupuesto}
                setIsValidPresupuesto= {setIsValidPresupuesto}
            />
            :(
                <NuevoPresupuesto
                    presupuesto = {presupuesto}
                    setPresupuesto = {setPresupuesto}
                    setIsValidPresupuesto = { setIsValidPresupuesto}
                />
            )
        }
    </header>
  )
}

export default Header
