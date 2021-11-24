import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import GetItems from "./GetItems"



const ItemListContainer = () => {
    const { id } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {

        if (id) {
            GetItems(id)
                .then(resultados => {
                    setProductos(resultados)
                })
        }
        else {
            GetItems().then(resultados => {
                setProductos(resultados)
            })
        }
    }, [id])


    return (
        <div>
            {productos.length === 0 ? <div className="ring">Cargando...<span className="span_ring"></span></div> : <ItemList items={productos} />}
        </div>
    )

}

export default ItemListContainer
