import * as React from "react";
import { Card, Image } from "react-native-elements";

import { Text, View, StyleSheet } from "react-native";

export default function CardDefaultWeather({ city, i }) {
  const cities = Object.getOwnPropertyNames(city);
  const { name, weather, main, wind } = city[cities];
  return (
    <View>
      <Card>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
          }}
          style={style.image}
        />
        <View style={style.view}>
          <Text style={style.text1}>
            <Text style={{ fontWeight: "bold" }}>Location: </Text>
            <Text>{name}</Text>
          </Text>
          <Text style={style.text2}>
            <Text style={{ fontWeight: "bold" }}>Temperature: </Text>
            <Text>{main.temp}</Text>
          </Text>
          <Text style={style.text3}>
            <Text style={{ fontWeight: "bold" }}>Description: </Text>
            <Text>{weather[0].description}</Text>
          </Text>
          <Text style={style.text3}>
            <Text style={{ fontWeight: "bold" }}>Wind speed: </Text>
            <Text>{wind.speed}</Text>
          </Text>
        </View>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  image: { width: "90%", height: 70, marginBottom: 0 },
  view: { textAlign: "center" },
  text1: { marginTop: 5, marginLeft: 10 },
  text2: { marginTop: 5, marginLeft: 10 },
  text3: { marginTop: 5, marginLeft: 10 },
  text4: { marginTop: 5, marginLeft: 10 },
  textView: { marginTop: 0 },
});
