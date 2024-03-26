import React,{useState,useEffect,useWin} from 'react'
import styles from './InvoiceList.module.css'
import HomeHeader from '../desktop/homeHeader/HomeHeader'
import Footer from '../footer/Footer'
import LogoHeader from '../desktop/logoHeader/LogoHeader'
import { Context } from '../../context'
import icon from '../../assets/icons/invoiceIcon.png'
import { useNavigate } from 'react-router-dom'
import Heading from '../heading/Heading';
import BackArrow from '../mobile/backArrow/BackArrow'
import blackIcon from '../../assets/icons/blackIcon.png'

function InvoiceList() {
  const navigate=useNavigate();
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
  const userName=localStorage.getItem("userName");

  return (
    <div className={styles.container}>
    {isDesktop?<HomeHeader></HomeHeader>:<Heading></Heading>}

    <div className={styles.middleContainer}>
      
      {isDesktop?<Context.Provider value={{ userName }}>
      <LogoHeader currScreen={'Invoices'} showUserLogo={false}></LogoHeader>
      </Context.Provider>:""}
    
      {isDesktop? <div className={styles.backButtonContainer}>
          <button onClick={()=>{navigate('/');} }className={styles.backButton}>Back to Home</button>
        </div>:<BackArrow link={"/"}></BackArrow>}

        <div className={styles.invoicesContainer}>

    <div className={styles.invoiceHeading}>{!isDesktop?<img src={blackIcon}></img>:""}<h1>My Invoices</h1></div>
      
      <div className={styles.eachInvoiceDiv}>
            <div className={styles.left}>
              <img src={icon}></img>
              <div className={styles.details}>
                <p className={styles.name}>Akash Patel</p>
                <p className={styles.address} >104 kk hh nagar, Lucknow Uttar Pradesh 226025</p>
                

              </div>
            </div>

            <button className={styles.invoiceButton}> View Invoice</button>
      </div>
      <hr></hr>
      <div className={styles.eachInvoiceDiv}>
            <div className={styles.left}>
              <img src={icon}></img>
              <div className={styles.details}>
                <p className={styles.name}>Akash Patel</p>
                <p className={styles.address} >104 kk hh nagar, Lucknow Uttar Pradesh 226025</p>
                

              </div>
            </div>

            <button className={styles.invoiceButton}> View Invoice</button>
      </div>
      <hr></hr>
      <div className={styles.eachInvoiceDiv}>
            <div className={styles.left}>
              <img src={icon}></img>
              <div className={styles.details}>
                <p className={styles.name}>Akash Patel</p>
                <p className={styles.address} >104 kk hh nagar, Lucknow Uttar Pradesh 226025</p>
                

              </div>
            </div>

            <button className={styles.invoiceButton}> View Invoice</button>
      </div>
      <hr></hr>
    </div>
    
    </div>

    {isDesktop?<Footer></Footer>:"mobile footer"}
    
    
</div>
  )
}

export default InvoiceList