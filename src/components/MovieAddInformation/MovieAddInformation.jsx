import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link, List, Item } from './MovieAddInformation.styled';

const MovieAddInformation = ({ id }) => {
  const location = useLocation();
  // console.log(location);
  // const { from } = location.state;
  // console.log(location.state);

  const backLink = location.state?.from ?? `/movies?query=piggy`;
  console.log(location.state.from);
  return (
    <div>
      <h3>Additional information</h3>
      <List>
        <Item>
          <Link to="cast" state={backLink}>
            Cast
          </Link>
          {/* <Link to="cast">Cast</Link> */}
        </Item>
        <Item>
          <Link to="reviews" state={backLink}>
            Reviews
          </Link>
          {/* <Link to="reviews">Reviews</Link> */}
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

export { MovieAddInformation };
