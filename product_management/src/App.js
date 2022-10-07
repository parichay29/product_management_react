
import React from "react";
//import AddProduct from "../src/components/AddProduct"
import { BrowserRouter } from "react-router-dom";
//import {Button} from 'antd';
import Home from './components/Home';
//import Navbar from "./components/navbar";
function App() {
   return( 
   
   <BrowserRouter>  
  <Home/>
  </BrowserRouter>
  
  
  );
}
   

export default App;