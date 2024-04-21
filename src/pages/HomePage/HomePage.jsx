import { trendingMovies } from "../../API";
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [homePage, setHomePage] = useState([]);
  const [error, setError] = useState("");
  console.log(homePage);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await trendingMovies();
        setHomePage(results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <MovieList movies={homePage} />
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default HomePage;
