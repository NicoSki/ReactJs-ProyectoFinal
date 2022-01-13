import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';
import CartWidGet from '../CartContext/CartWidGet';



const NavBar = () => {

    return (
        <div>
            <ul className="menu">

                <Link to="/categorias/hamburguesa">
                    <li><button className="btn btn-dark">Hamburguesas</button></li>
                </Link>

                <Link to="/categorias/papas">
                    <li><button className="btn btn-dark">Papas</button></li>
                </Link>

                <Link to="/categorias/bebidas">
                    <li><button className="btn btn-dark">Bebidas</button></li>
                </Link>

                <Link to="/">
                    <li><button className="btn btn-dark">Home</button></li>
                </Link>

                <Link to="/carrito">
                    <li>
                        <CartWidGet />
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar