import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "ec3ebd5ae8fa377543d5c9d8eab61a1b";

export async function getApi() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY}&page=1&include_adult=false`
    );
    const result = await response.data.results;
    return result;
  } catch (error) {
    return error.message;
  }
}
