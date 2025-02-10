import './Header.css'
import BoasVindas from './BoasVindas'
import { useState } from 'react'
function Header() {
  const [usuario, setUsuario]=useState('Julia Silva')
  const [mensagem, setMensagem]=useState('Seja bem vindo a minha revizona!')

  function FazerLogin (){
  var nome= prompt("Digite seu nome de usuário:")
  setUsuario(nome)
  }

  return (
    <div className="container-header">
      <p>LoGo</p>
      <p>Link 1</p>
      <p>Link 2</p> 
      <p>Link 3</p>
      {/*Exemplo um: usuario && <BoasVindas nome={usuario} mensagem={mensagem}/>*/}
      {usuario ? <BoasVindas nome={usuario} mensagem={mensagem}/> : <button onClick={FazerLogin}>Login</button>}
       

    </div>
  )
}

export default Header