import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";


const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidoPresupuesto, gastos, setGastos}) => {
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
                setIsValidoPresupuesto= {setIsValidoPresupuesto}
            />
            :(
                <NuevoPresupuesto
                    presupuesto = {presupuesto}
                    setPresupuesto = {setPresupuesto}
                    setIsValidoPresupuesto = { setIsValidoPresupuesto}
                />
            )
        }
    </header>
  )
}

export default Header
