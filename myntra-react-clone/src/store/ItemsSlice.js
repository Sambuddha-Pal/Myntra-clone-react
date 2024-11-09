import { createSlice } from "@reduxjs/toolkit";

const itemSlice= createSlice({
  name:'Items',
  initialState:[],
  reducers:{
    addItems:(state,action)=>{
      return action.payload;

    }
  }
});
export const itemsActions= itemSlice.actions;
export default itemSlice;