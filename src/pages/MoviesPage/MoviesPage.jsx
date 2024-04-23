import { useEffect, useState } from "react";

import Searching from "../../components/Searching/Searching";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../API";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [value, setValue] = useState("");

  const onSubmit = (value) => {
    setValue(value);
  };

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const data = await searchMovie(value);
        console.log(data);
      } catch (error) {}
    };

    fetchQuery();
  }, [value]);

  return (
    <>
      <Searching onSubmit={onSubmit} />

      <MovieList></MovieList>
    </>
  );
}
