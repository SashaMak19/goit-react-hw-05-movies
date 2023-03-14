import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link, List, Item } from './MovieAddInformation.styled';

const MovieAddInformation = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  return (
    <div>
      <h3>Additional information</h3>
      <List>
        <Item>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </Item>
        <Item>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

export { MovieAddInformation };
