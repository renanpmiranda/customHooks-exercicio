import { useState } from 'react'

export function useCounter(set){
    const [quantity, setQuantity] = useState(0)

    const somar = () => setQuantity(quantity + Number(set))
    const subtrair = () => setQuantity(quantity - Number(set))
    const resetar = () => setQuantity(0)

    console.log(quantity)

    if(quantity < 0){
        alert('Quantidade inválida!')
        setQuantity(0)
    }else if(quantity > 10){
        alert('Quantidade máxima atingida')
        setQuantity(10)
    }

    return {quantity, somar, subtrair, resetar}
}