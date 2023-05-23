import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  statistics: [],
};

// const url = 'https://api.openbrewerydb.org/v1/breweries';
const url = 'https://disease.sh/v3/covid-19/countries';
export const fetchData = createAsyncThunk('statistics/fetchData', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const StatisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.statistics = action.payload;
    });
  },
});

export default StatisticsSlice.reducer;
