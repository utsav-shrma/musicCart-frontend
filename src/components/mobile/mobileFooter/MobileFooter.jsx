import React from "react";
import styles from "./MobileFooter.module.css";
import { useNavigate } from "react-router-dom";
import cartLogo from "../../../assets/icons/mobileCart.png";
import homeIcon from "../../../assets/icons/homeIcon.png";
import accountIcon from "../../../assets/icons/accountIcon.png";
function MobileFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.indicator}></div>
        <button>
          <img src={homeIcon}></img>
          <p>Home</p>
        </button>
      </div>

<div className={styles.navigation}>
<div className={styles.indicator}></div>
      <button id={styles.cartContainer}>
       
        <img src={cartLogo}></img>
        <p>Cart</p>
        <p id={styles.count}>0</p>
      </button>
      </div>
      <div className={styles.navigation}>
      <div className={styles.indicator}></div>
      <button>
        
        <img src={accountIcon}></img>
        <p>Logout</p>
      </button>
    </div>
    </div>
  );
}

export default MobileFooter;
