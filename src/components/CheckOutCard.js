import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';







import accounting from "accounting";
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue} from "../StateProvider"
import { actionTypes } from '../reducer';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckOutCard({product : {id,name,productType,image,price,rating,desciption}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch ]= useStateValue()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 const removeItem =()=>
   dispatch({
     type:actionTypes.REMOVE_ITEM,
     id:id,
   })


 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
          <Typography 
          variant = "h5"
          color="text.secondary"
          >
            {accounting.formatMoney(price)}  
          </Typography>
        }
        title={name}
        subheader="in stock"
      />
      <CardMedia
        component="img"
        height="300"
        
        image={image}
        alt={name}
      />
      
      <CardActions disableSpacing style={{display:"flex", justifyContent:"space-between", textAlign:"center"}}>
        
        <IconButton aria-label="share" style={{display:"flex"}}>
          {Array(rating)
          .fill()
          .map((_,i)=> ( <p>&#11088;</p>)
              
          )}
        </IconButton>
        <IconButton>
            <DeleteIcon fontSize="large" onClick={removeItem}/>
            </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
