import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAllRecords } from './constants/apiEndPoints';
import { home, allSongs, songsBasedOnGenre } from './constants/routes';
import AllSongsPage from './pages/AllSongsPage/AllSongsPage';
import HomePage from './pages/HomePage/HomePage';
import SongsByGenre from './pages/SongsGroupedByGenrePage/SongsGroupedByGenrePage';
import makeRequest from './utils/makeRequest';

function App() {
  const [isInitialised, setisInitialised] = useState(false);
  const [allSongsData, setAllSongsData] = useState([]);
  useEffect(() => {
    if (!isInitialised) {
      setisInitialised(true);
      makeRequest(getAllRecords).then((songsData) => setAllSongsData(songsData));
    }
  }, [isInitialised]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<HomePage />} />
          <Route path={allSongs} element={<AllSongsPage allSongsData={allSongsData} />} />
          <Route path={songsBasedOnGenre} element={<SongsByGenre allSongsData={allSongsData} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
