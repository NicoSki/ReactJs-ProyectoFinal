import {useState} from 'react'



const Contador = ({inital, max, onAdd}) => {
    const [count, setCount] = useState(0);

    function Sumar(){
        if(count < 5)
        setCount(count + 1)
      }
    
      function Restar(){
        if(count > 0){
          setCount(count - 1)
        }
      }

      function Agregar(){
        onAdd(count)
        setCount(0)
      }

    return(
      <>
            <section>
              <button className="btn btn-outline-info btn-sm" onClick={Restar}>-</button>
              {count}
              <button className="btn btn-outline-info btn-sm" onClick={Sumar}>+</button>
            </section>
            <button className="btn btn-success" onClick={Agregar}>Agregar</button>
      </>
    )
  }
  
  export default Contador;