import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Icon,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-elements";

import CardDefaultWeather from "./CardData";
import * as api from "../api";

const images = [{ text: "All Events" }, { text: "Create Event" }];

const { width } = Dimensions.get("window");
const height = width * 0.9; //90%

export class Carousel extends Component {
  state = {
    data: [
      { cairo: null },
      { madrid: null },
      { tokio: null },
      { london: null },
    ],
    isLoading: true,
    active: 0,
  };

  fetchData = () => {
    api.getWeatherCairo().then((cairoData) => {
      this.setState((prevState) => {
        let data = Object.assign({}, prevState.data);
        data[0].cairo = cairoData;
        return data;
      });
    });

    api.getWeatherMadrid().then((madridData) => {
      this.setState((prevState) => {
        let data = Object.assign({}, prevState.data);
        data[1].madrid = madridData;
        return data;
      });
    });

    api.getWeatherTokio().then((weather) => {
      this.setState((prevState) => {
        let data = Object.assign({}, prevState.data);
        data[2].tokio = weather;
        return data;
      });
    });
    api.getWeatherLondon().then((weather) => {
      this.setState((prevState) => {
        let data = Object.assign({}, prevState.data);
        data[3].london = weather;
        return data;
      });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    const { data } = this.state;

    return data[0].cairo !== null &&
      data[1].madrid !== null &&
      data[2].tokio !== null &&
      data[3].london !== null ? (
      <View>
        <View>
          <ScrollView pagingEnabled horizontal onScroll={this.change} style={style.scroll}>
            {data.map((city, i) => {
              return (
                <View style={style.card}>
                  <CardDefaultWeather city={city} key={i} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={style.pagination}>
          {data.map((i, k) => {
            return (
              <Text
                key={k}
                style={
                  k === this.state.active
                    ? style.paginActiveText
                    : style.paginText
                }
              >
                ⬤
              </Text>
            );
          })}
        </View>
      </View>
    ) : (
      <Text>Looser</Text>
    );
  }
}

export default Carousel;

const style = StyleSheet.create({
  scroll: {
    width,
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginHorizontal: 0,
  },
  card: { width },
  paginText: { color: "#888", margin: 3 },
  paginActiveText: { color: "white", margin: 3 },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  // card: { width, height },
});
