import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const token =localStorage.getItem("token");



export const sendFeedback =async ({type,feedback})=>{
   try{
        const reqUrl=`${baseUrl}/feedback`;
        const reqPayload={
            type,
            feedback
        }
        let axiosConfig={
            headers:{
                'Authorization':token,
            }
        }
        let response = await axios.post(reqUrl,reqPayload,axiosConfig);
        if(response){
            return response.data;
        }
        
        
   }
   catch(error){
    console.log(error);
   }
}