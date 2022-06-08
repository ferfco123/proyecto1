import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Typography } from '@mui/material';

import CheckOutCard from './CheckOutCard';

import Total from './Total';
import { useStateValue} from "../StateProvider"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CheckOutPage() {
    
    const [{basket}, dispatch ]= useStateValue()
  function FormRow() {
 <React.Fragment>
     { basket?.map((item)=>(
      <Grid item xs={12} sm={8} md={6} lg={4} >
      <CheckOutCard key={item.id} product={item}/>
    </Grid>



     ))     }



 </React.Fragment>



  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
         <Typography align="center" gutterBottom variant="h4">
             Shopping Cart
         </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
         <FormRow/>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
              <Total/>
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
}
