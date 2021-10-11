//variable React en scope
import React from "react"
//variable ReactDOM en scope
import ReactDOM from "react-dom"
//debe haber un elemento
const Elemento = () => <p>Hola Mundo</p>
//tengo q renderizar(dibuja algo en la pantalla) el elemento
ReactDOM.render(<Elemento />, document.getElementById("root"))