import './App.css';
import Header from "./component/layout/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React,{useEffect} from 'react';
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";


function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  },[]);
  return (
  
  <Router>
    <Header></Header>
  <Routes>
  <Route  path="/" element={<Home />} />
  </Routes>
  <Footer></Footer>
  </Router>
  );
}

export default App;
