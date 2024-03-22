import React,{useEffect,useState} from "react";
import styles from "./DesktopProduct.module.css";
import HomeHeader from "../homeHeader/HomeHeader";
import Footer from "../../footer/Footer";
import logo from "../../../assets/images/musicArtLogo.png";
import cartLogo from "../../../assets/icons/cartLogo.png";
import headPhoneImage from "../../../assets/images/headphoneImage.png";
import { useNavigate } from "react-router-dom";

function DesktopProduct({product}) {
    const navigate=useNavigate();

    
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

            <p className={styles.homeLink}>Home/ {product.name} </p>
          </div>

          <div className={styles.cartContainer}>
            <button className={styles.cartButton}>
              {" "}
              <img src={cartLogo}></img> &nbsp;View Cart &nbsp;0
            </button>
            <button className={styles.accountLogo}> DR</button> {/* set user initials*/ }
          </div>
        </div>

        <div className={styles.backButtonContainer}>
          <button onClick={()=>{navigate('/')}}className={styles.backButton}>Back to Products</button>
        </div>

        <div className={styles.backButtonContainer}>
          <p className={styles.productHeading}>
            {product.summary}
          </p>
        </div>

        <div className={styles.productContainer}>
          {product.images?<div className={styles.productImageContainer}>
            <div className={styles.mainImageContainer}>
              <img className={styles.mainImage} src={product.images[0]}></img>
            </div>
            <div className={styles.otherImageContainer}>
              
              {product.images.map((image,index)=>{
                    if(index!=0){
                        return <img key={index}className={styles.subImage} src={image}></img>
                    }
              })}
              
            </div>
          </div>:""}
          <div className={styles.productDescriptionContainer}>
            <h1 className={styles.productName}>{product.name}</h1>
            <div className={styles.ratingDiv}>
            <div className={styles.stars}> {[...Array(product.rating)].map((e, i) =>  <span  key={i}>&#9733;</span>)} </div>
              <p className={styles.rating} > 
                &nbsp; &nbsp; ({product.reviews} Customer reviews)</p>
            </div>
            <p className={styles.price}>Price  - ₹ {product.price}</p>
            <p className={styles.productCategory}>{product.color} | {product.category}</p>
            <p className={styles.productDesc}>
                
              About this item  </p>
              <div className={styles.productDesc}dangerouslySetInnerHTML={{ __html: product.description }} />
              
             
                  
            

            <p className={styles.stockBrandTask}><b>Available -</b> {product.isInStock?"In stock":"Out of Stock"}</p>
            <p className={styles.stockBrandTask} ><b>Brand - </b>{product.brand}</p>
            <div className={styles.buttonDiv}>
            <button className={styles.addToCartButton}>Add to Cart</button>
            <button className={styles.buyNowButton}>Buy Now</button>
            </div>
            
          </div>
          
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DesktopProduct;