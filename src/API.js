import axios from "axios";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 02fa0d63eaeb59b5726e046880e445f4";

const API_KEY = "02fa0d63eaeb59b5726e046880e445f4";

export const trendingMovies = async ({ controller }) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${API_KEY}`,
    { signal: controller.signal }
  );

  return data;
};

export const getMovieId = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );

  // console.log(data);
  return data;
};

export const searchMovie = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1&api_key=${API_KEY}`
  );
  // console.log(data);
  return data;
};

export const getCast = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${API_KEY}`
  );

  return data;
};

export const getReviews = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );

  return data;
};
