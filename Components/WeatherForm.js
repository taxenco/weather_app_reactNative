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
  handleSubmit = () => {
    event.preventDefault();
    this.setState({ city: "Manchester", country: "UK" });
  };

  render() {
    const { city, country } = this.state;
    const { fetchWeather } = this.props;

    return (
      <View>
        <TextInput
          onChangeText={() => {
            this.onChangeCity(event);
          }}
          placeholder="Type a city ..."
          value={city}
          style={style.topText}
        />
        <TextInput
          onChange={() => {
            this.onChangeCountry(event);
          }}
          placeholder="Type a country ..."
          value={country}
          style={style.bottomText}
        />
        <View style={[{ width: "50%", marginLeft: 95,  }]}>
          <Button
            title="View"
            type="submit"
            onPress={() => {
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
    marginTop: 30,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#f0efef",
    borderColor: "black",
    width: 300,
    marginRight: 40,
    marginLeft: 40,
    flex: 1,
  },
  bottomText: {
    marginBottom: 20,
    marginTop: 10,
    color: "Black",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#f0efef",
    width: 300,
    marginRight: 40,
    marginLeft: 40,
    flex: 1,
  },
});
