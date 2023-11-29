import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context"

export const CartItem=(props)=>{
    const {id,title,price,image}=props.data
    const {cartItems,addToCart, removeFromCart,updateCartItem}=useContext(ShopContext)
 return (
 <div className='cartItem'>
    <img  key ={id} src={image} alt="productimage"></img>
    <div className='description'>
        <p>
            <b>{title}</b>
        </p>
        <p>
            price:${price}
        </p>
        <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItem(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>

        </div>
    </div>

 </div>
)}