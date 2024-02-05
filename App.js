import React from "react"; // Import core React library
import { View, Text } from "react-native"; // Components provided by React
import { createAppContainer } from "react-navigation"; // Create root navigator component to manage navigation tree
import { createStackNavigator } from "react-navigation-stack"; // Creates stack navigator which allows navigate between screens
import Dashboard from "./screens/Dashboard";
import GetStarted from "./screens/GetStarted";
import Transaction from "./screens/Transaction";

const AppNavigator = createStackNavigator({ //Create navigator
  GetStarted: {
    screen: GetStarted,
    navigationOptions: {
      headerShown: false,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
       headerShown: false },
  },
  Transaction: {
    screen: Transaction,
    navigationOptions: {
       headerShown: false },
  },
});

export default createAppContainer(AppNavigator); //Create container component that holds entire navigation structure
