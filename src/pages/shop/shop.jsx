import React,{useEffect,useState} from 'react'
// import { PRODUCTS } from "../../products";
import { mergeData } from "../../data/products";

import { Product } from "./product";
import "./shop.css";
export const Shop = () => {
    const [mergedProducts, setMergedProducts] = useState([]);

    useEffect(() => {
      // Fetch and set merged products when the component mounts
      mergeData()
        .then(mergeProducts => {
          setMergedProducts(mergeProducts);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },);
  
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>My Products</h1>
        </div>
        <div className='products'>
        {
            mergedProducts.map((product=>(
                <Product key={product.id} data={product}/>
            )))
        }
        </div>

    </div>
  )
}

