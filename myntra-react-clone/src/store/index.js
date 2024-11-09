import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemsSlice";
import fetchStatusSlice from "./fetchingStatusSlice";
import BagSlice from "./BagSlice";

const myntraStore = configureStore({
  reducer:{
    Items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    Bag:BagSlice.reducer,
  }
})

export default myntraStore;