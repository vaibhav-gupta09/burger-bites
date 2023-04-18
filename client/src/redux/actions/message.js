import axios from 'axios';
import {server} from "../store"

export const createMessage = (
    name,
    email,
    message
    )=> 
    async(dispatch)=>{
    try{
        dispatch({
          type: "createMessageRequest",
        });

        const { data } = await axios.post(`${server}/createmessage`,{
        name,
        email,
        message
        },
        {  
           headers: {
            "Content-Type": "application/json",
           },
           withCredentials: true,
        });

        dispatch({
          type: "createMessageSuccess",
          payload: data.message
        });
     }
     catch(error){
        dispatch({
          type: "createMessageFail",
          payload: error.response.data.message
        });
     }
};