import React,{useState,useEffect} from 'react'
import styles from './Cart.module.css'
import HomeHeader from '../homeHeader/HomeHeader'
import Footer from '../../footer/Footer'
import LogoHeader from '../logoHeader/LogoHeader'
import { Context } from '../../../context'
import BackButton from '../backButton/BackButton'
import bag from '../../../assets/icons/bagLogo.png'
import { getCart } from '../../../api/cart'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const userName=localStorage.getItem("userName");
    const navigate = useNavigate();
    const [cart,setCart]=useState([]);
    const [cartTotalAmount,setCartTotalAmount]=useState(0);
    const convenienceFee=45;
    
    const getCartData=async ()=>{

        let response = await getCart();
        if(response){
            setCart(response.cart);
            setCartTotalAmount(response.totalAmount);
            // console.log(response);
        }
        
    }

    useEffect(()=>{
        getCartData();
    },[]);

    
    const handleQtyChange =(event,index)=>{
        let prevQty=cart[index].qty;
        let newQty=Number(event.target.value)
        let productPrice=cart[index].productId.price;
        setCart(prevCart => {
            const updatedCart = [...prevCart]; 
            updatedCart[index].qty = newQty; 
            return updatedCart; 
        });
       
        setCartTotalAmount(cartTotalAmount+((newQty-prevQty)*productPrice));
    }

   
    const handleClick = () => {
        // Navigate to a different route and pass props

        navigate('/checkout', { state: { cart: cart, totalAmount: cartTotalAmount } });
      };

  return (
    <div className={styles.container}>
        <HomeHeader></HomeHeader>

        <div className={styles.middleContainer}>
        <Context.Provider value={{ userName }}>
      <LogoHeader></LogoHeader>
      </Context.Provider>
      <BackButton></BackButton>
        <div className={styles.cartContainer}>
                <div className={styles.myCart}>
                    <img src={bag}></img>
                    My Cart
                </div>
                <div className={styles.cartInfoContainer}>
                        <div className={styles.left}>
                            <hr></hr>
                            <div className={styles.productListContainer}>
                            { 
                                cart.map((info,index)=>{
                                        let product=info.productId;
                                        
                                        let totalPrice=product.price*info.qty;
                                
                                      return <div key={index} className={styles.cart}>
                                      <img src={product.images[0]}></img>
                                          <div className={styles.headingDetails}>
                                          <p className={styles.cartInfoHeading}>{product.name}</p>
                                          <p className={styles.cartInfoDetail}>Color:{product.color}</p>
                                          <p className={styles.cartInfoDetail}>{product.inventory>0?"In Stock":"Out of Stock"}</p>
                                          </div>
                                   
                                          <div className={styles.headingDetails}>
                                          <p className={styles.cartInfoHeading}>Price</p>
                                          <p className={styles.cartInfoDetail}>₹{product.price}</p>
                                          </div>
      
                                          <div className={styles.headingDetails}>
                                          <p className={styles.cartInfoHeading}>Qty</p>
                                          {/* <p className={styles.cartInfoDetail}>{info.qty}</p> */}
                                          <select  value={info.qty} onChange={()=>{handleQtyChange(event,index);}}>
                                            {Array.from({ length: product.inventory }).map((i,selectIndex)=>{
                                                    return <option key={selectIndex}  value={selectIndex+1}>{selectIndex+1}</option>
                                            })}
                                          </select>
                                          </div>
      
                                          <div className={styles.headingDetails}>
                                          <p className={styles.cartInfoHeading}>Total</p>
                                          <p className={styles.cartInfoDetail}>₹{totalPrice}</p>
                                          </div>
                                      
                                  </div>
                                })
                            }

                            
                            </div>
                            <hr></hr>
                            <div className={styles.productPriceContainer}>
                            <div className={styles.productPrice}>
                                <p> {cart.length} Item</p>
                                <p> ₹{cartTotalAmount}</p>
                                </div>
                            </div>
                        </div>
                        <hr className={styles.standingLine}></hr>
                        <div className={styles.right}>
                            <p className={styles.priceHeading}> Price Details</p>
                            <div className={styles.priceDistb}> 
                                <div className={styles.priceRight}>
                                    <div className={styles.priceAmount}>
                                    <p > Total MRP</p>
                                    <p> Discount on MRP</p>
                                    <p> Convenience Fee</p>
                                    </div>

                                    <div className={styles.totalAmount}> Total AMount </div>
                                </div>
                                <div className={styles.priceRight} >
                                    <div className={styles.priceAmount}>
                                    <p> ₹ {cartTotalAmount}</p>
                                    <p> ₹ 0</p>
                                    <p> ₹ {convenienceFee}</p>
                                    </div>
                                    <div className={styles.totalAmountPrice}> ₹{cartTotalAmount+convenienceFee}</div>
                                </div>
                            </div>
                            <div style={{width:"20vw",display:"flex",justifyContent:"center" ,marginBlock:"10px"}}>
                            <button onClick={handleClick} className={styles.placeOrderButton}>  PLACE ORDER</button>
                            </div>
                            
                            
                        </div>
                </div>
        </div>

        </div>
        <Footer></Footer>
    </div>
  )
}

export default Cart