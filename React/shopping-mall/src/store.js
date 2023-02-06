import { configureStore } from '@reduxjs/toolkit'
import sample from './store/userSlice.js'

export default configureStore({
  reducer: {
		sample : sample.reducer,
	}
})