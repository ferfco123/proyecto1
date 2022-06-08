import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from "accounting";
import { actionTypes } from '../reducer';
import { useStateValue} from "../StateProvider"



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

export default function Product({product : {id,name,productType,image,price,rating,desciption}}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [{basket}, dispatch ]= useStateValue()
  const addToBasket =  ()=>{
 dispatchEvent({
   Type: actionTypes.ADD_TO_BASKET,
   item:{
     id: id,
    name:name,
    productType: productType,
    image: image,
    price:price,
    rating: rating,
    description: desciption,

  }
 })
  }

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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToBasket}>
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="share">
          {Array(rating)
          .fill()
          .map((_,i)=> ( <p>&#11088;</p>)
              
          )}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{desciption}</Typography>
          
          
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
