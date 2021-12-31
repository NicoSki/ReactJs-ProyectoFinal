import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <ul className="menu">

                <Link to="/hamburguesas">
                    <li><button className="btn btn-dark">Hamburguesas</button></li>
                </Link>

                <Link to="/papas">
                    <li><button className="btn btn-dark">Papas</button></li>
                </Link>

                <Link to="/bebidas">
                    <li><button className="btn btn-dark">Bebidas</button></li>
                </Link>

                <Link to="/">
                    <li><button className="btn btn-dark">Home</button></li>
                </Link>

                <Link to="/carrito">
                    <li>
                        <button type="button" className="btn btn-dark position-relative">
                            🛒
                        </button>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar