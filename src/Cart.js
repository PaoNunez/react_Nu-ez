import { contexto } from "./context/CartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"



const Cart = () => {
  const { cart, eliminarProducto } = useContext(contexto)
  const { push } = useHistory()
  const [ordenar, setOrdenar] = useState(false)
  const finBuy = () => {
    setOrdenar(true)
  }
  return (
    <main className="cart">
      {cart.length == 0 ? <div className="carritoVacio">
        <div>

          <p>Carrito vacio</p>

        </div>
        <div className="boton-carritoVacio">
          <Link to="/"><button>Volver a mis productos</button></Link>
        </div>

      </div> :
        <table id="tabla" >
          <thead >
            <tr >
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          {cart.map(producto => {
            const sacarProducto = () => {
              eliminarProducto(producto.id)
            }

            return (
              <tbody id="body">
                <tr key={producto.id}>
                  <th>
                    <img src={producto.image} alt="camiseta" />
                  </th>
                  <th>{producto.tittle}</th>
                  <th>{producto.cantidad}</th>
                  <th>${producto.price * producto.cantidad}</th>
                  <th>
                    <button onClick={sacarProducto} className="cart-btn-remove">
                      <span class="material-icons">delete</span>
                    </button>
                  </th>
                </tr>
              </tbody>
            )
          })}
          <div >
            <button onClick={finBuy}>Completar mi compra</button>
            {ordenar && push("/form")}
          </div>
        </table>
      }
    </main>
  )
}

export default Cart