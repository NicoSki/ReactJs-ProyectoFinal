import React, { useState, useEffect } from "react";
import promiseItem from "../ArrayDeInfo/Item";
import Contador from "../Contador/Contador";
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const [prod, setProd] = useState([])


    useEffect(() => {
        promiseItem.then((res) => {
            setProd(res);
        });
    }, [])


    return (
        <div className="info">
            {prod.filter((e) => e.id === 1).map((item) => (
                <div className="card" style={{ width: '18rem' }} key={item.id}>
                    <img src={item.img} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.categoria}</p>
                    </div>
                    <Contador />
                </div>
            ))
            }
           
        </div>
    )
}

export default ItemDetailContainer


