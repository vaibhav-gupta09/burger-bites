import {createReducer} from "@reduxjs/toolkit";

export const messageReducer = createReducer({}, {
  createMessageRequest: (state)=>{
    state.loading = true;
  },
  createMessageSuccess: (state, action)=>{
    state.loading = false;
    state.message = action.payload;
  },
  createMessageFail: (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  },
})