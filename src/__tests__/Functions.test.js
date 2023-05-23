import { fetchData, getCountryDetails, getSearchedCountry } from '../redux/statistics/statisticsSlice';

it('fetchData should return a promise', () => {
  expect(fetchData()).toEqual(expect.any(Function));
});

it('getSearchedCountry should return a promise', () => {
  expect(getSearchedCountry()).toEqual(expect.any(Function));
});

it('getCountryDetails should return a promise', () => {
  expect(getCountryDetails()).toEqual(expect.any(Function));
});
