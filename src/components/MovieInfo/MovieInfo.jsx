const MovieInfo = ({ movie }) => {
  const { title, vote_average, overview, poster_path, genres, release_date } =
    movie;

  const scores = vote_average * 100;

  return (
    <div>
      <img src={poster_path} alt={title} width="300" />
      <h2>
        {title} {release_date}
      </h2>
      {vote_average === '0' && (
        <p>User Score: {scores.toString().slice(0, 2)}%</p>
      )}
      {overview && <p>Overview: {overview}</p>}
      {genres && <p>Genres: {genres}</p>}
    </div>
  );
};

export { MovieInfo };
