import React, { useState, useEffect } from "react";
import styles from "./MobileCart.module.css";
import SearchBar from "../../searchBar/SearchBar";
import MobileFooter from "../mobileFooter/MobileFooter";
import BackArrow from "../backArrow/BackArrow";
import { useNavigate } from "react-router-dom";
import { getCart,getCartCount } from "../../../api/cart";

function MobileCart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const convenienceFee = 45;
  // const [search, setSearch] = useState("");
  
  const getCartData = async () => {
    let response = await getCart();
    if (response) {
      setCart(response.cart);
      setCartTotalAmount(response.totalAmount);
  
    }
  };
  const [cartCount,setCartCount]=useState(0);
  

  const getAndSetCartCount=async ()=>{
      let response=await getCartCount();
      if(response){
        setCartCount(response.cartCount);
      }
  }
  useEffect(() => {
    getCartData();
    getAndSetCartCount();
  }, []);

  const handleQtyChange = (event, index) => {
    let prevQty = cart[index].qty;
    let newQty = Number(event.target.value);
    let productPrice = cart[index].productId.price;
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].qty = newQty;
      return updatedCart;
    });

    setCartTotalAmount(cartTotalAmount + (newQty - prevQty) * productPrice);
  };

  // const submitSearch = (text) => {
  //   navigate('/', { state: { search:text} });
  // };

  const handleClick = () => {
    // Navigate to a different route and pass props

    navigate("/checkout", {
      state: { cart: cart, totalAmount: cartTotalAmount },
    });
  };

  return (
    <div className={styles.container}>
       <SearchBar doNavigate={true} ></SearchBar>
      <div className={styles.middleContainer}>
        <BackArrow link={"/"}></BackArrow>
        {cart.length>0? <div className={styles.overflowContainer}>
          <div className={styles.cartContainer}>
            {cart.map((info, index) => {
              let product = info.productId;

              return (
                <div key={index} className={styles.cart}>
                  <div className={styles.left}>
                    <img className={styles.image} src={product.images[0]}></img>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.card}>
                      <p className={styles.title}>{product.name}</p>
                      <p className={styles.priceAmount}>₹{product.price}</p>
                      <p className={styles.color}>Clour : {product.color}</p>
                      <p className={styles.color}>
                        {product.inventory > 0 ? "In Stock" : "Out of Stock"}
                      </p>
                      <select
                        value={info.qty}
                        onChange={() => {
                          handleQtyChange(event, index);
                        }}
                      >
                        {Array.from({ length: product.inventory }).map(
                          (i, selectIndex) => {
                            return (
                              <option key={selectIndex} value={selectIndex + 1}>
                                {selectIndex + 1}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={styles.priceContainer}>
              <p className={styles.total}>Convinience Fee</p>
              <p className={styles.amount}>₹{convenienceFee}</p>
            </div>

            <div className={styles.priceContainer}>
              <p className={styles.total}>Total</p>
              <p className={styles.amount}>₹{cartTotalAmount}</p>
            </div>
          </div>

          <hr></hr>
          <div className={styles.totalPrice}>
            <p className={styles.mainTotal}>Total Amount </p>
            <p className={styles.mainPrice}> &nbsp;&nbsp;&nbsp;₹{cartTotalAmount+convenienceFee}</p>
          </div>
          <button onClick={handleClick}className={styles.buttonContainer}>Place Order</button>
        </div>:<div className={styles.emptyCart}><h1> Cart is Empty !</h1></div>}
      </div>

      <MobileFooter cartCount={cartCount}></MobileFooter>
    </div>
  );
}

export default MobileCart;
