import { ItemMovie } from 'components/ItemMovie/ItemMovie';
import { List } from './ListMovies.styled';

const ListMovies = ({ movies }) => {
  return (
    <List>
      <ItemMovie movies={movies} />
    </List>
  );
};

export { ListMovies };
