import React, { Component } from "react";
import { Header } from "react-native-elements";

export default function HeaderTop() {
  return (
    <Header
      centerComponent={{ text: "Weather App", style: { color: "#fff" } }}
    />
  );
}
