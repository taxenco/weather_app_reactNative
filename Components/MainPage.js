import React, { Component } from "react";
import { Text, View } from "react-native";
import HeaderTop from "./HeaderTop";
import WeatherPic from "./WeatherPic";
import WeatherForm from "./WeatherForm";
import ShowWeather from "./ShowWeather";
import * as api from "../api";

export class MainPage extends Component {
  state = {
    weather: "",
  };

  fetchWeather = (city, country) => {
    api.getWeather(city, country).then((response) => {
      console.log("response", response);
      // fetchWeather(city, country, weather)
    });
    //  this.setState({city, country, weather})
  };

  render() {
    return (
      <View>
        <HeaderTop />
        <WeatherPic />
        <WeatherForm fetchWeather={this.fetchWeather} />
        <ShowWeather />
      </View>
    );
  }
}

export default MainPage;
