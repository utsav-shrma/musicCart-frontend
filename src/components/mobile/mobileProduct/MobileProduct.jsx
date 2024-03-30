import React,{useEffect,useState} from 'react'
import styles from './MobileProduct.module.css'
import { useNavigate,useLocation } from "react-router-dom";
import { getCartCount } from '../../../api/cart';
import { addProductToCart } from '../../../api/cart';
import SearchBar from '../../searchBar/SearchBar';
import MobileFooter from '../mobileFooter/MobileFooter';
import MobileCarousal from '../Carousal/MobileCarousal';
import BackArrow from '../backArrow/BackArrow';

function MobileProduct({product}) {

  const navigate=useNavigate();
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const submitSearch = () => {
    navigate('/', { state: { search:search} });
  };
  const getAndSetCartCount=async ()=>{
      let response=await getCartCount();
      if(response){
        setCartCount(response.cartCount);
      }
  }
  const productName=product.name;
 
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



const buyNowHandler = async()=>{
  if(localStorage.getItem('token')){
    let response = await addProductToCart(product._id,1);
      if(response){
          // setCartCount(response.cartCount);
          navigate('/cart');
      }
  }
  else{
    navigate('/login');
  }
    
}
  useEffect(()=>{
      getAndSetCartCount();
    },[]);

  const [cartCount,setCartCount]=useState();

  return (
    <div className={styles.container}>
      <SearchBar
        handleChange={handleSearchChange}
        value={search}
        submitSearch={submitSearch}
        ></SearchBar>
      <div className={styles.middleContainer}>
      

        <BackArrow link={"/"}></BackArrow>
        

        
        <div className={styles.productContainer}>
          <button onClick={buyNowHandler} className={styles.submitButton}> Buy Now</button>
          <MobileCarousal product={product}></MobileCarousal>
          <p className={styles.heading}>{product.name}</p>
          <div className={styles.ratingDiv}>
            <div className={styles.stars}> {[...Array(product.rating)].map((e, i) =>  <span  key={i}>&#9733;</span>)} </div>
              <p className={styles.rating} > 
                &nbsp; &nbsp; ({product.reviews} Customer reviews)</p>
            </div>
            <p className={styles.summary}> {product.summary}</p>
            <p className={styles.productDesc}> About This Item</p>
            <div className={styles.productDesc}dangerouslySetInnerHTML={{ __html: product.description }} />
              
             
            <div>
            <p className={styles.detail}> <span className={styles.detailHeading}> Available - {product.isInStock?"In Stock":"Out of Stock"}</span> </p>
            <p className={styles.detail}> <span className={styles.detailHeading}> Brand -</span> {product.brand}</p>
            </div>

            <button onClick={buyNowHandler} id={styles.buyButton}className={styles.submitButton}> Buy Now</button>
          
            <button onClick={addToCart} className={styles.submitButton}>  Add to cart</button>
          
        </div>
      </div>
      
      <MobileFooter cartCount={cartCount}></MobileFooter>
      
    </div>
  )
}

export default MobileProduct