import React from 'react';
import "./Home.css";
import Product from "./Product.js";

const product = {
    name: "Blue Shirt",
    images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "Rs.3000",
    _id: "abhishek",
}



const Home = () => {
  return (
    <>
       <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href='#container'>
            <button>Scroll</button>
        </a>
        </div> 
        <h2 className='homeHeading'>Featured Products</h2>
        <div className='container' id="container">
            <Product product={product} />
        </div>
    </>
  )
}

export default Home;