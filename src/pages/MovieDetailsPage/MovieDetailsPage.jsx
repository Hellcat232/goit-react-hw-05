import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieId } from "../../API";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchId = async () => {
      try {
        const res = await getMovieId(movieId);

        console.log(res);
      } catch (error) {}
    };

    fetchId();
  }, [movieId]);
  return (
    <div>
      <p></p>
      <p>{movieId}</p>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
