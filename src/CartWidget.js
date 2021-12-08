import { contexto } from "./context/CartContext"
import { useContext } from "react"
const CartWidget = () => {
  const { cart } = useContext(contexto)
  return (
    <div>
      <span id="carrito" className="material-icons">
        shopping_cart
      </span>
      {cart.length === 0 ? <span className="count-none">0</span> : <span className="count">{cart.length}</span>}
    </div>
  )
}
export default CartWidget
