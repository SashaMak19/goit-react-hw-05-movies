import { Link } from './NavBar.styled';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movie</Link>
      </nav>
    </header>
  );
};

export default NavBar;
