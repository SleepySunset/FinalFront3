import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const ContextGlobal = createContext(undefined);
const lsFavs =  JSON.parse(localStorage.getItem("favs")) || [];

const Context = ({ children }) => {
  const [favs, setFavs] = useState(lsFavs)
  const [dentists, setDentists] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)

  const endpoint = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  },[favs])
  
  
  useEffect(()=>{
    axios(endpoint).then((res)=> {
      setDentists(res.data)
    })
  },[])

  return (
    <ContextGlobal.Provider value={{dentists, favs, setFavs, darkTheme, setDarkTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal)