import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import logo from "../../../assets/images/musicArtLogo.png";
import bannerLogo from "../../../assets/images/bannerLogo.png";
import SearchBar from "../../searchBar/SearchBar";
import listIcon from "../../../assets/icons/listIcon.png";
import gridIcon from "../../../assets/icons/gridIcon.png";
import cartLogo from "../../../assets/icons/cartLogo.png";
import ProductGridView from "../productGridView/ProductGridView";
import ProductListView from "../productListView/ProductListView";
import { getAllProducts } from "../../../api/product";
import { useNavigate } from "react-router-dom";
import { getCartCount } from "../../../api/cart";
import { Context } from "../../../context";
import LogoHeader from "../logoHeader/LogoHeader";
import Feedback from "../feedback/Feedback";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setGlobalSearch } from '../../../redux/utilitySlice';
function ProductList() {
  const location=useLocation();
  const [productArray, setProductArray] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [search, setSearch] = useState("");
  const [cartCount,setCartCount]=useState(0);
  const navigate=useNavigate();
  const globalSearch = useSelector((state) => state.utility.search);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState({
    company: "",
    color: "",
    category: "",
    priceKey: "",
    sortKey: "",
  });
  
  const userName=localStorage.getItem("userName");
  

  const getAndSetCartCount=async ()=>{
      let response=await getCartCount();
      if(response){
        setCartCount(response.cartCount);
      }
  }

  const submitSearch = () => {
    setSearch(text);
  };
  

  const handleChange = (event) => {
    let newObj = { ...searchQuery };
    newObj[event.target.name] = event.target.value;
    setSearchQuery(newObj);
  };
  const setAllProducts = async () => {
    let response = await getAllProducts({ search:globalSearch, ...searchQuery });
    if (response) {
      setProductArray(response);
    }
  };

  useEffect(()=>{
    getAndSetCartCount();
    if(location.state!=null){
      
      dispatch(setGlobalSearch(location.state.search));
      // window.history.replaceState({}, '')
      
     }
  },[]);

  useEffect(() => {
    getAndSetCartCount();
    setAllProducts();
  
    
  }, [searchQuery, globalSearch]);

  

  return (
    <div className={styles.container}>
       <Context.Provider value={{ cartCount,userName }}>
      <LogoHeader showCart={true}></LogoHeader>
      </Context.Provider>
      {localStorage.getItem("token")?<Feedback></Feedback>:""}
      
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTextContainer}>
          <h1 className={styles.bannerText}>
            {" "}
            Grab upto 50% off on Selected headphones
          </h1>
        </div>

        <img className={styles.bannerLogo} src={bannerLogo}></img>
      </div>

      <SearchBar
        setSearch={setSearch}
        
      ></SearchBar>
      <div>
        <div className={styles.filterContainer}>
          <div className={styles.filterLeftContainer}>
            <div className={styles.filterInnerLeftContainer}>
              <button
                onClick={() => {
                  setIsGridView(true);
                }}
                className={styles.filterImagebutton}
              >
                <img src={gridIcon}></img>
              </button>
              <button
                onClick={() => {
                  setIsGridView(false);
                }}
                className={styles.filterImagebutton}
              >
                <img src={listIcon}></img>
              </button>
            </div>
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
        </div>
      </div>

      <Context.Provider value={{ setCartCount }}>
        
      {isGridView ? (
        <ProductGridView  productArray={productArray}></ProductGridView>
      ) : (
        <ProductListView  productArray={productArray}></ProductListView>
      )}

</Context.Provider>
    </div>
  );
}

export default ProductList;
