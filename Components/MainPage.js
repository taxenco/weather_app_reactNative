import React, { Component } from "react";
import { Text, View } from "react-native";
import HeaderTop from "./HeaderTop";
import WeatherPic from "./WeatherPic";
import WeatherForm from "./WeatherForm";
import ShowWeather from "./ShowWeather";
import Carousel from "./Carousel"
import * as api from "../api";

export class MainPage extends Component {
  state = {
    weather: null,
  };

  fetchWeather = (city, country) => {
    api.getWeather(city, country).then((response) => {
      this.setState({ weather: response });
    });
  };

  render() {
    const { weather } = this.state;
    return (
      <View>
        <HeaderTop />
        <WeatherPic weather={weather} />
        <WeatherForm fetchWeather={this.fetchWeather} />
        <ShowWeather weather={weather} />
        <Carousel/>
      </View>
    );
  }
}

export default MainPage;
