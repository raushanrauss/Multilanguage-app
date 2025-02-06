import React from "react";

import Home from "./index";
import { createStackNavigator } from "@react-navigation/stack";
import { LanguageProvider } from "../custom-hook/useLanguage";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import SignUp from "../screen/signup";
import Login from "../screen/login";
import BatteryStatus from "../screen/battery-status-screen";
export default function RootNavigation() {
  const Stack = createStackNavigator();
  return (
    <LanguageProvider>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={SignUp} />
            <Stack.Screen name='BatteryStatus' component={BatteryStatus} />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </LanguageProvider>
  );
}
