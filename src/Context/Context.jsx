import { createContext, useEffect, useContext, useReducer } from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";

export const ContextGlobal = createContext(undefined);
const lsFavs =  JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: lsFavs,
  dentists: [],
  darkTheme: false
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const endpoint = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(state.favs))
  },[state.favs])
  
  
  useEffect(()=>{
    axios(endpoint).then((res)=> {
      dispatch({type: "GET_DENTISTS", payload: res.data})
    })
    .catch((err) => {
      throw new Error (err);
    })
  },[])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal)