import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import DeleteIcon from '@mui/icons-material/Delete';
import accounting from "accounting"
import { useStatevalue } from './StateProvider';
import { actionsTypes } from '../reducer';

export default function CheckOutCard({item:{id, price, name, productType,rating,image}}) {
 /* Eslint-disable React/prop-types */
 // eslint-disable-next-line
 const  [{basket},dispatch] = useStatevalue();
 

 const removeItem = ()=> dispatch(
  {type:actionsTypes.REMOVE_ITEM,
  id:id,}
 )
  

  return (
    <Card sx={{ maxWidth: 260}}>
      <CardHeader 
        
        action={
         <Typography  variant="h5" color="textSecondary">

                {accounting.formatMoney(price," u$s")}
         </Typography>
        }
        title={name}
        subheader={productType}
      />
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={name}
      />
      
      <CardActions disableSpacing style={{display:"flex", justifyContent:"space-between", textAlign:"center"}}>
       <div style={{ display:"flex"}}>
       {Array(rating)
          .fill()
          .map((_, i)=> (<p key={i}>&#11088;</p>)
              
          )}

       </div>
        
          <IconButton>
          <DeleteIcon fontSize='large' onClick={removeItem}/>
          </IconButton>
          
        
      </CardActions>
      
    </Card>
  );
}
