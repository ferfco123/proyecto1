import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStatevalue } from "./StateProvider";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import emblema from "../assets/emblema.jpg";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../fireBase";
import { actionsTypes } from "../reducer";

export default function Navbar() {
  const history = useNavigate();
  const [ basket, user, dispatch] = useStatevalue();


  
  const  handleAuth = ()=> {
    auth.signOut().then(()=>{dispatch({type:actionsTypes.EMPTY_BASKET,
      basket:[],}); dispatch({type:actionsTypes.SET_USER, user:null})}).catch(err => alert(err.message));
    
    
  
    history.push("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={emblema}
                style={{ height: "4rem", borderRadius: "10px" }}
              />
            </IconButton>
          </Link>

          <div style={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            component="p"
            color="textPrimary"
            sx={{ flexGrow: 1 }}
          >
            hello {user ? user.email :"guest"}
          </Typography>

          <div color="textPrimary">
            <Link to="/SignIn">
              {" "}
              <Button variant="cointained" onClick={handleAuth}>
                <strong>{user ? "sign out" : " sign in"}</strong>
              </Button>
            </Link>

            <Link to="/checkout-page">
              <IconButton>
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCartCheckoutIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
