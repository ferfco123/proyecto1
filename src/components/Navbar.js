import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import emblema from "../assets/emblema.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../fireBase";
import { actionTypes } from "../reducer";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useNavigate();
  const handleOut = () => {
    if (user) {
      auth.signOut();
      dispatch({ Type: actionTypes.EMPTY_BASKET, basket: [] });
      dispatch({ Type: actionTypes.SET_USER, user: null });
      history.push("/");
    }
    
    
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Link to="/welcome">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={emblema} alt="" style={{ height: "4rem" }} />
            </IconButton>
          </Link>

          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ flexGrow: 1 }}
          >
            Hello {user ? user.email : "guest"}
          </Typography>
          <div style={{ marginLeft: "auto", flexGrow: 1 }}>
            <link to="/sign-in">
              <Button variant="containded" onClck={handleOut}>
                <strong>{user ? "sign out" : "sign in"}</strong>
              </Button>
            </link>

            <Link to="/checkout-page">
              <IconButton aria-label="show cart items">
                <Badge badgeContent={basket?.length} color="secondary">
                  <AddShoppingCartIcon fontSize="large"></AddShoppingCartIcon>
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
