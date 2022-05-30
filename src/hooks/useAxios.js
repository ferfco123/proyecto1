import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useAxios =(url)=>{
const [datos, setDatos]= useState([]);
const [error,setError]=useState({
    isError:false,
    message:""
});
const [isLoading, setIsLoading]= useState(false);

async function getData(){

    setIsLoading(true);
    try{
       const res= await axios(url);
       setDatos(res.data);
       console.log(datos.products);
 }
 catch(err){
  setError({isError:true,
            message: err.message || "hubo un error"})
}
finally{

    setIsLoading(false)

}
}

useEffect(()=>{
 getData()


},[]);

return {datos,error,isLoading}
}

export default useAxios