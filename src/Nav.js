import React from "react";
import { NavLink, Route } from 'react-router-dom'
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"

const Nav = () => {
  return (

    <Navbar >
      <Link to="/productos">
        <p>Productos</p>
      </Link>
      <CartWidget />
      <NavLink to="/" exact >
        <img src="./img/logo.jpeg" alt="logotipo"></img>
      </NavLink>


    </Navbar>


  )
}
export default Nav

