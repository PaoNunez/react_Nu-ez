import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import productos_Json from "./productos.json"

const ItemListContainer = ({ contador }) => {
    const { id } = useParams()


    const [productos, setProductos] = useState([])
    useEffect(() => {
        let promesa

        if (id) {

            promesa = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos_Json.filter(prod => prod.id == id))
                }, 2000)

            })
        }
        else {
            promesa = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos_Json)
                }, 2000)

            })
        }
        promesa.then(resolve => {
            setProductos(resolve)
        })

    }, [id])


    return (
        <div>
            <span className="count">{contador}</span>
            {productos.length === 0 ? <div className="ring">Cargando...<span className="span_ring"></span></div> : <ItemList items={productos} />}
        </div>
    )
}

export default ItemListContainer
