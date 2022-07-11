import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStatevalue } from './StateProvider';
import accounting from "accounting"
import { actionsTypes } from '../reducer';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product:{id, price, name, productType,rating,image,description}}) {
 /* Eslint-disable React/prop-types */
  const [expanded, setExpanded] = React.useState(false);
  // eslint-disable-next-line
const  [basket,dispatch] = useStatevalue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  const addToBasket = () => {
    dispatch({
      type: actionsTypes.ADD_TO_BASKET,
      item:{
        id:id,
        name: name,
        productType:productType,
        image:image,
        price:price,
        description:description
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 260}}>
      <CardHeader 
        
        action={
         <Typography  variant="h5" color="textSecondary">

                {accounting.formatMoney(price)}
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
      <CardContent style={{height:5}}>
        <Typography fontWeight= "bold" color="text.secondary">
         <h4>Caracteristicas:</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToBasket}>
          <AddShoppingCartIcon fontSize="large"/>
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i)=> (<p key={i}>&#11088;</p>)
              
          )}
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
          <Typography paragraph>{description} </Typography>
          
          
          
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
