import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieId } from "../../API";
import css from "./MovieDetailsPage.module.css";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  console.log(movieDetails);

  useEffect(() => {
    const fetchId = async () => {
      try {
        const resp = await getMovieId(movieId);

        setMovieDetails(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchId();
  }, [movieId]);

  console.log(movieId);

  return (
    <div>
      <div className={css.details}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt=""
        />
        <ul className={css.description}>
          <li>
            <h2>{movieDetails.title}</h2>
          </li>
          <li className={css["description-item"]}>
            <h3 className={css.subtitle}>Popularity:</h3>
            {movieDetails.popularity}
          </li>
          <li className={css["description-item"]}>
            <h3 className={css.subtitle}>Overview:</h3>
            {movieDetails.overview}
          </li>
          <li className={css["description-item"]}>
            <h3 className={css.subtitle}>Rating:</h3>
            {movieDetails.vote_average}
          </li>
        </ul>
      </div>

      <div className={css.additional}>
        <h2>Additional information:</h2>

        <div className={css["additional-item"]}>
          <NavLink to="cast" className={css.link}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={css.link}>
            Reviews
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
