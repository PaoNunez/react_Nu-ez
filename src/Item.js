import { Link } from "react-router-dom"
const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="card-item">
                <img src={item.image} width="240" height="250" alt="camiseta" />
                <p>{item.description}</p>
                <p>${item.price}</p>
                <Link to={`/producto/${item.id}`}><button id={item.id}>Ver detalle del producto</button></Link>
            </div>
        </div>
    )


}

export default Item
