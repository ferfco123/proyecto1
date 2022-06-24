import * as React from 'react';

import Box from '@mui/material/Box';
import { useStatevalue } from './StateProvider';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Total from './Total';




export default function CheckOutPage() {
  const [{basket}, dispatch]= useStatevalue();
    function FormRow(){
      return (
        <React.Fragment>
         {basket?.map((item, index) =>{
            <Grid item xs={12} sm={8} md={6} lg={4} key={index}>
            <CheckOutCard key={item.id} product={item}/>
          </Grid>

         })}


        </React.Fragment>
      )



    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Typography align="center" gutterBottom variant='h4'>
            Shpping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9}  container spacing={2}>
          <FormRow/>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant='h4'>
           <Total/>
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
}
