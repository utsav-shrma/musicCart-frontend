import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

const token =localStorage.getItem("token");
let axiosConfig={
    headers:{
        'Authorization':token,
    }
}

export const getAllOrders =async ()=>{
   try{
        
        const reqUrl=`${baseUrl}/order`;
        let response = await axios.get(reqUrl,axiosConfig);
        return response.data;

        
   }
   catch(error){
    console.log(error);
   }
}


export const placeOrder = async ({ cart, orderPrice, deliveryCharge, totalPrice, mode, address }) => {
    try {
      const reqUrl = `${baseUrl}/order`;
      const reqPayload = { cart, orderPrice, deliveryCharge, totalPrice, mode, address };
      const response = await axios.post(reqUrl, reqPayload,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error); 
    }
  };

export const getOrderbyId = async (id) => {
    try {
      const reqUrl = `${baseUrl}/order/${id}`; 
      const response = await axios.get(reqUrl,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error); 
    }
  };