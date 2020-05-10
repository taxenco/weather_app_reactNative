import * as React from "react";
import { Header, Card, Image } from "react-native-elements";

import { Text, View, StyleSheet, Button } from "react-native";

export default function CardDefaultWeather({ city, i }) {
  const cities = Object.getOwnPropertyNames(city);
  const { name, weather, main, wind } = city[cities];
  console.log(weather[0].icon);
  return (
    <View>
      <Card>
        <Text>Location: {name}</Text>
        <Text>Temperature: {main.temp}</Text>
        <Text>Description: {weather[0].description}</Text>
        <Text>Wind speed: {wind.speed}</Text>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
          }}
          style={{ width: 200, height: 200 }}
        />
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  card: { marginHorizontal: 0 },
  image: { width: "100%", height: 400 },
});
