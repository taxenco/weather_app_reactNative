import axios from "axios";

const apikey = "5ff5032003f6706be471c71f4c728899";

export const getWeather = async (city, country) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`
    )
    .then((results) => {
      return results.data;
    })
    .catch((error) => console.log(errors));
};

export const getWeatherTokio = async (city = "Tokio", country = "Japan") => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`
    )
    .then((results) => {
      console.log("Api", results.data)
      return results.data;
    })
    .catch((error) => console.log(error));
};

export const getWeatherCairo = async (city = "Cairo", country = "Egypt") => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`
    )
    .then((results) => {
      return results.data;
    })
    .catch((error) => console.log(error));
};

export const getWeatherMadrid = async () => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Madrid,Spain&appid=${apikey}&units=metric`
    )
    .then((results) => {
      return results.data;
    })
    .catch((error) => console.log(error));
};

export const getWeatherLondon = async () => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${apikey}&units=metric`
    )
    .then((results) => {
      return results.data;
    })
    .catch((error) => console.log(error));
};
