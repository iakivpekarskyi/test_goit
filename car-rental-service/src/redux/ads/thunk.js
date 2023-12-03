import { createAsyncThunk } from '@reduxjs/toolkit';
import adAPI from '../../api/adAPI';
import { toast } from 'react-toastify';

export const getAllAdsThunk = createAsyncThunk(
  'ads/getAll',
  async (body, { rejectWithValue }) => {
    try {
      const data = await adAPI.getAllAds(body);
      console.log(data);

      return data;
    } catch (error) {
      toast.error(` Something's wrong. No cars yet!`);
      rejectWithValue(error.message);
    }
  }
);

export const getSingleAdThunk = createAsyncThunk(
  'ads/getSingle',
  async (id, { rejectWithValue }) => {
    try {
      const data = await adAPI.getSingleAd(id);
      return data;
    } catch (error) {
      toast.error(` Something's wrong. Can't find your car!`);
      rejectWithValue(error.message);
    }
  }
);
