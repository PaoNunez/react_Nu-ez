import { firestore } from "./firebase"

const GetCategory = () => {
  const array = []
  const db = firestore

  const collection = db.collection("products")

  const promesa = collection.get()
  return (
    promesa.then(resultados => {
      resultados.forEach(resultado => {
        array.push(
          {
            id: resultado.id,
            ...resultado.data()
          }
        )
      })
      return array
    })
  )
}

export default GetCategory