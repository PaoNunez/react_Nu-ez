
import { useState } from "react"
const ItemCount = () => {
  const [contador, setContador] = useState(0)
  const sumar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)

  }
  return (
    <div>
      <p>EL contador va:{contador}</p>
      <button id="btn" className="material-icons" alt="add" onClick={sumar}>add</button>
      <button id="btn" className="material-icons" alt="remove" onClick={restar}>remove</button>

    </div>
  )
}
export default ItemCount
