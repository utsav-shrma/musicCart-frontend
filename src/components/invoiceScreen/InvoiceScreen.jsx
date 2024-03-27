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
    let sample=[
        {
            "productId": {
                "_id": "65fd70127d395fb79842ff6f",
                "name": "Boat WH-CH720N",
                "price": 1000,
                "color": "Black",
                "inventory": 20,
                "images": [
                    "http://localhost:3000/sony/headphoneImage.png",
                    "http://localhost:3000/sony/headphoneImage.png",
                    "http://localhost:3000/sony/headphoneImage.png",
                    "http://localhost:3000/sony/headphoneImage.png"
                ]
            },
            "qty": 2,
            "_id": "66041c29db26ef215850e132"
        },
        {
            "productId": {
                "_id": "65fd70347d395fb79842ff70",
                "name": "Sony WH-CH720N",
                "price": 3500,
                "color": "Black",
                "inventory": 20,
                "images": [
                    "http://localhost:3000/sony/headphoneImage.png",
                    "http://localhost:3000/sony/headphoneImage.png"
                ]
            },
            "qty": 3,
            "_id": "66041c2adb26ef215850e13a"
        }
    ];
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
          <CheckoutForm isInvoice={true} cart={sample} totalAmount={0} ></CheckoutForm>
        </div>
  
        {isDesktop?<Footer></Footer>:<MobileFooter></MobileFooter>}
      </div>
    );
}

export default InvoiceScreen