import { Routes, Route } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviePage } from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviePage />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="/movies/:id/cast" element={<CastPage />}></Route>
          <Route path="/movies/:id/reviews" element={<ReviewsPage />}></Route>
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};
