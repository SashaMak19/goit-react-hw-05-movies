import ListTrendingMovies from 'components/ListTrendingMovies/ListTrendingMovies';

const HomePage = ({ trendingMovies }) => {
  return (
    <>
      <ListTrendingMovies trendingMovies={trendingMovies} />
    </>
  );
};

export default HomePage;
