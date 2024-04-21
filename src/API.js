import axios from "axios";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 02fa0d63eaeb59b5726e046880e445f4";

const API_KEY = "02fa0d63eaeb59b5726e046880e445f4";

export const trendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${API_KEY}`
  );

  console.log(response);
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );

  console.log(response);
  return response.data;
};
