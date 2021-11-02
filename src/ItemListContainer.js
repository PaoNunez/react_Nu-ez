import { useEffect, useState } from "react";
import productos from "./productos.json"

const ItemListContainer = () => {
  const [users, setUsers] = useState([]);
  getUserData.
    then((productos) => {
      setUsers(productos)
    })
  return (
    <div id="photo">
      {users.map(user =>
        <div>
          {user.description}
          {user.price}
          <img src={user.image}></img>
        </div>)}
    </div>
  )
}

let getUserData = new Promise(cb => {
  setTimeout(() => {
    cb(productos)
  }, 2000)

});

export default ItemListContainer