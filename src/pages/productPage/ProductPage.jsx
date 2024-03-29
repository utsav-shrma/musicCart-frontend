import React, { useState, useEffect } from "react";
import DesktopProduct from "../../components/desktop/productView/DesktopProduct";
import { getProductbyId } from "../../api/product";
import { useParams, useNavigate } from "react-router-dom";
import MobileProduct from "../../components/mobile/mobileProduct/MobileProduct";
function ProductPage() {
  const params = useParams();
  const [isDesktop, setIsDesktop] = useState(true);
  const productId = params.id;
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const getProductInfo = async () => {
    let response = await getProductbyId(productId);
    if (response) {
      setProduct(response);
    } else {
      navigate("/404");
    }
  };

  const handleResize = () => {
    window.addEventListener("resize", () =>
      setIsDesktop(window.innerWidth > breakpoint)
    );
    const breakpoint = 750;
    const width = window.innerWidth;
    if (width > breakpoint) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    getProductInfo();
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {isDesktop ? (
        <DesktopProduct product={product}></DesktopProduct>
      ) : (
        <MobileProduct product={product}></MobileProduct>
      )}
    </React.Fragment>
  );
}

export default ProductPage;
