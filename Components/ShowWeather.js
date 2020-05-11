import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

export default function ShowWeather({ weather }) {
  return weather !== null ? (
    <View style={style.topText}>
      <Card>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Location: </Text>
          <Text style={style.location}>
            {weather.name}, {weather.sys.country}
          </Text>
        </Text>
        <Text style={style.description}>
          <Text style={{ fontWeight: "bold" }}>Description: </Text>
          <Text style={style.description}>
            {weather.weather[0].description}
          </Text>
        </Text>
        <Text style={style.temperature}>
          <Text style={{ fontWeight: "bold" }}>Temperature: </Text>
          <Text style={style.description}>{weather.main.temp}</Text>
        </Text>
        <Text style={style.speed}>
          <Text style={{ fontWeight: "bold" }}>speed: </Text>
          <Text style={style.speed}>{weather.wind.speed}</Text>
        </Text>
      </Card>
    </View>
  ) : (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text style={style.bottomText}>
        Please note that Manchester, UK is set by default. Delete and type any
        location of your preference.
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  topText: {
    marginTop: 5,
    fontSize: 20,
    width: 300,
    marginBottom: 5,
    marginLeft: "14%",
  },
  location: {
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },
  temperature: {
    marginTop: 10,
  },
  speed: {
    marginTop: 10,
  },
  bottomText: {
    marginBottom: 20,
    marginTop: 20,
    color: "red",
    fontSize: 20,
    width: 300,
    // flex: 1,
  },
});
