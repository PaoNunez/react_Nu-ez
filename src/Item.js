import { Link } from "react-router-dom"
const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="card-item">
                <p>{item.description}</p>
                <img src={item.image} alt="camiseta" />
                <p>${item.price}</p>
                <Link to={`/producto/${item.id}`}><button id={item.id}>Ver detalle...</button></Link>
            </div>
        </div>
    )


}

export default Item
