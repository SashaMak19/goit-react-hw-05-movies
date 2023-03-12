import { fetchReviewsById } from 'services/movie-database-API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ReviewsPage = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(id).then(({ data }) => setReviews(data.results));
  }, []);

  return (
    <>
      {reviews.length < 1 && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews.map(({ author, content }, index) => (
          <li key={index}>
            Author: {author}
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
