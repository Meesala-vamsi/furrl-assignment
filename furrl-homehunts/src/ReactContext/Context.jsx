import React, { useState } from "react";


export const Context=React.createContext(null)

const ContextProvider=({children})=>{
const [filterData,setFilterData]= useState({})
const [isLoading,setIsLoading] = useState(true)
const [productId,setProductId] = useState()

return(
    <Context.Provider value={{productId,setProductId,filterData,setFilterData,isLoading,setIsLoading}}>
        {children}
    </Context.Provider>
)
}

export default ContextProvider