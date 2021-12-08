import { firestore } from "./firebase"

const getDetail = (id) => {
  const arrayProductos = [];
  const db = firestore

  const collection = db.collection("products")

  const query = collection.doc(id)

  const promesa = query.get()

  return (
    promesa.then(resultado => {
      arrayProductos.push(
        {
          id: resultado.id,
          ...resultado.data()
        }
      )
      return arrayProductos;
    })
  )
}

export default getDetail