import React from 'react'
import styles from "./CheckoutForm.module.css";
import imageSample from '../../assets/images/headphoneImage.png'
function CheckoutForm({isInvoice=false}) {
  return (
    <div className={styles.checkoutContainer} >
          <h1 className={styles.checkoutTitle}> {isInvoice?'Invoice':'Checkout'}</h1>
          <div className={styles.infoConatiner}>
            <div className={styles.left}>
              <div className={styles.info}>
                <p className={styles.infoTitle}> 1. Delivery address</p>
                <div className={styles.detail}>
                  <div className={styles.nameAddress}>
                    <p>Name</p>
                    <textarea value={isInvoice?"Akash Patel 104 kk hh nagar, Lucknow Uttar Pradesh 226025":""} style={{borderStyle:isInvoice?'none':''}}></textarea>
                  </div>
                </div>
              </div>
                <hr></hr>
              <div className={styles.info}>
                <p className={styles.infoTitle} > 2. Payment method</p>
                <div className={styles.detail}>
                  <div className={styles.payementMode}>{/*disabled style={{WebkitAppearance:'none'}}*/ }
                    <select value={isInvoice?"2":""}disabled={isInvoice} style={{WebkitAppearance:isInvoice?'none':""}}>
                    <option value="1">Mode of Payement</option>
                      <option value="2">Card</option>
                      <option>Upi</option>
                      <option>cod</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className={styles.info}>
                <p className={styles.infoTitle} > 3. Review items and delivery</p>
                <div className={styles.detail}>
                  <div className={styles.imageGrid}>
                    <button><img src={imageSample}></img></button>
                    <button><img src={imageSample}></img></button>
                    <button><img src={imageSample}></img></button>
                    <button><img src={imageSample}></img></button>
                    <button><img src={imageSample}></img></button>
                    <button><img src={imageSample}></img></button>
                  </div>

                  <div className={styles.itemInfo}>
                    <p className={styles.productName} >Sony WH-CH720N</p>
                    <p className={styles.productColor} >Clour : Black</p>
                    <p className={styles.deliveryText} >Estimated delivery : <br></br>
Monday — FREE Standard Delivery</p>
                    
                  </div>
                </div>
              </div>
              <hr ></hr>


                {isInvoice?"":<div className={styles.bottomDiv}>
                    <button className={styles.orderButton} >Place your order</button>
                    <div className={styles.priceTerms} >
                        <p className={styles.bottomPrice}>Order Total : ₹3545.00
</p>
                        <p className={styles.terms} > By placing your order, you agree to Musicart privacy notice and conditions of use.</p>
                    </div>

                </div>}

            </div>
            <div className={styles.right}>
                <div className={styles.rightDiv}>
                    {isInvoice?"":<React.Fragment>
                    <button className={styles.rightOrderButton} >Place your order</button>
                    <p className={styles.rightTerms} > By placing your order, you agree to Musicart privacy
notice and conditions of use.</p>
<hr className={styles.horizontal} ></hr>
                   </React.Fragment>}

                  
                    <div className={styles.shuffle}>
                    <div className={styles.orderSummary}>
                    <p className={styles.summaryTitle}> Order Summary</p>
                    <div className={styles.rightPrice}>
                        <p> Items : </p>
                        <p> ₹3500.00</p>
                    </div>
                    <div className={styles.rightPrice}>
                        <p> Delivery : </p>
                        <p> ₹45.00</p>
                    </div>
                    </div>
                    
                    <hr ></hr>
                    <div className={styles.rightTotal}>
                    <p> Order Total : </p>
                        <p> ₹3545.00</p>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default CheckoutForm