import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../API";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews(movieId);

        setReviews(res.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviews;
