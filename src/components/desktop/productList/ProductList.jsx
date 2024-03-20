import React from "react";
import styles from "./ProductList.module.css";
import logo from "../../../assets/images/musicArtLogo.png";
import bannerLogo from "../../../assets/images/bannerLogo.png";
import SearchBar from "../../searchBar/SearchBar";
import listIcon from "../../../assets/icons/listIcon.png";
import gridIcon from "../../../assets/icons/gridIcon.png";
import Card from "../../card/Card";
import cartLogo from '../../../assets/icons/cartLogo.png'

function ProductList() {
  return (
    <div className={styles.container}>
      <div className={styles.logoCartConatiner}>
        <div className={styles.logoMainContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo}></img>
            <p className={styles.heading}>Musicart</p>
          </div>

          <p className={styles.homeLink}>Home</p>
        </div>

        <div className={styles.cartContainer}>
          <button className={styles.cartButton}> <img src={cartLogo}></img>  &nbsp;View Cart &nbsp;0</button>
          <button className={styles.accountLogo} > DR</button>
        </div>
      </div>

      <div className={styles.bannerContainer}>
        <div className={styles.bannerTextContainer}>
          <h1 className={styles.bannerText}>
            {" "}
            Grab upto 50% off on Selected headphones
          </h1>
        </div>

        <img className={styles.bannerLogo} src={bannerLogo}></img>
      </div>

      <SearchBar></SearchBar>

      <div className={styles.filterContainer}>
        <div className={styles.filterLeftContainer}>
          <div className={styles.filterInnerLeftContainer}>
            <button className={styles.filterImagebutton}>
              <img src={gridIcon}></img>
            </button>
            <button className={styles.filterImagebutton}>
              <img src={listIcon}></img>
            </button>
          </div>
          <div className={styles.filterInnerRightContainer}>
            <button className={styles.dropDownButton}>Headphone type </button>
            <button className={styles.dropDownButton}>Company</button>
            <button className={styles.dropDownButton}>Colour</button>
            <button className={styles.dropDownButton}>Price</button>
          </div>
        </div>

        <button className={styles.sortButton}>Sort by : Featured</button>
      </div>

      <div className={styles.productGridContainer}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default ProductList;
