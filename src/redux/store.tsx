import { configureStore } from "@reduxjs/toolkit";
import {citySlice} from "./citySlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cityReducer from "./citySlice";
import { citiesApi } from "./citySlice";
const store = configureStore({
  reducer: {
    search: citySlice.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
  },

  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware().concat(citiesApi.middleware),
});

setupListeners(store.dispatch);
export default store;