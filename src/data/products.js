import product1 from '../assets/products/1.png'
import product2 from '../assets/products/2.png'
import product3 from '../assets/products/3.png'
import product4 from '../assets/products/4.png'
import product5 from '../assets/products/5.png'
import product6 from '../assets/products/6.webp'
import product7 from '../assets/products/7.webp'
import product8 from '../assets/products/8.webp'



export const PRODUCTS = [
    {
      id: 21,
      title: "IPhone",
      price: 999.0,
      image: product1,
    },
    {
      id: 22,
      title: "Macbook Pro 2022 (M1)",
      price: 1999.0,
      image: product2,
    },
    {
      id: 23,
      title: "Cannon M50 Camera",
      price: 699.0,
      image: product3,
    },
    {
      id: 24,
      title: "WLS Van Gogh Denim Jacket",
      price: 228.0,
      image: product4,
    },
    {
      id: 25,
      title: "LED Light Strips",
      price: 19.99,
      image: product5,
    },
    {
      id: 26,
      title: "SPECTRUM LS TEE",
      price: 68.0,
      image: product6,
    },
    {
      id: 27,
      title: "AUTO SERVICE SHIRT by GOLF WANG",
      price: 120.0,
      image: product7,
    },
    {
      id: 28,
      title: "DON'T TRIP UNSTRUCTURED HAT",
      price: 40.0,
      image: product8,
    },
  ]
  export const mergeData = () => {
    return new Promise((resolve, reject) => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          const filteredData = data.map(({ category, description, ...rest }) => rest);
          const mergeProducts = [...PRODUCTS, ...filteredData, ]; // concatenation
          resolve(mergeProducts);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  