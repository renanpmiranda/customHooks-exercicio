import Item from '../components/Item'
import { useCounter } from '../hooks/useCounter';
import { useState } from 'react';

const Cart = () => {
    
    const [contador, setContador] = useState(0)

    const onChangeContador = (e) => {
        setContador(e.target.value)
    }

    const {quantity, somar, subtrair, resetar} = useCounter(contador)

    return (
      <div>
        <h1>Meu carrinho</h1>
        <Item
          label="My produto massa"
          quantity={quantity}
          onIncrement={somar}
          onDecrement={subtrair}
          onReset={resetar}
        />
        <input className="texto" placeholder="Insira o valor do contador" value={contador} onChange={onChangeContador} type="Number"></input>        
      </div>
    );
  }

export default Cart