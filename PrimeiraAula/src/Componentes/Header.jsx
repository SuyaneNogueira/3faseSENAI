import React, { useState } from 'react'
import './Header.css'
import { GiSeaDragon } from "react-icons/gi";
import BoasVindas from './BoasVindas'
export default function Header() {
  const [usuario, setUsuario] = useState ('')
  const [mensagem, SetMensagem] = useState ('Bem vindo ao nosso site ')

  function NomeUsuario() {
 var nome = prompt('digite o seu nome de usuário:')

 setUsuario(nome)

  }
  return (
    <div className="ddddddddd">
      
       <GiSeaDragon className='logo' />
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 5</p>
        {/* {usuario && <BoasVindas Nome={usuario} Mensagem={mensagem}/>} */}
        {usuario ? <BoasVindas Nome={usuario} Mensagem={mensagem}/> :<button onClick={NomeUsuario}>login</button> }
         <img src="./imagens/DRAGONnn.svg" alt="" className='perfil' />
    </div>
  )
}
