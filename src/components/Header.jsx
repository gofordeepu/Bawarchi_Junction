import { LOGO_URL } from "../utils/constants";
import { BRAND_NAME } from "../utils/constants";
const Header=()=>{
    return(
      <div className="header">
        <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="logo" />
        <h1 className="brand">{BRAND_NAME}</h1>
        </div>
  
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
  
      </div>
    )
  }

export default Header;