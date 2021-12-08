import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import GetCategory from "./GetCategory"


const Category = () => {

  const [clases, setClases] = useState([])

  useEffect(() => {
    GetCategory().then(resultado => {
      setClases(resultado)
    })
  }, [])

  return (
    <>
      <h2>Descubre todo lo que tenemos para tí</h2>
    <main className="category" >
      {clases.length === 0 ? <div className="ring">Cargando...<span className="span_ring"></span></div> :

        clases.map(category => {

          return <Link key={category.id} to={`/camisetas/${category.id}`}>
            <img src={category.image} alt="camiseta" />

          </Link>

        })
      }
      </main>
      
      
      </>
  )
  
}

export default Category
