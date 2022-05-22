import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import antelopesReducer from './antelopes/slice';

export const store = configureStore({
  reducer: {
    antelopes: antelopesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
