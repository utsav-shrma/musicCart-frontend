import React from 'react'
import styles from './LogoHeader.module.css'
import logo from "../../../assets/images/musicArtLogo.png";
import cartLogo from "../../../assets/icons/cartLogo.png";
import * as Popover from '@radix-ui/react-popover';
import { useContext } from 'react';
import { Context } from '../../../context';
import { useNavigate,Link } from "react-router-dom";
function LogoHeader({showCart=true,currScreen,showUserLogo=true}) {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/login");
      }

      const handleCart=()=>{
        if(localStorage.getItem('token')){
            navigate('/cart');
            //change navigate to cart page
        }
        else{
            navigate('/login');
        }
      }

     
    const {cartCount,userName,productName}=useContext(Context);
  return (
    <div className={styles.logoCartConatiner}>
        <div className={styles.logoMainContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo}></img>
            <p className={styles.heading}>Musicart</p>
          </div>
            {/* add invoice g=here when user is logged in*/}
          <p className={styles.homeLink}>Home {window.location.pathname==='/'?<Link className={styles.homeLink} to={"/invoice"}>Invoices</Link>:""}{currScreen?`/ ${currScreen}`:""}</p>
        </div>

        <div className={styles.cartContainer}>
          {showCart?<button onClick={handleCart} className={styles.cartButton}>
            <img src={cartLogo}></img> &nbsp;View Cart &nbsp;{cartCount}
          </button>:""}
          {/* {" "} */}
          {/**to be updated */}
          {showUserLogo?localStorage.getItem("token")?<Popover.Root>
    <Popover.Trigger className={styles.accountLogo}>DR</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.PopoverContent}>
        <div className={styles.popoverDiv}>
          <p>{userName}</p>
          <hr></hr>
          <button onClick={handleLogout} className={styles.popoverButton} > Logout </button>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>:"":""}
          

        </div>
      </div>
  )
}

export default LogoHeader