import { configureStore } from '@reduxjs/toolkit'
import CarsSlice from './Slices/CarsSlice'

export default configureStore({
  reducer: {
    counter: CarsSlice,
  },
})