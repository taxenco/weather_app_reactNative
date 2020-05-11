import React from "react";
import { Image } from "react-native-elements";
export default function WeatherPic({ weather }) {
 
  return weather !== null ? (
    <Image
      source={{
        uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
      }}
      style={{ width: '100%', height: 150 }}
    />
  ) : (
    <Image
      source={{
        uri:
          "https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg",
      }}
      style={{ width: '100%', height: 150 }}
    />
  );
}
