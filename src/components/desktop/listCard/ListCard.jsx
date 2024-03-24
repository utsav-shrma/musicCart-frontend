import React from 'react'
import styles from './ListCard.module.css'
import { useNavigate } from 'react-router-dom'
import cartLogo from '../../../assets/icons/cartAddIcon.png';
import { addProductToCart } from '../../../api/cart';
import { useContext } from 'react';
import { Context } from '../../../context';
function ListCard({product}) {
    const {setCartCount}=useContext(Context);
    const navigate =useNavigate();
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

  return (
    <div className={styles.container}  >
    <div className={styles.imageContainer}>
    <img className={styles.productImage} src={product.images[0]}></img>
    <button onClick={(event)=>{addToCart(); event.stopPropagation()}} className={styles.addToCartButton}><img src={cartLogo}></img></button>
    </div>
    <div className={styles.infoContainer}>
    <p className={styles.productTitle}>{product.name}</p>
    <p className={styles.productPrice}>Price - ₹ {product.price}</p>
    <p className={styles.productCategory}>{product.color} | {product.category}</p>
    <p className={styles.productDesc}>{product.summary}</p>

    <button onClick={()=>{navigate(`/${product._id}`);}}className={styles.detailsButton}>
        Details
    </button>
    </div>
    
    </div>
  )
}

export default ListCard