import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import { firestore } from "./firebase" // nueva base de datos agregados
const ItemListContainer = ({ contador }) => {
    const { id } = useParams()
    const arrayProducts = []

    const [productos, setProductos] = useState([])
    useEffect(() => {
        // let promesa
        //if (id) {
        //  promesa = new Promise((resolve) => {
        //    setTimeout(() => {
        //      resolve(productos_Json.filter(prod => prod.id == id))
        //}, 2000)

        //})
        //}
        // else {
        //   promesa = new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve(productos_Json)
        // }, 2000)

        //})
        //}
        //promesa.then(resolve => {
        //  setProductos(resolve)
        //})
        const db = firestore

        const collection = db.collection("products")

        const promesa = collection.get()
        if (id) {
            promesa.then(cb => {
                cb.forEach(cb => {
                    arrayProducts.push({
                        id: cb.id,
                        tittle: cb.data().tittle,
                        image: cb.data().image,
                        price: cb.data().price,
                        description: cb.data().description

                    })
                })
                const productosPorCategorias = arrayProducts.filter(producto => producto.id == id)
                setProductos(productosPorCategorias)
            })
        }
        else {
            promesa.then(cb => {
                cb.forEach(cb => {
                    arrayProducts.push({
                        id: cb.id,
                        tittle: cb.data().tittle,
                        image: cb.data().image,
                        price: cb.data().price,
                        description: cb.data().description
                    })
                })
                setProductos(arrayProducts)
            })
        }
    }, [id])




    return (
        <div>
            <span className="count">{contador}</span>
            {productos.length === 0 ? <div className="ring">Cargando...<span className="span_ring"></span></div> : <ItemList items={productos} />}
        </div>
    )

}

export default ItemListContainer
