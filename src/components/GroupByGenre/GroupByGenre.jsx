/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';
import SongsHeader from '../SongsHeader/SongsHeader';
import SongCard from '../SongCard/SongCard';
import filterList from '../../utils/getFilteredList';
import './GroupByGenre.css';

function GroupByGenre({ allSongsData, distinctGenres }) {
  return (
    <div className="all-songs-container">
      <SongsHeader action="genres" />
      <ul>
        {distinctGenres.map((eachGenere, genreIndex) => (
          <div key={genreIndex}>
            <div className="genre-information">
              <img key={genreIndex + 1} className="genre-image" src={require(`../../assets/genre-${eachGenere.toLowerCase()}.png`)} alt="genre-icon" />
              <div className="genre-title">{eachGenere.toLowerCase()}</div>
            </div>

            <ul key={genreIndex + 2} className="all-songs-list">
              {filterList(allSongsData, eachGenere).map((eachSongData, index) => (
                <li className="all-songs-item" key={eachSongData.id + 1}><SongCard songData={eachSongData} index={index} /></li>
              ))}
            </ul>
          </div>
        ))}

      </ul>
    </div>
  );
}
GroupByGenre.propTypes = {
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
  distinctGenres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default GroupByGenre;
