import React,{createContext, useState} from "react";

export const myContext = createContext()

const Context =(props)=>{
  const [epoch,setepoch] = useState({})


return(

<myContext.Provider value={{epoch,setepoch}}> 
  {props.children}
</myContext.Provider>

)}
export default Context