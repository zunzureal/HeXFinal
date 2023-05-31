import React from "react";
import { StyleSheet, View, Text } from "react-native";
import COLORS from "../src/view/screen/color";

const Weather = ({ temperature }) => {
  console.log(temperature);
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.temperatureText}>{temperature}°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temperatureText: {
    fontSize: 35,
    color: COLORS.white,
    fontWeight: "bold",
  },
});

export default Weather;
