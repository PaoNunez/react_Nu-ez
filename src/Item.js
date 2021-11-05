import Counter from "./Counter"
import productos from "./productos.json"


const Item = () => {

  return (
    <div>
      {productos.map(ItemProducto =>
        < div id="card">
          <p key={ItemProducto.id}>
            <h1>{ItemProducto.description}</h1>
            <img key={ItemProducto.id} src={ItemProducto.image} alt="camiseta"></img>
            <h3>{ItemProducto.price}</h3>
          </p>

          <Counter />
        </div>
      )}

    </div>

  )
}


export default Item