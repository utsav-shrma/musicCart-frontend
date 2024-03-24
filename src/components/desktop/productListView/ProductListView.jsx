import React from 'react'
import styles from './ProductListView.module.css'
import Card from '../card/Card'
import ListCard from '../listCard/ListCard'

function ProductListView({productArray}) {
  return (
    <div className={styles.productGridContainer}>
    
    {productArray.map((product,index)=>{
        return <ListCard key={index}  product={product}></ListCard>
    })}
    
  </div>
  )
}

export default ProductListView