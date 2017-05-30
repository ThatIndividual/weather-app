import Axios from "axios";

const API_KEY = "2494b1b2e97f7730f0529fed888efb31";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = "FETCH_WEATHER";


function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},GB`;
  const request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export default fetchWeather;
export { FETCH_WEATHER };