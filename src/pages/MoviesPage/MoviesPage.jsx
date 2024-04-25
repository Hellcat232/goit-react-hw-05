import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../API";
import { Link, useLocation } from "react-router-dom";

export default function MoviesPage() {
  const location = useLocation();
  const [queryMovies, setQueryMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  console.log(totalPage);
  console.log(queryMovies);

  const onSubmit = (query) => {
    setQueryMovies([]);
    setTotalPage(0);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;

    const fetchQuery = async () => {
      try {
        const { total_pages, results, page } = await searchMovie(query);
        setTotalPage(total_pages);
        setQueryMovies(results);
        setPage(page);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuery();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      <MovieList>
        <>
          {queryMovies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt=""
                  />
                </Link>
              </li>
            );
          })}
        </>
      </MovieList>
    </>
  );
}
