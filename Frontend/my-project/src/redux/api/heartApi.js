import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heartApi = createApi({
  reducerPath: "heartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    predict: builder.mutation({
      query: (patientData) => ({
        url: "predict",
        method: "POST",
        body: patientData,
      }),
    }),
  }),
});

export const { usePredictMutation } = heartApi;
