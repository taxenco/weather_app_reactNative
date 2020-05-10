import React, { Component } from "react";
import { Image } from "react-native-elements";
import image from "/home/carlos/Desktop/NorthCoders/WeatherApp/weatherApp/Pictures/Sun.jpg";
export default function WeatherPic({ weather }) {
  if (weather !== null) {
    console.log(weather.weather[0].icon);
  }
  return weather !== null ? (
    <Image
      source={{
        uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
      }}
      style={{ width: 420, height: 300 }}
    />
  ) : (
    <Image
      source={{
        uri:
          "https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg",
      }}
      style={{ width: 420, height: 300 }}
    />
  );
}
