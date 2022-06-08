import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, chiledren})=>(

    <StateContext.Provider value= {useReducer(reducer,initialState)}>

      {chiledren}

    </StateContext.Provider>
);
export const useStateValue= ()=> useContext(StateContext)