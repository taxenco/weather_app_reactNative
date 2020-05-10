import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";
import { Input } from "react-native-elements";

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
        />

        <TextInput
          onChange={() => {
            this.onChangeCountry(event);
          }}
          placeholder="Type a country ..."
          value={country}
        />
        <Button
          title="View"
          type="submit"
          onPress={() => {
            fetchWeather(city, country);
            this.handleSubmit(event);
          }}
        />
      </View>
    );
  }
}

export default WeatherForm;
