import { contexto } from "./CartContext"
import { useContext } from "react"

const Cart = () => {
  const resultado = useContext(contexto)
  console.log(resultado)

  return (
    <div>
      <p>hola estas en cart</p>
    </div>
  )
}

export default Cart