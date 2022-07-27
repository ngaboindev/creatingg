/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from '../store';

type InitialStateType = {
  projects: [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: InitialStateType = {
  projects: [],
  status: 'idle',
  error: null,
};

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export default projectSlice.reducer;

export const getProjects = (state: RootState) => state.projects.projects;

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const response = await axios.get('/api/projects');
    return response.data;
  }
);

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (payload, thunkAPI) => {
    const response = await axios.post('/api/projects', payload);
    thunkAPI.dispatch(fetchProjects());
    return response.data;
  }
);

export const removeProject = createAsyncThunk(
  'projects/removeProject',
  async (projectID, thunkAPI) => {
    const response = await axios.delete(`/api/projects/${projectID}`);
    thunkAPI.dispatch(fetchProjects());
    return response.data;
  }
);
