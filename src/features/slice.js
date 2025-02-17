import {createSlice} from "@reduxjs/toolkit"

   const initialState = {
    products: [],
    amount: 0,
  };
  const carSlice = createSlice(
    {
      name:"cars",
      initialState,
    })

    export default carSlice.reducer;