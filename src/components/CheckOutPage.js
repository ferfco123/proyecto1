import * as React from 'react';

import Box from '@mui/material/Box';
import { useStatevalue } from './StateProvider';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Total from './Total';
/*import CheckOutCard from "./CheckOutCard"*/
import FormRow from './FormRow';



export default function CheckOutPage() {
  // eslint-disable-next-line
  const  [{basket},dispatch] = useStatevalue();
   
    
   
    
  return (
    <Box sx={{ flexGrow: 1 }} style={{padding:"10px 40px "}}>
      <Grid container spacing={1}>
        <Grid item xs={12} >
          <Typography align="center" gutterBottom variant='h4'>
            Shpping Cart 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9}  container spacing={3}>
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
