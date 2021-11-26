import React, { useState, useEffect } from 'react';
import itemsPromise from "../ArrayDeInfo/Item";
import { Link } from 'react-router-dom';
import "./ItemList.css";



const Papas = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        itemsPromise.then((res) => {
            setProductos(res);
        });
    }, []);


    return (
        <div className="productos">
            {productos.filter((e) => e.categoria === "papas").map((items) => (
                    <div className="card" style={{ width: '18rem' }} key={items.id}>
                        <img src={items.img} className="card-img-top" alt="img"/>
                        <div className="card-body">
                            <h5 className="card-title">{items.titulo}</h5>
                            <p className="card-text">{items.categoria}</p>
                             <Link to="/detalle">
                                <button className="btn btn-success">Ver más</button>
                            </Link> 
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Papas;
