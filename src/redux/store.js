import {configureStore} from '@reduxjs/toolkit'
import carReducer from '../features/slice'

const store = configureStore({
  reducer:{
    cars:carReducer,
   
  }
})

export default store;