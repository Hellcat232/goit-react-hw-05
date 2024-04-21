const MovieList = ({ movies }) => {
  console.log(movies);

  return (
    <ul>
      {movies.map((movie) => {
        console.log(movie);
        return (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
