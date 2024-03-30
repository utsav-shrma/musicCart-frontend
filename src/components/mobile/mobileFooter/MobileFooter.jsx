import React from "react";
import styles from "./MobileFooter.module.css";
import { useNavigate,useLocation } from "react-router-dom";
import cartLogo from "../../../assets/icons/mobileCart.png";
import homeIcon from "../../../assets/icons/homeIcon.png";
import accountIcon from "../../../assets/icons/accountIcon.png";
import footerInvoice from '../../../assets/icons/footerInvoice.png'


function MobileFooter({cartCount}) {
  const location = useLocation();
  const navigate=useNavigate();
  const currentLinkAddress = location.pathname;
  const handleLogout=()=>{
    localStorage.setItem("token", "");
    localStorage.setItem("userName", "");
    navigate("/login");
  }
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        { currentLinkAddress==='/'? <div className={styles.indicator}></div>:""}
       
        <button onClick={()=>{navigate('/')}}>
          <img src={homeIcon}></img>
          <p>Home</p>
        </button>
      </div>

<div className={styles.navigation}>
{ (currentLinkAddress==='/cart'||currentLinkAddress==='/checkout' )? <div className={styles.indicator}></div>:""}
      <button  onClick={()=>{navigate('/cart')}} id={styles.cartContainer}>
       
        <img src={cartLogo}></img>
        <p>Cart</p>
        <p id={styles.count}>{cartCount}</p>
      </button>
      </div>

      <div className={styles.navigation}>
      { currentLinkAddress==='/invoice'? <div className={styles.indicator}></div>:""}
        <button  onClick={()=>{navigate('/invoice')}}>
          <img src={footerInvoice}></img>
          <p>Invoice</p>
        </button>
      </div>
      
      <div className={styles.navigation}>
      {/* <div className={styles.indicator}></div> */}
      <button onClick={handleLogout}>
        
        <img src={accountIcon}></img>
        <p>Logout</p>
      </button>
    </div>
    </div>
  );
}

export default MobileFooter;
