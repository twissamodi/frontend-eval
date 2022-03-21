import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import AllSongs from '../../components/AllSongs/AllSongs';

function AllSongsPage({ allSongsData }) {
  return allSongsData.length
    ? (
      <div>
        <Header />
        <section>
          <AllSongs allSongsData={allSongsData} />
        </section>
      </div>
    ) : <div>Loading</div>;
}
AllSongsPage.propTypes = {
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

export default AllSongsPage;
