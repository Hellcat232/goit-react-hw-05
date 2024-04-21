import { NavLink } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <NavLink to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
