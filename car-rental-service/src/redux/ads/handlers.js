export const handleAllAds = (state, { payload }) => {
  if (state.limit > payload.length) {
    state.isNoMoreData = true;
  }
  state.data = [...state.data, ...payload];
};

export const handleSingleAd = (state, { payload }) => {
  state.singleCard = payload;
};
