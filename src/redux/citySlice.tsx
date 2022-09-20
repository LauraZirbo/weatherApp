import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const citySlice = createSlice({
  name: "search",
  initialState: {
    input: "",
  },
  reducers: {
    clicked: (state: any, action: any) => {
      state.input = "";
    },
    searchInput: (state: any, action: any) => {
      state.input = action.payload.event.toLowerCase();
    },
    saveCitiesFromDB: (state: any, action: any) => {
      state.value.cities = action.payload;
    },
  },
});
export const { clicked, searchInput, saveCitiesFromDB } = citySlice.actions;
export const citiesSelector = (state: any) => state.cities.value;
export default citySlice.reducer;
export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8080` }),
  endpoints: (builder: any) => ({
    getAllCities: builder.query({
      query: () => `/cities`,
    }),
  }),
});

export const { useGetAllCitiesQuery } = citiesApi;
