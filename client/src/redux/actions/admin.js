import axios from 'axios';
import {server} from "../store"

export const getAdminStats = () => async(dispatch)=>{
    try{
      dispatch({type: "getDashboardStatsRequest"});

      const {data}  = await axios.get(`${server}/admin/stats`, {
        withCredentials: true,
      });

      dispatch({type: "getDashboardStatsSuccess", payload: data});
    }catch(error){
      dispatch({type: "getDashboardStatsFail", payload: error.response.data.message});
    }
}


export const getAdminUsers = () => async(dispatch)=>{
    try{
      dispatch({type: "getAdminUsersRequest"});

      const {data}  = await axios.get(`${server}/admin/users`, {
        withCredentials: true,
      });

      dispatch({type: "getAdminUsersSuccess", payload: data.users});
    }catch(error){
      dispatch({type: "getAdminUsersFail", payload: error.response.data.message});
    }
}


export const getAdminOrders = () => async(dispatch)=>{
    try{
      dispatch({type: "getAdminOrderRequest"});

      const {data}  = await axios.get(`${server}/admin/orders`, {
        withCredentials: true,
      });

      dispatch({type: "getAdminOrdersSuccess", payload: data.orders});
    }catch(error){
      dispatch({type: "getAdminOrdersFail", payload: error.response.data.message});
    }
}