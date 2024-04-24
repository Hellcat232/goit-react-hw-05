import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../API";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await getCast(movieId);

        setCast(res.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ profile_path, name, character, cast_id }) => {
        return (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt=""
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
