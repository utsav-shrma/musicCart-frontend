import React from "react";
import styles from "./MobileCart.module.css";
import SearchBar from "../../searchBar/SearchBar";
import MobileFooter from "../mobileFooter/MobileFooter";
import BackArrow from "../backArrow/BackArrow";
import sample from "../../../assets/images/headphoneImage.png";
function MobileCart() {
  return (
    <div className={styles.container}>
      <SearchBar></SearchBar>
      <div className={styles.middleContainer}>
        <BackArrow link={"/"}></BackArrow>
        <div className={styles.overflowContainer}>
          <div className={styles.cartContainer}>
          <div className={styles.cart}>
              <div className={styles.left}>
                <img className={styles.image} src={sample}></img>
              </div>
              <div className={styles.right}>
                <div className={styles.card}>
                  <p className={styles.title}>Sony WH-CH720N</p>
                  <p className={styles.priceAmount}>₹3500</p>
                  <p className={styles.color}>Clour : Black</p>
                  <p className={styles.color}>In Stock</p>
                  
                </div>

                
              </div>
            </div>

            <div className={styles.cart}>
              <div className={styles.left}>
                <img className={styles.image} src={sample}></img>
              </div>
              <div className={styles.right}>
                <div className={styles.card}>
                  <p className={styles.title}>Sony WH-CH720N</p>
                  <p className={styles.priceAmount}>₹3500</p>
                  <p className={styles.color}>Clour : Black</p>
                  <p className={styles.color}>In Stock</p>
                  
                </div>

                {/* <div className={styles.price}>
                        <p className={styles.total}>Total</p>
                        <p className={styles.amount}>3456</p>
                    </div>
                    */}
              </div>
            </div>
            <div className={styles.cart}>
              <div className={styles.left}>
                <img className={styles.image} src={sample}></img>
              </div>
              <div className={styles.right}>
                <div className={styles.card}>
                  <p className={styles.title}>Sony WH-CH720N</p>
                  <p className={styles.priceAmount}>₹3500</p>
                  <p className={styles.color}>Clour : Black</p>
                  <p className={styles.color}>In Stock</p>
                  
                </div>

                {/* <div className={styles.price}>
                        <p className={styles.total}>Total</p>
                        <p className={styles.amount}>3456</p>
                    </div>
                    */}
              </div>
            </div>
            <div className={styles.cart}>
              <div className={styles.left}>
                <img className={styles.image} src={sample}></img>
              </div>
              <div className={styles.right}>
                <div className={styles.card}>
                  <p className={styles.title}>Sony WH-CH720N</p>
                  <p className={styles.priceAmount}>₹3500</p>
                  <p className={styles.color}>Clour : Black</p>
                  <p className={styles.color}>In Stock</p>
                  
                </div>

                
              </div>
              
                   
            </div>

            <div className={styles.priceContainer}>
                        <p className={styles.total}>Convinience Fee</p>
                        <p className={styles.amount}>45</p>
                    </div>

            <div className={styles.priceContainer}>
                        <p className={styles.total}>Total</p>
                        <p className={styles.amount}>3456</p>
                    </div>
          </div>
          <hr></hr>
          <div className={styles.totalPrice}>
            <p className={styles.mainTotal}>Total Amount </p>
            <p className={styles.mainPrice}> &nbsp;&nbsp;&nbsp;₹3545</p>
          </div>
          <button className={styles.buttonContainer}>Place Order</button>
        </div>
      </div>
      <MobileFooter></MobileFooter>
    </div>
  );
}

export default MobileCart;
