import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root/slice';
import { adsReducer } from './ads/slice';

export const store = configureStore({
  reducer: {
    root: rootReducer,
    ads: adsReducer,
  },
});
