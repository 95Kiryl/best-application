import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const requestApi = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getRequest: builder.query({
      query: (request) => `${request}`,
    }),
  }),
});

export const { useGetRequestQuery } = requestApi;
