/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { UserInfo } from '@/interfaces/UserInfo';

import type { RootState } from '../store';

type InitialStateType = {
  user: {
    userInfo?: UserInfo | null;
    createdAt?: string;
    email?: string;
    id?: number;
    resume?: {} | null;
    updatedAt?: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: InitialStateType = {
  user: {
    email: '',
  },
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.users.user;

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await axios.get('/api/me');
  return response.data;
});

export const addUserInfo = createAsyncThunk(
  'users/addUserInfo',
  async (payload, thunkAPI) => {
    const response = await axios.post('/api/userinfo', payload);
    thunkAPI.dispatch(fetchUser());
    return response.data;
  }
);

export const updateUserInfo = createAsyncThunk(
  'users/addUserInfo',
  async (payload, thunkAPI) => {
    const response = await axios.post('/api/userinfo', payload);
    thunkAPI.dispatch(fetchUser());
    return response.data;
  }
);
