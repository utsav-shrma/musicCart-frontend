import React from 'react'
import styles from "./ProductListPage.module.css"
import Footer from '../../components/footer/Footer'
import ProductList from '../../components/desktop/productList/ProductList'
import HomeHeader from '../../components/desktop/homeHeader/HomeHeader'
function ProductListPage() {
  return (
    <div className={styles.container}>
        <HomeHeader></HomeHeader>
        <ProductList></ProductList>
        <Footer></Footer>
    </div>
  )
}

export default ProductListPage