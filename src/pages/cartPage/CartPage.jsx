import React,{useState,useEffect} from 'react'
import styles from './CartPage.module.css'
import Cart from '../../components/desktop/cart/Cart'
import MobileCart from '../../components/mobile/mobileCart/MobileCart'
function CartPage() {
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
    <div>
      {isDesktop?<Cart></Cart>:<MobileCart></MobileCart>}
        
    </div>
  )
}

export default CartPage