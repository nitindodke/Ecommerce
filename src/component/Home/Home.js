import React, { useEffect } from 'react';
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../layout/MetaData';
import {getProducts} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";

const product = {
    name: "Blue Shirt",
    images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "Rs.3000",
    _id: "abhishek",
}



const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);
  return (
    <>
       <MetaData title="ECOMMERCE"/>
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
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
        </div>
    </>
  )
}

export default Home;