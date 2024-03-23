import React from 'react'
import styles from './ListCard.module.css'
import { useNavigate } from 'react-router-dom'
function ListCard({product}) {

    const navigate =useNavigate();
  return (
    <div className={styles.container}  >
    <div className={styles.imageContainer}>
    <img className={styles.productImage} src={product.images[0]}></img>
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