import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCountry, getCountryDetails } from '../redux/statistics/statisticsSlice';

const CountryDetails = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(country));
  }, [dispatch, country]);

  const searchedCountry = useSelector(getSelectedCountry);

  return (
    <div className="country-details w-full bg-hotPink/20 h-[100%] text-white">
      <div className="back-title w-full flex gap-6 p-3 ">
        <span className="material-symbols-outlined text-lg py-2">
          <Link to="/">arrow_back_ios</Link>
        </span>
        <h4 className="font-bold tracking-wider text-sm py-2">
          Country Details
        </h4>
      </div>
      <div className="flex">
        <div className="flag flex items-end justify-between pl-4 mt-20">
          {searchedCountry.countryInfo && (
            <img src={searchedCountry.countryInfo.flag} alt="National flag" />
          )}
        </div>
        <div className="country-name w-full flex flex-col items-end justify-between pr-4 mt-20">
          <h4 className="text-2xl tracking-wider uppercase font-bold">
            {searchedCountry.country}
          </h4>
          <p className="text-sm font-semibold">
            {searchedCountry.active}
            {' '}
            Active cases
          </p>
        </div>
      </div>
      <div className="other-details flex flex-col w-full gap-3 mt-36 p-3">
        <p className="px-2 py-3 rounded-sm">
          Population:
          {' '}
          {searchedCountry.population}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Tests:
          {' '}
          {searchedCountry.tests}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Tests Per One Million:
          {' '}
          {searchedCountry.testsPerOneMillion}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Total Cases:
          {' '}
          {searchedCountry.cases}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Active Per One Million:
          {' '}
          {searchedCountry.activePerOneMillion}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Critical Cases:
          {' '}
          {searchedCountry.critical}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Critical Per One Million:
          {' '}
          {searchedCountry.criticalPerOneMillion}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Total Deaths:
          {' '}
          {searchedCountry.deaths}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Deaths Per One Million:
          {' '}
          {searchedCountry.deathsPerOneMillion}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Recovered:
          {' '}
          {searchedCountry.recovered}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Recovered Per One Million:
          {' '}
          {searchedCountry.recoveredPerOneMillion}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Todays Cases:
          {' '}
          {searchedCountry.todayCases}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Todays Deaths:
          {' '}
          {searchedCountry.todaydeaths}
        </p>
        <p className="px-2 py-3 rounded-sm">
          Todays Recovered:
          {' '}
          {searchedCountry.todayRecovered}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
