
import './App.css';

/*import useAxios from './hooks/useAxios';*/
import Product from './components/Product';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckOutCard from './components/CheckOutCard';




function App() {

  /*const {data,error,isLoading}=useAxios(`http://localhost:8000/team`)*/

  
  return (
     
    <>
    
    <Navbar/>
   <Products></Products>
  
    
    </>

    
    
    
    
    
    
    
  );
}

export default App;
