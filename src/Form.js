import { contexto } from "./context/CartContext"
import { useContext, useState } from "react"
import { firestore } from "./firebase"
import { Link } from "react-router-dom"
import firebase from "firebase/app"

const Form = () => {

  const { cart, vaciarCarrito } = useContext(contexto)
  const [id, setId] = useState(" ")
  const [user, setUser] = useState({
    nombre: " ",
    dirección: "",
    mail: " ",
    contacto: ""
  })


  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const ProductosTotales = () => {
    let total = 0
    cart.forEach(producto => {
      total += producto.price
    })
    return total
  }
  const pedido = {
    cliente: user,
    productos: cart,
    total: ProductosTotales(),
    fecha: firebase.firestore.Timestamp.fromDate(new Date())
  }

  const confirmacion = (e) => {
    e.preventDefault()

    const db = firestore

    const collection = db.collection("orders")

    const query = collection.add(pedido)

    query
      .then(({ id }) => {
        setId(id)
      })
      .catch(() => {

      })
    vaciarCarrito()
  }
  if (id === " ") {
    return (

      <form id="usuario">
        <h3>Por favor ingresa tus datos</h3>
        <input onChange={handleInputChange} name="nombre" type="text" placeholder="Nombre" required />
        <input onChange={handleInputChange} name="direccion" type="dir" placeholder="Dirección" required />
        <input onChange={handleInputChange} name="mail" type="mail" placeholder="Email" required />
        <input onChange={handleInputChange} name="contacto" type="tel" placeholder="Telefono" required />
        <button className="btn-confirmar" onClick={confirmacion}>Confirmar compra</button>
      </form>
    )
  }

  else {
    return (
      <div id="usuario" className="form-user">
        <h2>Gracias por preferirnos</h2>
        <p>Tu orden se registró con éxito tu id de compra es: {id}</p>
        <Link to="/"><button>Volver al inicio</button></Link>
      </div>

    )
  }

}

export default Form