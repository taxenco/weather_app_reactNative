import axios from "axios";

const apikey = "8ea94e993f789df8bbb3c06fd914587a";

export const getWeather = async (city, country) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`
    )
    .then((results) => {
      return results.data.weather;
    })
    // .catch((error) => console.log(errors));
};
