import "../components/styles.css"
import { useState } from "react"

const Item = (props) => {    

    return(
        <div className="Item">
            <span>Meu produto massa</span>
            <div className="quantidade">
                <span className="texto">Quantidade:{props.quantity}</span>                
                <button 
                onClick={props.onDecrement}>
                    -
                </button>
                <button onClick={props.onReset}>
                    Restaurar
                </button>
                <button onClick={props.onIncrement}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Item