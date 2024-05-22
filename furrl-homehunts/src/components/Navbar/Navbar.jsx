import MenuIcon from '@mui/icons-material/Menu';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./Navbar.css"


const Navbar = (props) => {

 
  return (
    <nav>
        <div className="nav-container">
            <MenuIcon className='nav-icon'/>
            <h1>Furrl</h1>
            <div className='nav-right'>
              <a href="https://furrl.in/wishlist">
              <BookmarkBorderOutlinedIcon className='nav-icon'/>
              </a>
                <a href="https://furrl.in/cart">
                <ShoppingBagOutlinedIcon className='nav-icon'/>
                </a>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar