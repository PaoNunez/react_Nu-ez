
//import { useState } from "react"
const Counter = () => {
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
      <button className="material-icons">add</button>
      <button className="material-icons">remove</button>
    </div>
  )
}
export default Counter