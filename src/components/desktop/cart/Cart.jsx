import React from 'react'
import styles from './Cart.module.css'
import HomeHeader from '../homeHeader/HomeHeader'
import Footer from '../../footer/Footer'
import LogoHeader from '../logoHeader/LogoHeader'
import { Context } from '../../../context'
import BackButton from '../backButton/BackButton'
import headphone from '../../../assets/images/headphoneImage.png'
import bag from '../../../assets/icons/bagLogo.png'
function Cart() {
    const userName=localStorage.getItem("userName");

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
                            <div className={styles.cart}>
                                <img src={headphone}></img>
                                    <div className={styles.headingDetails}>
                                    <p className={styles.cartInfoHeading}>head</p>
                                    <p className={styles.cartInfoDetail}>details</p>
                                    </div>
                             
                                    <div className={styles.headingDetails}>
                                    <p className={styles.cartInfoHeading}>head</p>
                                    <p className={styles.cartInfoDetail}>details</p>
                                    </div>

                                    <div className={styles.headingDetails}>
                                    <p className={styles.cartInfoHeading}>head</p>
                                    <p className={styles.cartInfoDetail}>details</p>
                                    </div>

                                    <div className={styles.headingDetails}>
                                    <p className={styles.cartInfoHeading}>head</p>
                                    <p className={styles.cartInfoDetail}>details</p>
                                    </div>
                                
                            </div>
                            <hr></hr>
                            <div className={styles.productPriceContainer}>
                            <div className={styles.productPrice}>
                                <p> itme</p>
                                <p> 1235</p>
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
                                    <p> 12e1e</p>
                                    <p> 12e1e2</p>
                                    <p> 1233</p>
                                    </div>
                                    <div className={styles.totalAmountPrice}> 3445</div>
                                </div>
                            </div>
                            <div style={{width:"20vw",display:"flex",justifyContent:"center" ,marginBlock:"10px"}}>
                            <button className={styles.placeOrderButton}>  PLACE ORDER</button>
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