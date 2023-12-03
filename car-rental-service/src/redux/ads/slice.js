import { createSlice } from '@reduxjs/toolkit';
import { getAllAdsThunk, getSingleAdThunk } from './thunk';
import { handleAllAds, handleSingleAd } from './handlers';

const initialState = {
  data: [],
  singleAd: {},
  page: 1,
  limit: 12,
  isNoMoreData: false,
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllAdsThunk.fulfilled, handleAllAds)
      .addCase(getSingleAdThunk.fulfilled, handleSingleAd),
});

export const adsReducer = adsSlice.reducer;
export const { incrementPage, resetPage } = adsSlice.actions;
