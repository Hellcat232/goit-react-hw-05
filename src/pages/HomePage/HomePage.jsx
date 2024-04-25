import { trendingMovies } from "../../API";
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";

import { useLocation, useParams } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const [homePage, setHomePage] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTrendingMovies = async () => {
      try {
        setLoader(true);
        const { results, page } = await trendingMovies({
          controller: controller,
        });

        setHomePage(results);
        setPage(page);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error.message);
        }
      } finally {
        setLoader(false);
      }
    };

    fetchTrendingMovies();

    return () => {
      controller.abort();
    };
  }, [page]);

  return (
    <>
      {loader && <Loader />}

      {homePage.length > 0 && (
        <MovieList>
          <>
            {homePage.map((movie) => {
              return (
                <li className={css.item} key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={location}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt=""
                    />
                  </Link>
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
