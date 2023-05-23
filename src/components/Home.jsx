import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import { getCountryDetails } from '../redux/statistics/statisticsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const statistics = useSelector((state) => state.statistics.statistics);
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryDetails(name));
    setName('');
    navigate(`/${name}`);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <h3 className="text-center text-lg font-semibold text-white tracking-wider mt-4">
        Covid19 Statistics
      </h3>
      <div className="w-full my-8">
        <form onSubmit={handleFormSubmit} className="search w-10/12 mx-auto flex gap-3">
          <input
            type="text"
            name="search"
            placeholder="Search by country"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-md w-full placeholder:text-gray-300 placeholder:text-sm
            border border-transparent focus:outline-0 focus:shadow-inner focus:shadow-hotPink"
          />
          <button type="submit">
            <span className="material-symbols-outlined text-hotPink/60 p-2 rounded-md bg-white ">
              search
            </span>
          </button>
        </form>
      </div>
      <h5 className="font-bold tracking-wider text-xs px-2 text-white absolute z-50">COVID19 ACTIVE CASES BY COUNTRY</h5>
      <div className="largest-population w-full grid grid-cols-2 px-2 mt-20">
        {statistics && statistics.map((item) => (
          <CountryCard
            key={item.country}
            country={item.country}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
