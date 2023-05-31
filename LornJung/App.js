import React from "react-native";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Home from "./src/view/screen/Home";

import { StatusBar } from "expo-status-bar";
import Login from "./src/view/screen/login.js";
import Intro from "./src/view/screen/intro.js";
import Detail from "./src/view/screen/detail";
import DetailEmergency from "./src/view/screen/DetailEmergency";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"white"}
        hidden={true}
      ></StatusBar>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DetailEmergency"
          component={DetailEmergency}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
