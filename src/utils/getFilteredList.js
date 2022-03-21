// eslint-disable-next-line max-len
const filterList = (allSongs, currGenre) => allSongs.filter((song) => song.genre.name === currGenre);

export default filterList;
