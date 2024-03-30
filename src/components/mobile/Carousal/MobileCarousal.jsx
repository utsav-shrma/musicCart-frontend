
import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './MobileCarousal.module.css'

function MobileCarousal({product}) {
    const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    const [temp,setTemp]=useState([]);
    
   
    return (
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
        {/* why passing images with a null check is giving error */}
          {product.images!=null?product.images.map((image,index)=>{

            return <div className={styles.imageContainer} key={index}>
                <img className={styles.image} src={image}></img>
            </div>
          }):""}
          
        </Slider>
      </div>
    );
  }
  
  export default MobileCarousal;