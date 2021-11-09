import { useState } from 'react'


const Counter = ({ onAdd, onDel }) => {
const [contador, setContador] = useState(0)



  const sumar = () => {
    const counter = contador + 1
    setContador(counter)
    onAdd(counter)


  }

  const restar = () => {
    const counter = contador - 1
    setContador(counter)
    onDel(counter)

  }

  return (
    <div>

      <button onClick={sumar} className="material-icons">add</button>
      <button onClick={restar} className="material-icons">remove</button>
      <p>Cantidad: {contador} </p>
      <button id="btn">Agregar al carrito</button>
    </div>
  )
}

export default Counter