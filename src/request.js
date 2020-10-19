const API_KEY = "aa8eac8df6ae6cc297d7b7917db94b8e";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/tv?api_key=${API_KEY}&with_genres=99`,
};
