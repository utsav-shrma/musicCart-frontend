import React from 'react'
import styles from './ProductListView.module.css'
import Card from '../card/Card'
import ListCard from '../listCard/ListCard'

function ProductListView() {
  return (
    <div className={styles.productGridContainer}>
    <ListCard></ListCard>
    <ListCard></ListCard>
    <ListCard></ListCard>
    <ListCard></ListCard>
    <ListCard></ListCard>
    
  </div>
  )
}

export default ProductListView