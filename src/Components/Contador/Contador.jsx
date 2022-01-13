import React, {useState} from 'react';
import "./Contador.css";
import swal from 'sweetalert';


const Contador = ({onAdd}) => {
    const [contador, setContador] = useState(1);
   

    function Sumar() {
        if(contador < 5){
        setContador(contador + 1)
        }
    }

    function Restar() {
        if(contador >= 2){
        setContador(contador - 1)
        }
    }

    function handleClik() {
        onAdd(contador)
        swal({
            title: "Tu Producto",
            text: "Fue agregado Exitosamente!",
            icon: "success",
          });
    }

    return (
        <div className='contador'>
            <button className="btn btn-outline-info" onClick={Restar}>-</button>
            {contador}
            <button className="btn btn-outline-info" onClick={Sumar}>+</button>
            <button className="btn btn-warning" onClick={handleClik}>Agregar</button>
        </div>
    )
}

export default Contador;
