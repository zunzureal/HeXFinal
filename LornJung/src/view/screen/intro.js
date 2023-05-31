import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { COLORS } from "./color";

const Intro = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Home");
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
      <Image
        source={require("../../assets/app.png")}
        style={{ width: 70, height: 70 }}
      />
      <Text
        style={{
          fontSize: 40,
        }}
      >
        HeX
      </Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({});
