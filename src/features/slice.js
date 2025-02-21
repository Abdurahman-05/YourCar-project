import { createSlice } from "@reduxjs/toolkit";
import carsData from "../page/data.json";
const initialState = {
  products: carsData.cars,
  total: 0,
};
const carSlice = createSlice({
  name: "Cars",
  initialState,
  reducers: {
    incrementAmount: (state, { payload }) => {
      const item = state.products.find((items) => items.name == payload.name);
      item.amount++;
      state.total = state.products.reduce((sum, car) => sum + car.amount, 0);
      console.log("Updated amount:", item.amount);
      console.log("Updated total:", state.total);
    },
    decrimentAmount: (state, { payload }) => {
      const item = state.products.find((items) => items.name == payload.name);
      if (item.amount > 0) {
        item.amount--;
        state.total = state.products.reduce((sum, car) => sum + car.amount, 0);
      }
      console.log("Updated amount:", item.amount);
      console.log("Updated total:", state.total);
    },
    removeAmount: (state, { payload }) => {
      const item = state.products.find((items) => items.name == payload.name);
    
        item.amount = 0;
        state.total = state.products.reduce((sum, car) => sum + car.amount, 0);
      console.log("Updated amount:", item.amount);
      console.log("Updated total:", state.total);
    }
  },
});
export const { decrimentAmount, incrementAmount ,removeAmount} = carSlice.actions;

export default carSlice.reducer;

