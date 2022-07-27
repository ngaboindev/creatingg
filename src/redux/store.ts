/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
// app/hooks.ts
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import projectSlice from './features/projectSlice';
import resumeSlice from './features/resumeSlice';
import userSlice from './features/userSlice';

export const store = configureStore({
  reducer: { users: userSlice, resumes: resumeSlice, projects: projectSlice },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
