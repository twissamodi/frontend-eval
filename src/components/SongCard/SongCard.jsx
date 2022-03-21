import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import grayHeart from '../../assets/heart-gray.svg';
import './SongCard.css';
import makeRequest from '../../utils/makeRequest';
import { getLikesByid, updateLike } from '../../constants/apiEndPoints';
import redHeart from '../../assets/heart-red.svg';

function SongCard({ songData, index }) {
  const [likeCountsInitialised, setLikeCountsInitialised] = useState(false);

  const [likedDetails, setLikedDetails] = useState(null);
  useEffect(() => {
    if (!likeCountsInitialised) {
      setLikeCountsInitialised(true);
      makeRequest(getLikesByid(songData.id)).then((details) => setLikedDetails(details));
    }
  }, [likeCountsInitialised]);
  const onHeartClickHandler = () => {
    if (likedDetails) {
      const newState = {
        like: !likedDetails.like,
        count: likedDetails.like ? likedDetails.count - 1 : likedDetails.count + 1,
      };

      // eslint-disable-next-line max-len
      makeRequest(updateLike(songData.id), newState).then((data) => setLikedDetails(data));
      setLikedDetails(newState);
    }
  };
  return likedDetails
    ? (
      <div className={index % 2 === 0 ? 'even-card card-container' : 'odd-card card-container'}>
        <img className="album-image" src={songData.imageUrl} alt="album" />
        <div className="album-info-container">
          <div className="album-details">
            <p className="song-details">{songData.name}</p>
            <p className="artist-details">{songData.artist.name}</p>
          </div>

          <button onClick={onHeartClickHandler} type="button" className="liked-notliked-button">
            <span className="liked-counts">{likedDetails.count}</span>
            <img className="liked-notliked-image" src={likedDetails.like ? redHeart : grayHeart} alt="not-liked" />
          </button>
        </div>

      </div>
    ) : <div />;
}

export default SongCard;
SongCard.propTypes = {
  songData: PropTypes.shape({
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
  }).isRequired,
  index: PropTypes.number.isRequired,
};
