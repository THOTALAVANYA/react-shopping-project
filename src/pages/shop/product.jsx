import React, { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
export const Product=(props)=>{
    const {id,title,price,image}=props.data
    const {addToCart,cartItems}= useContext(ShopContext)
    const amount=cartItems[id]
    return <div className="product">
        <img  key={id} src={image} alt="productImage"></img>
        <div className="description">
           <p><b>{title}</b></p>
           <p>price: ${price}</p>
        </div>
        <button className="addToCartBtn" onClick={()=>addToCart(id)}>
        Add To Cart  {amount >0 ? <>({amount})</>: null}
        </button>
    </div>
}