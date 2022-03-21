import React from 'react';
import PropTypes from 'prop-types';
import SongsHeader from '../SongsHeader/SongsHeader';
import SongCard from '../SongCard/SongCard';
import './AllSongs.css';

function AllSongs({ allSongsData }) {
  return (
    <div className="all-songs-container">
      <SongsHeader action="all songs" />
      <ul className="all-songs-list">
        {allSongsData.map((eachSongData, index) => (
          <li className="all-songs-item" key={eachSongData.id + 1}><SongCard songData={eachSongData} index={index} /></li>
        ))}
      </ul>
    </div>
  );
}
AllSongs.propTypes = {
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
export default AllSongs;
