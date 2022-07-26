/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from '../store';
import { fetchUser } from './userSlice';

type InitialStateType = {
  resume: {};
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: InitialStateType = {
  resume: {},
  status: 'idle',
  error: null,
};

export const resumeSlice = createSlice({
  name: 'resumes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addResume.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(addResume.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resume = action.payload;
      })
      .addCase(addResume.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
    builder
      .addCase(deleteResume.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(deleteResume.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resume = action.payload;
      })
      .addCase(deleteResume.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export default resumeSlice.reducer;

export const getResume = (state: RootState) => state.resumes.resume;

export const addResume = createAsyncThunk(
  'resumes/addResume',
  async (payload, thunkAPI) => {
    const response = await axios.post('/api/resume', payload);
    thunkAPI.dispatch(fetchUser());
    return response.data;
  }
);

export const deleteResume = createAsyncThunk(
  'resumes/deleteResume',
  async (resumeId, thunkAPI) => {
    const response = await axios.delete(`/api/resume/${resumeId}`);
    thunkAPI.dispatch(fetchUser());
    return response.data;
  }
);
