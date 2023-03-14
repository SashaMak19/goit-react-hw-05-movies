import { ItemMovie } from 'components/ItemMovie/ItemMovie';
import { List } from './ListSearch.styled';

const ListSearch = ({ movies }) => {
  return (
    <List>
      <ItemMovie movies={movies} />
    </List>
  );
};

export { ListSearch };
