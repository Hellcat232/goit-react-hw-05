import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../API";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Please write something in the field!");

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryValue, setQueryValue] = useState("");

  const location = useLocation();
  const [queryMovies, setQueryMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  // console.log(totalPage);
  // console.log(queryMovies);
  console.log(searchParams);

  const onSubmit = (query) => {
    setQueryMovies([]);
    setTotalPage(0);
    setQuery(query);
    setError("");
  };

  useEffect(() => {
    if (!query) return;

    const fetchQuery = async () => {
      try {
        setLoader(true);
        const { total_pages, results, page } = await searchMovie(query);
        setTotalPage(total_pages);
        setQueryMovies(results);
        setPage(page);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchQuery();
  }, [query]);

  useEffect(() => {
    setQueryValue(searchParams.get("query") ?? "");
  }, [searchParams]);

  const handleSearchChange = (event) => {
    setQueryValue(event.target.value);
  };

  return (
    <>
      <SearchBar
        handleSearchChange={handleSearchChange}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        queryValue={queryValue}
        onSubmit={onSubmit}
        onEmpty={() => {
          notify();
        }}
      />

      {loader && <Loader />}

      {queryMovies.length > 0 && <MovieList movies={queryMovies} />}

      {error && <ErrorMessage message={error} />}

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
}
