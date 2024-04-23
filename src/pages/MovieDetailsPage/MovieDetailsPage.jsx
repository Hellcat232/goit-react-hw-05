import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieId } from "../../API";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  useEffect(() => {
    const fetchId = async () => {
      try {
        const resp = await getMovieId(movieId);

        console.log(resp);
      } catch (error) {}
    };

    fetchId();
  }, [movieId]);

  console.log(movieId);

  return (
    <div>
      <MovieCast />
      <MovieReviews />
      <Outlet />
    </div>
  );
}
