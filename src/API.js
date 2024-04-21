import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTBmODFhYzdkMGNmZGMxZmUwY2FkNWU2Mjk1ODFiMSIsInN1YiI6IjY2MjQzOGZiYjI2ODFmMDFhOTcyZjFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GZ1OEperL8K8j624ArvYS2Q9deNf66GfaKssCYex1Y";

const trendingMovie = async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?page=${page}&language=en-US`
  );
  console.log(response.data);
  return response.data;
};

trendingMovie(1);
