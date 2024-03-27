import React,{useState,useEffect} from 'react'
import styles from "./InvoiceScreen.module.css";
import HomeHeader from "../desktop/homeHeader/HomeHeader";
import Footer from "../footer/Footer";
import BackButton from "../desktop/backButton/BackButton";
import LogoHeader from "../desktop/logoHeader/LogoHeader";
import { Context } from "../../context";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import BackArrow from "../mobile/backArrow/BackArrow";
import Heading from "../heading/Heading";
import MobileFooter from "../mobile/mobileFooter/MobileFooter";

function InvoiceScreen() {
    const userName = localStorage.getItem("userName");
    const [isDesktop, setIsDesktop] = useState(true);
  
    const handleResize=()=>{
      
      window.addEventListener("resize", () => setIsDesktop(window.innerWidth>breakpoint));
      const breakpoint = 750;
      const width=window.innerWidth;
      if(width>breakpoint){
        setIsDesktop(true);
      }
      else{
        setIsDesktop(false);
      }
     
  
    }
    
      useEffect(() => {
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        
      }, []);
  
    return (
      <div className={styles.container}>
        {isDesktop?<HomeHeader></HomeHeader>:<Heading></Heading>}
        <div className={styles.middleContainer}>
         {isDesktop? <Context.Provider value={{ userName }}>
            <LogoHeader showCart={false} currScreen={"Checkout"} />
          </Context.Provider>:""}
          {isDesktop?<BackButton></BackButton>:<BackArrow></BackArrow>}
          <CheckoutForm isInvoice={true} ></CheckoutForm>
        </div>
  
        {isDesktop?<Footer></Footer>:<MobileFooter></MobileFooter>}
      </div>
    );
}

export default InvoiceScreen