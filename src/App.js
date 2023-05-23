import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/statistics/statisticsSlice';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App w-full relative">
      <div className="absolute z-30 bg-hotPink/60 pink600/40 w-full min-h-full">.</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
