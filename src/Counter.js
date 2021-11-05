import { useState } from 'react'

const Counter = ({ onClick }) => {

  const [contador, setContador] = useState(0)

  /* useEffect(()=>{
      console.log("Se reejecuto el contador")
  },[]) */

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <div>
      
      <button onClick={sumar} className="material-icons">add</button>
      <button onClick={restar} className="material-icons">remove</button>
      <p>Cantidad: {contador} </p>
      <button onClick={() => onClick(contador)} id="btn">Agregar al carrito</button>
    </div>
  )
}

export default Counter