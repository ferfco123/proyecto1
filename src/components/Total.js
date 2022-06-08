
import accounting from "accounting"
import Button from '@mui/material/Button';
import { styled } from "@mui/system";
import { getBasketTotal } from "../reducer";
import { useStateValue} from "../StateProvider"

const useStyles = styled((them)=>({
root:{
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    height: "20vh"
},
button:{
marginTop: "2rem"

}

}
))
const Total =()=>{
    const [{basket}, dispatch ]= useStateValue()
    const classes = useStyles()
return(<div className={classes.root}>
    <h5>total items:{basket?.length}</h5>
    <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
    <Button className={classes.button} variant="conteined" color="secondary">check out</Button>







</div>

)
}
export default Total