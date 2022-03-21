const findAllDistinctGenres = (allSongsData) => allSongsData.reduce((currGenres, eachSong) => {
  if (!currGenres.includes(eachSong.genre.name)) {
    currGenres.push(eachSong.genre.name);
  }
  return currGenres;
}, []);
export default findAllDistinctGenres;
