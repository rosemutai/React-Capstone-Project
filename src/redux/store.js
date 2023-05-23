import { configureStore } from '@reduxjs/toolkit';
import StatisticsReducer from './statistics/statisticsSlice';

export const store = configureStore({
  reducer: {
    statistics: StatisticsReducer,
  },
});
