import { trendingMovies } from "../../API";
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import { Link } from "react-router-dom";

import { useLocation, useParams } from "react-router-dom";

export default function HomePage() {
  const [homePage, setHomePage] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTrendingMovies = async () => {
      try {
        const { results, page } = await trendingMovies({
          controller: controller,
        });

        setHomePage(results);
        setPage(page);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error.message);
        }
      }
    };

    fetchTrendingMovies();

    return () => {
      controller.abort();
    };
  }, [page]);

  return (
    <>
      {homePage.length > 0 && (
        <MovieList>
          <>
            {homePage.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              );
            })}
          </>
        </MovieList>
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
