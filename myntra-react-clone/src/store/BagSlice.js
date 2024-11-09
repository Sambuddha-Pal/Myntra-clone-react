import { createSlice } from "@reduxjs/toolkit";

const BagSlice= createSlice({
  name:'Bag',
  initialState:[],
  reducers:{
    removeFromBag:(state,action)=>{
      return state.filter((item)=> item!== action.payload);

    },
    addToBag:(state,action)=>{
      state.push(action.payload);

    }

  }
});
export const BagActions= BagSlice.actions;
export default BagSlice;