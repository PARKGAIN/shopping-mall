import { createSlice } from "@reduxjs/toolkit";
let user = createSlice({
  name: "name",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      return (state.name = "park");
    },
    changeAge(state, actions) {
      return (state.age += actions.payload);
    },
  },
});
export let { changeName, changeAge } = user.actions;
export default user;
