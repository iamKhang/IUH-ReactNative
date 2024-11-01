import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';
import { jobApi } from './jobApi';

const store = configureStore({
  reducer: {
    job: jobReducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
});

export default store;
