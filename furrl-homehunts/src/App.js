import React, {  useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import ContextProvider from './ReactContext/Context'

import Share from './components/Share/Share'




const App = () => {
  const [currStatus,setCurrStatus] = useState(false)
  console.log(currStatus)
  return(
  <ContextProvider>
    {currStatus?<Share setCurrStatus={setCurrStatus}/>:<></>}
    <Navbar/>
    <Home setCurrStatus={setCurrStatus}/>
    
  </ContextProvider>
)
}


export default App