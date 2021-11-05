import { useState, useEffect } from "react";
import productos from "./productos.json"


const ItemDetailContainer = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getInfo().then((productos) => {
      setUser(productos)

    })
  }, [])

  return (

    <div id="product">

      <ItemDetail product={user} />

    </div>

  )
}
let getInfo = new Promise(cb => {
  setTimeout(() => {
    cb(productos)
  }, 2000)

});


export default ItemDetailContainer
