import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Routes from "./Routes";
import { TabNav } from "./Tab"

const Stack = createStackNavigator()

export const StackNav = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Routes.SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Routes.Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Routes.Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Routes.Confirm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabBottom"
        component={TabNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FormEmergency"
        component={Routes.FormEmergency}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
