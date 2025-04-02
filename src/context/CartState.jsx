import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {

    const [cartArr, setcartArr] = useState([]);

    const AddtoCart = (ans)=>{
        console.log(ans)
        ans.quantity = 1

        let find = cartArr.find((item)=>item.id === ans.id)

        if(find){
            alert('item already added')
        }
        else{
          setcartArr([...cartArr, ans])
          alert('item added successfully')
        }

    }


    

  return (
    <CartContext.Provider value={{cartArr,AddtoCart}}>
            {props.children}
    </CartContext.Provider>
  )
}

export default CartState
