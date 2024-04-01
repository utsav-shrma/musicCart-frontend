import React,{useState,useEffect} from "react";
import styles from "./CheckoutScreen.module.css";
import HomeHeader from "../desktop/homeHeader/HomeHeader";
import Footer from "../footer/Footer";
import BackButton from "../desktop/backButton/BackButton";
import LogoHeader from "../desktop/logoHeader/LogoHeader";
import { Context } from "../../context";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import BackArrow from "../mobile/backArrow/BackArrow";
import Heading from "../heading/Heading";
import MobileFooter from "../mobile/mobileFooter/MobileFooter";
import { useLocation ,useNavigate} from 'react-router-dom';
import { getCartCount } from "../../api/cart";

function CheckoutScreen() {
  const userName = localStorage.getItem("userName");
  const [isDesktop, setIsDesktop] = useState(true);
  const location = useLocation();
  const navigate=useNavigate();
  let [cart,setCart]=useState([]);
  let [totalAmount,setTotalAmount]=useState(0);
 
    
    
    const [cartCount,setCartCount]=useState(0);
  

    const getAndSetCartCount=async ()=>{
        let response=await getCartCount();
        if(response){
          setCartCount(response.cartCount);
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
  
    useEffect(() => {
      handleResize();
      if(location.state!=null){
        let stateCart=location.state.cart;
        let total=location.state.totalAmount;
        getAndSetCartCount();
        setCart(stateCart);
        setTotalAmount(total);
        
       }
       else{
         navigate('/404');
       }
     
       return () => {
        window.removeEventListener('resize', handleResize);
        
      };
      
    }, []);

  return (
    <div className={styles.container}>
      {isDesktop?<HomeHeader></HomeHeader>:<Heading></Heading>}
      <div className={styles.middleContainer}>
        <Context.Provider value={{ userName }}>
          <LogoHeader showCart={false} currScreen={"Checkout"} />
        </Context.Provider>
        {isDesktop?<BackButton></BackButton>:<BackArrow link={"/cart"}></BackArrow>}
        {cart.length!=0?<CheckoutForm cart={cart} totalAmount={totalAmount}></CheckoutForm>:""}
      </div>

      {isDesktop?<Footer></Footer>:<MobileFooter cartCount={cartCount}></MobileFooter>}
    </div>
  );
}

export default CheckoutScreen;
