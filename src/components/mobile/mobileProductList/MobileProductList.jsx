import React,{useEffect,useState} from 'react'
import styles from './MobileProductList.module.css'
import MobileFooter from '../mobileFooter/MobileFooter'
import SearchBar from '../../searchBar/SearchBar'
import bannerLogo from "../../../assets/images/bannerLogo.png";
import { getAllProducts } from '../../../api/product';
import ProductGridView from '../../desktop/productGridView/ProductGridView';
function MobileProductList() {
  const [searchQuery, setSearchQuery] = useState({
    company: "",
    color: "",
    category: "",
    priceKey: "",
    sortKey: "",
  });
  const [toggleSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [cartCount,setCartCount]=useState(0);
  const [productArray, setProductArray] = useState([]);
  const handleChange = (event) => {
    let newObj = { ...searchQuery };
    newObj[event.target.name] = event.target.value;
    setSearchQuery(newObj);
  };
  const setAllProducts = async () => {
    let response = await getAllProducts({ search, ...searchQuery });
    if (response) {
      setProductArray(response);
    }
  };

  useEffect(() => {
    // getAndSetCartCount();
    setAllProducts();
    
  }, [searchQuery, toggleSearch]);
  
  return (
    <div className={styles.container}>
        <SearchBar></SearchBar>
        <div className={styles.middleContainer}>

        <div className={styles.bannerContainer}>
        <div className={styles.bannerTextContainer}>
          <h1 className={styles.bannerText}>
            {" "}
            Grab upto 50% off on Selected headphones
          </h1>
          <div className={styles.bannerButton}>Buy Now</div>
        </div>

        <img className={styles.bannerLogo} src={bannerLogo}></img>
      </div>

      <div className={styles.filterContainer}>
          <div className={styles.filterLeftContainer}>
          <select
            onChange={handleChange}
            className={styles.sortButton}
            name="sortKey"
          >
            <option value="">Sort by : Featured</option>
            <option value="1">Price : Lowest</option>
            <option value="2">Price : Highest</option>
            <option value="3">Name : (A-Z)</option>
            <option value="4">Name : (Z-A)</option>
          </select>

            <div className={styles.filterInnerRightContainer}>
              <select
                onChange={handleChange}
                className={styles.dropDownButton}
                name="category"
              >
                <option value="">Headphone Type</option>
                <option value="In-ear headphone">In-ear headphone</option>
                <option value="On-ear headphone">On-ear headphone</option>
                <option value="Over-ear headphone">Over-ear headphone</option>
              </select>

              <select
                onChange={handleChange}
                className={styles.dropDownButton}
                name="company"
              >
                <option value="">Company</option>
                <option value="JBL">JBL</option>
                <option value="Sony">Sony</option>
                <option value="Boat">Boat</option>
                <option value="Zebronics">Zebronics</option>
                <option value="Marshall">Marshall</option>
                <option value="Ptron">Ptron</option>
              </select>

              <select
                onChange={handleChange}
                className={styles.dropDownButton}
                name="color"
              >
                <option value="">Color</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Brown">Brown</option>
              </select>

              <select
                onChange={handleChange}
                className={styles.dropDownButton}
                name="priceKey"
              >
                <option value="">
                 Price
                </option>
                <option value="1">₹0 - ₹1,000</option>
                <option value="2">₹1,000 - ₹10,000</option>
                <option value="3">₹10,000 - ₹20,000</option>
              </select>
            </div>
          </div>

         
        </div>
        <div className={styles.gridContainer}>
        <ProductGridView  productArray={productArray}></ProductGridView>
        </div>
        
        </div>
        <div className={styles.test}>
        <MobileFooter></MobileFooter>
        </div>
        
    </div>
  )
}

export default MobileProductList