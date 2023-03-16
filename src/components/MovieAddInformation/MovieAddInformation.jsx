import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link, List, Item } from './MovieAddInformation.styled';

const MovieAddInformation = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? `movies`;

  return (
    <div>
      <h3>Additional information</h3>
      <List>
        <Item>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </Item>
        <Item>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

export { MovieAddInformation };
