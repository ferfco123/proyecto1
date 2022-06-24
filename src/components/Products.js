import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import useAxios from '../hooks/useAxios'




export default function Products() {
  const {datos,error,isLoading}=useAxios(`http://localhost:8000/productos`);
  return (
    <Box sx={{ flexGrow: 1 }} style={{padding:"15px"}}>
      <Grid container spacing={1}>
       
         {isLoading &&<p>Cargando </p>}
         {error && <p>Error - {error}</p>}
         {!error && !isLoading && datos.length > 0 && (datos.map((product, index)=>(
           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
           <Product key={product.id} product={product} />
           
           </Grid>)
           )  )}

       

      </Grid>
    </Box>
  );
}
