import { useState, useEffect } from 'react';
import { fetchMovieBySearch } from 'services/movie-database-API';
import { Form } from '../../components/Form/Form';
import { ListSearch } from 'components/ListSearch/ListSearch';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    fetchMovieBySearch(queryParams).then(({ data }) => {
      setMovies(data.results);
    });
  }, [queryParams]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setQueryParams(nextParams);
  };

  return (
    <>
      <Form onSubmit={updateQueryString} />
      <ListSearch movies={movies} />
    </>
  );
};

export { MoviePage };
