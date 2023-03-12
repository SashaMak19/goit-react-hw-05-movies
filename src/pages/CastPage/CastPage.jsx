import { fetchCreditsById } from 'services/movie-database-API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CastPage = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCreditsById(id).then(({ data }) => {
      setCredits(data.cast);
    });
  }, [id]);

  return (
    <>
      {credits.length < 1 && <p>We don't have any casts for this movie.</p>}
      <ul>
        {credits.map(({ character, profile_path, name }, index) => (
          <li key={index}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt={name}
                width="150"
              />
            ) : (
              <img
                src={
                  'https://www.lasff.com/uploads/2/6/7/4/26743637/poster-not-available_orig.jpg'
                }
                alt={name}
                width="150"
              />
            )}

            {name}
            {character && <p>Character: {character}</p>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastPage;
