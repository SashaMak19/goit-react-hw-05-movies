import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movie-database-API';
import { ItemMovie } from 'components/ItemMovie/ItemMovie';
import { List } from './ListTrendingMovies.styled';

const ListTrendingMovies = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <List>
      <ItemMovie movies={movies} />
    </List>
  );
};

export default ListTrendingMovies;
