import axios from "axios";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 02fa0d63eaeb59b5726e046880e445f4";

const API_KEY = "02fa0d63eaeb59b5726e046880e445f4";

export const trendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${API_KEY}`
  );

  return data;
};

export const getMovieId = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );

  console.log(data);
  return data;
};
