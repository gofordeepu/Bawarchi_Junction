import { LOGO_URL } from "../utils/constants";
import { BRAND_NAME } from "../utils/constants";
import {useState} from "react";
const Header=()=>{
  const [auth_btn,setauth_btn]=useState("Login");
  const [auth_icon,setauth_icon]=useState("👤");
    return(
      <div className="header">
        <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="logo" />
        <h1 className="brand">{BRAND_NAME}</h1>
        </div>
  
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About&nbsp;Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              if(auth_btn==="Login"){
                setauth_btn("Logout");
                setauth_icon("🚪");
              }
              else{
                setauth_btn("Login");
                setauth_icon("👤");
              }
            }}>{auth_icon}&nbsp;&nbsp;{auth_btn}</button>
          </ul>
        </div>
  
      </div>
    )
  }

export default Header;