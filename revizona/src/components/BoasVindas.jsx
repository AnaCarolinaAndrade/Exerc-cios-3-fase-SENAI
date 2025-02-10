import React from 'react'
//Exemplo simples utilizando o props

//function BoasVindas(props) {
//olá, {props.nome}!
//{props.mensagem}
//<button onClick={() => console.log(props)}>Log</button>

function BoasVindas ({nome,mensagem}){
  return (
    <div clasname='container-boasVindas'>
    Olá, {nome}! 
    {mensagem}
    <button onClick={() => console.log(props)}>Log</button>
    </div>
  )
}

export default BoasVindas