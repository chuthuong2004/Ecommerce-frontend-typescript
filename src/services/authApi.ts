import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + '/api/v1',
    // Xử lý header trước khi gửi request
    prepareHeaders: (headers, { getState }) => {
      // getState() giúp lấy ra toàn bộ state trong store
      // getState().user lấy ra state trong userSlice
      const token = (getState() as RootState).auth.token;
      // Nếu có token thì thêm vào headers
      if (token?.accessToken && token.refreshToken) {
        headers.set('Authorization', `Bearer ${token.accessToken}`);
        headers.set('x-refresh', token.refreshToken);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: '/users/login',
          method: 'POST',
          body,
          // credentials: 'include',
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: { email: string; password: string; phone: string }) => {
        return {
          url: '/users/register',
          method: 'POST',
          body,
        };
      },
    }),
    logoutUser: builder.mutation({
      query: () => {
        return {
          url: '/users/logout',
          method: 'DELETE',
          // credentials: 'include',
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation } = authApi;