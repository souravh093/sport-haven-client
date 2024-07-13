import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://sport-haven-backend.vercel.app/api/v1" }),
  tagTypes: ["Product", "Order"],
  endpoints: () => ({}),
});
