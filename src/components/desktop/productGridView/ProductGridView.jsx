import React from 'react'
import styles from './ProductGridView.module.css'
import Card from '../card/Card'

function ProductGridView({productArray}) {
  return (
    <div className={styles.productGridContainer}>
      {productArray.map((product,index)=>{
          return <Card key={index}  product={product}></Card>
      })}
      {productArray.map((product,index)=>{
          return <Card key={index}  product={product}></Card>
      })}
      {productArray.map((product,index)=>{
          return <Card key={index}  product={product}></Card>
      })}
      {productArray.map((product,index)=>{
          return <Card key={index}  product={product}></Card>
      })}
    
  </div>
  )
}

export default ProductGridView