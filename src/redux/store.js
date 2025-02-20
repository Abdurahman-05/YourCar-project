import {configureStore} from '@reduxjs/toolkit'
import carReducer from '../features/slice'

const store = configureStore({
  reducer:{
    Cars:carReducer,
   
  }
})

export default store;