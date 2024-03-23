import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

const token =localStorage.getItem("token");
let axiosConfig={
    headers:{
        'Authorization':token,
    }
}

export const getAllProducts =async ({search,company,color,category,priceKey,sortKey})=>{
   try{
        
        const reqUrl=`${baseUrl}/product?category=${category}&color=${color}&priceKey=${priceKey}&company=${company}&sortKey=${sortKey}&search=${search}`;
        let response = await axios.get(reqUrl);
        return response.data;
        
   }
   catch(error){
    console.log(error);
   }
}

export const getProductbyId = async (id) => {
    try {
      const reqUrl = `${baseUrl}/product/id/${id}`;
      console.log("calling api");
      const response = await axios.get(reqUrl);
      console.log("got response");
      return response.data;
    } catch (error) {
      console.log(error); 
    }
  };