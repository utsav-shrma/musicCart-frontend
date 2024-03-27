import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import cartLogo from '../../../assets/icons/cartAddIcon.png';
import { addProductToCart } from '../../../api/cart';
import { useContext } from 'react';
import { Context } from '../../../context';

function Card({product}) {

    const navigate=useNavigate();
    const {setCartCount}=useContext(Context);
    const addToCart= async ()=>{

      if(localStorage.getItem('token')){
        let response = await addProductToCart(product._id,1);
          if(response){
              setCartCount(response.cartCount);
              if(response.isExceed){
                window.alert("Product Amount Out of Stock");
              }
          }
      }
      else{
        navigate('/login');
      }
          
    }

  return (
    <div className={styles.container}  >
   
      <div className={styles.imageContainer}  onClick={()=>{navigate(`/${product._id}`);}}>
            <img className={styles.productImage} src={product.images[0]}></img>
            <button onClick={(event)=>{addToCart(); event.stopPropagation()}} className={styles.addToCartButton}><img src={cartLogo}></img></button>
        </div>
      
        
        <p className={styles.productInfo}>{product.name}</p>
        <p className={styles.productInfo}>₹ &nbsp;{product.price}</p>
        <p className={styles.productInfo}>{product.category}</p>
        </div>
  )
}

export default Card 