import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieId } from "../../API";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

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
      <img
        src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
        alt=""
      />
      <h2>Title: {movieDetails.title}</h2>
      <p>Popularity: {movieDetails.popularity}</p>

      <p>Overview: {movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>

      <h3>Additional information</h3>

      <Link to="cast">
        <MovieCast />
      </Link>
      <Link to="reviews">
        <MovieReviews />
      </Link>

      <Outlet />
    </div>
  );
}
