import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/statistics/statisticsSlice';
import Home from './components/Home';
import CountryDetails from './routes/CountryDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App w-full bg-hotPink/60 h-[100%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
