import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movie-database-API';
import { ItemMovie } from 'components/ItemMovie/ItemMovie';

const ListTrendingMovies = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <ul>
      <ItemMovie movies={movies} />
    </ul>
  );
};

export default ListTrendingMovies;
