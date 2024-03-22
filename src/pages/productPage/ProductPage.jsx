import React,{useState,useEffect} from 'react'
import DesktopProduct from '../../components/desktop/productView/DesktopProduct'
import { getProductbyId } from '../../api/product';
import { useParams } from "react-router-dom";
function ProductPage() {
    const params = useParams();
  const productId = params.id;
  const [product,setProduct]=useState({});

  const getProductInfo=async()=>{
    let response=await getProductbyId(productId);
    if(response){
        setProduct(response);
    }
  }

  useEffect(()=>{
    getProductInfo();
  },[]);

  return (
    <div>
        <DesktopProduct product={product}></DesktopProduct>
    </div>
  )
}

export default ProductPage