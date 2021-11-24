import { firestore } from "./firebase" // acceso a la base de datos

const getDetail = (id) => {
  const array = [];
  const baseDatos = firestore

  const collection = baseDatos.collection("products")

  const query = collection.doc(id)

  const promesa = query.get()

  return (
    promesa.then(resultado => {
      array.push(
        {
          id: resultado.id,
          ...resultado.data()
        }
      )
      return array;
    })
  )
}

export default getDetail