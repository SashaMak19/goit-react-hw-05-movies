import { NavLink, useLocation } from 'react-router-dom';

const ItemMovie = ({ movies }) => {
  const location = useLocation();
  // console.log(location);

  return movies.map(({ id, title }) => (
    <li key={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </NavLink>
    </li>
  ));
};

export { ItemMovie };
