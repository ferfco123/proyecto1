import "./App.css";

/*import useAxios from './hooks/useAxios';*/

import Navbar from "./components/Navbar";
import Products from "./components/Products";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CheckOutPage from "./components/CheckOutPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { auth } from "./fireBase";
import { actionTypes } from "./reducer";
import { useStateValue} from "./StateProvider"
import Checkout from "./components/checkOutForm/CheckOut";


function App() {
  const [{user}, dispatch ]= useStateValue();
  useEffect(() => {
    auth.onAuthStateCahnge((authUser)=>{if(authUser){dispatch({Type: actionTypes.SET_USER,
     user:authUser,})}})
  }, []);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/checkout-page">
           <CheckOut/>
          </Route>
          <Route path="/checkout">
            <CheckOutPage />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
