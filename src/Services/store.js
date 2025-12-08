import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Authentication/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here as you create them
    // jobs: jobsReducer,
    // freelancers: freelancersReducer,
    // categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
