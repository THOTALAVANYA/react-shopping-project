import React,{useContext} from 'react'
import { ShopContext } from "../../context/shop-context"
import { CartItem } from './cart-item'
import "./cart.css"
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const {mergedProducts,cartItems,getTotal}= useContext(ShopContext)
  const totalAmount=getTotal()
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your cart Items</h1>
      <div className="cart">
        {mergedProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  )
}

