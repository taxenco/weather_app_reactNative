import React, { Component } from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

export class WeatherForm extends Component {
  state = {
    city: "Manchester",
    country: "UK",
  };

  onChangeCountry = (event) => {
    this.setState({ country: event.text });
  };
  onChangeCity = (event) => {
    this.setState({ city: event.text });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ city: "Manchester", country: "UK" });
  };

  render() {
    const { city, country } = this.state;
    const { fetchWeather } = this.props;

    return (
      <View>
        <View style={style.margin}>
          <TextInput
            onChangeText={(event) => {
              this.onChangeCity(event);
            }}
            placeholder="Type a city ..."
            value={city}
            style={style.topText}
          />
          <TextInput
            onChange={(event) => {
              this.onChangeCountry(event);
            }}
            placeholder="Type a country ..."
            value={country}
            style={style.bottomText}
          />
        </View>
        <View style={[{ width: "50%", marginLeft: 95 }]}>
          <Button
            title="View"
            type="submit"
            onPress={(event) => {
              fetchWeather(city, country);
              this.handleSubmit(event);
            }}
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

export default WeatherForm;
const style = StyleSheet.create({
  topText: {
    borderColor: "gray",
    alignContent: "center",
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "#f0efef",
    width: 300,
    height: 30,
  },
  bottomText: {
    borderColor: "gray",
    alignContent: "center",
    marginBottom: 10,
    marginTop: 10,
    height: 30,
    textAlign: "center",
    backgroundColor: "#f0efef",
    width: 300,
  },
  margin: { marginBottom: 3, alignItems: "center"},
});
