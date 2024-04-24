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

        setReviews(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <p>Reviews</p>
    </>
  );
};

export default MovieReviews;
