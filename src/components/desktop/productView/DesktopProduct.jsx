import React,{useEffect,useState} from "react";
import styles from "./DesktopProduct.module.css";
import HomeHeader from "../homeHeader/HomeHeader";
import Footer from "../../footer/Footer";
import { useNavigate } from "react-router-dom";
import LogoHeader from "../logoHeader/LogoHeader";
import { Context } from "../../../context";
import { getCartCount } from "../../../api/cart";
import { addProductToCart } from "../../../api/cart";
import BackButton from "../backButton/BackButton";
import DesktopCarousal from "../desktopCarousal/DesktopCarousal";
function DesktopProduct({product}) {
    const navigate=useNavigate();
    const getAndSetCartCount=async ()=>{
        let response=await getCartCount();
        if(response){
          setCartCount(response.cartCount);
        }
    }
    const productName=product.name;
   
    const addToCart= async ()=>{
        
        if(localStorage.getItem('token')){
            let response = await addProductToCart(product._id,1);
              if(response){
                  setCartCount(response.cartCount);
              }
          }
          else{
            navigate('/login');
          }
  }



  const buyNowHandler = async()=>{
    if(localStorage.getItem('token')){
      let response = await addProductToCart(product._id,1);
        if(response){
            // setCartCount(response.cartCount);
            navigate('/cart');
        }
    }
    else{
      navigate('/login');
    }
      
  }
    useEffect(()=>{
        getAndSetCartCount();
      },[]);

    const [cartCount,setCartCount]=useState();
    const userName=localStorage.getItem("userName");
  return (
    <div className={styles.container}>
      <HomeHeader></HomeHeader>
      <div className={styles.middleContainer}>
      <Context.Provider value={{ cartCount,userName,productName }}>
      <LogoHeader showCart={true} currScreen={product.name}></LogoHeader>
      </Context.Provider>

        <BackButton></BackButton>

        <div className={styles.backButtonContainer}>
          <p className={styles.productHeading}>
            {product.summary}
          </p>
        </div>

        <div className={styles.productContainer}>
          {product.images?
          <div className={styles.productImageContainer}>
            <DesktopCarousal images={product.images}></DesktopCarousal>
            {/* <div className={styles.mainImageContainer}>
              <img className={styles.mainImage} src={product.images[0]}></img>
            </div>
            <div className={styles.otherImageContainer}>
              
              {product.images.map((image,index)=>{
                    if(index!=0){
                        return <img key={index}className={styles.subImage} src={image}></img>
                    }
              })}
              
            </div> */}
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
            <button onClick={()=>{addToCart();}}className={styles.addToCartButton}>Add to Cart</button>
            <button onClick={buyNowHandler}className={styles.buyNowButton}>Buy Now</button>
            </div>
            
          </div>
          
        </div>
      </div>
      
      <Footer></Footer>
      
    </div>
  );
}

export default DesktopProduct;
