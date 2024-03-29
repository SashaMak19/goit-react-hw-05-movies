import { useLocation } from 'react-router-dom';
import { Item, StyledLink } from './ItemMovie.styled';
import { defaultImg } from 'images/defaultMovieImage';

const ItemMovie = ({ movies }) => {
  const location = useLocation();

  return movies.map(({ id, title, poster_path }) => (
    <Item key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : `${defaultImg}`
          }
          alt={title}
          width="350"
        />
        <p>{title}</p>
      </StyledLink>
    </Item>
  ));
};

export { ItemMovie };
