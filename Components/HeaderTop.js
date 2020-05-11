import React, { Component } from "react";
import { Header } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function HeaderTop() {
  return (
    <Header
      style={style.image}
      centerComponent={{ text: "Weather App", style: { color: "#fff" } }}
    />
  );
}

const style = StyleSheet.create({
  image: { height: "2%" },
});
