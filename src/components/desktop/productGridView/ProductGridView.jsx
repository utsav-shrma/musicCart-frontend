import React from 'react'
import styles from './ProductGridView.module.css'
import Card from '../card/Card'

function ProductGridView() {
  return (
    <div className={styles.productGridContainer}>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>
  )
}

export default ProductGridView