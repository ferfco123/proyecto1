export const initialState={
basket:[],
  user:null
}


export const actionsTypes={
    ADD_TO_BASKET:"ADD_TO_BASKET",
    REMOVE_ITEM:"REMOVE_ITEM",
     SET_USER:"SET_USER",
     EMPTY_BASKET:"EMPTY_BASKET",
}

export const getBasketTotal= (basket)=>{ return (
  basket?.reduce( function (accu,item){  return accu + item.price},0 ))
  

  
}
console.log(getBasketTotal)
const reducer = (state,action)=>{

    switch(action.type){
      case "ADD_TO_BASKET":
        return{
            ...state,
           basket:[...state.basket, action.item]
          
        };
      case "REMOVE_ITEM": {
      const index = state.basket.findIndex((basketitem=> basketitem.id===action.id));
      let newbasket = [...state.basket];
      if (index >= 0){newbasket.splice(index,1)}
      else{console.log("cant remove product")}
      return {
        ...state,
        basket: newbasket,


      }}
      case "SET_USER":return{
        ...state,
        user:action.user
      }
      case " EMPTY_BASKET": return {...state, basket: action.basket}
        default :return  state;


    }


}
export default reducer