import './Body.css'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Avisos from './Avisos'
import BoasVindas from './BoasVindas'

function Body() {
  return (
    <div className='container-body'>
        <h1>Empresa de logos</h1>
       <Demo1/>
       <Demo2/>
       <BoasVindas/>
       <Avisos/>
    </div>
  )
}

export default Body