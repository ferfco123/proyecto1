import * as React from 'react';
import Button from '@mui/material/Button';
import { getBasketTotal } from '../reducer';
import accounting from 'accounting';
import { useStatevalue } from './StateProvider';
import { Link } from 'react-router-dom';


const Total =()=>{
    const basket= useStatevalue();
return (
<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"20vh"}}>
<h5>total items: {basket?.length}</h5>
<h5>{accounting.formatMoney(getBasketTotal(basket),"u$s")}</h5>
<Link to="/checkout"><Button variant="contained" color="secondary" style={{marginTop:"2rem"}}>check out</Button></Link>
</div>

)

}

export default Total