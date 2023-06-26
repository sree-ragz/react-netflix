import { apiKey } from "./Constants/constants";

export const originals = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc`;
// export const topRated = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en`;
export const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
