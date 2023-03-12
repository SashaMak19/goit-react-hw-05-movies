import { ItemMovie } from 'components/ItemMovie/ItemMovie';

const ListSearch = ({ movies }) => {
  return (
    <ul>
      <ItemMovie movies={movies} />
    </ul>
  );
};

export { ListSearch };
