import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  statistics: [],
  countryDetails: [],
};

const url = 'https://disease.sh/v3/covid-19/countries';
export const fetchData = createAsyncThunk('statistics/fetchData', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Data');
  }
});

export const getCountryDetails = createAsyncThunk('statistics/getCountryDetails', async (country) => {
  try {
    const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch Data');
  }
});

export const getSearchedCountry = createAsyncThunk('statistics/getCountryDetails', async (country) => {
  try {
    const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch Data');
  }
});

const StatisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.statistics = action.payload;
    },

    [getCountryDetails.fulfilled]: (state, action) => (
      { ...state, countryDetails: action.payload }
    ),

    [getSearchedCountry.fulfilled]: (state, action) => (
      { ...state, countryDetails: action.payload }

    ),
  },
});

export default StatisticsSlice.reducer;
export const getSelectedCountry = (state) => state.statistics.countryDetails;
