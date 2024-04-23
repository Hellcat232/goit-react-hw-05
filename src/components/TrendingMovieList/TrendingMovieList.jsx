import { Link } from "react-router-dom";

const TrendingMovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </>
  );
};

export default TrendingMovieList;
