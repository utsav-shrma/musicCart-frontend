import React,{useEffect,useState} from 'react'
import styles from './Success.module.css'
import Footer from '../footer/Footer'
import logo from '../../assets/images/musicArtLogo.png'
import confetti from '../../assets/images/confetti.png'
import { useNavigate } from 'react-router-dom'
import MobileFooter from '../mobile/mobileFooter/MobileFooter'
function Success() {
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


  const navigate=useNavigate();
  return (
    <div className={styles.container}>
       <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo}></img>
        <p className={styles.heading}>Musicart</p>
      </div>

      <div className={styles.successConatiner}>

        <img src={confetti}></img>
        <p className={styles.successHeading} >Order is placed successfully!</p>
        <p className={styles.message}>You  will be receiving a confirmation email with order details</p>
        <button onClick={()=>{navigate('/');}}> Go back to Home page </button>
      </div>
      {isDesktop?<Footer></Footer>:<MobileFooter cartCount={0}></MobileFooter>}
      
    </div>
  )
}

export default Success