import React, { Component } from "react";
import { View } from "react-native";
import HeaderTop from "./HeaderTop";
import WeatherPic from "./WeatherPic";
import WeatherForm from "./WeatherForm";
import ShowWeather from "./ShowWeather";
import Carousel from "./Carousel";
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
        <View>
          <WeatherForm fetchWeather={this.fetchWeather} />
        </View>
        <View>
          <ShowWeather weather={weather} />
        </View>
        <Carousel />
      </View>
    );
  }
}

export default MainPage;
