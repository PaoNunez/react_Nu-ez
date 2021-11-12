import { contexto } from "./CartContext"
import { useContext } from "react"
const CartWidget = () => {
  const {cart} = useContext(contexto)
  return (

    <span id="carrito" className="material-icons">
      shopping_cart</span>

  )
}
export default CartWidget
