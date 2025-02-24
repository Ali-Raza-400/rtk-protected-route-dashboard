import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ['User'],
});