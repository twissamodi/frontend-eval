import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconGenre from '../../assets/icon-genre.svg';
import iconGrid from '../../assets/icon-grid.svg';
import { songsBasedOnGenre } from '../../constants/routes';
import './SongsHeader.css';

function AllSongsHeader({ action }) {
  const navigate = useNavigate();
  return (
    <div>
      <header className="all-songs-header">
        <h1 className="songs-heading"><b>{action}</b></h1>
        <button className="toggle-button" type="button" onClick={action === 'all songs' ? () => navigate(songsBasedOnGenre) : () => navigate(-1)}><img src={action === 'all songs' ? iconGenre : iconGrid} alt="show by genre" /></button>
      </header>
    </div>
  );
}

AllSongsHeader.propTypes = {
  action: PropTypes.string.isRequired,
};

export default AllSongsHeader;
