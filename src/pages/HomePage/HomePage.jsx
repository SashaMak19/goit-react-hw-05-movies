import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movie-database-API';
import { ListMovies } from 'components/ListMovies/ListMovies';

const HomePage = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <>
      <ListMovies movies={movies} />
    </>
  );
};

export default HomePage;
