import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import GetCategory from "./GetCategory"
import Image from './components/Image';

const Category = () => {

  const [clases, setClases] = useState([])

  useEffect(() => {
    GetCategory().then(resultado => {
      setClases(resultado)
    })
  }, [])

  return (

    <main >
      {clases.length == 0 ?
        <div className="ring">Cargando...<span className="span_ring"></span></div> :

        clases.map(category => {

          return (
            <Link key={category.id} to={`/camisetas/${category.tittle}`}>
              <Image
                path={category.image}
                alt={category.alt}>
              </Image>
            </Link>
          )
        })
      }
    </main>
  )
}

export default Category
