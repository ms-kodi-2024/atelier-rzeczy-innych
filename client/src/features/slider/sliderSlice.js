import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchSlides = createAsyncThunk('slider/fetch', async () => {
  const response = await api.get('/slider');
  return response.data;
});

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlides.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSlides.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSlides.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
