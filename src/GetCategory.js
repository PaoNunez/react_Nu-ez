import { firestore } from "./firebase"

const GetCategory = () => {
  const array = []
  const baseDatos = firestore

  const collection = baseDatos.collection("category")

  const promesa = collection.get()
  return (
    promesa.then(resultados => {
      resultados.forEach(resultado => {
        array.push(
          {
            ...resultado.data()
          }
        )
      })
      return array
    })
  )
}

export default GetCategory