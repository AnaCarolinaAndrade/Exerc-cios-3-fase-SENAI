import { useState } from 'react';
import './Demo1.css'
function Demo1() {
 const [estado, setEstado]= useState(0)

    function incrementarEstado(){
     setEstado (estado + 1)
    }
 
    let cronometro= 9;
    function incrementaCronometro(){
     cronometro++
     console.log(cronometro);
    }

    function alertaUsuario(){
     alert("Obrigado por clicar nesse botão ;)")
    }

    return (
     <div className="container-demo1">
     <h2>Logo 1</h2>
     <button onClick={alertaUsuario}>Clique aqui</button>
     <button onClick={() => {alert("Executado uma arrow function com sucesso ;)")}}>Arrow Function</button>

        <div className='container-cronometro'>
         Cronometro: {cronometro}
         <button onClick={incrementaCronometro}>+</button>

            <div className='container-estado'>
             estado: {estado}
             <button onClick={incrementarEstado}>+</button>
            </div>
        </div>
     </div>
    )
}

export default Demo1