import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useAxios =(dataUrl)=>{
const [datos, setDatos]= useState([]);
const [error,setError]=useState(null);
const [isLoading, setIsLoading]= useState(false);

useEffect ( ()=> {

    const getData = async (url) =>{
        setIsLoading(true);
try{
    const response = await axios.get(url)
    setDatos(response.data);
}
catch(error){
 setError(error.message)

}
finally{

    setIsLoading(false)

}
    };
    getData(dataUrl);

}, [dataUrl])

return {datos,error,isLoading}
}

export default useAxios