import "./App.css";
import React from "react"
/*import Product from "./components/Product";*/
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {
  
  Routes,
  Route,
  
} from "react-router-dom"; 
import CheckOutPage from "./components/CheckOutPage"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {useEffect} from "react"
import { auth } from "./fireBase";

import { actionsTypes } from "./reducer";
import { useStatevalue } from "./components/StateProvider";
import Checkout from "./components/checkOutForm/Checkout";

function App() {
// eslint-disable-next-line
const  [{user},dispatch] = useStatevalue();
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{if(authUser){dispatch({type: actionsTypes.SET_USER,
                                                                       user:authUser,})}})
  },[])


  return (

   
     
      <div  className="App">
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/checkout-page" element={<CheckOutPage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      
      
      

     
     
      
     
    </div>

    
  );
}




export default App;
