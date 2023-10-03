import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://book-catalog-a5-backend-gb6w6c6jh-mehraz.vercel.app/api/v1",
  }),
  tagTypes: ["reviews"],
  endpoints: () => ({}),
});
