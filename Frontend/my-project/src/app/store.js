import { configureStore } from "@reduxjs/toolkit";
import { heartApi } from "../redux/api/heartApi";

export const store = configureStore({
  reducer: {
    [heartApi.reducerPath]: heartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heartApi.middleware),
});
