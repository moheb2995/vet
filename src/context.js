import React,{createContext, useState} from "react";

export const myContext = createContext()

const Context =(props)=>{
  const [epoch,setepoch] = useState({})
  const [salonName,setsalonName] = useState('')
  const [farmerName,setfarmerName] = useState('')
  
return(

<myContext.Provider value={{epoch,setepoch,farmerName,setfarmerName,salonName,setsalonName}}> 
  {props.children}
</myContext.Provider>

)}
export default Context