import { contexto } from "./context/CartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"



const Cart = () => {
  const { cart, borrarProducto } = useContext(contexto)
  const { push } = useHistory()
  const [ordenar, setOrdenar] = useState(false)
  const finBuy = () => {
    setOrdenar(true)
  }

  return (
    <main >
      {cart.length ===0 ? <div className="carritoVacio">
        <div className="cart">
          <p>Carrito vacio</p>
        </div>

        <div className="boton-carritoVacio">
          <Link to="/"><button>Volver a mis productos</button></Link>
        </div>
       
      </div> :
      
       
        <table className="tabla" >
          
          <thead className="cart-thead">
            <tr >
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          {cart.map(producto => {
            const sacarProducto = () => {
              borrarProducto(producto.id)
            }

            return (
              <tbody className="body" >
                <tr key={producto.id} className="cart-thead">
                  <th className="cart-body">
                    <img src={producto.image} alt="camiseta" />
                  </th>
                  <th className="cart-body">{producto.tittle}</th>
                  <th className="cart-body">{producto.cantidad}</th>
                  <th >${producto.price * producto.cantidad}</th>
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
            <button className="btn-finBuy" onClick={finBuy}>Completar mi compra</button>
            {ordenar && push("/form")}
          </div>
        </table>
      }
    </main>
  )
}

export default Cart