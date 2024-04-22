import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  // console.log(movies);

  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => {
        // console.log(movie);
        return (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} state={location}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
