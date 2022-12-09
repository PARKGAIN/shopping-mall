import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "name",
  initialState: "park",
});
let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let item = createSlice({
  name: "item",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    item: item.reducer,
  },
});