import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;




export const addProductToCart = async (productId, qty) => {
    
    try {
        let token= localStorage.getItem("token");
        let axiosConfig = {
            headers: {
              Authorization: token,
            },
          };

          
    const reqUrl = `${baseUrl}/cart`;
    const reqPayload = { productId, qty };
    const response = await axios.post(reqUrl, reqPayload, axiosConfig);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};


export const getCart = async () => {
    try {
        let token= localStorage.getItem("token");
        let axiosConfig = {
            headers: {
              Authorization: token,
            },
          };
      const reqUrl = `${baseUrl}/cart`;
      const response = await axios.get(reqUrl, axiosConfig);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const getCartCount = async () => {
    try {

        let token= localStorage.getItem("token");
        let axiosConfig = {
            headers: {
              Authorization: token,
            },
          };

      const reqUrl = `${baseUrl}/cart/count`;
      const response = await axios.get(reqUrl, axiosConfig);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };