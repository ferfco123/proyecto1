import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import emblema from '../assets/emblema.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={emblema} style={{height:"4rem"}}/>
          </IconButton>
          <Typography variant="h6" color="textPrimary" component="p" sx={{ flexGrow: 1 }}>
            Hello Guest
          </Typography>
          <div Style={{ marginLeft: "auto", flexGrow:1}}> <Button variant="containded">
              <strong>Sign in</strong>
              </Button>
              <IconButton aria-label='show cart items'> 
              <Badge badgeContent={2} color="secondary">

              <AddShoppingCartIcon  fontSize='large' ></AddShoppingCartIcon>
              </Badge>
              </IconButton>
              
              
              
              </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
