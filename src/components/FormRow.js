import * as React from 'react';
import { useStatevalue } from './StateProvider';



import CheckOutCard from "./CheckOutCard"


export default function FormRow(){
    // eslint-disable-next-line
  const  [{basket},dispatch] = useStatevalue();

console.log(basket)
  return (
    
     basket?.map((item, index) =>(
        
        <CheckOutCard key={index} item={item}/>
     
       
     ))


   
  )





}