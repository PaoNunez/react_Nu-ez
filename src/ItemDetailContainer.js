import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import GetDetail from "./GetDetail"


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState([])
    useEffect(() => {
        GetDetail(id).then(resultado => {
            setProducto(resultado)
        })

    }, [id])

    return (
        <div>
            {producto.length === 0 ? <div className="ring">Cargando...<span className="span_ring"></span></div> : producto.map(prod => {
                return <ItemDetail key={prod.id} item={prod} />
            })}

        </div>

    )
}

export default ItemDetailContainer
