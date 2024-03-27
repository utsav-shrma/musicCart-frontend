import React, { useState } from "react";
import styles from "./CheckoutForm.module.css";
import { checkoutValidator } from "../../utility/validator";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CheckoutForm({ isInvoice = false, totalAmount, cart }) {
  const deliveryCharges = 45;
  const userName = localStorage.getItem("userName");
  const netPrice = (totalAmount + deliveryCharges).toFixed(2);
  const [infoIndex, setInfoIndex] = useState(0);
  let productInfo = {
    name: cart[infoIndex].productId.name,
    color: cart[infoIndex].productId.color,
    qty: cart[infoIndex].qty,
    inventory: cart[infoIndex].productId.inventory,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };
  return (

    <div className={styles.checkoutContainer}>
        <Formik
                initialValues={{
                  mode: "",
                  address: "",
                }}
                validationSchema={checkoutValidator}
                onSubmit={handleSubmit}
                disabled={isInvoice}
              >
        
          {({ isSubmitting,errors,touched }) => (
            <Form >
      <h1 className={styles.checkoutTitle}>
       
        {isInvoice ? "Invoice" : "Checkout"}
      </h1>
      <div className={styles.infoConatiner}>
    
              <div className={styles.left}>
                <div className={styles.info}>
                  <p className={styles.infoTitle}> 1. Delivery address</p>
                  <div className={styles.detail}>
                    <div className={styles.nameAddress}>
                      <p>{userName}</p>
                      <Field
                        as="textarea"
                        name="address"
                        className={styles.textInput}
                        disabled={isInvoice}
                        // value={
                        //   isInvoice
                        //     ? "Akash Patel 104 kk hh nagar, Lucknow Uttar Pradesh 226025"
                        //     : ""
                        // }
                        style={{ borderStyle: isInvoice ? "none" : "" }}
                      ></Field>
                       <ErrorMessage
                        className={styles.errorMessage}
                        name="address"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className={styles.info}>
                  <p className={styles.infoTitle}> 2. Payment method</p>
                  <div className={styles.detail}>
                    <div className={styles.payementMode}>
                       
                      <Field as='select'
                        name="mode"
                        // value={isInvoice ? "UPI" : ""}
                        disabled={isInvoice}
                        style={{ WebkitAppearance: isInvoice ? "none" : "" }}
                      >
                        <option value="" disabled hidden>
                          Mode of Payement
                        </option>
                        <option value="Pay on Delivery">Pay on Delivery</option>
                        <option value="UPI">UPI</option>
                        <option value="Card">Card</option>
                      </Field>
                      <ErrorMessage
                        className={styles.errorMessage}
                        name="mode"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className={styles.info}>
                  <p className={styles.infoTitle}>
                    {" "}
                    3. Review items and delivery
                  </p>
                  <div className={styles.detail}>
                    <div className={styles.imageGrid}>
                      {cart.map((product, index) => {
                        let image = product.productId.images[0];
                        return (
                          <button
                          type="button"
                            onClick={() => {
                              setInfoIndex(index);
                            }}
                            key={index}
                          >
                            <img src={image}></img>
                          </button>
                        );
                      })}
                    </div>

                    <div className={styles.itemInfo}>
                      <p className={styles.productName}>{productInfo.name}</p>
                      <p className={styles.productColor}>
                        Colour : {productInfo.color}
                      </p>
                      <p className={styles.productColor}>
                        Quantity : {productInfo.qty}
                      </p>
                      <p className={styles.productColor}>
                        {productInfo.inventory > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </p>
                      <p className={styles.deliveryText}>
                        Estimated delivery : <br></br>
                        Monday — FREE Standard Delivery
                      </p>
                    </div>
                  </div>
                </div>
                {isInvoice ? "" : <hr></hr>}

                {isInvoice ? (
                  ""
                ) : (
                  <div className={styles.bottomDiv}>
                    <button  type="submit"
                      disabled={isSubmitting} className={styles.orderButton}>
                      Place your order
                    </button>
                    <div className={styles.priceTerms}>
                      <p className={styles.bottomPrice}>
                        Order Total : ₹{netPrice}
                      </p>
                      <p className={styles.terms}>
                        {" "}
                        By placing your order, you agree to Musicart privacy
                        notice and conditions of use.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            
        <div className={styles.right}>
          <div className={styles.rightDiv}>
            {isInvoice ? (
              ""
            ) : (
              <React.Fragment>
                <button disabled={isSubmitting}  type="submit" className={styles.rightOrderButton}>
                  Place your order
                </button>
                <p className={styles.rightTerms}>
                  {" "}
                  By placing your order, you agree to Musicart privacy notice
                  and conditions of use.
                </p>
                <hr className={styles.horizontal}></hr>
              </React.Fragment>
            )}

            <div className={styles.shuffle}>
              <div className={styles.orderSummary}>
                <p className={styles.summaryTitle}> Order Summary</p>
                <div className={styles.rightPrice}>
                  <p> Items : </p>
                  <p> ₹{totalAmount.toFixed(2)}</p>
                </div>
                <div className={styles.rightPrice}>
                  <p> Delivery : </p>
                  <p> ₹{deliveryCharges.toFixed(2)}</p>
                </div>
              </div>

              <hr></hr>
              <div className={styles.rightTotal}>
                <p> Order Total : </p>
                <p> ₹{netPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Form>
          )}
        </Formik>
    </div>
  );
}

export default CheckoutForm;
