import { contexto } from "./context/CartContext"
import { useContext } from "react"

const Cart = () => {
  const { cart } = useContext(contexto)
  

  return (
    <main className="cart">
      {cart.length == 0 ? <p>Tu carrito esta vacio</p> :
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          {cart.map(producto => {
            return (
              <tbody>
                <tr key={producto.id}>
                  <td>
                    <img src={producto.image} width="130" height="110" alt="camiseta" /></td>
                  <td>{producto.tittle}</td>
                  <td>{producto.cantidad}</td>
                  <td>${producto.price}</td>


                </tr>
              </tbody>
            )
          })}

        </table>
      }
    </main>
  )
}

export default Cart