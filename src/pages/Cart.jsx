import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const{count} = useContext(CartContext);
    const{saved} = useContext(CartContext);


  return (
    <div style={{marginBottom:"40vh"}}>
        <h1>
            Product Cart : {count}
        </h1>
        <div>
              {saved.map((user)=>{
                    return (
                    <div key={user.id} style={{border:"1px solid black"}}>
                     <img src={user.image} width="150px" alt='avatar'/>
                     <h3>{user.title}</h3>
                     <h5>{user.brand}</h5>
                     <h5>{user.category}</h5>
                     <h5>{user.price}</h5>
                    </div>
                    )
              })}
        </div>
    </div>
  )
}

export default Cart