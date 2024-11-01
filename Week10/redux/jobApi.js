import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67241b87493fac3cf24d2a84.mockapi.io/' }),
  endpoints: (builder) => ({
    fetchJobs: builder.query({
      query: () => 'TodoApp',
    }),
    addJob: builder.mutation({
      query: (newJob) => ({
        url: 'TodoApp',
        method: 'POST',
        body: newJob,
      }),
    }),
    updateJob: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `TodoApp/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `TodoApp/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchJobsQuery, useAddJobMutation, useUpdateJobMutation, useDeleteJobMutation } = jobApi;
