import React from "react";
import styles from "./DesktopProduct.module.css";
import HomeHeader from "../homeHeader/HomeHeader";
import Footer from "../../footer/Footer";
import logo from "../../../assets/images/musicArtLogo.png";
import cartLogo from "../../../assets/icons/cartLogo.png";
import headPhoneImage from "../../../assets/images/headphoneImage.png";
function DesktopProduct() {
  return (
    <div className={styles.container}>
      <HomeHeader></HomeHeader>
      <div className={styles.middleContainer}>
        <div className={styles.logoCartConatiner}>
          <div className={styles.logoMainContainer}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={logo}></img>
              <p className={styles.heading}>Musicart</p>
            </div>

            <p className={styles.homeLink}>Home/ Sony WH-CH720N </p>
          </div>

          <div className={styles.cartContainer}>
            <button className={styles.cartButton}>
              {" "}
              <img src={cartLogo}></img> &nbsp;View Cart &nbsp;0
            </button>
            <button className={styles.accountLogo}> DR</button>
          </div>
        </div>

        <div className={styles.backButtonContainer}>
          <button className={styles.backButton}>Back to Products</button>
        </div>

        <div className={styles.backButtonContainer}>
          <p className={styles.productHeading}>
            Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation
            Headphones with Mic, up to 50 Hours Playtime, Multi-Point
            Connection, App Support, AUX & Voice Assistant Support for Mobile
            Phones (Black)
          </p>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImageContainer}>
            <div className={styles.mainImageContainer}>
              <img className={styles.mainImage} src={headPhoneImage}></img>
            </div>
            <div className={styles.otherImageContainer}>
              <img className={styles.subImage} src={headPhoneImage}></img>
              <img className={styles.subImage} src={headPhoneImage}></img>
              <img className={styles.subImage} src={headPhoneImage}></img>
            </div>
          </div>
          <div className={styles.productDescriptionContainer}>
            <h1 className={styles.productName}>Sony WH-CH720N</h1>
            <div className={styles.ratingDiv}>
            <div className={styles.stars}>&#9733; &#9733; &#9733; &#9733; </div>
              <p className={styles.rating} > 
                &nbsp; &nbsp; (50 Customer reviews)</p>
            </div>
            <p className={styles.price}>Price  - ₹ 3,500</p>
            <p className={styles.productCategory}>Black | Over-ear headphone</p>
            <p className={styles.productDesc}>
              About this item  <br/>
              <ul>
                <li>Sony’s lightest Wireless Noise-cancelling headband
              ever</li>
                <li>Up to 50-hour battery life with quick charging (3 min charge
              for up to 1 hour of playback)</li>
                <li>Multi-Point Connection helps to pair
              with two Bluetooth devices at the same time</li>
                <li>Take noise cancelling
              to the next level with Sony’s Integrated Processor V1,so you can
              fully immerse yourself in the music</li>
                <li>Super comfortable and
              lightweight design ( 192 Grams )</li>
              <li> High sound quality and
              well-balanced sound tuning</li>
              </ul>
                  
            </p>

            <p className={styles.stockBrandTask}><b>Available -</b> In stock</p>
            <p className={styles.stockBrandTask} ><b>Brand - </b>Sony</p>
            <div className={styles.buttonDiv}>
            <button className={styles.addToCartButton}>Add to Cart</button>
            <button className={styles.buyNowButton}>Buy Now</button>
            </div>
            
          </div>
          <div></div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DesktopProduct;
