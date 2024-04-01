import React,{useState,useEffect} from 'react'
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
import MobileFooter from '../mobile/mobileFooter/MobileFooter'
import { getAllOrders } from '../../api/order'
import { getCartCount } from '../../api/cart'


function InvoiceList() {
  const navigate=useNavigate();
  const [isDesktop, setIsDesktop] = useState(true);
  const [orders,setOrders]=useState([]);
  const getSetOrders=async ()=>{
    let response=await getAllOrders();
    if(response){
      setOrders(response);
    }
  }
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
      getSetOrders();
      getAndSetCartCount();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      
    }, []);

    useEffect(()=>{console.log(orders);},[orders])
  const userName=localStorage.getItem("userName");

  return (
    <div className={styles.container}>
    {isDesktop?<HomeHeader></HomeHeader>:<Heading></Heading>}

    <div className={styles.middleContainer}>
      
      {isDesktop?<Context.Provider value={{ userName }}>
      <LogoHeader currScreen={'Invoices'} showCart={true} showUserLogo={false}></LogoHeader>
      </Context.Provider>:""}
    
      {isDesktop? <div className={styles.backButtonContainer}>
          <button onClick={()=>{navigate('/');} }className={styles.backButton}>Back to Home</button>
        </div>:<BackArrow link={"/"}></BackArrow>}

        <div className={styles.invoicesContainer}>

    <div className={styles.invoiceHeading}>{!isDesktop?<img src={blackIcon}></img>:""}<h1>My Invoices</h1></div>
      
      {orders.map((order,index)=>{
        return <React.Fragment key={index}>
          <div className={styles.eachInvoiceDiv}>
            <div className={styles.left}>
              <img src={icon}></img>
              <div className={styles.details}>
                <p className={styles.name}>{order.name}</p>
                <p className={styles.address} >{order.address}</p>
                

              </div>
            </div>

            <button onClick={()=>{navigate(`/invoice/${order._id}`)}}className={styles.invoiceButton}> View Invoice</button>
      </div>
      <hr></hr>
        </React.Fragment>
      })}
      
    </div>
    
    </div>

    {isDesktop?<Footer></Footer>:<MobileFooter cartCount={cartCount}></MobileFooter>}
    
    
</div>
  )
}

export default InvoiceList