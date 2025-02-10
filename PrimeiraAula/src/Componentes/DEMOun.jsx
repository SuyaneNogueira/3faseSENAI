import React, { useState } from 'react'
import './DEMOum.css'
export default function DEMOun() {
    const [estado, setEStado] = useState(0)
    const [cornoMetro, setCornometro] = useState(0)
    function incrementarEstado() {
        setEStado(estado +1)
       
    }
    function ApagarEstados() {
        setEStado(estado-1) 
    }
  
    function alertaUsuario() {
        alert("burro")
        
    }
    function incrementacornometro() {
        setCornometro(cornoMetro +1)
       
    }
    function ApagarCornometro() {
        setCornometro(cornoMetro -1)
         
    }
  
  return (
    <div className="DEMO1">
      
      <h2>olá mundo</h2>
      <button onClick={alertaUsuario}>aperte</button>
      <button onClick={ () =>{alert("serio")}}> denovo</button>

      <div>
        Cornometro: {cornoMetro}
        <button onClick={incrementacornometro}>+</button>
        <button onClick={ApagarCornometro}>-</button>
      </div>
      
      <div>
        Estado: {estado}
        <button onClick={incrementarEstado}>+</button>
       
        <button onClick={ApagarEstados}>-</button>
      </div>
    </div>
  )
}
