import React, { Component } from "react";
import { Image } from "react-native-elements";
import image from "/home/carlos/Desktop/NorthCoders/WeatherApp/weatherApp/Pictures/Sun.jpg";
export default function WeatherPic() {
  return <Image source={{ uri: image }} style={{ width: 500, height: 300 }} />;
}
