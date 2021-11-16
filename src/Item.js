import { Link } from "react-router-dom"
import Image from './components/Image';
const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="card-item">
                <p>{item.tittle}</p>
                <Image
                    path={item.image}
                    alt={item.alt} />

                <p>${item.price}</p>
                <Link to={`/producto/${item.id}`}><button id={item.id}>Ver detalle...</button></Link>
            </div>
        </div>
    )


}

export default Item
