import {createReducer} from "@reduxjs/toolkit";


const initialState = {
  cartItems:{
    cheeseBurger:{
      quantity: 0,
      price: 120
    },
    asianFusionBurger:{
      quantity: 0,
      price: 180
    },
    greekVeggieBurger:{
      quantity: 0,
      price: 250
    },
  },
  subTotal:0,
  tax: 0,
  shippingCharges: 0,
  total: 0,
  shippingInfo: {}
};

export const cartReducer = createReducer(initialState, {
  cheeseBurgerIncreament : (state)=>{
    state.cartItems.cheeseBurger.quantity += 1; 
  },
  asianFusionBurgerIncreament : (state)=>{
    state.cartItems.asianFusionBurger.quantity += 1; 
  },
  greekVeggieBurgerIncreament : (state)=>{
    state.cartItems.greekVeggieBurger.quantity += 1; 
  },
  cheeseBurgerDecreament : (state)=>{
    state.cartItems.cheeseBurger.quantity -= 1; 
  },
  asianFusionBurgerDecreament : (state)=>{
    state.cartItems.asianFusionBurger.quantity -= 1; 
  },
  greekVeggieBurgerDecreament : (state)=>{
    state.cartItems.greekVeggieBurger.quantity -= 1; 
  },
  calculatePrice: (state)=>{
    state.subTotal = state.cartItems.cheeseBurger.quantity*state.cartItems.cheeseBurger.price +
    state.cartItems.asianFusionBurger.quantity*state.cartItems.asianFusionBurger.price +
    state.cartItems.greekVeggieBurger.quantity*state.cartItems.greekVeggieBurger.price;
    
    state.tax = Math.ceil(state.subTotal*0.18);
    
    if(state.subTotal>0){
    state.shippingCharges = state.subTotal > 1000 ? 0 : 50;}
    else{
      state.shippingCharges = 0;
    }
    
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },
  emptyState: (state)=>{
    state.cartItems={
     cheeseBurger:{
      quantity: 0,
      price: 120
     },
     asianFusionBurger:{
      quantity: 0,
      price: 180
    },
     greekVeggieBurger:{
      quantity: 0,
      price: 250
    }
  }
  state.subTotal=0;
  state.tax = 0;
  state.shippingCharges= 0;
  state.total= 0;
  },
  addShippingInfo:(state, action)=>{
     state.shippingInfo = {
       hNo: action.payload.hNo, 
       city: action.payload.city, 
       country: action.payload.country, 
       state: action.payload.state, 
       phoneNo: action.payload.phoneNo, 
       pincode: action.payload.pincode
     };
  },
})

export const orderReducer = createReducer({}, {
  createOrderRequest: (state)=>{
    state.loading = true;
  },
  createOrderSuccess: (state, action)=>{
    state.loading = false;
    state.message = action.payload;
  },
  createOrderFail: (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  },
  clearMessage: (state)=>{
    state.message = null;
  },
  clearError: (state)=>{
    state.error = null;
  }
})

