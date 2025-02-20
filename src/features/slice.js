import {createSlice} from "@reduxjs/toolkit"
import carsData from "../page/data.json"
   const initialState = {
    products: carsData.cars,
    total: 0,
    amount: 0

  };
  const carSlice = createSlice(
    {
      name:"Cars",
      initialState,
      reducers : {
       incrementAmount : (state,{payload}) =>{
         const item = state.products.find( items =>(items.name == payload.name))
         item.amount++;
       },
       decrimentAmount : (state,{payload}) =>{
         const item = state.products.find( items =>(items.name == payload.name))
         item.amount--;
       }
      }
    
    })
    export const  {decrimentAmount, incrementAmount} = carSlice.actions
    
    export default carSlice.reducer;