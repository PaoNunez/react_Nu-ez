import { useState, useEffect } from "react"
//import productos_JSON from "./productos.json"
import { useParams } from "react-router"
import { firestore } from "./firebase" // base de datos
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const arrayProducts = []
    const { id } = useParams();
    //console.log(id)
    const [producto, setProducto] = useState([])
    useEffect(() => {
        const db = firestore

        const collection = db.collection("products")

        const query = collection.doc(id)

        const promesa = query.get()
        promesa
            .then(doc => {
                arrayProducts.push(doc.data())
                setProducto(arrayProducts)
            })
            .catch(() => {
                //console.log(" se produjo un error")
            })
    }, [id])
    return (
        <div>
            {producto.length == 0 ? <div className="ring">Cargando...<span className="span_ring"></span></div> : producto.map(prod => {
                return <ItemDetail item={prod} />
            })}

        </div>

    )
}

export default ItemDetailContainer
