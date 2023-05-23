import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

const Home = () => {
  const statistics = useSelector((state) => state.statistics.statistics);
  console.log(statistics);

  return (
    <div className="w-full overflow-x-hidden">
      <h3 className="text-center text-sm font-semibold tracking-wide mt-4">
        Covid19 Statistics
      </h3>
      <div className="w-full my-8">
        <form className="search w-10/12 mx-auto flex gap-3">
          <input
            type="text"
            name="search"
            placeholder="Search by country"
            className="p-2 rounded-md w-full
            border border-slate-200"
          />
          <button type="submit">
            <span className="material-symbols-outlined text-slate-200 ">
              search
            </span>
          </button>
        </form>
      </div>
      <h5 className="font-bold tracking-wider text-sm px-2 text-white absolute z-50">STATS BY COUNTRY</h5>
      <div className="largest-population w-full grid grid-cols-2 px-2 mt-20">
        {statistics &&
          statistics.map((item) => (
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
