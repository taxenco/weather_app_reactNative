import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";
import { Input } from "react-native-elements";

export class WeatherForm extends Component {
  state = {
    city: "City",
    country: "Country ",
  };

  onChangeCountry = (event) => {
    this.setState({ country: event.text });
  };
  onChangeCity = (event) => {
    this.setState({ city: event.text });
  };
  handleSubmit = () => {
    console.log(this.state.city, "Luisa");
    event.preventDefault();
    this.setState({ city: "City", country: "Country" });
  };
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, "testLuisa");
  //   // this.setState({ city: " City", country: "Country" });
  // }

  render() {
    const { city, country } = this.state;
    const { fetchWeather } = this.props;

    return (
      <View>
        <TextInput
          placeholder={city || "city"}
          onChangeText={() => {
            this.onChangeCity(event);
          }}
          // value={city}
        />
        <TextInput
          placeholder={country}
          value={country}
          onChange={() => {
            this.onChangeCountry(event);
          }}
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
