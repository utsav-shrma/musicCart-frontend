import React,{useEffect,useState} from 'react'
import styles from "./ProductListPage.module.css"
import Footer from '../../components/footer/Footer'
import ProductList from '../../components/desktop/productList/ProductList'
import HomeHeader from '../../components/desktop/homeHeader/HomeHeader'
import MobileProductList from '../../components/mobile/mobileProductList/MobileProductList'
function ProductListPage() {
  const [isDesktop, setIsDesktop] = useState(true);
  
  const handleResize=()=>{
    
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth>breakpoint));
    const breakpoint = 750;
    const width=window.innerWidth;
    if(width>breakpoint){
      setIsDesktop(true);
    }
    else{
      setIsDesktop(false);
    }
   

  }
  
    useEffect(() => {
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      
    }, []);

  return (
    <React.Fragment>
      {isDesktop?<div className={styles.container}>
        <HomeHeader></HomeHeader>
        <ProductList></ProductList>
        <Footer></Footer>
    </div>:<MobileProductList></MobileProductList>}
    </React.Fragment>
  )
}

export default ProductListPage