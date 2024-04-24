import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../API";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await getCast(movieId);

        setCast(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <p>Cast</p>
    </>
  );
};

export default MovieCast;
