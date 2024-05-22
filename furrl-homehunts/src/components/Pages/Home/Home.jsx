import "./Home.css"
import Header from '../../Header/Header'

import Products from "../../Products/Products"


const Home = ({setCurrStatus}) => {
  return (
    <div className="home-container">
        
        <Header/>
        <Products setCurrStatus={setCurrStatus}/>
        

    </div>
  )
}

export default Home