import React, { useState,useEffect,useRef } from "react";
import styles from './DesktopCarousal.module.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample from '../../../assets/images/headphoneImage.png'
function DesktopCarousal({images}){
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
      console.log(images)
    }, []);

    const settings = {
        slidesToShow:3,
      };
    
    return (
        <div className={styles.container}>
      <div >
        <div className={styles.up}>
        <Slider className={styles.slider1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
          {images.map((image,index)=>{
            return(<div className={styles.test} key={index}>
                <img  className={styles.mainImage} src={image}></img>
              </div>);
            
          })}
          
        
        </Slider>
        </div>
        <div className={styles.down}>
        <Slider
        className={styles.slider2}
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          
          {images.map((image,index)=>{
            return(<div  key={index}>
                <img  className={styles.subImage} src={image}></img>
              </div>);
            
          })}
          
        </Slider>
        </div>
      </div>
      </div>
    );
  }
export default DesktopCarousal