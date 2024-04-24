import { useEffect, useState } from "react";
import Searching from "../../components/Searching/Searching";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../API";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
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
    if (!queryMovies) return;

    const fetchQuery = async () => {
      try {
        const data = await searchMovie(query, totalPage);
        setTotalPage(data.total_pages);
        setQueryMovies(data.results);
        setPage(data.page);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuery();
  }, [totalPage]);

  return (
    <>
      <Searching onSubmit={onSubmit} />

      <MovieList></MovieList>
    </>
  );
}
