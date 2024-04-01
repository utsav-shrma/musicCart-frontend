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
import { getOrderbyId } from '../../api/order';
import { useParams } from 'react-router';
import { getCartCount } from '../../api/cart';
import { Link,useNavigate } from 'react-router-dom';
function InvoiceScreen() {
    const userName = localStorage.getItem("userName");
    const [isDesktop, setIsDesktop] = useState(true);
    const params=useParams();
    const id=params.id;
    const [order,setOrder]=useState({});
    const [cartCount,setCartCount]=useState(0);
    const navigate=useNavigate();

  const getAndSetCartCount=async ()=>{
      let response=await getCartCount();
      if(response){
        setCartCount(response.cartCount);
      }
  }
    const getAndSetOrder =async ()=>{
            let response=await getOrderbyId(id);
            if(response){
                setOrder(response);
            }
            else{
                navigate("/404");
            }
    }
    
    
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
    useEffect(()=>{console.log(order);},[order]);
      useEffect(() => {
        handleResize();
        getAndSetOrder(id);
        getAndSetCartCount();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        
      }, []);
  
    return (
      <div className={styles.container}>
        {isDesktop?<HomeHeader></HomeHeader>:<Heading></Heading>}
        <div className={styles.middleContainer}>
         {isDesktop? <Context.Provider value={{ userName }}>
            <LogoHeader showCart={false} currScreen={"Invoice"} />
          </Context.Provider>:""}
          {isDesktop?<BackButton></BackButton>:<BackArrow link={"/invoice"}></BackArrow>}
          {order.cart?<CheckoutForm isInvoice={true} cart={order.cart} totalAmount={order.orderPrice} order={{address:order.address,mode:order.mode}}  ></CheckoutForm>:""}
        </div>
  
        {isDesktop?<Footer></Footer>:<MobileFooter cartCount={cartCount}></MobileFooter>}
      </div>
    );
}

export default InvoiceScreen