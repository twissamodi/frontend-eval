import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import findAllDistinctGenres from '../../utils/distinctGenresRetriever';
import GroupByGenre from '../../components/GroupByGenre/GroupByGenre';

function SongsByGenre({ allSongsData }) {
  const [hasGenresBeenInitialised, setHasGenresBeenInitialised] = useState(false);
  const [distinctGenres, setDistinctGenres] = useState([]);
  useEffect(() => {
    if (!hasGenresBeenInitialised && allSongsData.length) {
      const genres = findAllDistinctGenres(allSongsData);
      setDistinctGenres(genres);
      setHasGenresBeenInitialised(true);
    }
  }, [hasGenresBeenInitialised, allSongsData]);

  return allSongsData.length && distinctGenres.length
    ? (
      <div className="genre-container">
        <Header />
        <GroupByGenre allSongsData={allSongsData} distinctGenres={distinctGenres} />
      </div>
    ) : <div>Loading</div>;
}
SongsByGenre.propTypes = {
  allSongsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    artist: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    imageUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  })).isRequired,
};
export default SongsByGenre;
