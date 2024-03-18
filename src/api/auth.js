import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

const token =localStorage.getItem("token");
let axiosConfig={
    headers:{
        'Authorization':token,
    }
}

export const loginUser =async ({emailOrPhone,password})=>{
   try{
        const reqUrl=`${baseUrl}/login`;
        const reqPayload={
            emailOrPhone,password
        }
        let response = await axios.post(reqUrl,reqPayload);
        return response.data;
        
   }
   catch(error){
    console.log(error);
   }
}

export const registerUser = async ({ name, email, password,phone }) => {
    try {
      const reqUrl = `${baseUrl}/register`;
      const reqPayload = { name, email, password,phone };
      const response = await axios.post(reqUrl, reqPayload);
      return response.data;
    } catch (error) {
      console.log(error); 
    }
  };