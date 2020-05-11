import React from "react";
import { Text, View } from "react-native";
export default function ShowWeather({ weather }) {
 
  return weather !== null ? (
    <View>
      <Text>
        Location:{weather.name}, {weather.sys.country}
      </Text>
      <Text>Description:{weather.weather[0].description}</Text>
      <Text>Temperature:{weather.main.temp}</Text>
      <Text>Wind speed:{weather.wind.speed}</Text>
    </View>
  ) : (
    <Text>
      Weather app allows you to display weather information based on any
      location by default is Manchester.{" "}
    </Text>
  );
}
